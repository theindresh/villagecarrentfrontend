import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const HomeContent = () => {
  return (
    <div className='w-full h-screen bg-white flex flex-col'>
      <div className='fixed top-0 w-full z-50 bg-white'>
      <Navbar />
      </div>
      
      <div className="">
      <Footer className='w-full' />
      </div>
    </div>
  );
};

export default HomeContent;
