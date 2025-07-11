import ImageCustom from "../../components/Image";
import avatar from "../../assets/images/download.jpg"
import {Box, Grid, Link} from "@mui/material";
import {useEffect} from "react";
import Typed from 'typed.js';
import styles from './Home.module.sass'
import * as React from "react";


const Home = () => {

    useEffect(() => {
        const typed = new Typed('#text', {
            strings: ['Java Developer', 'Web Developer', 'Mobile Learning'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        })

        return () => {
            typed.destroy();
        };
    }, [])

    const sci = [
        { icon: 'bxl bx-facebook', href: '#', delay: 5 },
        { icon: 'bxl bx-tiktok', href: '#', delay: 6 },
        { icon: 'bxl bx-instagram', href: '#', delay: 7 },
        { icon: 'bxl bx-github', href: '#', delay: 8 },
    ]

    return (
        <>
            <Box height='85vh' display='flex' justifyContent='center' alignItems='center' className='fade-in'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} alignContent={"center"} className={styles.home__content}>
                        <h3>Hello, It's Me</h3>
                        <h1>Dang Vinh Ky</h1>
                        <h3>
                            And I'm a <span id='text'></span>
                        </h3>
                        <p>I'm a fullstack developer with extensive for over 1 year.
                            <br/> expertise in building web applications using React, Node.js, Java Spring Boot, Python
                            and
                            Data base....
                        </p>

                        <Box className={styles.home__sci}>
                            {sci.map(({ icon, href, delay }) => (
                                <a key={icon} href={href} style={{ '--i': delay } as React.CSSProperties}>
                                    <i className={`bx ${icon}`}></i>
                                </a>
                            ))}
                        </Box>

                        <Link className={styles.btn__box} href='#'>More About Me</Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <ImageCustom url={avatar} alt={"Portfolio"}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home;