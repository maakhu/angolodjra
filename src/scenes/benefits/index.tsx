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
import HappyStudent from "@/assets/HappyStudent3.png"

const benefits: Array<BenefitType> = [
  {
    icon: <StarIcon className="h-6 w-6" />,
    title: "Practical Approach in Focus",
    description: "Using the latest methodologies to make sure that the attendee has the best learning experience possible."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100% diverse classes",
    description: "There are no similar classes, the topics are always adjusted based on the student's interests and needs, or their knowledge gaps."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Pro Trainer",
    description: "A professional trainer with years of experience in teaching, working with groups from multinational companies, private attendees or young students. "
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
  className="mx-auto min-h-full w-5/6 py-20"
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
        <HText>MORE THAN JUST A LECTURE</HText>
        <p className="my-5 text-sm">
          I am a firm believer that the best way to learn is by using the language 
          in many different aspects, be it movie scenes, music lyrics, 
          carefully selected conversations or phrases.
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
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHIC */}
          <img 
          className="mx-auto max-w-sm"
          src={HappyStudent} alt="benefit-page-graphic" />

        {/* DESCRIPTION */}
        <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20  before:z-[1] before:content-abstractwaves">
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
                MANY HAPPY LEARNERS GETTING CLOSER TO THEIR {" "}
                <span className="text-primary-500">GOALS</span> 
                {" "} EVERY DAY
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
            <p className="my-5">
              My goal is to make each lesson as enjoyable and fun as possible, you have to
              just show up and be open to learn!
              This approach goes beyond traditional methods, integrating special techniques designed 
              to make learning a dynamic and engaging journey. Whether it's refining grammar 
              or honing conversational skills, every session is tailored 
              to your individual goals. 
            </p>
            <p className="mb-5">
              Let's embark on this language adventure together, 
              where every lesson is a step towards fluency. 
             <br />
             <br />
              Get ready to unlock your full linguistic potential! Sign up for a free first consultation below.
            </p>
          </motion.div>
          {/*  BUTTON */} 
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] content-sparkles">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </section>
  );
}

export default Benefits