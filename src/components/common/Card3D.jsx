import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Card3D({children, className = ""}) {
    const ref = useRef(null);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springConfig);

    function handleMouseMove(e) {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
        mouseX.set(mouseXPos);
        mouseY.set(mouseYPos);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative ${className}`}
        >
            {/* Spotlight effect */}
            <motion.div 
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([mx, my]) => `radial-gradient(600px circle at ${mx}px ${my}px, rgba(153,27,27,0.15), transparent 40%)`
                    )
                }}
                className="absolute inset-0 z-10 pointer-events-none rounded-[2rem]"
            />
            
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    )
}
