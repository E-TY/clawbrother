import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-[#090d12] text-stone-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute -left-28 top-0 h-[500px] w-[500px] rounded-full bg-lime-500/20 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[440px] w-[440px] rounded-full bg-cyan-500/15 blur-[100px]" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-[#090d12]/75 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="flex items-center gap-2 outline-offset-4 transition-opacity hover:opacity-90"
          >
            <Image
              src="/logo-badge.png"
              alt="Claw Brother logo"
              width={128}
              height={128}
              className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
              priority
            />
            <span className="font-[family-name:var(--font-syne)] text-base font-bold tracking-wide text-lime-300">
              CLAWBROTHER
            </span>
          </Link>
          <nav className="flex items-center gap-5 text-sm font-medium text-stone-300">
            <a href="#gallery" className="transition-colors hover:text-lime-300">
              Gallery
            </a>
            <a href="mailto:hello@clawbrother.com" className="transition-colors hover:text-lime-300">
              Contact
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-lime-300">
              How it works
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-14 sm:py-20">
        <section className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <div className="relative mb-8 rounded-3xl border border-lime-400/20 bg-white/5 p-8 shadow-[0_0_80px_rgba(132,255,47,0.12)]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">
              clawbrother.com
            </p>
            <h1 className="pb-2 font-[family-name:var(--font-syne)] text-4xl font-extrabold leading-[1.2] tracking-tight text-white sm:pb-3 sm:text-5xl md:text-6xl">
              Grab fun,
              <br />
              build cool things.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
              A claw-machine inspired brand style landing page that highlights
              your portfolio, gallery, and contact channels in one place.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#gallery"
                className="inline-flex h-11 items-center justify-center rounded-full bg-lime-400 px-7 text-sm font-semibold text-[#091014] transition hover:bg-lime-300"
              >
                View Gallery
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 text-sm font-medium text-white transition hover:border-lime-300/60 hover:text-lime-200"
              >
                How it works
              </a>
            </div>
          </div>

          <section
            id="gallery"
            className="mt-10 grid w-full gap-4 sm:grid-cols-3"
          >
            {["Arcade Mood", "Robot Identity", "Neon Visual"].map((title) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
              >
                <div className="mb-3 h-36 rounded-xl bg-gradient-to-br from-lime-400/20 to-cyan-400/15" />
                <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-lime-200">
                  {title}
                </h2>
                <p className="mt-1 text-sm text-stone-300">
                  Replace this card with real project images or video thumbnails.
                </p>
              </article>
            ))}
          </section>

          <section
            id="how-it-works"
            className="mt-12 w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left"
          >
            <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white">
              How it works
            </h3>
            <ol className="mt-4 grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
              <li className="rounded-xl border border-white/10 bg-black/20 p-4">
                1) Browse featured content in Gallery
              </li>
              <li className="rounded-xl border border-white/10 bg-black/20 p-4">
                2) Reach out for project inquiries
              </li>
              <li className="rounded-xl border border-white/10 bg-black/20 p-4">
                3) Follow social channels for updates
              </li>
            </ol>
          </section>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#090d12]/80 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-stone-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-stone-200">Claw Brother</span>
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-lime-300"
            >
              YouTube
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-lime-300"
            >
              TikTok
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-lime-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
