import Link from "next/link";

export default function PageHeader({ title, breadcrumb }) {
  return (
    <div className="bg-gray-100 py-12 text-center border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <nav aria-label="breadcrumb">
          <ol className="flex justify-center space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-medium">{breadcrumb}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
