import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Linemask = ({ phrases, className }) => {
    const animation = {
        initial: { y: "100%" },
        enter: i => ({ y: "0", transition: {
            duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i }
        })
    };

    const { ref, inView } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    return (
        <div ref={ref}>
            {phrases.map((phrase, index) => (
                <div key={index} className="linemask">
                    <motion.p
                        className={className}
                        custom={index} 
                        variants={animation} 
                        initial="initial" 
                        animate={inView ? "enter" : ""}
                        dangerouslySetInnerHTML={{ __html: phrase }} 
                    />
                </div>
            ))}
        </div>
    );
};

export default Linemask;
