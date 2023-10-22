import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { schema } from '../../utils/validation/yupSchema'

export default function Login() {

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        resolver: yupResolver(schema),
    })

    //Заменить на React.FormEvent<HTMLFormElement>
    const handleSubmitForm = (event: any) => {
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
                        Войти в аккаунт
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email"
                            autoComplete="email"
                            autoFocus
                            error={!!errors.email}
                            helperText={errors.email ? `${errors.email.message}` : ''}
                            {...register('email')}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={!!errors.password}
                            helperText={errors.password ? `${errors.password.message}` : ''}
                            {...register('password')}
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
                                    {"Новый пользователь?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </form>
        </Container>
    );
}
