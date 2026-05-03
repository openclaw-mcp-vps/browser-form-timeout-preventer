export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-16">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Browser Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          Never Lose a Form to a{" "}
          <span className="text-[#58a6ff]">Session Timeout</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8">
          Install our browser extension and it silently monitors your open forms,
          sending keepalive pings in the background so your session stays alive —
          no matter how long you take.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Get Access — $8/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">Cancel anytime. Works on any website.</p>
      </section>

      {/* How it works */}
      <section className="max-w-2xl w-full mb-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "🔍", title: "Detects Forms", desc: "Automatically finds active forms on any page you visit." },
          { icon: "💓", title: "Sends Keepalives", desc: "Pings the server periodically to keep your session alive." },
          { icon: "✅", title: "Submit Safely", desc: "Take your time — your session won't expire mid-form." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="font-semibold text-white mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-4">Everything you need, nothing you don't.</p>
          <div className="text-5xl font-extrabold text-[#58a6ff] mb-1">$8</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Browser extension download",
              "Works on Chrome, Edge & Firefox",
              "Unlimited websites & forms",
              "Configurable keepalive interval",
              "Automatic form detection",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which browsers are supported?",
              a: "The extension supports Chrome, Microsoft Edge, and Firefox. Installation instructions are provided after purchase."
            },
            {
              q: "How does the keepalive work without slowing my browser?",
              a: "It uses lightweight background fetch requests on a configurable interval (default 60s). CPU and network impact is negligible."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your billing portal. You keep access until the end of the billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Form Timeout Preventer. All rights reserved.
      </footer>
    </main>
  );
}
