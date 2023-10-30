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
import { Navigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { schema } from '../../utils/validation/yupSchema';
import useAuth from '../../utils/useAuth';
import userLogin from '../../store/authActions';
import { useAppDispatch } from '../../store/store';

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget as HTMLInputElement;
    const fieldName = (e.currentTarget as HTMLInputElement).id;
    switch (fieldName) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  // Заменить на React.FormEvent<HTMLFormElement>
  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    interface LoginData {
      email: string,
      password: string
    }
    const loginData: LoginData = {
      email,
      password,
    };

    dispatch(userLogin(loginData)).catch((reason: string) => console.log(reason));
  };
  if (useAuth()) {
    return <Navigate replace to="/home" />;
  }
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
              id="email"
              label="email"
              autoFocus
              value={email}
              /* error={!!errors.email}
              helperText={errors.email ? `${errors.email.message}` : ''}
              {...register('email')} */
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
  );
}
