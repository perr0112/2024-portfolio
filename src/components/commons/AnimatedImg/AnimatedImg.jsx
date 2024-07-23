import './AnimatedImg.scss';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedImg = ({ src, alt }) => {
    const animation = {
        // initial: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' },
        initial: { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', scale: 1.2 },
        enter: i => ({ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', scale: 1,
            transition: {
            duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i }
        })
    };

    const { ref, inView } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    return (
        <div className="image-animated" ref={ref}>
            <motion.img
                className="clip-path"
                src={src}
                alt={alt}
                variants={animation}
                initial="initial"
                animate={inView ? "enter" : ""}
            />
        </div>
    );
}

export default AnimatedImg;
