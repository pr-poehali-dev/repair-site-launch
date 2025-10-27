import { useEffect } from 'react';

const VisitCounter = () => {
  useEffect(() => {
    const incrementVisit = async () => {
      try {
        await fetch('https://functions.poehali.dev/62c13246-fe22-48a5-92c5-9ca72786e54f', {
          method: 'POST'
        });
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    incrementVisit();
  }, []);

  return null;
};

export default VisitCounter;