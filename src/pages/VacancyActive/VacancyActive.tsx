import React from 'react';
import { Container, Box, Typography, Card, CardActions, CardContent, Button } from '@mui/material';
import { Link } from "react-router-dom";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

const VacancyActive: React.FC = () => {
    return (
        <Container maxWidth='xl' sx={{ p: '28px 0 71px' }}>

            {/* Вынести отдельным компонентом */}
            <Box sx={{
                display: 'flex',
                gap: '49px',
                width: '100%',
                padding: '0 94px 30px',
            }}
            >
                <Link style={{ textDecoration: 'none', fontSize: '24px', color: '#1A1B22' }} to={{ pathname: '/vacancy' }} >Создать вакансию</Link>
                <Link style={{ textDecoration: 'none', fontSize: '24px', color: '#1A1B22' }} to={{ pathname: '/vacancy/active' }} >Активные</Link>
                <Link style={{ textDecoration: 'none', fontSize: '24px', color: '#1A1B22' }} to={{ pathname: '/vacancy/archive' }} >Архив</Link>
            </Box>

            {/* Вынести отдельным компонентом */}
            <Box sx={{ width: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </Container>
    );
};

export default VacancyActive;
