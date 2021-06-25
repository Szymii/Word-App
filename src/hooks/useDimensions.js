import { useState, useEffect } from 'react';

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerHeight < dimensions.height &&
        dimensions.width === window.innerWidth
      )
        return;
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions.height, dimensions.width]);

  return { dimensions };
};

export default useDimensions;
