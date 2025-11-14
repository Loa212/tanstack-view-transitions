import { H1 } from "@/components/H1";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="">
      <H1>About</H1>
      <br />
      <p>This is the about page</p>
      <br />
      <p>Nothing to see here... But checkout the Blog!</p>
    </div>
  );
}
