// src/app/blog/[slug]/page.tsx
import { getPostData, getAllPostSlugs } from "@/lib/posts";
import Image from "next/image";

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
    <main className="bg-gradient-to-br from-[#f8fcfc] to-[#eff3f3] py-12 lg:py-16">
      <article className="max-w-4xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#163031] mb-6 leading-tight">
            {postData.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#66a4a8] to-[#2D6063] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <div>
                <p className="text-[#345045] font-semibold">{postData.author}</p>
                <p className="text-gray-500 text-sm">{postData.date}</p>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative w-full h-64 lg:h-96 mb-8 rounded-xl overflow-hidden">
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
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div
            className="prose lg:prose-xl max-w-none prose-headings:text-[#163031] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#345045] prose-a:text-[#2D6063] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-[#66a4a8] prose-blockquote:bg-[#f8fcfc] prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:text-[#345045] prose-ul:text-gray-700 prose-ol:text-gray-700"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 bg-gradient-to-br from-[#66a4a8] to-[#2D6063] rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Simplify Pet Care?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join thousands of pet parents who trust PawPal to remove the unknowns and make pet care effortless.
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
              Learn More
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}