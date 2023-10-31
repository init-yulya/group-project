import { Link } from 'react-router-dom';
import {
  CssBaseline,
  Container,
  Avatar,
  Typography,
  TextField,
  Grid,
  Button,
  Box,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema } from '../../utils/validation/yupSchema';

const testData = {
  avatar: 'https://funart.pro/uploads/posts/2021-04/1618313148_42-funart_pro-p-kapibara-i-chelovek-zhivotnie-krasivo-foto-42.jpg',
  firstName: 'Иван',
  lastName: 'Иванов',
  email: 'good-hr@ya.ru',
  telegram: '@good-hr',
  phoneNumber: '88005553535',
  company: 'Yandex',
  password: 'secretWeShouldNotShow!1',
};

export default function Profile() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          mt: 5,
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 3,
          }}
        >
          {`Добро пожаловать, ${testData.firstName}!`}
        </Typography>
        <form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
          <Grid container columnSpacing={2} rowSpacing={5}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
            >
              <Avatar
                alt={testData.firstName}
                src={testData.avatar}
                sx={{
                  width: 150,
                  height: 150,
                  border: `3px solid ${blue[500]}`,
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={9}
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'start',
                alignItems: 'center',
              }}
            >
              <TextField
                id="avatar"
                label="Аватар"
                variant="standard"
                defaultValue={testData.avatar}
                error={!!errors.avatar}
                helperText={errors.avatar ? `${errors.avatar.message}` : ''}
                {...register('avatar')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                label="Имя"
                variant="standard"
                defaultValue={testData.firstName}
                error={!!errors.name}
                helperText={errors.name ? `${errors.name.message}` : ''}
                {...register('name')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Фамилия"
                variant="standard"
                defaultValue={testData.lastName}
                error={!!errors.lastName}
                helperText={errors.lastName ? `${errors.lastName.message}` : ''}
                {...register('lastName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="E-mail"
                variant="standard"
                defaultValue={testData.email}
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="password"
                label="Пароль"
                variant="standard"
                defaultValue={testData.password}
                error={!!errors.password}
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="company"
                label="Компания"
                variant="standard"
                defaultValue={testData.company}
                error={!!errors.company}
                helperText={errors.company ? `${errors.company.message}` : ''}
                {...register('company')}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="phone"
                label="Номер телефона"
                variant="standard"
                defaultValue={testData.phoneNumber}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber ? `${errors.phoneNumber.message}` : ''}
                {...register('phoneNumber')}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="telegram"
                label="Telegram"
                variant="standard"
                defaultValue={testData.telegram}
                error={!!errors.telegram}
                helperText={errors.telegram ? `${errors.telegram.message}` : ''}
                {...register('telegram')}
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '300px',
              m: '60px auto 0',
            }}
          >
            <Button
              type="submit"
              variant="outlined"
              onClick={() => {}}
            >
              Сохранить изменения
            </Button>
            <Button
              color="error"
              variant="text"
              onClick={() => {}}
              component={Link}
              to="/login"
            >
              Выйти
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}
