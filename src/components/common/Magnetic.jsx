import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';

/**
 * Magnetic – pulls children toward the cursor while hovering.
 * @param {number} strength  0–1, how strongly to follow the cursor (default 0.35)
 */
export default function Magnetic({ children, strength = 0.35 }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * strength, y: middleY * strength });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            style={{ position: 'relative', display: 'inline-block' }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: 'spring', stiffness: 180, damping: 14, mass: 0.12 }}
        >
            {children}
        </motion.div>
    );
}
