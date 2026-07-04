import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Sparkles,
  Users,
  GraduationCap,
  MapPin,
  Briefcase,
  Heart,
  Coffee,
  BookOpen,
  Languages,
  Mail,
} from "lucide-react";
import SectionShell from "./SectionShell";
import { useLanguage } from "@/lib/language";

export default function About() {
  const { lang, t } = useLanguage();
  const bn = lang === "bn";
  const bnFont = bn ? "font-bangla" : "";
  const bnDisplay = bn ? "font-bangla-display" : "";

  const stats = [
    { value: t("3+", "৩+"),    label: t("Years of experience", "বছরের অভিজ্ঞতা"), Icon: Code2,     tint: "from-cyan-400/30 to-sky-500/20",         lightBg: "light:bg-gradient-to-br light:from-cyan-500 light:to-sky-600" },
    { value: t("30+", "৩০+"),  label: t("Projects shipped",    "সম্পন্ন প্রজেক্ট"), Icon: Rocket,    tint: "from-violet-500/30 to-fuchsia-500/20",   lightBg: "light:bg-gradient-to-br light:from-violet-500 light:to-fuchsia-600" },
    { value: t("20+", "২০+"),  label: t("Happy clients",       "সন্তুষ্ট ক্লায়েন্ট"), Icon: Users,     tint: "from-emerald-400/30 to-cyan-500/20",     lightBg: "light:bg-gradient-to-br light:from-emerald-500 light:to-teal-600" },
    { value: t("100%", "১০০%"),label: t("Crafted with care",   "যত্নে তৈরি কাজ"), Icon: Sparkles,  tint: "from-amber-400/30 to-pink-500/20",       lightBg: "light:bg-gradient-to-br light:from-amber-500 light:to-pink-600" },
  ];

  const personal = [
    { Icon: MapPin,         label: t("Location",         "ঠিকানা"),         value: t("Sapahar, Naogaon, Bangladesh",                   "সাপাহার উপজেলা, নওগাঁ জেলা, বাংলাদেশ"),                                                                                        lightBg: "light:bg-gradient-to-br light:from-rose-500 light:to-orange-500" },
    { Icon: Briefcase,      label: t("Profession",       "পেশা"),           value: t("Full-Stack Web Developer",                        "ফুল-স্ট্যাক ওয়েব ডেভেলপার"),                                                                                                    lightBg: "light:bg-gradient-to-br light:from-indigo-500 light:to-blue-600" },
    { Icon: GraduationCap,  label: t("Education",        "পড়াশোনা"),       value: t("Diploma in Electrical Engineering (Running, 2025 – Present)",   "ডিপ্লোমা ইন ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং (চলমান, ২০২৫ – বর্তমান)"),                                    lightBg: "light:bg-gradient-to-br light:from-emerald-500 light:to-green-600" },
    { Icon: Languages,      label: t("Languages",        "ভাষা"),           value: t("Bangla · English",                                "বাংলা · ইংরেজি"),                                                                                                              lightBg: "light:bg-gradient-to-br light:from-fuchsia-500 light:to-purple-600" },
    { Icon: Coffee,         label: t("I love",           "ভালো লাগে"),      value: t("Coffee, code and fresh ideas",                    "কফি, কোড আর নতুন আইডিয়া"),                                                                                                    lightBg: "light:bg-gradient-to-br light:from-amber-500 light:to-orange-600" },
    { Icon: Heart,          label: t("Work style",       "কাজের ধরন"),      value: t("Remote · Freelance · Product studio",             "রিমোট · ফ্রিল্যান্স · প্রোডাক্ট স্টুডিও"),                                                                                    lightBg: "light:bg-gradient-to-br light:from-cyan-500 light:to-blue-600" },
  ];

  const education = [
    {
      year:  t("2025 – Present", "২০২৫ – বর্তমান"),
      title: t("Diploma in Electrical Engineering (Running)", "ডিপ্লোমা ইন ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং (চলমান)"),
      place: t("Bangladesh Polytechnic Institute", "বাংলাদেশ পলিটেকনিক ইনস্টিটিউট"),
      text:  t(
        "Started the Diploma in Electrical Engineering in November 2025 at Bangladesh Polytechnic Institute. Currently studying — and sharpening my web development craft every single day alongside the coursework.",
        "নভেম্বর ২০২৫-এ বাংলাদেশ পলিটেকনিক ইনস্টিটিউটে ডিপ্লোমা ইন ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং শুরু করেছি। বর্তমানে এটি চলমান — পড়াশোনার পাশাপাশি প্রতিদিন ওয়েব ডেভেলপমেন্টে নিজেকে আরও শাণিত করছি।",
      ),
    },
    {
      year:  t("Oct 2025", "অক্টোবর ২০২৫"),
      title: t("SSC — Science", "এসএসসি — বিজ্ঞান বিভাগ"),
      place: t("Al Helal Islami Academy & College", "আল হেলাল ইসলামী একাডেমি অ্যান্ড কলেজ"),
      text:  t(
        "Completed SSC in the Science group in October 2025 — this is where my deep love for math, logic and technology truly took shape.",
        "অক্টোবর ২০২৫-এ বিজ্ঞান বিভাগ থেকে এসএসসি সম্পন্ন করেছি — এখান থেকেই গণিত, যুক্তি ও প্রযুক্তির প্রতি গভীর ভালোবাসার শুরু।",
      ),
    },
    {
      year:  t("2019", "২০১৯"),
      title: t("PSC — Primary School Certificate", "পিএসসি — প্রাথমিক শিক্ষা সমাপনী"),
      place: t("Sonadanga Gopalpur Government Primary School", "সোনাডাঙ্গা গোপালপুর সরকারি প্রাথমিক বিদ্যালয়"),
      text:  t(
        "Completed PSC in 2019 from my village school — that's where curiosity and the joy of learning first took shape.",
        "২০১৯ সালে নিজের গ্রামের স্কুল থেকে পিএসসি সম্পন্ন করেছি — এখান থেকেই কৌতূহল আর শেখার আনন্দের প্রথম যাত্রা শুরু।",
      ),
    },
  ];

  return (
    <SectionShell
      id="about"
      eyebrow="01 / ABOUT ME"
      title={
        <>
          Hello, I'm <span className="text-gradient">Mehedi</span> — <br className="hidden md:block" />
          <span className="font-signature text-gradient inline-block leading-[0.95]" style={{ fontSize: "1.15em" }}>
            I look for stories inside code.
          </span>
        </>
      }
    >
      {/* INTRO + STATS */}
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className={`space-y-5 text-base md:text-lg text-muted-foreground leading-[1.9] ${bnFont}`}
        >
          {bn ? (
            <>
              <p>
                আমি <span className="text-foreground font-semibold">মেহেদী হাসান</span> —
                বাংলাদেশ থেকে একজন ফুল-স্ট্যাক ওয়েব ডেভেলপার। স্টার্টআপ ও ফাউন্ডারদের
                একদম প্রাথমিক আইডিয়া থেকে শুরু করে প্রোডাকশন-রেডি, পরিপূর্ণ একটি
                প্রোডাক্ট পর্যন্ত নিয়ে যেতে সাহায্য করি।
              </p>
              <p>
                আমার পছন্দের টুলগুলোর মধ্যে আছে{" "}
                <span className="text-primary font-medium">React</span>,{" "}
                <span className="text-primary font-medium">Next.js</span>,{" "}
                <span className="text-primary font-medium">TypeScript</span> ও{" "}
                <span className="text-primary font-medium">Node.js</span> — সাথে
                আধুনিক ক্লাউড স্ট্যাক। পারফরম্যান্স, অ্যাক্সেসিবিলিটি, টাইপ-সেফটি আর
                পিক্সেল-পারফেক্ট ডিটেইল — এগুলোর সাথে কখনো কম্প্রোমাইজ করি না।
              </p>
              <p>
                প্রতিটি প্রজেক্টকে আমি নিজের প্রজেক্টের মতো দেখি — ব্রিফকে প্রশ্ন করি,
                এজ-কেস নিয়ে ভাবি এবং এমন কাজ ডেলিভার করি যেটা ইউজার আর ক্লায়েন্ট
                দুজনকেই গর্বিত করে।
              </p>
            </>
          ) : (
            <>
              <p>
                I'm <span className="text-foreground font-semibold">Mehedi Hasan</span> —
                a full-stack web developer from Bangladesh. I help startups and
                founders take a raw idea all the way to a production-ready,
                polished product.
              </p>
              <p>
                My go-to stack includes{" "}
                <span className="text-primary font-medium">React</span>,{" "}
                <span className="text-primary font-medium">Next.js</span>,{" "}
                <span className="text-primary font-medium">TypeScript</span> and{" "}
                <span className="text-primary font-medium">Node.js</span> — paired
                with a modern cloud stack. Performance, accessibility, type-safety
                and pixel-perfect detail are non-negotiables for me.
              </p>
              <p>
                I treat every project as if it were my own — I question the brief,
                think through edge cases, and ship work that makes both users and
                clients proud.
              </p>
            </>
          )}
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ transformPerspective: 800 }}
              whileHover={{ y: -6, rotateX: -4, rotateY: 4 }}
              className={`relative glass rounded-3xl p-5 md:p-6 overflow-hidden group ${s.lightBg} light:border-transparent light:shadow-elegant`}
            >
              <div
                className={`absolute -top-12 -right-12 size-32 rounded-full bg-gradient-to-br ${s.tint} blur-2xl opacity-70 group-hover:opacity-100 transition-opacity light:hidden`}
              />
              <div className="relative">
                <s.Icon className="text-primary light:text-white mb-3" size={20} />
                <div className={`text-3xl md:text-4xl font-bold text-gradient light:bg-none light:text-white ${bnDisplay}`}>
                  {s.value}
                </div>
                <div className={`mt-1 text-xs md:text-sm text-muted-foreground light:text-white/90 ${bnFont}`}>
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Personal */}
      <div className="mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] sm:text-xs text-primary tracking-widest mb-4 ${bnFont}`}>
            <span className="size-1.5 rounded-full bg-gradient-primary" />
            {t("02 / PERSONAL", "০২ / পরিচিতি")}
          </div>
          <h3 className="leading-[0.9] flex flex-wrap items-baseline gap-x-4" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
            <span className="font-bold tracking-tight text-foreground">My</span>
            <span className="font-signature text-gradient">About</span>
          </h3>
          <p className={`mt-3 text-muted-foreground text-base md:text-lg max-w-2xl leading-[1.9] ${bnFont}`}>
            {t(
              "A glimpse of who I am beyond the work — a few personal notes about my background.",
              "কাজের বাইরে আমি কে, কোথা থেকে এসেছি — এক নজরে কিছু ব্যক্তিগত তথ্য।",
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {personal.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 md:p-6 flex items-start gap-4 group"
            >
              <div className="size-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow shrink-0">
                <p.Icon size={18} />
              </div>
              <div className="min-w-0">
                <div className={`text-xs md:text-sm text-muted-foreground mb-1 ${bnFont}`}>
                  {p.label}
                </div>
                <div className={`text-base md:text-lg font-semibold leading-snug ${bnFont}`}>
                  {p.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] sm:text-xs text-primary tracking-widest mb-4 ${bnFont}`}>
            <span className="size-1.5 rounded-full bg-gradient-primary" />
            {t("03 / EDUCATION", "০৩ / পড়াশোনা")}
          </div>
          <h3 className="leading-[0.9] flex flex-wrap items-baseline gap-x-4" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
            <span className="font-bold tracking-tight text-foreground">My</span>
            <span className="font-signature text-gradient">Education</span>
          </h3>
        </motion.div>

        <ol className="relative border-l border-border/70 ml-3 space-y-8 md:space-y-10">
          {education.map((e, i) => (
            <motion.li
              key={e.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="pl-7 md:pl-9 relative"
            >
              <span className="absolute -left-[13px] top-1.5 size-6 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow">
                <BookOpen size={12} />
              </span>
              <div className={`font-mono text-[11px] md:text-xs text-primary mb-1 tracking-widest ${bnFont}`}>
                {e.year}
              </div>
              <h4 className={`text-lg md:text-xl font-semibold ${bnFont}`}>
                {e.title}{" "}
                <span className="text-muted-foreground font-normal">· {e.place}</span>
              </h4>
              <p className={`mt-2 text-sm md:text-base text-muted-foreground leading-[1.9] ${bnFont}`}>
                {e.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-24 md:mt-32 relative glass rounded-3xl p-7 md:p-12 overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
        <div className="relative">
          <h3 className={`text-2xl md:text-4xl font-bold leading-tight ${bnDisplay}`}>
            {bn ? (
              <>“ছোট ছোট <span className="text-gradient">ডিটেইল</span> থেকেই জন্ম নেয় বড় অভিজ্ঞতা।”</>
            ) : (
              <>“Great experiences are born from the <span className="text-gradient">smallest details</span>.”</>
            )}
          </h3>
          <p className={`mt-4 text-muted-foreground text-base md:text-lg leading-[1.9] max-w-3xl ${bnFont}`}>
            {t(
              "I believe a great product isn't just one that looks good — it has to be fast, reliable and usable by everyone. Every project I build stands on those three foundations.",
              "আমি বিশ্বাস করি, একটি ভালো প্রোডাক্ট শুধু সুন্দর দেখতেই হয় না — সেটা দ্রুত, নির্ভরযোগ্য এবং সবার জন্য ব্যবহারযোগ্য হওয়া দরকার। এই তিনটি ভিত্তির উপরই আমি আমার প্রতিটি প্রজেক্ট দাঁড় করাই।",
            )}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform ${bnFont}`}
            >
              <Mail size={16} />
              {t("Get in touch", "যোগাযোগ করুন")}
            </a>
            <a
              href="#projects"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-primary transition-all ${bnFont}`}
            >
              {t("See my work →", "আমার কাজ দেখুন →")}
            </a>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
