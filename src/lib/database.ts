// Database utilities for PAWPAL waitlist
// Supports Vercel KV and Vercel Postgres

export interface WaitlistEntry {
  id?: string;
  name: string;
  email: string;
  petName: string;
  petType: string;
  petAge?: string;
  interests?: string;
  signupSource: string;
  timestamp: string;
  emailSent?: boolean;
  emailSequence?: string[];
}

// Vercel KV (Redis) Database
export class VercelKVDatabase {
  private kv: any; // eslint-disable-line @typescript-eslint/no-explicit-any

  constructor() {
    // Dynamically import to avoid issues in development
    this.initKV();
  }

  private async initKV() {
    try {
      const { kv } = await import('@vercel/kv');
      this.kv = kv;
    } catch (error) {
      console.warn('Vercel KV not available:', error);
    }
  }

  async storeWaitlistEntry(entry: WaitlistEntry): Promise<boolean> {
    if (!this.kv) {
      console.warn('Vercel KV not initialized');
      return false;
    }

    try {
      const key = `waitlist:${entry.email}`;
      await this.kv.set(key, entry);
      
      // Also store in a list for easy retrieval
      await this.kv.lpush('waitlist:all', entry.email);
      
      return true;
    } catch (error) {
      console.error('Error storing waitlist entry in KV:', error);
      return false;
    }
  }

  async getWaitlistEntry(email: string): Promise<WaitlistEntry | null> {
    if (!this.kv) {
      console.warn('Vercel KV not initialized');
      return null;
    }

    try {
      const key = `waitlist:${email}`;
      const entry = await this.kv.get(key);
      return entry;
    } catch (error) {
      console.error('Error retrieving waitlist entry from KV:', error);
      return null;
    }
  }

  async getAllWaitlistEntries(): Promise<WaitlistEntry[]> {
    if (!this.kv) {
      console.warn('Vercel KV not initialized');
      return [];
    }

    try {
      const emails = await this.kv.lrange('waitlist:all', 0, -1);
      const entries: WaitlistEntry[] = [];
      
      for (const email of emails) {
        const entry = await this.getWaitlistEntry(email);
        if (entry) {
          entries.push(entry);
        }
      }
      
      return entries;
    } catch (error) {
      console.error('Error retrieving all waitlist entries from KV:', error);
      return [];
    }
  }
}

// Vercel Postgres Database
export class VercelPostgresDatabase {
  private sql: any; // eslint-disable-line @typescript-eslint/no-explicit-any

  constructor() {
    this.initPostgres();
  }

  private async initPostgres() {
    try {
      const { sql } = await import('@vercel/postgres');
      this.sql = sql;
      
      // Create table if it doesn't exist
      await this.createTable();
    } catch (error) {
      console.warn('Vercel Postgres not available:', error);
    }
  }

  private async createTable() {
    if (!this.sql) return;

    try {
      await this.sql`
        CREATE TABLE IF NOT EXISTS waitlist (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          pet_name VARCHAR(255) NOT NULL,
          pet_type VARCHAR(100) NOT NULL,
          pet_age VARCHAR(50),
          interests TEXT,
          signup_source VARCHAR(100) NOT NULL,
          timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          email_sent BOOLEAN DEFAULT FALSE,
          email_sequence JSON DEFAULT '[]'
        )
      `;
    } catch (error) {
      console.error('Error creating waitlist table:', error);
    }
  }

  async storeWaitlistEntry(entry: WaitlistEntry): Promise<boolean> {
    if (!this.sql) {
      console.warn('Vercel Postgres not initialized');
      return false;
    }

    try {
      await this.sql`
        INSERT INTO waitlist (name, email, pet_name, pet_type, pet_age, interests, signup_source, timestamp, email_sent, email_sequence)
        VALUES (${entry.name}, ${entry.email}, ${entry.petName}, ${entry.petType}, ${entry.petAge || null}, ${entry.interests || null}, ${entry.signupSource}, ${entry.timestamp}, ${entry.emailSent || false}, ${JSON.stringify(entry.emailSequence || [])})
        ON CONFLICT (email) DO UPDATE SET
          name = EXCLUDED.name,
          pet_name = EXCLUDED.pet_name,
          pet_type = EXCLUDED.pet_type,
          pet_age = EXCLUDED.pet_age,
          interests = EXCLUDED.interests,
          signup_source = EXCLUDED.signup_source,
          timestamp = EXCLUDED.timestamp
      `;
      
      return true;
    } catch (error) {
      console.error('Error storing waitlist entry in Postgres:', error);
      return false;
    }
  }

  async getWaitlistEntry(email: string): Promise<WaitlistEntry | null> {
    if (!this.sql) {
      console.warn('Vercel Postgres not initialized');
      return null;
    }

    try {
      const result = await this.sql`
        SELECT * FROM waitlist WHERE email = ${email}
      `;
      
      if (result.rows.length > 0) {
        const row = result.rows[0];
        return {
          id: row.id.toString(),
          name: row.name,
          email: row.email,
          petName: row.pet_name,
          petType: row.pet_type,
          petAge: row.pet_age,
          interests: row.interests,
          signupSource: row.signup_source,
          timestamp: row.timestamp,
          emailSent: row.email_sent,
          emailSequence: row.email_sequence
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error retrieving waitlist entry from Postgres:', error);
      return null;
    }
  }

  async getAllWaitlistEntries(): Promise<WaitlistEntry[]> {
    if (!this.sql) {
      console.warn('Vercel Postgres not initialized');
      return [];
    }

    try {
      const result = await this.sql`
        SELECT * FROM waitlist ORDER BY timestamp DESC
      `;
      
      return result.rows.map((row: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
        id: row.id.toString(),
        name: row.name,
        email: row.email,
        petName: row.pet_name,
        petType: row.pet_type,
        petAge: row.pet_age,
        interests: row.interests,
        signupSource: row.signup_source,
        timestamp: row.timestamp,
        emailSent: row.email_sent,
        emailSequence: row.email_sequence
      }));
    } catch (error) {
      console.error('Error retrieving all waitlist entries from Postgres:', error);
      return [];
    }
  }

  async updateEmailStatus(email: string, emailSent: boolean, emailSequence?: string[]): Promise<boolean> {
    if (!this.sql) {
      console.warn('Vercel Postgres not initialized');
      return false;
    }

    try {
      await this.sql`
        UPDATE waitlist 
        SET email_sent = ${emailSent}, email_sequence = ${JSON.stringify(emailSequence || [])}
        WHERE email = ${email}
      `;
      
      return true;
    } catch (error) {
      console.error('Error updating email status in Postgres:', error);
      return false;
    }
  }
}

// Database factory
export class DatabaseService {
  private kvDb: VercelKVDatabase;
  private postgresDb: VercelPostgresDatabase;
  private preferredDb: 'kv' | 'postgres';

  constructor(preferredDb: 'kv' | 'postgres' = 'kv') {
    this.kvDb = new VercelKVDatabase();
    this.postgresDb = new VercelPostgresDatabase();
    this.preferredDb = preferredDb;
  }

  async storeWaitlistEntry(entry: WaitlistEntry): Promise<boolean> {
    if (this.preferredDb === 'postgres') {
      return this.postgresDb.storeWaitlistEntry(entry);
    } else {
      return this.kvDb.storeWaitlistEntry(entry);
    }
  }

  async getWaitlistEntry(email: string): Promise<WaitlistEntry | null> {
    if (this.preferredDb === 'postgres') {
      return this.postgresDb.getWaitlistEntry(email);
    } else {
      return this.kvDb.getWaitlistEntry(email);
    }
  }

  async getAllWaitlistEntries(): Promise<WaitlistEntry[]> {
    if (this.preferredDb === 'postgres') {
      return this.postgresDb.getAllWaitlistEntries();
    } else {
      return this.kvDb.getAllWaitlistEntries();
    }
  }

  async updateEmailStatus(email: string, emailSent: boolean, emailSequence?: string[]): Promise<boolean> {
    if (this.preferredDb === 'postgres') {
      return this.postgresDb.updateEmailStatus(email, emailSent, emailSequence);
    } else {
      // KV doesn't support email status tracking, so we'll just return true
      return true;
    }
  }
}

// Default database service
export function getDatabaseService(): DatabaseService {
  const dbType = process.env.DATABASE_TYPE || 'kv';
  return new DatabaseService(dbType as 'kv' | 'postgres');
}
