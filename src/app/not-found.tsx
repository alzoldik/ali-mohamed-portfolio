import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start px-5 py-24">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-fg">Page not found</h1>
      <p className="mt-3 text-sm text-muted">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
