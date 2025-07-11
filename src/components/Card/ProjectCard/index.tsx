
import {Box, Link} from "@mui/material";
import SpotlightCard from "../SpotlightCard/SpotlightCard.tsx";
import type {ProjectItem} from "../../../types/ProjectItem.ts";

const ProjectCard = ({item}: { item: ProjectItem }) => {
    return (
        <SpotlightCard>
            <h2>{item.name}</h2>
            <p style={{lineHeight: '30px'}}>{item.role}</p>
            <p style={{lineHeight: '17px'}}>
                <strong>Technologies:</strong> {item.technologies}
            </p>
            <p style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
            }}>
                <strong>Main Features:</strong> {item.mainFeatures}
            </p>
            <Box display="flex" alignItems="center" gap={1}>
                <i className="bx bxl-github" style={{fontSize: "1.2rem"}}></i>
                <Link href={item.github} underline="hover" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </Link>
            </Box>
        </SpotlightCard>
    )
}

export default ProjectCard;