import React from 'react';

interface AppIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AppIcon({ size = 'md', className = '' }: AppIconProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  return (
    <a 
      href="https://apps.apple.com/us/app/animo-care-capture-connect/id6754126492?itscg=30200&itsct=apps_box_artwork&mttnsubad=6754126492" 
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${sizeClasses[size]} ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-block',
        verticalAlign: 'middle',
        '--app-icon-mask': `url('data:image/svg+xml,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20viewBox%3D%220%200%20230.5%20230.5%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%221.4%22%20clip-rule%3D%22evenodd%22%20d%3D%22M158.2%20230H64.1a320%20320%200%200%201-7-.1c-5%200-10-.5-15-1.3a50.8%2050.8%200%200%201-14.4-4.8%2048.2%2048.2%200%200%201-21-21%2050.9%2050.9%200%200%201-4.8-14.4%20100.7%20100.7%200%200%201-1.3-15v-7l-.1-8.2V64.1a320%20320%200%200%201%20.1-7c0-5%20.5-10%201.3-15a50.7%2050.7%200%200%201%204.8-14.4%2048.2%2048.2%200%200%201%2021-21%2051%2051%200%200%201%2014.4-4.8c5-.8%2010-1.2%2015-1.3a320%20320%200%200%201%207%200l8.2-.1h94.1a320%20320%200%200%201%207%20.1c5%200%2010%20.5%2015%201.3a52%2052%200%200%201%2014.4%204.8%2048.2%2048.2%200%200%201%2021%2021%2050.9%2050.9%200%200%201%204.8%2014.4c.8%205%201.2%2010%201.3%2015a320%20320%200%200%201%20.1%207v102.3l-.1%207c0%205-.5%2010-1.3%2015a50.7%2050.7%200%200%201-4.8%2014.4%2048.2%2048.2%200%200%201-21%2021%2050.8%2050.8%200%200%201-14.4%204.8c-5%20.8-10%201.2-15%201.3a320%20320%200%200%201-7%200l-8.2.1z%22%2F%3E%0A%3C%2Fsvg%3E%0A')`
      } as React.CSSProperties}
    >
      <img 
        src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/34/85/d4/3485d452-e2b8-b8e7-5621-d571421c30fe/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/540x540bb.jpg" 
        alt="Animo - Care, Capture, Connect"
        className="w-full h-full object-contain"
        style={{
          maskImage: 'var(--app-icon-mask)',
          WebkitMaskImage: 'var(--app-icon-mask)'
        }}
      />
      
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 230.5 230.5" 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ boxSizing: 'border-box' }}
      >
        <path 
          fill="none" 
          stroke="#000" 
          strokeLinejoin="round" 
          strokeMiterlimit="1.4" 
          strokeOpacity=".1" 
          strokeWidth="1" 
          d="M158.2 230H64.1a320 320 0 0 1-7-.1c-5 0-10-.5-15-1.3a50.8 50.8 0 0 1-14.4-4.8 48.2 48.2 0 0 1-21-21 50.9 50.9 0 0 1-4.8-14.4 100.7 100.7 0 0 1-1.3-15v-7l-.1-8.2V64.1a320 320 0 0 1 .1-7c0-5 .5-10 1.3-15a50.7 50.7 0 0 1 4.8-14.4 48.2 48.2 0 0 1 21-21 51 51 0 0 1 14.4-4.8c5-.8 10-1.2 15-1.3a320 320 0 0 1 7 0l8.2-.1h94.1a320 320 0 0 1 7 .1c5 0 10 .5 15 1.3a52 52 0 0 1 14.4 4.8 48.2 48.2 0 0 1 21 21 50.9 50.9 0 0 1 4.8 14.4c.8 5 1.2 10 1.3 15a320 320 0 0 1 .1 7v102.3l-.1 7c0 5-.5 10-1.3 15a50.7 50.7 0 0 1-4.8 14.4 48.2 48.2 0 0 1-21 21 50.8 50.8 0 0 1-14.4 4.8c-5 .8-10 1.2-15 1.3a320 320 0 0 1-7 0l-8.2.1z" 
          clipRule="evenodd" 
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </a>
  );
}

