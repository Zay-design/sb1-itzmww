import Lottie from 'lottie-react';
import loaderAnimation from '../assets/loader-animation.json';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-64 h-64">
        <Lottie animationData={loaderAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Loader;