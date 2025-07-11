import {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import styles from './Skill.module.sass';
import {
    RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer
} from 'recharts';
import useInView from "../../hooks/useInView.ts";
import {Box, Typography} from "@mui/material";

interface SkillItem {
    icon: string;
    title: string;
    percent: string;
    color?: string;
}

interface RadarDataItem {
    skill: string;
    level: number;
}

const Skill = () => {
    const [radarChartRef, radarChartVisible] = useInView();

    const listSkills: SkillItem[] = [
        {icon: "bxl bx-java gradient-icon", title: "Java", percent: "70%"},
        {icon: "bxl bx-html5", color: "#e8622a", title: "HTML5", percent: "90%"},
        {icon: "bxl bx-css3", color: '#264de4', title: "CSS3", percent: "80%"},
        {icon: "bxl bx-javascript", color: 'yellow', title: "JavaScript", percent: "70%"},
        {icon: "bxl bx-react", color: '#0ef', title: "React", percent: "60%"},
        {icon: "bxl bx-python", title: "Python", percent: "40%"},
        {icon: "bx bx-flutter", title: "Flutter", percent: "Learning"},
        {icon: "bx bx-swift", title: "Swift", percent: "Learning"},
    ];

    const data: RadarDataItem[] = [
        {skill: 'JavaScript', level: 90},
        {skill: 'React', level: 85},
        {skill: 'HTML/CSS', level: 80},
        {skill: 'Node.js', level: 70},
        {skill: 'TypeScript', level: 75},
        {skill: 'UI/UX', level: 65},
    ];

    useEffect(() => {
        function animateProgressBar(bar: Element) {
            const percentTag = bar.querySelector(`.${styles['percent-tag']}`) as HTMLElement | null;
            const fill = bar.querySelector(`.${styles['progress-fill']}`) as HTMLElement | null;

            if (!percentTag || !fill) return;

            const percentText = percentTag.textContent?.trim() || "0%";
            const targetPercent = parseFloat(percentText.replace('%', ''));
            if (isNaN(targetPercent)) return;

            const barWidth = (bar as HTMLElement).offsetWidth;

            percentTag.textContent = "0%";
            percentTag.style.left = "0px";
            fill.style.width = "0%";

            let startTime: number | null = null;
            const duration = 1500;

            function animate(timestamp: number) {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;

                const progress = Math.min(elapsed / duration, 1);
                const currentPercent = Math.floor(progress * targetPercent);

                fill.style.width = `${progress * targetPercent}%`;
                const tagX = (progress * targetPercent / 100) * barWidth;
                percentTag.style.left = `${tagX}px`;
                percentTag.textContent = `${currentPercent}%`;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }

            requestAnimationFrame(animate);
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBar(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.5});

        document.querySelectorAll(`.${styles['progress-bar']}`).forEach(bar => {
            observer.observe(bar);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Box className='fade-in' minHeight='100vh'>
            <Box width='100%' textAlign='center' mb={9}>
                <Typography fontSize={'3.75rem'} fontWeight={600}>My <span style={{color: "#f06292"}}>Skill</span></Typography>
            </Box>

            <Box id='skill'>
                <Box>
                    <Grid container spacing={4} justifyContent="space-between" alignItems="start" mx={13}>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box width='100%' textAlign='center'>
                                <Typography variant='h4'>Technical Skills</Typography>
                            </Box>

                            <Box>
                                {
                                    listSkills
                                        .filter(skill => skill.percent !== "Learning")
                                        .map((skill, index) => (
                                            <div className={styles['skill-item']} key={index}>
                                                <i className={skill.icon} style={{color: skill.color, fontSize: '40px'}}></i>
                                                <div className={styles['skill-title']}>{skill.title}</div>
                                                <div className={styles['progress-bar']}>
                                                    <div className={styles['progress-fill']}></div>
                                                    <div className={styles['percent-tag']}>{skill.percent}</div>
                                                </div>
                                            </div>
                                        ))
                                }
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6} ref={radarChartRef}>
                            <Typography variant='h4'>Professional Skills</Typography>
                            {radarChartVisible && (
                                <ResponsiveContainer width="100%" height={600} minWidth="400px">
                                    <RadarChart data={data}>
                                        <PolarGrid/>
                                        <PolarAngleAxis dataKey="skill"/>
                                        <PolarRadiusAxis angle={30} domain={[0, 100]}/>
                                        <Radar
                                            name="Skill"
                                            dataKey="level"
                                            stroke="#1976d2"
                                            fill="#1976d2"
                                            fillOpacity={0.6}
                                            isAnimationActive={true}
                                            animationBegin={0}
                                            animationDuration={1500}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>

    );
};

export default Skill;
