import HText from "@/shared/HText"
import { SelectedPage, BenefitType } from "@/shared/types"
import { 
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Practical Approach in Focus",
    description: "I use the latest technology to make sure you have the best experience possible."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100% diverse classes",
    description: "I use the latest technology to make sure you have the best experience possible."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Pro Trainer",
    description: "sadfsddfg"
  }
]

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
      <div className="md:my-5 md:w-3/5">
       <HText>MORE THAN JUST A LECTURE</HText>
       <p className="my-5 text-sm">
        I am a firm believer that the best way to learn is by using the language 
        in many different aspects, be it movie scenes, music lyrics, 
        carefully selected conversations or phrases.
        <br />
        <br />
        My goal is to make each lesson as enjoyable and fun as possible, you have to
        just show up and be open to learn!
        This approach goes beyond traditional methods, integrating special techniques designed 
        to make learning a dynamic and engaging journey. Whether it's refining grammar 
        or honing conversational skills, every session is tailored 
        to your individual goals. 
        <br />
        <br />
        Let's embark on this language adventure together, 
        where every lesson is a step towards fluency. 
        <br />
        Get ready to unlock your full linguistic potential! Sign up for a free first consultation below.
       </p>
      </div>
      
      {/* BENEFITS */}
      <div className="md:flex items-center justify-between gap-8 mt-5">
        {benefits.map((benefit: BenefitType) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </div>
    </motion.div>
    </section>
  );
}

export default Benefits