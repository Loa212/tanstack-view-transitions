import { H1 } from "@/components/H1";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="">
      <H1>Home</H1>
      <br />
      <p>Learn how to use view transitions.</p>
      <br />
      <p>Navigate to other pages to see it in action!</p>
      <br />
      <p>I'm testing autodeploy now! and I added the gh app</p>
    </div>
  );
}
