import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type H1Props = HTMLAttributes<HTMLHeadingElement>;

export function H1({ className, ...props }: H1Props) {
  return (
    <h1
      className={cn(
        "text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    />
  );
}
