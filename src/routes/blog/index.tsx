import { H1 } from "@/components/H1";
import { blogEntries } from "@/data/blog-entries";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <H1>The Blog</H1>
      {blogEntries.map((entry, index) => (
        <Link key={index} to="/blog/$slug" params={{ slug: entry.slug }}>
          <div className="hover:opacity-50 transition-opacity opacity-100 text-sm mt-4">
            <p className="font-semibold">{entry.title}</p>
            <p className="text-muted-foreground">{entry.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
