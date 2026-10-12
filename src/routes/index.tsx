import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Transparency — Interviews, 100% Human" },
      {
        name: "description",
        content:
          "Transparency is an interview platform that stops AI tools and other aids during live interviews, then turns every round into clear, actionable feedback to speed up hiring.",
      },
      { property: "og:title", content: "Transparency — Interviews, 100% Human" },
      {
        property: "og:description",
        content:
          "Stop AI cheating in interviews and get clear, actionable feedback that speeds up the hiring process.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Transparency — Interviews, 100% Human",
      },
      {
        name: "twitter:description",
        content:
          "Stop AI cheating in interviews and get clear, actionable feedback that speeds up the hiring process.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden font-body text-ink"
      style={{
        background:
          "linear-gradient(160deg,#f5f7fa 0%,#eef4f8 45%,#e6f0f5 100%)",
      }}
    >
      {/* Decorative chrome orbs — only deep blue, off-white and teal */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full animate-floaty"
        style={{
          background:
            "radial-gradient(circle at 30% 30%,#f5f7fa,#2d8a9e 45%,#0c2340)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -right-28 h-80 w-80 rounded-full animate-floaty-reverse"
        style={{
          background:
            "radial-gradient(circle at 35% 30%,#f5f7fa,#0c2340 50%,#2d8a9e)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-1/3 h-40 w-40 rounded-full opacity-80 animate-spin-slow"
        style={{
          background:
            "radial-gradient(circle at 30% 30%,#f5f7fa,#2d8a9e 50%,#0c2340)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Nav */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div
              className="grid h-11 w-11 place-items-center rounded-xl text-xl font-bold text-cream"
              style={{
                background:
                  "linear-gradient(135deg,#0c2340,#2d8a9e),radial-gradient(circle at 30% 25%,#f5f7fa,#0c2340)",
                backgroundBlendMode: "screen",
                boxShadow:
                  "0 10px 24px -8px #0c2340,inset 0 2px 3px rgba(255,255,255,.6)",
              }}
            >
              T
            </div>
            <span className="font-display text-lg font-extrabold tracking-tight">
              Transparency
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            <a href="#how-it-works" className="transition hover:text-brand">
              How it works
            </a>
            <a href="#feedback" className="transition hover:text-brand">
              Feedback
            </a>
            <a href="#security" className="transition hover:text-brand">
              Security
            </a>
            <a href="#contact" className="transition hover:text-brand">
              Contact
            </a>
          </nav>
          <span className="rounded-full border border-brand/20 bg-cream/70 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand">
            Coming 2026
          </span>
        </header>

        {/* Hero */}
        <section className="grid items-center gap-12 pt-4 pb-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cream/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand" /> Zero-AI
              Interview Platform
            </div>
            <h1 className="font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              <span className="block text-ink">Interviews,</span>
              <span
                className="block animate-shimmer"
                style={{
                  background:
                    "linear-gradient(120deg,#0c2340,#2d8a9e,#0c2340)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                100% Human.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
              Transparency blocks every AI aid and cheat during live interviews
              — then turns each round into clear, actionable feedback that speeds
              up the whole hire.
            </p>

            {/* Waitlist CTA */}
            <a
              href="https://forms.gle/3oSNLuLjGmHshrME7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full px-8 py-4 text-sm font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: "linear-gradient(135deg,#0c2340,#2d8a9e)",
                boxShadow:
                  "0 12px 26px -10px #0c2340,inset 0 2px 3px rgba(255,255,255,.55)",
              }}
            >
              Join the waitlist
            </a>
            <p className="mt-4 text-xs text-ink/50">
              No spam, just launch news.
            </p>
          </div>

          {/* Chrome card */}
          <div className="relative">
            <div
              className="rounded-[2rem] p-[2px]"
              style={{
                background:
                  "linear-gradient(135deg,#0c2340,#2d8a9e,#f5f7fa,#0c2340)",
              }}
            >
              <div
                className="rounded-[calc(2rem-2px)] bg-cream/85 p-7"
                style={{
                  boxShadow:
                    "0 30px 60px -30px #0c2340,inset 0 2px 3px rgba(255,255,255,.9)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
                    Live Monitor
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />{" "}
                    Secured
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <p className="font-display text-3xl font-black text-emerald-600">
                      0
                    </p>
                    <p className="mt-1 text-xs font-medium text-ink/60">
                      AI tools detected
                    </p>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 p-4">
                    <p className="font-display text-3xl font-black text-emerald-600">
                      12
                    </p>
                    <p className="mt-1 text-xs font-medium text-ink/60">
                      Rounds verified
                    </p>
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between rounded-xl bg-red-50 px-4 py-3 text-xs font-medium text-ink/70">
                    <span>Copilot tab blocked</span>
                    <span className="font-bold text-red-600">Blocked</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3 text-xs font-medium text-ink/70">
                    <span>Score feedback sent</span>
                    <span className="font-bold text-emerald-600">Done</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="how-it-works"
          className="grid gap-6 pb-16 md:grid-cols-3"
        >
          <div
            className="rounded-3xl border border-cream/60 bg-cream/70 p-7"
            style={{
              boxShadow:
                "0 20px 40px -28px #0c2340,inset 0 2px 3px rgba(255,255,255,.9)",
            }}
          >
            <div
              className="mb-4 grid h-12 w-12 place-items-center rounded-2xl text-cream"
              style={{
                background: "linear-gradient(135deg,#0c2340,#2d8a9e)",
                boxShadow: "inset 0 2px 3px rgba(255,255,255,.5)",
              }}
            >
              A
            </div>
            <h3 className="font-display text-lg font-bold">Anti-Aid Shield</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              Real-time detection halts AI helpers, tab swaps and chatbots the
              instant they appear in frame.
            </p>
          </div>
          <div
            id="feedback"
            className="rounded-3xl border border-cream/60 bg-cream/70 p-7"
            style={{
              boxShadow:
                "0 20px 40px -28px #2d8a9e,inset 0 2px 3px rgba(255,255,255,.9)",
            }}
          >
            <div
              className="mb-4 grid h-12 w-12 place-items-center rounded-2xl text-cream"
              style={{
                background: "linear-gradient(135deg,#2d8a9e,#0c2340)",
                boxShadow: "inset 0 2px 3px rgba(255,255,255,.5)",
              }}
            >
              F
            </div>
            <h3 className="font-display text-lg font-bold">Instant Feedback</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              Every round becomes structured, actionable notes — so hiring teams
              decide days earlier, not weeks.
            </p>
          </div>
          <div
            id="security"
            className="rounded-3xl border border-cream/60 bg-cream/70 p-7"
            style={{
              boxShadow:
                "0 20px 40px -28px #0c2340,inset 0 2px 3px rgba(255,255,255,.9)",
            }}
          >
            <div
              className="mb-4 grid h-12 w-12 place-items-center rounded-2xl text-cream"
              style={{
                background: "linear-gradient(135deg,#0c2340,#2d8a9e)",
                boxShadow: "inset 0 2px 3px rgba(255,255,255,.5)",
              }}
            >
              V
            </div>
            <h3 className="font-display text-lg font-bold">
              Verification Proof
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              A tamper-proof integrity log you can share with every candidate and
              every stakeholder.
            </p>
          </div>
        </section>

        {/* Contact — early access */}
        <section id="contact" className="py-16">
          <div
            className="rounded-[2rem] p-[2px]"
            style={{
              background:
                "linear-gradient(135deg,#0c2340,#2d8a9e,#f5f7fa,#0c2340)",
            }}
          >
            <div
              className="rounded-[calc(2rem-2px)] bg-cream/85 px-8 py-12 text-center"
              style={{
                boxShadow:
                  "0 30px 60px -30px #0c2340,inset 0 2px 3px rgba(255,255,255,.9)",
              }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-cream/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand" /> Early
                Access
              </span>
              <h2 className="mt-5 font-display text-3xl font-black tracking-tight text-ink md:text-4xl">
                Want in before launch?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/65">
                Join the waitlist or email us directly — we'll set your team up
                first.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://forms.gle/3oSNLuLjGmHshrME7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full px-8 py-4 text-sm font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: "linear-gradient(135deg,#0c2340,#2d8a9e)",
                    boxShadow:
                      "0 12px 26px -10px #0c2340,inset 0 2px 3px rgba(255,255,255,.55)",
                  }}
                >
                  Join the waitlist
                </a>
                <a
                  href="mailto:hello@transparency.com?subject=Early%20access%20request"
                  className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-cream/70 px-8 py-4 text-sm font-semibold text-brand transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    boxShadow:
                      "0 12px 26px -12px #2d8a9e,inset 0 2px 3px rgba(255,255,255,.8)",
                  }}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="3" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                  hello@transparency.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div
          className="relative overflow-hidden rounded-full border border-brand/15 bg-cream/70 py-3"
          style={{ boxShadow: "inset 0 2px 3px rgba(255,255,255,.9)" }}
        >
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="px-6 font-display text-sm font-bold uppercase tracking-[0.25em] text-ink/50">
              No AI · Verified Live · Fast Hires · No AI · Verified Live · Fast
              Hires · No AI · Verified Live · Fast Hires · No AI · Verified Live
              · Fast Hires ·{" "}
            </span>
            <span className="px-6 font-display text-sm font-bold uppercase tracking-[0.25em] text-ink/50">
              No AI · Verified Live · Fast Hires · No AI · Verified Live · Fast
              Hires · No AI · Verified Live · Fast Hires · No AI · Verified
              Live · Fast Hires ·{" "}
            </span>
          </div>
        </div>


        {/* Footer */}
        <footer
          className="flex flex-col items-center justify-between gap-4 py-10 text-xs text-ink/50 sm:flex-row"
        >
          <span>© 2026 Transparency. Interviews, made honest.</span>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-brand">
              Privacy
            </a>
            <a href="#" className="transition hover:text-brand">
              Security
            </a>
            <a href="#" className="transition hover:text-brand">
              Press
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
