import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

const VisitCounter = () => {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const incrementVisit = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/62c13246-fe22-48a5-92c5-9ca72786e54f', {
          method: 'POST'
        });
        
        if (response.ok) {
          const data = await response.json();
          setVisits(data.visits);
        }
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    incrementVisit();
  }, []);

  if (visits === null) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-card border border-border rounded-lg px-4 py-2 shadow-lg flex items-center gap-2">
      <Icon name="Eye" size={20} className="text-primary" />
      <div className="text-sm">
        <span className="text-muted-foreground">Посещений:</span>
        <span className="ml-1 font-semibold text-foreground">{visits.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default VisitCounter;
