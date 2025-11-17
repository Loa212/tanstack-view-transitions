import { Link, useLocation } from "@tanstack/react-router";

export default function Header() {
  const location = useLocation();
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
              types: () => {
                return location?.href === "/"
                  ? ["slide-left"]
                  : location?.href === "/about"
                    ? ["slide-right"]
                    : []
              },
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
