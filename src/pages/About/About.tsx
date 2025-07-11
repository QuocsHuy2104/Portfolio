import {Box, Grid, Link, Typography} from "@mui/material";
import avatar from '../../assets/images/download.jpg'
import styles from "../Home/Home.module.sass";

const About = () => {

    return (
        <Box
            minHeight="100vh"
            display="flex"
            justifyContent="center"
            alignItems='center'
            className="fade-in"
        >
            <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box borderRadius={5} overflow="hidden" sx={{textAlign: 'center'}}>
                        <img src={avatar} alt="Hinh Anh" style={{width: '100%', maxWidth: 450}}/>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{marginLeft: '65px'}}>
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: {xs: '2.5rem', md: '3.75rem'},
                                fontWeight: 'bold',
                                margin: 0,
                                wordBreak: 'break-word',
                            }}
                        >
                            About <span style={{color: '#f06292'}}>Me</span>
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: {xs: '1.25rem', md: '1.8125rem'},
                                fontWeight: 600,
                                color: 'var(--text)',
                                lineHeight: 1.7,
                                margin: '15px 0 30px',
                                wordBreak: 'break-word',
                            }}
                        >
                            Fullstack Developer
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                color: 'var(--text)',
                                lineHeight: 1.8,
                            }}
                        >
                            Hi there! I'm Vinh Ky, a Fullstack Developer with over 1 year of experience
                            building modern web and application solutions.<br/>
                            I have a solid foundation in programming languages like Java, JavaScript, PHP, and
                            Python,<br/>
                            and I specialize in frontend development with ReactJS.<br/><br/>

                            Currently, I'm expanding my skill set by learning Swift<br/>
                            and exploring various UX/UI frameworks to create user-friendly and visually appealing
                            interfaces.<br/>
                            I’m passionate about coding, eager to learn new technologies,<br/>
                            and always up for a challenge.<br/><br/>
                        </Typography>

                        <Link className={styles.btn__box} href='#'>More About Me</Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    )
}

export default About;