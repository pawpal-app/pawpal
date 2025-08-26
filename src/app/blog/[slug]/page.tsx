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
    <main className="bg-white py-12">
      <article className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          {postData.title}
        </h1>
        <p className="text-gray-500 mb-2">By {postData.author}</p>
        <p className="text-gray-500 mb-8">{postData.date}</p>

        <div className="relative w-full h-96 mb-8">
          <Image
            src={postData.coverImage}
            alt={postData.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </main>
  );
}