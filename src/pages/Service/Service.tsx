import ServiceCard from "../../components/Card/ServiceCard";
import {Box, Grid, Typography} from "@mui/material";

const data = [
    {
        icon: 'bx bx-code',
        title: 'Web Design UI/UX',
        description: 'I provide user interface design services for websites and mobile applications with a focus on aesthetics, usability, and user effectiveness. The interfaces are designed to optimize real user experience (UX), ensuring smooth interaction, clear layout, and a strong reflection of your brand or product identity.'
    },
    {
        icon: 'bx bx-server',
        title: 'Web/Application',
        description: 'I provide backend development services for building robust, secure, and scalable systems for websites or mobile applications. The backend is designed to handle data efficiently, support multiple users, implement clear access control, and easily integrate with other platforms through APIs.'
    },
    {
        icon: 'bx bx-bar-chart',
        title: 'Dashboard',
        description: 'I design and build real-time dashboards with interactive charts, data tables, and filtering tools to help businesses track performance, monitor key metrics, and make informed decisions quickly.\n' +
            '                        The system can connect directly to databases or APIs to automatically update data without manual input.'
    }
]

const Service = () => {
    return (
        <div className='fade-in' style={{minHeight: '90vh'}}>
            <Box textAlign='center' mb={5}>
                <Typography variant='h2' fontWeight={600}>My <span style={{color:'#f06292'}}>Service</span></Typography>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center'>

                <Grid container spacing={2}>
                    {
                        data.map((item, index) => (
                            <Grid item xs={12} md={4} lg={4}>
                                <ServiceCard
                                    key={index}
                                    captionText="Hover me to see tooltip"
                                    containerHeight="400px"
                                    containerWidth="370px"
                                    scaleOnHover={1.08}
                                    rotateAmplitude={16}
                                    showMobileWarning={false}
                                    showTooltip={true}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                />
                            </Grid>
                        ))
                    }
                </Grid>

            </Box>

        </div>
    )
}

export default Service;

