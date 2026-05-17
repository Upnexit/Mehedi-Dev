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

const stats = [
  { value: "৩+", label: "বছরের অভিজ্ঞতা", Icon: Code2, tint: "from-cyan-400/30 to-sky-500/20" },
  { value: "৩০+", label: "সম্পন্ন প্রজেক্ট", Icon: Rocket, tint: "from-violet-500/30 to-fuchsia-500/20" },
  { value: "২০+", label: "সন্তুষ্ট ক্লায়েন্ট", Icon: Users, tint: "from-emerald-400/30 to-cyan-500/20" },
  { value: "১০০%", label: "যত্নে তৈরি কাজ", Icon: Sparkles, tint: "from-amber-400/30 to-pink-500/20" },
];

const personal = [
  { Icon: MapPin, label: "অবস্থান", value: "বাংলাদেশ" },
  { Icon: Briefcase, label: "পেশা", value: "ফুল-স্ট্যাক ওয়েব ডেভেলপার" },
  { Icon: GraduationCap, label: "শিক্ষা", value: "কম্পিউটার সায়েন্স (বি.এসসি.)" },
  { Icon: Languages, label: "ভাষা", value: "বাংলা · ইংরেজি" },
  { Icon: Coffee, label: "ভালো লাগে", value: "কফি, কোড আর নতুন আইডিয়া" },
  { Icon: Heart, label: "কাজের ধরন", value: "রিমোট · ফ্রিল্যান্স · প্রোডাক্ট স্টুডিও" },
];

const education = [
  {
    year: "২০১৯ — ২০২৩",
    title: "বি.এসসি. ইন কম্পিউটার সায়েন্স",
    place: "বিশ্ববিদ্যালয়, বাংলাদেশ",
    text: "অ্যালগরিদম, ডেটাবেস, সফটওয়্যার ইঞ্জিনিয়ারিং এবং হিউম্যান-কম্পিউটার ইন্টারঅ্যাকশনে ভিত গড়ে তুলেছি।",
  },
  {
    year: "২০১৭ — ২০১৯",
    title: "উচ্চ মাধ্যমিক — বিজ্ঞান বিভাগ",
    place: "কলেজ, বাংলাদেশ",
    text: "গণিত ও পদার্থবিজ্ঞানে শক্ত ভিত, এখান থেকেই প্রোগ্রামিংয়ের প্রতি ভালোবাসার শুরু।",
  },
  {
    year: "চলমান",
    title: "নিজে নিজে শেখা",
    place: "অনলাইন কোর্স, ডকুমেন্টেশন, ওপেন সোর্স",
    text: "প্রতিদিন নতুন কিছু শেখা — আধুনিক টুল, প্যাটার্ন, পারফরম্যান্স আর সিস্টেম ডিজাইন।",
  },
];

export default function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="০১ / আমার সম্পর্কে"
      title={
        <span className="font-bangla-display">
          এমন একজন ডেভেলপার, <br className="hidden md:block" />
          যে কাজকে{" "}
          <span className="text-gradient">নিজের</span>{" "}
          <span className="font-signature text-gradient">মতো</span> ভাবে।
        </span>
      }
    >
      {/* INTRO + STATS */}
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-base md:text-lg text-muted-foreground leading-[1.9] font-bangla"
        >
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
              className="relative glass rounded-3xl p-5 md:p-6 overflow-hidden group"
            >
              <div
                className={`absolute -top-12 -right-12 size-32 rounded-full bg-gradient-to-br ${s.tint} blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative">
                <s.Icon className="text-primary mb-3" size={20} />
                <div className="text-3xl md:text-4xl font-bold text-gradient font-bangla-display">
                  {s.value}
                </div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground font-bangla">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* জানুন আমার সম্পর্কে */}
      <div className="mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] sm:text-xs text-primary tracking-widest mb-4">
            <span className="size-1.5 rounded-full bg-gradient-primary" />
            ০২ / পরিচিতি
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight font-bangla-display">
            জানুন <span className="text-gradient">আমার সম্পর্কে</span>
          </h3>
          <p className="mt-3 text-muted-foreground font-bangla text-base md:text-lg max-w-2xl leading-[1.9]">
            কাজের বাইরে আমি কে, কোথা থেকে এসেছি — এক নজরে কিছু ব্যক্তিগত তথ্য।
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
                <div className="text-xs md:text-sm text-muted-foreground font-bangla mb-1">
                  {p.label}
                </div>
                <div className="text-base md:text-lg font-semibold font-bangla leading-snug">
                  {p.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* শিক্ষা ও পড়াশোনা */}
      <div className="mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass font-mono text-[10px] sm:text-xs text-primary tracking-widest mb-4">
            <span className="size-1.5 rounded-full bg-gradient-primary" />
            ০৩ / পড়াশোনা
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight font-bangla-display">
            আমার <span className="text-gradient">শিক্ষাজীবন</span>
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
              <div className="font-mono text-[11px] md:text-xs text-primary mb-1 tracking-widest">
                {e.year}
              </div>
              <h4 className="text-lg md:text-xl font-semibold font-bangla">
                {e.title}{" "}
                <span className="text-muted-foreground font-normal">· {e.place}</span>
              </h4>
              <p className="mt-2 text-sm md:text-base text-muted-foreground font-bangla leading-[1.9]">
                {e.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* আমার দর্শন / কাজের নীতি */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-24 md:mt-32 relative glass rounded-3xl p-7 md:p-12 overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
        <div className="relative">
          <h3 className="text-2xl md:text-4xl font-bold font-bangla-display leading-tight">
            “কোড লেখা সহজ — <span className="text-gradient">যত্ন নিয়ে</span> লেখাটাই আসল কাজ।”
          </h3>
          <p className="mt-4 text-muted-foreground font-bangla text-base md:text-lg leading-[1.9] max-w-3xl">
            আমি বিশ্বাস করি, একটি ভালো প্রোডাক্ট শুধু সুন্দর দেখতেই হয় না — সেটা
            দ্রুত, নির্ভরযোগ্য এবং সবার জন্য ব্যবহারযোগ্য হওয়া দরকার। এই তিনটি
            ভিত্তির উপরই আমি আমার প্রতিটি প্রজেক্ট দাঁড় করাই।
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform font-bangla"
            >
              <Mail size={16} />
              যোগাযোগ করুন
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-primary transition-all font-bangla"
            >
              আমার কাজ দেখুন →
            </a>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
