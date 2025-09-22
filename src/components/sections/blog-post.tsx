import type { CollectionEntry } from 'astro:content';
import { ChevronLeft } from 'lucide-react';

import CategoryBadge from '@/components/elements/category-badge';

const BlogPost = ({
  post,
  children,
}: {
  post: CollectionEntry<'blog'>[];
  children: React.ReactNode;
}) => {
  const { title, description, pubDate, coverImage } = post[0].data;

  return (
    <article className="hero-padding-margin container space-y-6 md:space-y-8">
      <div>
        {/* Back button */}
        <a href="/blog" className="group inline-block">
          <CategoryBadge
            label="Back"
            icon={
              <ChevronLeft className="!text-current transition-transform group-hover:-translate-x-0.5" />
            }
          />
        </a>
        <h1 className="mt-3 text-2xl md:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-2.5 text-xl leading-8">{description}</p>
      </div>
      {coverImage && (
        <div className="relative h-[320px] overflow-hidden rounded-3xl md:h-[400px] lg:h-[600px]">
          <img
            src={coverImage}
            alt={title}
            className="size-full object-cover"
          />
        </div>
      )}

      <time className="inline-block text-xl">
        {new Date(pubDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </time>

      <div className="prose-headings:font-normal prose-headings:text-3xl prose prose-xl max-w-none leading-8">
        {children}
      </div>
    </article>
  );
};

export { BlogPost };
