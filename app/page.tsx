import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-dvh bg-no-repeat bg-center bg-cover z-20">
        <div className=" bg-[url('/bg2.jpg')] min-h-dvh">
        <section className="min-h-dvh bg-black/40 z-20 p-3 flex items-center justify-between">
          <div className="text-white lg:w-1/2 mx-auto flex flex-col gap-10 items-center justify-center max-md:pt-10">
            <h1 className="md:text-5xl text-2xl font-bold text-center">
              Welcome to <span className="text-sky-600">Innovate-X</span>. Solutions for Africa
            </h1>
            <p className="text-xl font-light text-center">
              It is a digital platform built to amplify innovative African minds by providing a space
              to share ideas, insights, and solutions that address real challenges across the
              continent. It connects thinkers, creators, and problem-solvers who are passionate about
              driving sustainable growth, collaboration and positive impact in Africa through
              innovation and technology.
            </p>
            <div className="flex w-full items-center gap-5 justify-center max-md:flex-col">
              <Link
                href={"/auth/signin"}
                className="bg-sky-600 px-8 py-3 rounded-full font-semibold hover:-translate-y-1 transition-all duration-200 border border-sky-600 max-md:w-full text-center"
              >
                Get Started for Free
              </Link>
              <Link
                href={"/about"}
                className="border px-8 py-3 rounded-full hover:-translate-y-1 transition-all duration-200 font-semibold max-md:w-full text-center text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        </div>
        <section className="bg-sky-600 z-20 py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { value: "10K+", label: "Innovators" },
              { value: "54", label: "Countries Reached" },
              { value: "3K+", label: "Ideas Shared" },
              { value: "500+", label: "Collaborations" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-4xl font-bold">{stat.value}</span>
                <span className="text-sm font-light uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="bg-black/80 z-20 py-20 px-6">
          <div className="max-w-5xl mx-auto text-white flex flex-col gap-12">
            <div className="text-center flex flex-col gap-3">
              <span className="text-sky-500 uppercase text-sm tracking-widest font-semibold">
                The Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">How Innovate-X Works</h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Three simple steps to turn your ideas into impact across the continent.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Create Your Profile",
                  desc: "Sign up and tell us about your background, skills, and the challenges you want to solve.",
                },
                {
                  step: "02",
                  title: "Share Your Ideas",
                  desc: "Post insights, solutions, and innovations to a community of like-minded African thinkers.",
                },
                {
                  step: "03",
                  title: "Collaborate & Grow",
                  desc: "Connect with partners, get feedback, and turn ideas into real-world impact together.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:bg-white/10 transition-all duration-300"
                >
                  <span className="text-sky-500 text-5xl font-bold opacity-40">{item.step}</span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="bg-[url('/bg2.jpg')] bg-no-repeat bg-center bg-cover z-20">
          <div className="bg-black/70 py-20 px-6">
            <div className="max-w-5xl mx-auto text-white flex flex-col gap-12">
              <div className="text-center flex flex-col gap-3">
                <span className="text-sky-500 uppercase text-sm tracking-widest font-semibold">
                  What We Offer
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">Built for African Innovators</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "💡",
                    title: "Idea Hub",
                    desc: "A dedicated space to publish and discover breakthrough ideas solving Africa's most pressing challenges.",
                  },
                  {
                    icon: "🤝",
                    title: "Collaboration Network",
                    desc: "Find co-founders, mentors, and partners across 54 African nations who share your passion.",
                  },
                  {
                    icon: "📊",
                    title: "Impact Tracking",
                    desc: "Measure the reach and real-world impact of your innovations with built-in analytics.",
                  },
                  {
                    icon: "🌍",
                    title: "Pan-African Community",
                    desc: "Join a vibrant, multilingual community of changemakers, entrepreneurs, and technologists.",
                  },
                  {
                    icon: "🚀",
                    title: "Accelerator Access",
                    desc: "Get connected to funding opportunities, incubators, and accelerators focused on African startups.",
                  },
                  {
                    icon: "🔒",
                    title: "IP Protection",
                    desc: "Share your ideas with confidence. Our platform includes tools to timestamp and protect your intellectual property.",
                  },
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-4xl">{feature.icon}</span>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black/80 z-20 py-20 px-6">
          <div className="max-w-5xl mx-auto text-white flex flex-col gap-12">
            <div className="text-center flex flex-col gap-3">
              <span className="text-sky-500 uppercase text-sm tracking-widest font-semibold">
                Community Voices
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">What Our Innovators Say</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "Innovate-X gave me the platform to share my agri-tech solution. Within weeks I had collaborators from three different countries.",
                  name: "Amara Diallo",
                  role: "Agri-Tech Founder, Senegal",
                  initials: "AD",
                },
                {
                  quote:
                    "This is what Africa needed — a home-grown platform that understands our challenges and fuels our solutions.",
                  name: "Chidi Okonkwo",
                  role: "Software Engineer, Nigeria",
                  initials: "CO",
                },
                {
                  quote:
                    "I connected with my co-founder on Innovate-X. We've since built a health-tech startup serving communities in East Africa.",
                  name: "Fatima Wanjiru",
                  role: "Health-Tech Entrepreneur, Kenya",
                  initials: "FW",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-6 hover:bg-white/10 transition-all duration-300"
                >
                  <p className="text-white/70 leading-relaxed italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-sm font-bold shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-white/50 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-sky-600 z-20 py-20 px-6">
          <div className="max-w-3xl mx-auto text-white text-center flex flex-col gap-8 items-center">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to Build Africa's Future?
            </h2>
            <p className="text-xl font-light text-white/80">
              Join thousands of innovators already shaping the continent. Your idea could be the
              solution Africa is waiting for.
            </p>
            <div className="flex gap-5 max-md:flex-col w-full justify-center">
              <Link
                href={"/auth/signin"}
                className="bg-white text-sky-600 px-10 py-4 rounded-full font-bold hover:-translate-y-1 transition-all duration-200 max-md:w-full text-center text-lg"
              >
                Join Innovate-X Free
              </Link>
              <Link
                href={"/about"}
                className="border-2 border-white px-10 py-4 rounded-full font-semibold hover:-translate-y-1 transition-all duration-200 max-md:w-full text-center text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}