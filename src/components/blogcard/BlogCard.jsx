import { Link } from "react-router-dom";

interface BlogCardProps {
  post: {
    title: string;
    slug: string;
    image: string;
    card_desc: string;
    category: { name: string };
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto">
      <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <p className="text-sm text-green-700">{post.category.name}</p>
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">{post.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{post.card_desc}</p>
        <Link to={`/blog/${post.slug}`} className="text-green-600 font-semibold mt-3 inline-block hover:underline">
          Read More →
        </Link>
      </div>
    </div>
  );
}