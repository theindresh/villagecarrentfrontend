import { motion } from 'framer-motion';
import bgImg from '../assets/img.jpg';

export default function RentCarSection({ onRentNow }) {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center flex-grow p-5 h-screen'>
      <div className='flex flex-col items-center justify-center flex-1'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center pt-20'
        >
          Rent The Car Of Your Village
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='text-center pt-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'
        >
          We have the best cars in the village
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className='pt-10'
        >
          <button
            className='bg-white text-black p-3 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:bg-black hover:text-white transition duration-300 ease-in-out'
            onClick={onRentNow}
          >
            Rent Now
          </button>
        </motion.div>
      </div>
      <div className='flex-1 flex items-center justify-center p-5'>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          src={bgImg} 
          alt='Car'
          className='w-full h-auto rounded-3xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
        />
      </div>
    </div>
  );
}
