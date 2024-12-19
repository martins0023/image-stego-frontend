import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile_number: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_ul1snaq', 
      'template_px09fyc', 
      {
        from_name: form.name,
        to_name: 'Miracle',
        from_email: form.email,
        to_email: 'oladapom4@gmail.com',
        mobile_number: form.mobile_number,
        message: form.message
      },
      '5_DaWBIfSUtw3os8H'
      )
      .then(() => {
        setLoading(false);
        alert(`Thank you ${form.name}. We'll get back to you as soon as possible.`);

        setForm({
          name: '',
          email: '',
          mobile_number: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);

        console.log(error);

        alert(`Hola ${form.name}, something went wrong.`)
      })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10
    overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="what's your name?"
            className="bg-tertiary py-4 px-6
            placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none font-medium"
            />

          </label>

          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="what's your email?"
            className="bg-tertiary py-4 px-6
            placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none font-medium"
            />

          </label>


          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Mobile Number</span>
            <input type="text"
            name="mobile_number"
            value={form.mobile_number}
            onChange={handleChange}
            placeholder="what's your mobile number?"
            className="bg-tertiary py-4 px-6
            placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none font-medium"
            />

          </label>

          

          <label className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="what's do you want to say?"
            className="bg-tertiary py-4 px-6
            placeholder:text-secondary
            text-white rounded-lg outlined-none
            border-none font-medium"
            />

          </label>
          <button type="submit"
          className='bg-tertiary py-3 px-20 outline-none 
          w-fit text-white font-bold shadow-md shadow-primary
          rounded-xl'
          >
            {loading ? 'sending...' : 'send'}

          </button>
        </form>

      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")