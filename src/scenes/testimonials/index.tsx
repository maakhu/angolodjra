import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I finally stopped freezing in meetings. We practiced real work situations, and now I speak up with confidence.",
    name: "Kata, Product Manager",
  },
  {
    quote:
      "Every lesson was practical and energizing. I used what I learned the same day at work.",
    name: "Dani, Software Engineer",
  },
  {
    quote:
      "I tried multiple courses before. This is the first one that felt personal, clear, and actually effective.",
    name: "Eszter, University Student",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonials = ({ setSelectedPage }: Props) => {
  return (
    <section id="testimonials" className="mx-auto w-5/6 py-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            Results That Feel Real
          </p>
          <HText>Students Say It Better Than We Do</HText>
          <p className="mt-4 text-slate-600 dark:text-zinc-300">
            You will not just learn English rules. You will build momentum, confidence, and
            a speaking routine that fits your everyday life.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="luxury-card relative rounded-3xl p-8"
            >
              <p className="mb-2 font-display text-4xl leading-none text-amber-500/60">"</p>
              <p className="text-slate-700 dark:text-zinc-300">{testimonial.quote}</p>
              <p className="mt-5 text-sm font-semibold text-slate-900 dark:text-amber-300">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
