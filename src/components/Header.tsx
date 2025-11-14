import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <>
      <header className="flex items-center border-b border-border">
        <nav className="flex p-4 overflow-y-auto gap-2 ">
          <Link to="/" viewTransition={{ types: ["slide-right"] }}>
            Home
          </Link>
          <Link
            to="/blog"
            activeProps={{
              className: "font-bold",
            }}
            viewTransition={{
              types: ({ fromLocation }) =>
                fromLocation?.href === "/"
                  ? ["slide-left"]
                  : fromLocation?.href === "/about"
                    ? ["slide-right"]
                    : [],
            }}
          >
            Blog
          </Link>
          <Link
            to="/about"
            activeProps={{
              className: "font-bold",
            }}
            viewTransition={{ types: ["slide-left"] }}
          >
            About
          </Link>
        </nav>
      </header>
    </>
  );
}
