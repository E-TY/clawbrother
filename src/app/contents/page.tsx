import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  { src: "/gallery-1.png", title: "Arcade Setup Wall" },
  { src: "/gallery-2.png", title: "Wild Claw Installation" },
  { src: "/gallery-3.png", title: "Partner Location" },
  { src: "/gallery-4.png", title: "Marketing Creative" },
  { src: "/gallery-5.png", title: "Shop-in-Shop Booth" },
  { src: "/gallery-6.png", title: "Business Flyer" },
  { src: "/gallery-7.png", title: "On-site Revenue Machine" },
];

export default function ContentsPage() {
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
            <a href="#gallery" className="transition-colors hover:text-lime-300">
              Gallery
            </a>
            <a href="/contact" className="transition-colors hover:text-lime-300">
              Contact
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-lime-300">
              How it works
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-14 sm:py-20">
        <section id="gallery" className="scroll-mt-24">
          <h1 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">
            Gallery
          </h1>
          <p className="mt-2 text-sm text-stone-300 sm:text-base">
            Real setups, partner locations, and campaign visuals.
          </p>
          <div className="mt-6 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.src}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
              >
                <div className="mb-3 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1024}
                    height={1024}
                    className="h-56 w-full object-cover"
                  />
                </div>
                <h2 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-lime-200">
                  {item.title}
                </h2>
              </article>
            ))}
          </div>
        </section>

        <section
          id="how-it-works"
          className="mt-12 scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left"
        >
          <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white">
            How it works
          </h3>
          <p className="mt-2 text-sm text-stone-300">
            A fully managed machine model designed for steady monthly returns.
          </p>
          <div className="relative mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/20">
            <Image
              src="/how-it-works.png"
              alt="Claw Brother how it works visual"
              width={1024}
              height={1024}
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent p-4 sm:p-6">
              <p className="font-[family-name:var(--font-syne)] text-lg font-bold text-lime-300 sm:text-2xl">
                Zero Cost, Zero Effort, Pure Profit.
              </p>
              <p className="mt-1 text-xs font-medium text-stone-200 sm:text-sm">
                We Install, We Maintain, You Earn.
              </p>
              <p className="mt-1 text-xs text-stone-300 sm:text-sm">
                A Worry-Free Revenue Stream for Your Shop.
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-lime-200 sm:text-sm">
                Steady Monthly Returns
              </p>
              <p className="mt-1 text-[11px] text-stone-300 sm:text-xs">
                No-Cost Setup — Full-Service Maintenance — Guaranteed Monthly
                Income
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
