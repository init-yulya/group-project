import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { schema } from '../../utils/validation/yupSchema'

export default function Registration() {

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <form onSubmit={handleSubmit(handleSubmitForm)}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Регистрация
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Имя"
                                    autoFocus
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
                                    autoComplete="family-name"
                                    error={!!errors.lastName}
                                    helperText={errors.lastName ? `${errors.lastName.message}` : ''}
                                    {...register('lastName')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    autoComplete="email"
                                    error={!!errors.email}
                                    helperText={errors.email ? `${errors.email.message}` : ''}
                                    {...register('email')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Пароль"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    error={!!errors.password}
                                    helperText={errors.password ? `${errors.password.message}` : ''}
                                    {...register('password')}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Зарегестрироваться
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Уже есть аккаунт?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </form>
        </Container>
    );
}
