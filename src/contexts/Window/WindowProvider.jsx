import { useEffect, useState } from 'react';

import { WindowContext } from '.';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

const WindowProvider = ({ children }) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      console.log('==', windowDimensions);
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <WindowContext.Provider value={windowDimensions}>
            {children}
        </WindowContext.Provider>
    )
};

export default WindowProvider;
