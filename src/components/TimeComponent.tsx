import  { useState, useEffect } from 'react';

const TimeComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='flex justify-start xl:justify-start xs:justify-center'>
      <h1 className='text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary uppercase animate-bounce'>
        {time.toLocaleTimeString()}
      </h1>
    </div>
  );
};

export default TimeComponent;