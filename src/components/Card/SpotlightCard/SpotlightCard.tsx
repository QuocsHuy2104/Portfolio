import {useRef} from "react";
import type {ReactNode, MouseEvent} from "react";

import styles from "./SpotlightCard.module.sass";

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
    spotlightColor?: string;
}

const SpotlightCard = ({
                           children,
                           className = "",
                           spotlightColor = "",
                       }: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`${styles.card__spotlight} ${className}`}

        >
            {children}
        </div>
    );
};

export default SpotlightCard;
