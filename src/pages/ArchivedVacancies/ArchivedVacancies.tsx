import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, TextField, Grid, Button, Typography, Box,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { restoreVacancy } from '../../store/vacancySlice';
import VacancyCard from '../../components/VacancyCard/VacancyCard';
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
// import { Vacancy } from '../../store/vacancySlice.types';

export default function ArchivedVacanciesPage() {
  const dispatch = useDispatch();
  const archivedVacancies = useSelector((state) => state.vacancy.archivedVacancies);

  const [searchText, setSearchText] = useState('');
  const [newDuration, setNewDuration] = useState('');

  const dispatchRestoreVacancy = (vacancyId: number) => {
    dispatch(restoreVacancy(vacancyId));
  };

  return (
    <Box maxWidth="xl" sx={{ height: '100%' }}>
      <NavigationMenu />
      <Box sx={{ p: '30px 118px 0' }}>
        <Typography marginBottom="8px" fontWeight={500}>Вакансия</Typography>
        <TextField
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{ maxWidth: '468px', borderRadius: '4px' }}
          fullWidth
          placeholder="Введите название должности"
        />
        {archivedVacancies.length === 0 ? (
          <Box sx={{
            width: '179px',
            height: '50vh',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
          >
            <Typography variant="h3">Пока здесь пусто</Typography>
            <Link style={{ textDecoration: 'none', color: '#5A9BFF', fontSize: '20px', fontFamily: 'YS Display' }} to="/vacancy">Создать вакансию</Link>
          </Box>
        ) : (
          <Grid container spacing={2}>
            {archivedVacancies
              .map((vacancy) => (
                <Grid item key={vacancy.id} xs={12} sm={6} md={4}>
                  <VacancyCard
                    vacancy={vacancy}
                    onRestore={() => dispatchRestoreVacancy(vacancy.id)}
                    onDelete={handleDeleteVacancy}
                    onViewDetails={handleViewDetails}
                  />
                  <TextField
                    label="Новый срок действия (дни)"
                    type="number"
                    fullWidth
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                  />
                  <Button
                    onClick={() => handleRepublishVacancy(vacancy)}
                    variant="contained"
                    color="primary"
                  >
                    Опубликовать заново
                  </Button>
                </Grid>
              ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
