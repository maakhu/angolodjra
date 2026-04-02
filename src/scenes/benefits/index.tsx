import HText from "@/shared/HText"
import { SelectedPage, BenefitType } from "@/shared/types"
import { 
  UserGroupIcon,
  AcademicCapIcon,
  StarIcon
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import HappyStudent from "@/assets/HappyStudent.png"

const benefits: Array<BenefitType> = [
  {
    icon: <StarIcon className="h-6 w-6" />,
    title: "Practice Before Perfection",
    description: "You start speaking immediately with guided prompts, useful phrases, and focused feedback."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Personalized For Your World",
    description: "Lessons are tailored to your work, interests, goals, and weak points so nothing feels generic."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Coach With Real Experience",
    description: "Learn with a teacher who has guided professionals, students, and private learners for years."
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
  <section
  id="benefits"
  className="mx-auto min-h-full w-5/6 py-24"
  >
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    
    >
      {/* HEADER */}
      <motion.div 
      className="md:my-5 md:w-3/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
      }}
        >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
          Why This Works
        </p>
        <HText>More Than A Class. It Is A Training System You Can Actually Use.</HText>
        <p className="my-5 max-w-2xl text-slate-600 dark:text-zinc-300">
          We combine conversation, listening, pronunciation, and practical grammar in one flow.
          Every lesson is active, tailored, and connected to your real communication needs.
        </p>
      </motion.div>
      
      {/* BENEFITS */}
      <motion.div 
      className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        >
        {benefits.map((benefit: BenefitType) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>

      {/* GRAPHICS AND DESC */}
      <div className="mt-16 items-center justify-between gap-16 md:mt-28 md:flex">
        {/* GRAPHIC */}
          <img 
          className="mx-auto max-w-sm rounded-[2rem] border border-slate-200 object-cover shadow-2xl shadow-slate-200/60 dark:border-amber-700/40 dark:shadow-black/50"
          src={HappyStudent} alt="benefit-page-graphic" />

        {/* DESCRIPTION */}
        <div className="mt-10 md:mt-0 md:basis-1/2">
          {/* TITLE */}
          <div className="relative">
            <div>
              <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ duration: 0.5 }}
                 variants={{
                   hidden: { opacity: 0, x: 50 },
                   visible: { opacity: 1, x: 0 }
                 }}
              >
              <HText>
                Learners Build Momentum Every Week And Feel The Difference In Real Conversations.
              </HText>
              </motion.div>
            </div>
          </div>

          {/* DESC */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: 50 },
               visible: { opacity: 1, x: 0 }
             }}
          >
            <p className="my-5 text-slate-600 dark:text-zinc-300">
              You get a clear learning path, not random exercises. We track what you can already do,
              identify what is holding you back, and then train those exact situations until they feel natural.
            </p>
            <p className="mb-5 text-slate-600 dark:text-zinc-300">
              The result is simple: less overthinking, more speaking. If you are ready to improve your
              English in a practical and motivating way, book a first consultation.
            </p>
          </motion.div>
          {/*  BUTTON */} 
          <div className="relative mt-12">
            <ActionButton setSelectedPage={setSelectedPage}>
              Book A Free Intro
            </ActionButton>
          </div>
        </div>
      </div>
    </motion.div>
    </section>
  );
}

export default Benefits