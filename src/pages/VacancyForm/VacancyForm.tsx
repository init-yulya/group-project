import React, { useState } from 'react';
import { Paper, TextField, Button, Container, Typography, Grid, MenuItem, Checkbox, FormControlLabel, Select } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/system';
import { Input as BaseInput, InputProps } from '@mui/base/Input';

//Вынести в отдельный файл с константами
const specializations = ["Frontend разработчик", "Backend разработчик", "Веб-дизайнер"];
const employmentTypes = ["Полная занятость", "Частичная занятость", "Удаленная работа"];
const workSchedules = ["Полный день", "Гибкий график", "Утро/вечер"];
const educationLevels = ["Высшее", "Неоконченное высшее", "Среднее", "Нет"];
const experienceLevels = ["Нет опыта", "1 год", "2 года", "3 года", "Более 3 лет"];
const locations = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Ростов-на-Дону",
    "Самара",
    "Омск",
    "Челябинск",
    "Уфа",
    // Можно добавить еще другие местоположения
];

// Список валют
const currencies = ["RUB", "USD", "EUR", "AED", "KZT", "BYR", "KGS", "UZS", "AZN", "AMD", "KGS"];
const defaultAvatar = 'https://cdn-icons-png.flaticon.com/512/456/456283.png'; // Путь к изображению аватара по умолчанию

//Вынести в отдельный файл с константами
const Input = React.forwardRef(function CustomInput(
    props: InputProps,
    ref: React.ForwardedRef<HTMLDivElement>,
) {
    return (
        <BaseInput
            slots={{
                input: InputElement,
                textarea: TextareaElement,
            }}
            {...props}
            ref={ref}
        />
    );
});


const blue = {
    300: '#5A9BFF',
};

const grey = {
    50: '#797981',
};

const InputElement = styled('input')(
    () => `
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 4px;
    color: ${grey[50]};
    border: 1px solid ${grey[50]};
    cursor: pointer;
  
    &:hover {
      opacity: .6;
    }
  
    &:focus {
      border-color: 2px solid ${blue[300]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

const TextareaElement = styled('textarea', {
    shouldForwardProp: (prop) =>
        !['ownerState', 'minRows', 'maxRows'].includes(prop.toString()),
})(() => `
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 4px;
    color: ${grey[50]};
    border: 1px solid ${grey[50]};
    cursor: pointer;

    &:hover {
        opacity: .6;
    }
  
    &:focus {
      border-color: 2px solid ${blue[300]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

const VacancyForm: React.FC = () => {
    //Переделать на Redux
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [salaryFrom, setSalaryFrom] = useState('');
    const [salaryTo, setSalaryTo] = useState('');
    const [salaryBeforeTax, setSalaryBeforeTax] = useState(false);
    const [salaryOnHand, setSalaryOnHand] = useState(false);
    const [currency, setCurrency] = useState('RUB'); // Значение по умолчанию - российский рубль
    const [location, setLocation] = useState<string | null>(null);
    const [employmentType, setEmploymentType] = useState('');
    const [workSchedule, setWorkSchedule] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [benefits, setBenefits] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [skills, setSkills] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactInformation, setContactInformation] = useState('');
    const [applicationDeadline, setApplicationDeadline] = useState<Date | null>(null);
    // const [publishedBy, setPublishedBy] = useState('');
    // const [salaryReview, setSalaryReview] = useState('');
    // const [jobDuration, setJobDuration] = useState('');
    const [avatar, setAvatar] = useState<File | null>(null);


    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setAvatar(file);
    };

    const handleRemoveAvatar = () => {
        setAvatar(null);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь отправка данных на сервер
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', border: 'none', boxShadow: 'none' }}>
                <Typography variant="h5" component="h1" gutterBottom >
                    Создание вакансии
                </Typography>
                <form onSubmit={handleFormSubmit}>
                    <Grid container spacing={2}>
                    {/* Аватар доделать */}
                        <Grid item xs={12}>
                            <label htmlFor="avatar-input" style={{ display: 'flex', justifyContent: 'flexStart', alignItems: 'center', paddingBottom: '20px', paddingTop: '20px', gap: '10px' }}>
                                <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault jss115 css-154ogbs" style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    objectFit: 'contain',
                                    backgroundColor: '#0000001a'
                                }}>
                                    {avatar ? (
                                        <img
                                            src={URL.createObjectURL(avatar)}
                                            alt="Avatar"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    ) : (
                                        <img
                                            src={defaultAvatar}
                                            alt="Default Avatar"
                                            style={{
                                                width: '24px',
                                                height: '24px'
                                            }}
                                        />
                                    )}
                                </div>
                                {avatar ? (
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        style={{ marginTop: '5px', width: '75%' }}
                                        onClick={handleRemoveAvatar}
                                    >
                                        Удалить
                                    </Button>
                                ) : (
                                    <Typography color='rgb(25, 118, 210)'>
                                        Загрузить фото
                                    </Typography>
                                )}
                            </label>
                            <input
                                id="avatar-input"
                                accept="image/png,image/jpeg,image/pjpeg"
                                className="jss117"
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleAvatarChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Название вакансии
                            </Typography>
                            <Input
                                aria-label="input"
                                //placeholder="Название вакансии"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Описание работы
                            </Typography>
                            <Input
                                aria-label="input"
                                //placeholder="Описание работы"
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                multiline
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Требования
                            </Typography>
                            <Input
                                aria-label="input"
                                //placeholder="Требования"
                                value={requirements}
                                onChange={(e) => setRequirements(e.target.value)}
                                multiline
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Специализация
                            </Typography>
                            <Select
                                fullWidth
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                                required
                            >
                                {specializations.map((spec) => (
                                    <MenuItem key={spec} value={spec}>
                                        {spec}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={4.5}>
                            <Typography>
                                Зарплата от:
                            </Typography>
                            <Input
                                aria-label="input"
                                //placeholder="Зарплата от"
                                type="number"
                                value={salaryFrom}
                                onChange={(e) => setSalaryFrom(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4.5} >
                            <Typography>
                                Зарплата до:
                            </Typography>
                            <Input
                                aria-label="input"
                                //placeholder="Зарплата до"
                                type="number"
                                value={salaryTo}
                                onChange={(e) => setSalaryTo(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography>
                                Валюта
                            </Typography>
                            <Select
                                fullWidth
                                size='small'
                                variant="outlined"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value as string)}
                                inputProps={{
                                    shrink: !!currency,
                                }}
                            >
                                {currencies.map((cur) => (
                                    <MenuItem key={cur} value={cur}>
                                        {cur}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={salaryBeforeTax}
                                        onChange={(e) => setSalaryBeforeTax(e.target.checked)}
                                    />
                                }
                                label="До вычета налогов"
                            />
                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: '0' }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={salaryOnHand}
                                        onChange={(e) => setSalaryOnHand(e.target.checked)}
                                    />
                                }
                                label="На руки"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Местоположение
                            </Typography>
                            <Autocomplete
                                //placeholder="Местоположение"
                                options={locations}
                                value={location}
                                onChange={(_, newValue) => setLocation(newValue)}
                                renderInput={(params) => <TextField {...params} fullWidth variant="outlined" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Тип занятости
                            </Typography>
                            <Select
                                //placeholder="Тип занятости"
                                fullWidth
                                variant="outlined"
                                value={employmentType}
                                onChange={(e) => setEmploymentType(e.target.value)}
                                inputProps={{ shrink: !!employmentType }}
                            >
                                <MenuItem value="">
                                    <em>Выберите тип занятости</em>
                                </MenuItem>
                                {employmentTypes.map((type) => (
                                    <MenuItem key={type} value={type}>
                                        {type}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                График работы
                            </Typography>
                            <Select
                                fullWidth
                                variant="outlined"
                                value={workSchedule}
                                onChange={(e) => setWorkSchedule(e.target.value)}
                                inputProps={{ shrink: !!workSchedule }}
                            >
                                <MenuItem value="">
                                    <em>Выберите график работы</em>
                                </MenuItem>
                                {workSchedules.map((schedule) => (
                                    <MenuItem key={schedule} value={schedule}>
                                        {schedule}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Обязанности
                            </Typography>
                            <Input
                                aria-label="input"
                                //placeholder="Обязанности"
                                value={responsibilities}
                                onChange={(e) => setResponsibilities(e.target.value)}
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Бонусы и преимущества
                            </Typography>
                            <Input
                                aria-label="input"
                                //placeholder="Бонусы и преимущества"
                                value={benefits}
                                onChange={(e) => setBenefits(e.target.value)}
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Требуемый опыт
                            </Typography>
                            <Select
                                fullWidth
                                variant="outlined"
                                value={experience}
                                onChange={(e) => setExperience(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em></em>
                                </MenuItem>
                                {experienceLevels.map((level) => (
                                    <MenuItem key={level} value={level}>
                                        {level}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Образование
                            </Typography>
                            <Select
                                fullWidth
                                variant="outlined"
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>Выберите уровень образования</em>
                                </MenuItem>
                                {educationLevels.map((level) => (
                                    <MenuItem key={level} value={level}>
                                        {level}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Ключевые навыки
                            </Typography>
                            <Input
                                aria-label="input"
                                //placeholder="Ключевые навыки"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                О компании и культура
                            </Typography>
                            <Input
                                aria-label="input"
                                //placeholder="О компании и культура"
                                value={companyDescription}
                                onChange={(e) => setCompanyDescription(e.target.value)}
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Контактная информация
                            </Typography>
                            <Input
                                aria-label="input"
                                //placeholder="Контактная информация"
                                value={contactInformation}
                                onChange={(e) => setContactInformation(e.target.value)}
                                multiline
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <Typography>
                                Опубликовано HR-менеджером
                            </Typography>
                            <TextField
                                aria-label="input"
                                placeholder="Опубликовано HR-менеджером"
                                fullWidth
                                value={publishedBy}
                                onChange={(e) => setPublishedBy(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Индексация зарплаты
                            </Typography>
                            <TextField
                                aria-label="input"
                                placeholder="Индексация зарплаты"
                                fullWidth
                                value={salaryReview}
                                onChange={(e) => setSalaryReview(e.target.value)}
                            />
                        </Grid> */}
                        <Grid item xs={12}>
                            <Typography>
                                Срок действия вакансии
                            </Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    value={applicationDeadline}
                                    onChange={(date) => setApplicationDeadline(date)}
                                    renderInput={(params) => <TextField {...params} fullWidth variant="outlined" />}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{
                            marginTop: '20px',
                            width: '100%',
                            backgroundColor: '#1D6BF3',
                            color: '#fff',
                            height: '50px'
                        }}
                    >
                        Создать вакансию
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default VacancyForm;
