import { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const franceTime = new Date(currentTime.toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
  const formattedTime = `${('0' + franceTime.getHours()).slice(-2)}:${('0' + franceTime.getMinutes()).slice(-2)}`;

  return (
      <>
        {formattedTime}
      </>
  );
};

export default CurrentTime;
