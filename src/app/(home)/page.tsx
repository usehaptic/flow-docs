import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-6 py-24">
      <p className="mb-4 text-sm font-medium text-fd-muted-foreground">Flow Cloud Documentation</p>
      <h1 className="mb-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
        Browser-native iOS development docs.
      </h1>
      <p className="mb-8 max-w-2xl text-lg text-fd-muted-foreground">
        Learn how Flow Cloud connects projects, file editing, Project Settings, signing assets,
        builds, and Flow AI.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/docs"
          className="rounded-md bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
        >
          Open Docs
        </Link>
        <Link
          href="/docs/quickstart"
          className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-fd-accent"
        >
          Quickstart
        </Link>
      </div>
    </div>
  );
}
