import styles from './Header.module.sass'
import {Box, Link} from "@mui/material";
import useScrollPosition from "../../hooks/useScrollPosition.ts";


const Header = () => {

    const isScrolled = useScrollPosition(50)

    return (
        <div className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box>
                    <Link href='#' className={styles.logo}>Portfolio</Link>
                </Box>

                <Box>
                    <Link href={'#Home'} className={`${styles.nav__link} ${styles.animated}`} style={{ '--i': 1 } as React.CSSProperties}>Home</Link>
                    <Link href={'#About'} className={`${styles.nav__link} ${styles.animated}`} style={{ '--i': 2 } as React.CSSProperties}>About</Link>
                    <Link href={'#Service'} className={`${styles.nav__link} ${styles.animated}`} style={{ '--i': 3 } as React.CSSProperties}>Service</Link>
                    <Link href={'#Skill'} className={`${styles.nav__link} ${styles.animated}`} style={{ '--i': 4 } as React.CSSProperties}>Skill</Link>
                    <Link href={'#Contact'} className={`${styles.nav__link} ${styles.animated}`} style={{ '--i': 5 } as React.CSSProperties}>Contact Me</Link>
                </Box>
            </Box>
        </div>
    )
}

export default Header;
