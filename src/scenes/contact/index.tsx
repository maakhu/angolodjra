import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-4 w-full rounded-2xl border border-slate-200 bg-white
  px-5 py-3 text-slate-800 placeholder-slate-400 outline-none transition duration-300 focus:border-amber-400 dark:border-amber-700/40 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-amber-400`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            Let&apos;s Get Started
          </p>
          <HText>
            Ready To Speak English With More Confidence?
          </HText>
          <p className="my-5 text-slate-600 dark:text-zinc-300">
            Send a short message and we will arrange your first consultation.
            We will map your current level, goals, and the fastest path to progress.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="luxury-card mt-10 basis-3/5 rounded-3xl p-8 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action='https://formsubmit.co/el/pajore'
              method='POST'
              >
                <input type="hidden" name="_subject" value="New angolodj ra inquiry" />
                <input
                className={inputStyles}
                type="text"
                placeholder="Your name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-rose-600 dark:text-rose-400">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}
              
              <input 
                className={inputStyles}
                type='text'
                placeholder='Your email'
                {...register('email', { 
                  required: true ,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                />
                {errors.email && (
                  <p className='mt-1 text-sm text-rose-600 dark:text-rose-400'>
                    {errors.email.type === 'required' && 'This field is required'}
                    {errors.email.type === 'pattern' && 'Invalid email address'}
                  </p>
                )}

              <textarea 
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder='Tell me your goal in one or two sentences'
                {...register('message', { 
                  required: true ,
                  maxLength: 2000,
                })}
                />
                {errors.message && (
                  <p className='mt-1 text-sm text-rose-600 dark:text-rose-400'>
                    {errors.message.type === 'required' && 'This field is required'}
                    {errors.message.type === 'maxLength' && 'Max length is 2000 characters'}
                  </p>
                )}
                <button
                type="submit"
                className="mt-5 rounded-full bg-slate-900 px-10 py-3 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-amber-400 hover:text-slate-900 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300"
              >
                Send Message
              </button>
              <p className="mt-4 text-sm text-slate-500 dark:text-zinc-400">No spam. Just a personal reply within 24 hours.</p>
              </form>
            </motion.div>
            <motion.aside
              className="luxury-card mt-8 basis-2/5 rounded-3xl p-8 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">What Happens Next</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900 dark:text-zinc-100">A Premium Start Experience</h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-zinc-300">
                <li className="rounded-2xl border border-slate-200 px-4 py-3 dark:border-amber-700/40">Step 1: 15-minute clarity call about your goals.</li>
                <li className="rounded-2xl border border-slate-200 px-4 py-3 dark:border-amber-700/40">Step 2: Personal level and speaking confidence map.</li>
                <li className="rounded-2xl border border-slate-200 px-4 py-3 dark:border-amber-700/40">Step 3: A custom learning plan for your next 8 weeks.</li>
              </ul>
            </motion.aside>
          </div>
      </motion.div>
    </section>
  );
}

export default Contact