// src/app/blog/page.tsx
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <main className="max-w-4xl mx-auto py-12 px-4 bg-white">
      <h1 className="text-5xl font-bold text-[#163031] mb-12 text-center">
        The PawPal Blog
      </h1>

      <div className="space-y-12">
        {allPosts.map(({ slug, title, date, excerpt, author }) => (
          <article key={slug}>
            <p className="text-gray-500 text-sm mb-2">{date} • By {author}</p>
            <h2 className="text-3xl font-semibold text-gray-800 hover:text-[#2D6063] transition-colors">
              <Link href={`/blog/${slug}`}>
                {title}
              </Link>
            </h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              {excerpt}
            </p>
            <Link href={`/blog/${slug}`} className="text-[#345045] font-semibold mt-4 inline-block hover:underline">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}