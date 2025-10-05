// src/app/blog/page.tsx
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <main className="bg-gradient-to-br from-[#f8fcfc] to-[#eff3f3] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-[#163031] mb-6">
            The PawPal Blog
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert tips, local guides, and insights to help you care for your pets with confidence
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {allPosts.map(({ slug, title, date, excerpt, author, coverImage }) => (
            <article key={slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Cover Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={coverImage}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#66a4a8] to-[#2D6063] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">PP</span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{date}</p>
                    <p className="text-[#345045] text-sm font-medium">{author}</p>
                  </div>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-[#163031] mb-4 group-hover:text-[#2D6063] transition-colors">
                  <Link href={`/blog/${slug}`}>
                    {title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {excerpt}
                </p>
                
                <Link 
                  href={`/blog/${slug}`} 
                  className="inline-flex items-center text-[#2D6063] font-semibold hover:text-[#345045] transition-colors group"
                >
                  Read More 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-br from-[#66a4a8] to-[#2D6063] rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated with PawPal
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Get the latest pet care tips, local guides, and PawPal updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.apple.com/app-store/"
              className="bg-white text-[#345045] hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              📱 Download PawPal
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white hover:bg-white/10 border-2 border-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}