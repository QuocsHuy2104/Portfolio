import {Box, Link} from "@mui/material";
import SpotlightCard from "../../components/Card/SpotlightCard/SpotlightCard.tsx";
import type {EmblaOptionsType} from "embla-carousel";
import EmblaCarousel from "../../components/Carousel/EmblaCarousel.tsx";
import '../../assets/styles/embla.css'

const OPTIONS: EmblaOptionsType = {loop: true}

const MyProject = () => {

    const my__projects = [{
        name: "Clothing shopping website",
        role: "Full Stack Developer",
        technologies: "Java Spring Boot, React, MSSQL, PayOS, Firebase, Docker",
        mainFeatures: "User authentication, Statistics, Admin Dashboard, Product & Order Management, Shopping Cart, Payment Integration",
        github: "https://github.com/yourusername/your-repo"
    },
        {
            name: 'Studio wedding dress management system',
            role: "Backend Developer",
            technologies: "Java FX, MSSQL",
            mainFeatures: "User authentication, Dashboard, Product, Order & Customer Management",
            github: ''
        },
        {
            name: "Online electronic ordering system",
            role: "Full Stack Developer",
            technologies: "React, Node.js, SQL, Firebase, Docker",
            mainFeatures: "Please wait for the next version",
            github: "https://github.com/yourusername/your-repo"
        },
        {
            name: 'IOS App',
            role: "Mobile Developer",
            technologies: "Swift, Xcode, Firebase",
            mainFeatures: "User authentication, Push notifications, In-app purchases",
            github: "https://github.com/yourusername/your-repo"
        }]
    return (
        <Box height='70vh' className='fade-in' display='flex' justifyContent='center' alignItems='center'>
            <EmblaCarousel slides={my__projects} options={OPTIONS}/>
        </Box>
    )
}

export default MyProject;