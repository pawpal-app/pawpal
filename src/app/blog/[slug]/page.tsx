// src/app/blog/[slug]/page.tsx
import { getPostData, getAllPostSlugs } from "@/lib/posts";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// This function tells Next.js which blog posts exist
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map(path => path.params);
}

// ✨ NEW: We are explicitly defining the type for our props here
type Props = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: Props) { // <-- And using it here
  const postData = await getPostData(params.slug);

  return (
    <main className="bg-gradient-to-br from-[#f8fcfc] to-[#eff3f3] py-8 sm:py-12 lg:py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-[#163031] mb-6 leading-tight">
            {postData.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#66a4a8] to-[#2D6063] rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <p className="text-[#345045] font-semibold text-sm">{postData.author}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{postData.date}</p>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative w-full h-56 lg:h-72 mb-8 rounded-xl overflow-hidden">
            <Image
              src={postData.coverImage}
              alt={postData.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
          <div
            className="prose prose-sm sm:prose-base max-w-none 
            prose-headings:text-[#163031] prose-headings:font-bold
            prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-8 sm:prose-h2:mt-10 prose-h2:mb-3 sm:prose-h2:mb-4
            prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-5 sm:prose-h3:mt-6 prose-h3:mb-2 sm:prose-h3:mb-3
            prose-p:text-sm sm:prose-p:text-base prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-3 sm:prose-p:mb-4
            prose-strong:text-[#345045] prose-strong:font-semibold
            prose-a:text-[#2D6063] prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
            prose-blockquote:border-l-4 prose-blockquote:border-[#66a4a8] prose-blockquote:bg-[#f8fcfc] prose-blockquote:px-3 sm:prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:text-[#345045] prose-blockquote:text-xs sm:prose-blockquote:text-sm prose-blockquote:my-3 sm:prose-blockquote:my-4 prose-blockquote:not-italic
            prose-ul:text-gray-700 prose-ul:text-sm sm:prose-ul:text-base prose-ul:leading-relaxed prose-ul:my-2 sm:prose-ul:my-3
            prose-ol:text-gray-700 prose-ol:text-sm sm:prose-ol:text-base prose-ol:leading-relaxed prose-ol:my-2 sm:prose-ol:my-3
            prose-li:my-1 prose-li:text-sm sm:prose-li:text-base
            prose-img:rounded-xl prose-img:shadow-md prose-img:my-4 sm:prose-img:my-6"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>

        {/* Call to Action Section */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-br from-[#66a4a8] to-[#2D6063] rounded-2xl p-6 sm:p-8 lg:p-10 text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Simplify Pet Care?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Join thousands of pet parents who trust Animo by PawPal to remove the unknowns and make pet care effortless.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/animo-care-capture-connect/id6754126492"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            > 
              <Button
                className="bg-white text-[#345045] hover:bg-gray-50 px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 h-12"
              >
                Download on App Store
              </Button>
            </a>
            <a
              href="/contact"
              className="bg-transparent text-white hover:bg-white/10 border-2 border-white px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 h-12 flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}