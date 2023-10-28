/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vacancy, VacancyState } from './vacancySlice.types';

const initialState: VacancyState = {
  activeVacancies: [],
  archivedVacancies: [],
  fullVacancyId: null,
};

const vacancy = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    createVacancy: (state, action: PayloadAction<Omit<Vacancy, 'id'>>) => {
      const newId = state.activeVacancies.length + 1;
      const newVacancy: Vacancy = { id: newId, ...action.payload, opened: false };
      state.activeVacancies.push(newVacancy);
    },
    openVacancy: (state, action: PayloadAction<number>) => {
      const vacancyToOpen = state.activeVacancies.find((v) => v.id === action.payload);
      if (vacancyToOpen) {
        vacancyToOpen.opened = true;
      }
    },
    openFullVacancy: (state, action: PayloadAction<number>) => {
      state.fullVacancyId = action.payload;
    },
    deleteVacancy: (state, action: PayloadAction<number>) => {
      state.activeVacancies = state.activeVacancies.filter((v) => v.id !== action.payload);
    },
    editVacancy: (state, action: PayloadAction<Vacancy>) => {
      const index = state.activeVacancies.findIndex((v) => v.id === action.payload.id);
      if (index !== -1) {
        state.activeVacancies[index] = action.payload;
      }
    },
    restoreVacancy: (state, action: PayloadAction<number>) => {
      const archivedVacancy = state.archivedVacancies.find((v) => v.id === action.payload);
      if (archivedVacancy) {
        state.archivedVacancies = state.archivedVacancies.filter((v) => v.id !== action.payload);
        state.activeVacancies.push(archivedVacancy);
      }
    },
  },
});

export const {
  createVacancy,
  openVacancy,
  openFullVacancy,
  deleteVacancy,
  editVacancy,
  restoreVacancy,
} = vacancy.actions;

export default vacancy.reducer;
