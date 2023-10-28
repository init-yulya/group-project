import React from 'react';
import { Box } from '@mui/material';
import NavigationMenu from '../../components/navigationMenu/NavigationMenu';
// import VacancyForm from '../../components/VacancyForm/VacancyForm';

export default function ArchivedVacancy() {
  return (
    <Box maxWidth="xl" sx={{ p: '0 0 71px', height: '100%' }}>
      <NavigationMenu />
      {/* <VacancyForm /> */}
    </Box>
  );
}
