import Image from "next/image";
import Link from "next/link";

import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-[#090d12] text-stone-100">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
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
            <a href="/contents#gallery" className="transition-colors hover:text-lime-300">
              Gallery
            </a>
            <a href="/contact" className="text-lime-300">
              Contact
            </a>
            <a href="/contents#how-it-works" className="transition-colors hover:text-lime-300">
              How it works
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-6 py-14 sm:py-20">
        <section className="rounded-3xl border border-lime-400/20 bg-white/5 p-8 shadow-[0_0_80px_rgba(132,255,47,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-300">
            Contact
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Talk About Your Location
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-stone-300 sm:text-base">
            Fill out the form and your message will be sent directly to
            clawbrother3@gmail.com.
          </p>

          <ContactForm />
        </section>
      </main>
    </div>
  );
}
