import React from 'react';
import {
  Card, CardContent, CardActions, Button, Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { openVacancy, deleteVacancy, editVacancy } from '../../store/vacancySlice';
import { Vacancy } from '../../store/vacancySlice.types';

interface VacancyCardProps {
  vacancy: Vacancy;
}

// eslint-disable-next-line react/function-component-definition
const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
  const dispatch = useDispatch();

  const handleOpenVacancy = () => {
    dispatch(openVacancy(vacancy.id));
  };

  const handleDeleteVacancy = () => {
    dispatch(deleteVacancy(vacancy.id));
  };

  // const handleEditVacancy = () => {
  //   dispatch(editVacancy(vacancy.id));
  // };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{vacancy.title || 'Designer'}</Typography>
        <Typography>
          Зарплата:
          {vacancy.salary || '100000'}
        </Typography>
        <Typography>
          Формат работы:
          {vacancy.format || 'office'}
        </Typography>
        <Typography>
          Локация:
          {vacancy.location || 'Moscow'}
        </Typography>
        <Typography>
          Уровень знаний:
          {vacancy.knowledgeLevel || 'Jun'}
        </Typography>
        <Typography>
          Уровень английского:
          {vacancy.englishLevel || 'B1'}
        </Typography>
        <Typography>
          Ключевые навыки:
          {vacancy.skills.join(', ') || ''}
        </Typography>
        {/* <Typography>
          Дата создания:
          {vacancy.createdDate || '10.10'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button onClick={() => handleOpenVacancy(vacancy.id)}>Подробнее</Button>
        <Button onClick={() => handleDeleteVacancy(vacancy.id)}>Удалить</Button>
        {/* <Button onClick={() => handleEditVacancy({ ...vacancy, title: 'Новое название' })}>Редактировать</Button> */}
      </CardActions>
    </Card>
  );
};

export default VacancyCard;
