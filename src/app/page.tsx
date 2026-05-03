import Link from "next/link";

function ClawMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M60 8C42 28 28 52 24 78c-2 12 4 22 16 26 8 2 16-2 20-10 4 8 12 12 20 10 12-4 18-14 16-26-4-26-18-50-36-70Z"
        className="fill-orange-500/15 stroke-orange-500/50"
        strokeWidth="1.5"
      />
      <path
        d="M48 44c-4 12-2 28 8 38M72 44c4 12 2 28-8 38M60 52v24"
        className="stroke-stone-400/80"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-stone-950 text-stone-100">
      <div
        className="pointer-events-none absolute inset-0 animate-pulse-glow opacity-40"
        aria-hidden
      >
        <div className="absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-orange-600/25 blur-[100px]" />
        <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-600/20 blur-[90px]" />
      </div>

      <header className="relative z-10 border-b border-stone-800/80 bg-stone-950/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            href="/"
            className="font-[family-name:var(--font-syne)] text-lg font-semibold tracking-tight text-stone-50"
          >
            Claw<span className="text-orange-400">Brother</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-stone-400">
            <a
              href="mailto:hello@clawbrother.com"
              className="transition-colors hover:text-orange-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16 sm:py-24">
        <section className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <div className="relative mb-10 sm:mb-12">
            <ClawMark className="animate-float h-28 w-28 sm:h-36 sm:w-36" />
            <div
              className="absolute inset-0 -z-10 rounded-full bg-orange-500/20 blur-2xl"
              aria-hidden
            />
          </div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-orange-400/90">
            clawbrother.com
          </p>
          <h1 className="font-[family-name:var(--font-syne)] text-4xl font-extrabold leading-[1.1] tracking-tight text-stone-50 sm:text-5xl md:text-6xl">
            Hold tight.
            <br />
            <span className="bg-gradient-to-r from-orange-300 via-amber-200 to-orange-400 bg-clip-text text-transparent">
              Build bold.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-400">
            This is the home for Claw Brother on the web — a Next.js and React
            site you can extend with your portfolio, blog, or storefront.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#stack"
              className="inline-flex h-12 items-center justify-center rounded-full bg-orange-500 px-8 text-sm font-semibold text-stone-950 shadow-lg shadow-orange-900/30 transition hover:bg-orange-400"
            >
              See the stack
            </a>
            <a
              href="mailto:hello@clawbrother.com"
              className="inline-flex h-12 items-center justify-center rounded-full border border-stone-600 bg-stone-900/50 px-8 text-sm font-medium text-stone-200 backdrop-blur transition hover:border-orange-500/50 hover:text-orange-200"
            >
              Say hello
            </a>
          </div>
        </section>

        <section
          id="stack"
          className="mt-24 scroll-mt-24 grid gap-6 sm:grid-cols-3"
        >
          {[
            {
              title: "Fast by default",
              body: "Ship with the App Router, React Server Components, and optimized assets out of the box.",
            },
            {
              title: "Styled with Tailwind",
              body: "Utility-first styling so you can iterate quickly and keep the UI consistent.",
            },
            {
              title: "Ready to deploy",
              body: "Connect clawbrother.com to Vercel, Netlify, or any Node host when you are ready to go live.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-stone-800/90 bg-stone-900/40 p-6 backdrop-blur-sm transition hover:border-orange-900/60 hover:bg-stone-900/70"
            >
              <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-stone-100">
                {card.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">
                {card.body}
              </p>
            </article>
          ))}
        </section>
      </main>

      <footer className="relative z-10 border-t border-stone-800/80 bg-stone-950/80 py-8 text-center text-sm text-stone-500 backdrop-blur">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-stone-400">Claw Brother</span> ·{" "}
          <a
            href="https://clawbrother.com"
            className="text-orange-400/90 underline-offset-4 hover:text-orange-300 hover:underline"
          >
            clawbrother.com
          </a>
        </p>
      </footer>
    </div>
  );
}
