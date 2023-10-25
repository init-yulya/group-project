import React from 'react';
import {
  CssBaseline,
  Container,
  Avatar,
  Typography,
} from '@mui/material';

const data = {
  avatar: 'https://funart.pro/uploads/posts/2021-04/1618313148_42-funart_pro-p-kapibara-i-chelovek-zhivotnie-krasivo-foto-42.jpg',
  name: 'Добрый',
  surname: 'HR',
  email: 'good-hr@ya.ru',
  telegram: '@good-hr',
  phoneNumber: '88005553535',
  company: 'Yandex',
};

export default function Profile() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h1"
        >
          {`Добро пожаловать, ${data.name}!`}
        </Typography>
        <Avatar
          alt={data.name}
          src={data.avatar}
          sx={{
            width: 150,
            height: 150,
          }}
          variant="rounded"
        />
      </Container>
    </>
  );
}
