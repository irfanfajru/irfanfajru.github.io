import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Allows customizing built-in components, e.g., styling h1 tags
        // h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
        ...components,
    };
}
