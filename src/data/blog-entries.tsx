export const blogEntries = [
  {
    slug: "intro-to-view-transitions",
    title: "Intro to View Transitions in Modern Web Apps",
    description:
      "A beginner-friendly overview of the View Transition API and when to use it.",
    content: (
      <>
        <h2>What is the View Transition API?</h2>
        <p>
          The View Transition API lets browsers animate between two DOM states
          automatically, producing smooth transitions when the UI changes.
        </p>
        <ul>
          <li>
            <strong>Use case:</strong> animating element swaps, route changes,
            or content updates.
          </li>
          <li>
            <strong>Basic API:</strong>{" "}
            <code>
              document.startViewTransition(() =&gt; {"{"} /* state change */{" "}
              {"}"})
            </code>
          </li>
        </ul>
        <p>
          Tip: match elements usin`` <code>view-transition-name</code> in CSS or{" "}
          {`<code>style={{ viewTransitionName: 'name' }}</code> in React.`}
        </p>
      </>
    ),
  },
  {
    slug: "react-state-view-transitions",
    title: "Using View Transitions with React State",
    description:
      "How to wrap React state updates so the browser can animate the change.",
    content: (
      <>
        <h2>Wrap state changes</h2>
        <p>
          Wrap your React state update inside{" "}
          <code>document.startViewTransition</code> to let the browser capture
          before/after snapshots:
        </p>
        <pre>
          <code>{`if (document.startViewTransition) {
  document.startViewTransition(() => setOpen(prev => !prev));
} else {
  setOpen(prev => !prev);
}`}</code>
        </pre>
        <p>
          This enables native-looking transitions without manual animation code.
        </p>
      </>
    ),
  },
  {
    slug: "route-changes-with-view-transitions",
    title: "Animating Route Changes with View Transitions",
    description:
      "Connect view transitions to client-side routing for smooth page swaps.",
    content: (
      <>
        <h2>Route-level transitions</h2>
        <p>
          When using a router (React Router, TanStack Router), trigger{" "}
          <code>document.startViewTransition</code> around the navigation
          action:
        </p>
        <ol>
          <li>Call it before pushing the new route.</li>
          <li>
            Give matching elements the same <code>view-transition-name</code>{" "}
            across routes.
          </li>
        </ol>
        <p>Example: animate a shared header or image between pages.</p>
      </>
    ),
  },
  {
    slug: "tanstack-query-view-transitions",
    title: "TanStack Query + View Transitions: Improving Perceived Performance",
    description:
      "Combine TanStack Query's background fetching with view transitions for snappy UI.",
    content: (
      <>
        <h2>Pattern</h2>
        <p>
          Use TanStack Query to prefetch data, then start a view transition when
          swapping to the new data view.
        </p>
        <ul>
          <li>
            Prefetch with <code>queryClient.prefetchQuery</code>.
          </li>
          <li>
            Once data is ready, call <code>document.startViewTransition</code>{" "}
            and update state to render the fetched content.
          </li>
        </ul>
        <p>This reduces jank and makes data-heavy updates feel instant.</p>
      </>
    ),
  },
  {
    slug: "declarative-view-transition-name",
    title: "Declarative Animations with view-transition-name",
    description:
      "How to link elements declaratively using view-transition-name in CSS or inline styles.",
    content: (
      <>
        <h2>Match elements by name</h2>
        <p>Either in CSS:</p>
        <pre>
          <code>{`.hero { view-transition-name: hero; }`}</code>
        </pre>
        <p>Or in React inline style:</p>
        <pre>
          <code>{`<img style={{ viewTransitionName: 'hero' }} />`}</code>
        </pre>
        <p>
          Elements that share the same name will be matched and animated between
          states.
        </p>
      </>
    ),
  },
  {
    slug: "tanstack-router-transitions",
    title: "TanStack Router: Best Practices for Transitions",
    description:
      "Using TanStack Router with transitions and maintaining good UX.",
    content: (
      <>
        <h2>Tips</h2>
        <ul>
          <li>
            Keep critical layout stable to avoid content shift during
            transitions.
          </li>
          <li>
            Use <code>view-transition-name</code> for shared components like nav
            or hero.
          </li>
          <li>
            Leverage <code>onSuccess</code> callbacks in data fetching to
            trigger transitions at the right time.
          </li>
        </ul>
        <p>Following these produces predictable, fluid route animations.</p>
      </>
    ),
  },
  {
    slug: "view-transition-fallbacks",
    title: "Handling Fallbacks: When View Transitions Aren't Supported",
    description:
      "Gracefully degrade when the browser does not support the View Transition API.",
    content: (
      <>
        <h2>Detect and fallback</h2>
        <p>
          Check support with <code>if (document.startViewTransition)</code>. If
          unsupported, fall back to CSS transitions or keep the instantaneous
          change.
        </p>
        <pre>
          <code>{`if (document.startViewTransition) {
  document.startViewTransition(() => setPage(next));
} else {
  // simple fade or immediate swap
  setPage(next);
}`}</code>
        </pre>
      </>
    ),
  },
  {
    slug: "animating-lists-view-transitions",
    title: "Animating Lists and Layout Changes",
    description:
      "Use view transitions to animate reorders, insertions, and removals in lists.",
    content: (
      <>
        <h2>List patterns</h2>
        <p>
          Give list items a stable <code>view-transition-name</code> derived
          from an id. When items reorder, the browser will animate them to new
          positions.
        </p>
        <ul>
          <li>Ensure keys in React remain stable.</li>
          <li>Use consistent naming so identical items match across frames.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "view-transition-performance-tips",
    title: "Small Performance Tips for Smooth View Transitions",
    description: "Practical tips to keep view transitions buttery-smooth.",
    content: (
      <>
        <h2>Checklist</h2>
        <ul>
          <li>Avoid expensive layout thrashing during transitions.</li>
          <li>
            Keep animated elements GPU-friendly (transform and opacity only).
          </li>
          <li>Prefetch images and data when possible.</li>
          <li>Limit the number of simultaneous transition matches.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "tanstack-query-view-transition-demo",
    title: "A Simple Example: TanStack Query + View Transition Demo",
    description:
      "Code-oriented demo wiring TanStack Query fetches to a view transition.",
    content: (
      <>
        <h2>Demo outline</h2>
        <p>
          1. Prefetch data on hover or intent using{" "}
          <code>queryClient.prefetchQuery</code>.
        </p>
        <p>
          2. When navigating, call <code>document.startViewTransition</code> and
          render the prefetched data.
        </p>
        <pre>
          <code>{`await queryClient.prefetchQuery(['post', id], () => fetchPost(id));
document.startViewTransition(() => navigate('/post/' + id));`}</code>
        </pre>
        <p>This gives instant-feeling navigation with minimal flicker.</p>
      </>
    ),
  },
];
