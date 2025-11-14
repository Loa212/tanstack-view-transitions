import { H1 } from "@/components/H1";
import { blogEntries } from "@/data/blog-entries";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();
  const entry = blogEntries.find((entry) => entry.slug === params.slug);
  if (!entry) return <div>Not found!</div>;
  const { title, content } = entry;

  return (
    <div>
      <H1>{title}</H1>
      <div className="space-y-4 mt-4">
        {content}
        <Link to={"/blog"} className="text-purple-500 hover:opacity-50">
          {"<"} Back to Blog
        </Link>
      </div>
    </div>
  );
}
