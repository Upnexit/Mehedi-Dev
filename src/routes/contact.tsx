import { createFileRoute } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mehedi Hasan, Full Stack Developer" },
      {
        name: "description",
        content:
          "Get in touch with Mehedi Hasan to start your next web product, redesign or engineering project.",
      },
      { property: "og:title", content: "Contact — Mehedi Hasan" },
      {
        property: "og:description",
        content: "Available for freelance and contract full-stack work.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="GET IN TOUCH"
        title={
          <>
            Have an idea? <br />
            <span className="font-signature text-gradient">Let&apos;s build it.</span>
          </>
        }
        description="Whether it's a new product, a redesign or a tricky engineering challenge — I'd love to hear about it."
      />
      <Contact />
    </PageLayout>
  );
}
