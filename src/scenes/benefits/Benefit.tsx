import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

type Props = {
  icon: JSX.Element,
  title: string,
  description: string,
  setSelectedPage: (value: SelectedPage) => void
}

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div 
    variants = {childVariant}
    className="mt-5 rounded-3xl border border-slate-200 bg-white px-7 py-10 text-center shadow-lg shadow-slate-200/60"

    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border border-slate-200 bg-amber-100 p-4 text-slate-800">
          {icon}
        </div>
      </div>
      <h4 className="font-display text-xl font-semibold text-slate-900">{title}</h4>
      <p className="my-4 text-slate-600">{description}</p>
      <AnchorLink
            className="text-sm font-semibold text-slate-700 underline decoration-amber-500 underline-offset-4 hover:text-slate-900"
            onClick={() => setSelectedPage(SelectedPage.Contact)}
            href={`#${SelectedPage.Contact}`}
            >
              <p>Talk About My Goals</p>
            </AnchorLink>
    </motion.div>
  )
}

export default Benefit