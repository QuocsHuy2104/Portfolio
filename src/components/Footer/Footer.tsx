import {
    Box,
    Grid,
    Typography,
    Link,
    Divider,
    Stack,
} from '@mui/material';
import Aurora from "../Aurora/Aurora.tsx";

const footerData = [
    {
        title: 'Product',
        links: ['Features', 'Pricing', 'Integrations', 'Changelog'],
    },
    {
        title: 'Resources',
        links: ['Documentation', 'Tutorials', 'Blog', 'Support'],
    },
    {
        title: 'Company',
        links: ['About', 'Careers', 'Contact', 'Partners'],
    },
];

const bg__glass = {
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
};

const Footer = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                px: {xs: 4, md: 12},
                py: 10,
                backgroundColor: 'var(--bg-wrap-footer)',
                borderRadius: '42px 42px 0 0',
                borderTop: 'var(--border)',
                overflow: 'hidden',
            }}

            className="fade-in"
        >
            {/* Aurora as background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    borderRadius: '42px 42px 0 0',
                    height: '100%', overflow: 'hidden',
                    zIndex: 0,
                }}
            >
                <Aurora
                    colorStops={["#d8ff29", "#00f6d3", "#9c0cfb"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </Box>

            {/* Main footer content */}
            <Box
                sx={{
                    position: 'relative',
                    borderRadius: '37px',
                    p: {xs: 4, md: 6},
                    color: 'var(--text)',
                    ...bg__glass,
                    zIndex: 1,
                    marginBottom: '95px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', md: 'row'},
                        justifyContent: 'space-between',
                        gap: 4,
                        color: 'var(--text)',
                    }}
                >
                    <Box sx={{maxWidth: 400}}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Typography fontWeight="bold">
                                Portfolio
                            </Typography>
                        </Box>
                        <Typography
                            variant="body1"
                            mb={3}
                        >
                            Graphy empowers teams to transform raw data into clear, compelling
                            visuals — making insights easier to share, understand, and act on.
                        </Typography>

                        <Stack direction="row" spacing={2}>
                            <Link href="#" sx={{ fontSize: '20px', color: 'var(--text)'}}><i className='bxl bx-facebook'></i></Link>
                            <Link href="#" sx={{ fontSize: '20px', color: 'var(--text)'}}><i className='bxl bx-tiktok'></i></Link>
                            <Link href="#" sx={{ fontSize: '20px', color: 'var(--text)'}}><i className='bxl bx-instagram'></i></Link>
                            <Link href="#" sx={{ fontSize: '20px', color: 'var(--text)'}}><i className='bxl bx-github'></i></Link>
                        </Stack>
                    </Box>

                    <Grid container spacing={4} flex={1} justifyContent='flex-end'>
                        {footerData.map((section, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                    {section.title}
                                </Typography>
                                {section.links.map((link, i) => (
                                    <Link
                                        key={i}
                                        href="#"
                                        underline="none"
                                        sx={{
                                            display: 'block',
                                            color: 'var(--text)',
                                            mb: 1,
                                            fontSize: '0.95rem',
                                            '&:hover': {color: '#f06292'},
                                        }}
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box mt={6}>
                    <Divider sx={{mb: 2, backgroundColor: 'var(--text)'}}/>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Typography variant="body2" color="var(--text)">
                            © 2025 Graphy. All rights reserved.
                        </Typography>
                        <Link href="#" underline="hover" sx={{color: 'var(--text)'}}>
                            Privacy Policy
                        </Link>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
