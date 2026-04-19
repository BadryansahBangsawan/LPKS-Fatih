import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Tag } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Badge } from "@/app/components/ui/Badge";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
	title: "Blog & Tips Karir",
	description: "Artikel edukasi seputar karir, skill, dan dunia kerja dari LPKS Tana Ilmu.",
};

const allCategories = ["Semua", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main>
				{/* Header */}
				<section className="bg-[#fafaf9] border-b border-neutral-200 py-12">
					<div className="section-container">
						<div className="max-w-xl">
							<span className="text-xs font-bold uppercase tracking-widest text-[#8b5a2b]">Blog</span>
							<h1 className="mt-3 text-4xl font-extrabold text-neutral-900">
								Tips Karir & Dunia Kerja
							</h1>
							<p className="mt-4 text-neutral-500">
								Artikel praktis seputar skill, karir vokasional, dan tips sukses di dunia kerja.
							</p>
						</div>
					</div>
				</section>

				{/* Blog grid */}
				<section className="py-12">
					<div className="section-container">
						{/* Category filter */}
						<div className="mb-8 flex flex-wrap gap-2">
							{allCategories.map((cat) => (
								<button
									key={cat}
									className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 hover:border-[#8b5a2b] hover:text-[#8b5a2b] transition-all"
								>
									{cat}
								</button>
							))}
						</div>

						{/* Featured post */}
						<div className="mb-10 rounded-2xl border border-neutral-200 bg-white overflow-hidden group card-hover">
							<div className="grid lg:grid-cols-2">
								<div className="relative h-64 lg:h-auto overflow-hidden bg-neutral-100">
									<img
										src={blogPosts[0].image}
										alt={blogPosts[0].title}
										className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								</div>
								<div className="p-8 flex flex-col justify-center">
									<div className="flex items-center gap-3 mb-3">
										<Badge variant="primary">{blogPosts[0].category}</Badge>
										<span className="text-xs text-neutral-400 flex items-center gap-1">
											<Clock className="h-3.5 w-3.5" />
											{blogPosts[0].readTime} baca
										</span>
									</div>
									<h2 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#8b5a2b] transition-colors">
										{blogPosts[0].title}
									</h2>
									<p className="text-neutral-500 leading-relaxed mb-5">
										{blogPosts[0].excerpt}
									</p>
									<div className="flex items-center justify-between">
										<span className="text-sm text-neutral-400">{blogPosts[0].date}</span>
										<Link
											href={`/blog/${blogPosts[0].slug}`}
											className="text-sm font-semibold text-[#8b5a2b] hover:text-[#744b23] transition-colors"
										>
											Baca selengkapnya →
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* Rest of posts */}
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{blogPosts.slice(1).map((post) => (
								<article
									key={post.id}
									className="card-hover group rounded-2xl border border-neutral-200 bg-white overflow-hidden"
								>
									<div className="relative h-44 overflow-hidden bg-neutral-100">
										<img
											src={post.image}
											alt={post.title}
											className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
										/>
									</div>
									<div className="p-5">
										<div className="flex items-center gap-2 mb-3">
											<Tag className="h-3.5 w-3.5 text-neutral-400" />
											<span className="text-xs font-semibold text-neutral-500">{post.category}</span>
											<span className="ml-auto text-xs text-neutral-400 flex items-center gap-1">
												<Clock className="h-3 w-3" />
												{post.readTime}
											</span>
										</div>
										<h3 className="text-sm font-bold text-neutral-900 mb-2 group-hover:text-[#8b5a2b] transition-colors leading-snug">
											{post.title}
										</h3>
										<p className="text-xs text-neutral-500 leading-relaxed mb-4 line-clamp-2">
											{post.excerpt}
										</p>
										<div className="flex items-center justify-between pt-3 border-t border-neutral-100">
											<span className="text-xs text-neutral-400">{post.date}</span>
											<Link
												href={`/blog/${post.slug}`}
												className="text-xs font-semibold text-[#8b5a2b] hover:text-[#744b23] transition-colors"
											>
												Baca →
											</Link>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
