import { motion } from 'framer-motion';

import Star from '../Icons/Star';
import './Face.scss';

const Face = () => {

    return (
        <div className="face">
            <div className="head">
                <div className="eyes">
                    {Array(2).fill().map((_, i) => (
                        <div className="eye" key={i}>
                            <motion.div className="pupille-wrapper">
                                <motion.div
                                    className="pupille"
                                    animate={{
                                        scaleY: [0.75, 0, 0.75]
                                    }}
                                    transition={{
                                        duration: 1.2 / 2,
                                        ease: 'easeInOut',
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                        repeatDelay: 4
                                    }}
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="stars">
                    <div className="st --1">
                        <Star />
                    </div>
                    <div className="st --2">
                        <Star />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Face;