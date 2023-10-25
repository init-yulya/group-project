import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema } from '../../utils/validation/yupSchema';
import { unwrapResult } from '@reduxjs/toolkit';
import { Navigate } from 'react-router-dom';
import { isAuth } from '../../utils/isAuth';
import { useAppDispatch } from '../../store/store';
import { getUser, signinUser } from '../../store/userSlice';
import { ChangeEvent, useState } from 'react';

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.currentTarget as HTMLInputElement).value
    const fieldName = (e.currentTarget as HTMLInputElement).id
    switch (fieldName) {
      case 'login':
        setLogin(value)
        break;
      case 'password':
        setPassword(value)
        break;
    }
  }

  // Заменить на React.FormEvent<HTMLFormElement>
  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    interface LoginData {
      login: string,
      password: string
    };
    const loginData: LoginData = {
      login: login,
      password: password,
    }

    dispatch(signinUser(loginData))
      .then(unwrapResult)
      .then(() => dispatch(getUser()))
      .catch((reason) => console.log(reason));
  }
  if (isAuth()) {
    return <Navigate replace to="/home" />;
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form onSubmit={handleSubmitForm}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Войти в аккаунт
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="login"
                label="Логин"
                autoComplete="login"
                autoFocus
                value={login}
                /*error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}*/
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                error={!!errors.password}
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Вход
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Забыл пароль
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Новый пользователь?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </form>
      </Container>
    )
  }
}
