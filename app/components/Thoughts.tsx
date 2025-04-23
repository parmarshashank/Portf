import { useSound } from '../hooks/useSound';
import { motion } from 'framer-motion';
import { FiCpu } from 'react-icons/fi';

interface ThoughtCardProps {
  date: string;
  content: string;
}

const ThoughtCard = ({ date, content }: ThoughtCardProps) => {
  const { play } = useSound('/sounds/arcade-ui-6-229503.mp3', { volume: 0.3 });

  return (
    <motion.div 
      className="achievement-card__content"
      onMouseEnter={() => play()}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h4>{date}</h4>
      <p>{content}</p>
    </motion.div>
  );
};

const Thoughts = () => {
  const thoughts = [
    {
      date: "April 23, 2025",
      content: "Yeah this one's the first.... `Why isn't anyone ever just whelmed`"
    },
   
  ];

  return (
    <section className="thoughts" id="thoughts">
      <div className="thoughts__header">
        <h2 className="projects__achievement-title">THOUGHT STREAM</h2>
      </div>
      
      <div className="achievement-card">
        {thoughts.map((thought) => (
          <ThoughtCard 
            key={thought.date} 
            date={thought.date} 
            content={thought.content} 
          />
        ))}
      </div>
    </section>
  );
};

export default Thoughts; 