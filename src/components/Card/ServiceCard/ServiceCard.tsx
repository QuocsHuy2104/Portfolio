import type {SpringOptions} from "framer-motion";
import {useRef, useState} from "react";
import {motion, useMotionValue, useSpring} from "framer-motion";
import "./TiltedCard.css";

interface ServiceCardProps {
    altText?: string;
    captionText?: string;
    containerHeight?: React.CSSProperties['height'];
    containerWidth?: React.CSSProperties['width'];
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    icon?: string;
    title?: string;
    description?: string;
}

const springValues: SpringOptions = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

const bg__glass: React.CSSProperties = {
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '1rem',
    color: 'var(--text)',
};

export default function ServiceCard({
                                        captionText = "",
                                        containerHeight = "300px",
                                        containerWidth = "100%",
                                        scaleOnHover = 1.1,
                                        rotateAmplitude = 14,
                                        showMobileWarning = true,
                                        showTooltip = true,
                                        icon = "",
                                        title = "Tilted Card",
                                        description = "Description",
                                    }: ServiceCardProps) {
    const ref = useRef<HTMLElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1,
    });

    const [lastY, setLastY] = useState<number>(0);

    function handleMouse(e: React.MouseEvent<HTMLElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <figure
            ref={ref}
            className="tilted-card-figure"
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {showMobileWarning && (
                <div className="tilted-card-mobile-alert">
                    This effect is not optimized for mobile. Check on desktop.
                </div>
            )}

            <motion.div
                className="tilted-card-inner"
                style={{
                    width: "100%",
                    height: "100%",
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                <motion.div
                    className="tilted-card-overlay"
                    style={bg__glass}
                >
                    <i className={`${icon} icon`}></i>
                    <h3 style={{fontSize: "1.25rem", marginBottom: "0.5rem"}}>{title}</h3>
                    <p style={{fontSize: "0.875rem", marginBottom: "1rem"}}>
                        {description}
                    </p>

                    <button className="button-86" role="button"
                            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}>
                        See more
                    </button>

                </motion.div>
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="tilted-card-caption"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption,
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}
