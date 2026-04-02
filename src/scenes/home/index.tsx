import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import Balint from "@/assets/portraitBalint.jpg";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id = "home"
      className="relative overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-amber-200/55 blur-3xl dark:bg-amber-400/15" />
      <div className="pointer-events-none absolute right-0 top-36 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl dark:bg-yellow-200/10" />
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
        className="mx-auto flex w-5/6 flex-col items-center justify-between gap-14 pb-16 md:h-[82vh] md:flex-row"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-12 md:basis-1/2">
          {/* HEADINGS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
              English Coaching With Personality
            </p>
            <h1 className="gold-divider font-display text-5xl font-semibold leading-[1.08] text-slate-900 dark:text-zinc-100 md:text-7xl">
              Speak natural English with confidence, not fear.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-zinc-300">
              Personal sessions that blend real conversations, practical grammar, and
              everyday vocabulary, so your English works in real life from day one.
            </p>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-700 dark:text-amber-200">
              <div className="luxury-card rounded-2xl px-3 py-3">
                <p className="text-lg font-bold">1:1</p>
                <p>Coaching</p>
              </div>
              <div className="luxury-card rounded-2xl px-3 py-3">
                <p className="text-lg font-bold">8-12</p>
                <p>Weeks Avg.</p>
              </div>
              <div className="luxury-card rounded-2xl px-3 py-3">
                <p className="text-lg font-bold">100%</p>
                <p>Tailored</p>
              </div>
            </div>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
           className="mt-10 flex items-center gap-7"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1, x: 0 }
           }}
           >
            <ActionButton setSelectedPage={setSelectedPage}>
              Start My First Session
            </ActionButton>
            <AnchorLink
            className="text-sm font-semibold text-slate-700 underline decoration-amber-500 underline-offset-4 transition duration-300 hover:text-slate-900 dark:text-amber-200 dark:decoration-amber-300 dark:hover:text-amber-100"
            onClick={() => setSelectedPage(SelectedPage.Benefits)}
            href={`#${SelectedPage.Benefits}`}
            >
              <p>See How It Works</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div 
          className="relative flex basis-1/2 justify-center md:z-10 md:justify-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}    
              >
          <div className="absolute -bottom-5 -left-4 h-full w-full rounded-[2rem] bg-slate-900/10 blur-sm dark:bg-amber-500/15" />
          <img
            src={ Balint }
            alt="English coach portrait"
            className="relative z-10 max-h-[560px] w-full max-w-md rounded-[2rem] border border-transparent object-cover shadow-2xl shadow-slate-300/50 dark:border-amber-700/40 dark:shadow-amber-900/20"
          />
        </motion.div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
      <div className="mx-auto mb-8 flex w-5/6 flex-col items-center rounded-3xl border border-slate-200 bg-white/70 py-8 shadow-xl shadow-slate-200/30 backdrop-blur-sm dark:border-amber-700/40 dark:bg-zinc-900/70 dark:shadow-black/50">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-amber-200">
          Trusted by learners from
        </p>
        <div className="mt-4 flex items-center justify-center gap-10 grayscale opacity-80">
          <img src={SponsorRedBull} alt="sponsor-red-bull" />
          <img src={SponsorForbes} alt="sponsor-forbes" />
          <img src={SponsorFortune} alt="sponsor-fortune" />
        </div>
      </div>
      )}
    </section>
    )
}

export default Home