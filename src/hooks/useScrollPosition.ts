import {useEffect, useState} from "react";


const useScrollPosition = (threshold: number = 50): boolean => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll  = () => {
            setIsScrolled(window.scrollY > threshold);
        }

        window.addEventListener('scroll', handleScroll );
        return () => window.removeEventListener('scroll', handleScroll );
    },  [threshold]);
    return isScrolled;
}

export default useScrollPosition;