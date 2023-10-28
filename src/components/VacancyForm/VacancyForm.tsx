import React, { useState } from 'react';
import {
  TextField, Box, Autocomplete, Stack, SvgIcon, Button,
  Typography, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch } from 'react-redux';
import { createVacancy } from '../../store/vacancySlice';
import { Vacancy } from '../../store/vacancySlice.types';

// временный костыль, переделать
const locations = [
  'Москва',
  'Санкт-Петербург',
  'Новосибирск',
  'Екатеринбург',
  'Казань',
  'Ростов-на-Дону',
  'Самара',
  'Омск',
  'Челябинск',
  'Уфа',
  // Можно добавить еще другие местоположения
];

// временный костыль, переделать
const keySkills = [
  { title: 'Java Script' },
  { title: 'React' },
  { title: 'Figma' },
  { title: 'Photoshop' },
  { title: 'HTML5' },
  { title: 'Node.js' },
  { title: 'API' },
  { title: 'Type Script' },
  { title: 'MUI' },
  { title: 'CSS3' },
  { title: 'Адаптивная верстка' },
  // и тп.
];

// выпадающие списки переделать

export default function VacancyForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Omit<Vacancy, 'id'>>({
    opened: true,
    title: '',
    salary: '',
    duration: '',
    format: '',
    location: '',
    experience: '',
    knowledgeLevel: '',
    age: '',
    englishLevel: '',
    skills: [],
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVacancy: Omit<Vacancy, 'id'> = {
      title: formData.title,
      salary: formData.salary,
      duration: formData.duration,
      format: formData.format,
      location: formData.location,
      experience: formData.experience,
      knowledgeLevel: formData.knowledgeLevel,
      age: formData.age,
      englishLevel: formData.englishLevel,
      skills: formData.skills,
      description: formData.description,
      opened: true,
    };
    dispatch(createVacancy(newVacancy));
    setFormData({
      title: '',
      salary: '',
      duration: '',
      format: '',
      location: '',
      experience: '',
      knowledgeLevel: '',
      age: '',
      englishLevel: '',
      skills: [],
      description: '',
      opened: true,
    });
  };

  const handleClearForm = () => {
    setFormData((prevData) => ({
      ...prevData,
      title: '',
      salary: '',
      duration: '',
      format: '',
      location: '',
      experience: '',
      knowledgeLevel: '',
      age: '',
      englishLevel: '',
      skills: [] as string[],
      description: '',
    }));
  };

  const handleClearFilter = () => {
    setFormData((prevData) => ({
      ...prevData,
      salary: '',
      duration: '',
      format: '',
      location: '',
      experience: '',
      knowledgeLevel: '',
      age: '',
      englishLevel: '',
    }));
  };

  return (
    <Box maxWidth="xl" sx={{ height: '100%' }}>

      <form onSubmit={handleSubmit}>
        <Grid
          container
          xs={12}
          sx={{
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            gap: '42px',
            p: '30px 118px 0',
          }}
        >
          <Grid
            container
            xs={5}
            sx={{
              flexDirection: 'column',
              flexWrap: 'nowrap',
              gap: '20px',
              p: '0',
            }}
          >
            <Grid sx={{ p: 0, mb: '20px' }}>
              <Typography variant="body1" sx={{ marginBottom: '4px', fontWeight: '500' }}>
                Вакансия
              </Typography>
              <TextField
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                size="small"
                placeholder="Введите название должности"
                required
              />
            </Grid>

            <Grid
              container
              xs
              sx={{
                flexDirection: 'column',
                backgroundColor: '#F1F6FF',
                borderRadius: '12px',
                padding: '32px 40px',
                gap: '20px',
              }}
            >
              <Grid container xs justifyContent="space-between" alignItems="center">
                <Grid>
                  <Typography variant="body1" sx={{ fontWeight: '500' }}>Фильтры</Typography>
                </Grid>
                <Grid>
                  <Button
                    type="button"
                    size="small"
                    onClick={handleClearFilter}
                    sx={{
                      color: '#797981',
                      fontSize: '14px',
                    }}
                  >
                    <SvgIcon sx={{ mr: '4px', width: '16px', height: '16px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14 2.66667H11.9333C11.7786 1.91428 11.3692 1.23823 10.7741 0.752479C10.1791 0.266727 9.43478 0.000969683 8.66665 0L7.33331 0C6.56518 0.000969683 5.82086 0.266727 5.22581 0.752479C4.63077 1.23823 4.22138 1.91428 4.06665 2.66667H1.99998C1.82317 2.66667 1.6536 2.7369 1.52858 2.86193C1.40355 2.98695 1.33331 3.15652 1.33331 3.33333C1.33331 3.51014 1.40355 3.67971 1.52858 3.80474C1.6536 3.92976 1.82317 4 1.99998 4H2.66665V12.6667C2.6677 13.5504 3.01923 14.3976 3.64413 15.0225C4.26902 15.6474 5.11625 15.9989 5.99998 16H9.99998C10.8837 15.9989 11.7309 15.6474 12.3558 15.0225C12.9807 14.3976 13.3323 13.5504 13.3333 12.6667V4H14C14.1768 4 14.3464 3.92976 14.4714 3.80474C14.5964 3.67971 14.6666 3.51014 14.6666 3.33333C14.6666 3.15652 14.5964 2.98695 14.4714 2.86193C14.3464 2.7369 14.1768 2.66667 14 2.66667ZM7.33331 1.33333H8.66665C9.08016 1.33384 9.4834 1.46225 9.82106 1.70096C10.1587 1.93967 10.4143 2.27699 10.5526 2.66667H5.44731C5.5857 2.27699 5.84125 1.93967 6.1789 1.70096C6.51656 1.46225 6.9198 1.33384 7.33331 1.33333ZM12 12.6667C12 13.1971 11.7893 13.7058 11.4142 14.0809C11.0391 14.456 10.5304 14.6667 9.99998 14.6667H5.99998C5.46955 14.6667 4.96084 14.456 4.58577 14.0809C4.21069 13.7058 3.99998 13.1971 3.99998 12.6667V4H12V12.6667Z" fill="#797981" />
                        <path d="M6.66667 12.0001C6.84348 12.0001 7.01305 11.9298 7.13807 11.8048C7.2631 11.6798 7.33333 11.5102 7.33333 11.3334V7.33341C7.33333 7.1566 7.2631 6.98703 7.13807 6.86201C7.01305 6.73699 6.84348 6.66675 6.66667 6.66675C6.48986 6.66675 6.32029 6.73699 6.19526 6.86201C6.07024 6.98703 6 7.1566 6 7.33341V11.3334C6 11.5102 6.07024 11.6798 6.19526 11.8048C6.32029 11.9298 6.48986 12.0001 6.66667 12.0001Z" fill="#797981" />
                        <path d="M9.33335 12.0001C9.51016 12.0001 9.67973 11.9298 9.80476 11.8048C9.92978 11.6798 10 11.5102 10 11.3334V7.33341C10 7.1566 9.92978 6.98703 9.80476 6.86201C9.67973 6.73699 9.51016 6.66675 9.33335 6.66675C9.15654 6.66675 8.98697 6.73699 8.86195 6.86201C8.73693 6.98703 8.66669 7.1566 8.66669 7.33341V11.3334C8.66669 11.5102 8.73693 11.6798 8.86195 11.8048C8.98697 11.9298 9.15654 12.0001 9.33335 12.0001Z" fill="#797981" />
                      </svg>
                    </SvgIcon>
                    Очистить фильтры
                  </Button>
                </Grid>
              </Grid>
              <Grid padding={0}>
                <Typography variant="caption" sx={{ marginBottom: '4px' }}>
                  Зарплата или вилка
                </Typography>
                <TextField
                  type="text"
                  name="salary"
                  fullWidth
                  size="small"
                  placeholder="от"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid padding={0}>
                <Typography variant="caption">
                  Срок поиска вакансии
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    {/* добавить занчени value */}
                    <DatePicker format="DD.MM.YYYY" sx={{ width: '100%' }} />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>

              <Grid padding={0}>
                <Typography variant="caption" sx={{ marginBottom: '4px' }}>
                  Локация
                </Typography>
                <Autocomplete
                  options={locations}
                  // name="location"
                  value={formData.location}
                  onChange={(_, newValue) => setLocation(newValue)}
                  renderInput={(params) => <TextField {...params} fullWidth size="small" placeholder="Город" />}
                />
              </Grid>

              <Grid padding={0}>
                <Typography variant="caption" sx={{ marginBottom: '4px' }}>
                  Формат работы
                </Typography>
                <Select
                  name="format"
                  value={formData.format}
                  onChange={handleSelectChange}
                  fullWidth
                  size="small"
                  required
                >
                  <MenuItem value="Полный день">Полный день</MenuItem>
                  <MenuItem value="Частичная занятость">Частичная занятость</MenuItem>
                  <MenuItem value="Удаленная работа">Удаленная работа</MenuItem>
                </Select>
              </Grid>

              <Grid
                container
                sx={{
                  padding: '0',
                  gap: '20px',
                }}
              >
                <Grid xs>
                  <Typography variant="caption" sx={{ marginBottom: '4px' }}>
                    Опыт
                  </Typography>
                  <Select
                    name="experience"
                    value={formData.experience}
                    onChange={handleSelectChange}
                    fullWidth
                    size="small"
                    required
                  >
                    <MenuItem value="Нет опыта">Нет опыта</MenuItem>
                    <MenuItem value="1 год">1 год</MenuItem>
                    <MenuItem value="2 года">2 года</MenuItem>
                    <MenuItem value="3 года">3 года</MenuItem>
                    <MenuItem value="Более 3 лет">Более 3 лет</MenuItem>
                  </Select>
                </Grid>
                <Grid xs>
                  <Typography variant="caption" sx={{ marginBottom: '4px' }}>
                    Уровень
                  </Typography>
                  <Select
                    name="knowledgeLevel"
                    value={formData.knowledgeLevel}
                    onChange={handleSelectChange}
                    fullWidth
                    size="small"
                    required
                  >
                    <MenuItem value="Junior">Junior</MenuItem>
                    <MenuItem value="Junior/Midlle">Junior/Midlle</MenuItem>
                    <MenuItem value="Midlle">Midlle</MenuItem>
                    <MenuItem value="Midlle/Senior">Midlle/Senior</MenuItem>
                    <MenuItem value="Senior">Senior</MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Grid
                container
                sx={{
                  padding: '0',
                  gap: '20px',
                }}
              >
                <Grid xs>
                  <Typography variant="caption" sx={{ marginBottom: '4px' }}>
                    Возраст
                  </Typography>
                  <Select
                    name="age"
                    value={formData.age}
                    onChange={handleSelectChange}
                    fullWidth
                    size="small"
                    required
                  >
                    <MenuItem value="18-30">18-30</MenuItem>
                    <MenuItem value="30-45">30-45</MenuItem>
                    <MenuItem value="46-60">46-60</MenuItem>
                  </Select>
                </Grid>
                <Grid xs>
                  <Typography variant="caption" sx={{ marginBottom: '4px' }}>
                    Знание английского
                  </Typography>
                  <Select
                    name="englishLevel"
                    value={formData.englishLevel}
                    onChange={handleSelectChange}
                    fullWidth
                    size="small"
                    required
                  >
                    <MenuItem value="A1">A1</MenuItem>
                    <MenuItem value="A2">A2</MenuItem>
                    <MenuItem value="B1">B1</MenuItem>
                    <MenuItem value="B2">B2</MenuItem>
                    <MenuItem value="C1">C1</MenuItem>
                    <MenuItem value="C2">C2</MenuItem>
                  </Select>

                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container xs={7} sx={{ justifyContent: 'flex-start', flexDirection: 'column', p: 0, gap: '20px' }}>

            <Grid
              container
              sx={{
                justifyContent: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography variant="body1" sx={{ marginBottom: '4px', fontWeight: '500' }}>
                Описание
              </Typography>
              <Grid
                container
                sx={{
                  gap: '40px',
                  justifyContent: 'space-between',
                  flexWrap: 'nowrap',
                }}
              >
                <Button
                  type="button"
                  // variant="unstyled"
                  fullWidth
                  // size="small"
                  sx={{
                    height: '40px',
                    backgroundColor: '#fff',
                    color: '#1D6BF3',
                    border: '1px solid #1D6BF3',
                    boxShadow: 'none',
                    borderRadius: '6px',
                  }}
                >
                  Из шаблонов Яндекс Практикума
                </Button>
                <Button
                  type="button"
                  // variant="unstyled"
                  fullWidth
                  // size="small"
                  sx={{
                    height: '40px',
                    backgroundColor: '#fff',
                    color: '#1D6BF3',
                    border: '1px solid #1D6BF3',
                    boxShadow: 'none',
                    borderRadius: '6px',
                  }}
                >
                  <SvgIcon sx={{ m: '12px 20px 12px 23px', width: '20px', height: '20px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                      <path d="M7.125 0C6.69402 0 6.2807 0.171205 5.97595 0.475951C5.67121 0.780698 5.5 1.19402 5.5 1.625V4.625C5.5 4.72446 5.46049 4.81984 5.39016 4.89016C5.31984 4.96049 5.22446 5 5.125 5H2.125C1.69402 5 1.2807 5.17121 0.975951 5.47595C0.671205 5.7807 0.5 6.19402 0.5 6.625V9.625C0.5 9.8384 0.542032 10.0497 0.623696 10.2469C0.70536 10.444 0.825056 10.6232 0.975951 10.774C1.12685 10.9249 1.30599 11.0446 1.50314 11.1263C1.70029 11.208 1.9116 11.25 2.125 11.25H10.125C10.3384 11.25 10.5497 11.208 10.7469 11.1263C10.944 11.0446 11.1232 10.9249 11.274 10.774C11.4249 10.6232 11.5446 10.444 11.6263 10.2469C11.708 10.0497 11.75 9.8384 11.75 9.625V6.625C11.75 6.52554 11.7895 6.43016 11.8598 6.35983C11.9302 6.28951 12.0255 6.25 12.125 6.25H15.125C15.556 6.25 15.9693 6.07879 16.274 5.77405C16.5788 5.4693 16.75 5.05598 16.75 4.625V1.625C16.75 1.19402 16.5788 0.780698 16.274 0.475951C15.9693 0.171205 15.556 0 15.125 0H7.125ZM15.125 5H11.75V1.25H15.125C15.2245 1.25 15.3198 1.28951 15.3902 1.35983C15.4605 1.43016 15.5 1.52554 15.5 1.625V4.625C15.5 4.72446 15.4605 4.81984 15.3902 4.89016C15.3198 4.96049 15.2245 5 15.125 5ZM10.5 5H6.75V1.625C6.75 1.52554 6.78951 1.43016 6.85983 1.35983C6.93016 1.28951 7.02554 1.25 7.125 1.25H10.5V5ZM5.5 6.25V10H2.125C2.02554 10 1.93016 9.96049 1.85983 9.89017C1.78951 9.81984 1.75 9.72446 1.75 9.625V6.625C1.75 6.52554 1.78951 6.43016 1.85983 6.35983C1.93016 6.28951 2.02554 6.25 2.125 6.25H5.5ZM6.75 6.25H10.5V9.625C10.5 9.72446 10.4605 9.81984 10.3902 9.89017C10.3198 9.96049 10.2245 10 10.125 10H6.75V6.25ZM15.875 8.75H18.875C19.0884 8.75 19.2997 8.79203 19.4969 8.8737C19.694 8.95536 19.8732 9.07506 20.024 9.22595C20.1749 9.37685 20.2946 9.55599 20.3763 9.75314C20.458 9.95029 20.5 10.1616 20.5 10.375V18.375C20.5 18.5884 20.458 18.7997 20.3763 18.9969C20.2946 19.194 20.1749 19.3732 20.024 19.524C19.8732 19.6749 19.694 19.7946 19.4969 19.8763C19.2997 19.958 19.0884 20 18.875 20H5.125C4.9116 20 4.70029 19.958 4.50314 19.8763C4.30599 19.7946 4.12685 19.6749 3.97595 19.524C3.82506 19.3732 3.70536 19.194 3.6237 18.9969C3.54203 18.7997 3.5 18.5884 3.5 18.375V15.375C3.5 14.944 3.67121 14.5307 3.97595 14.226C4.2807 13.9212 4.69402 13.75 5.125 13.75H13.875C13.9745 13.75 14.0698 13.7105 14.1402 13.6402C14.2105 13.5698 14.25 13.4745 14.25 13.375V10.375C14.25 9.94402 14.4212 9.5307 14.726 9.22595C15.0307 8.9212 15.444 8.75 15.875 8.75ZM14.25 18.75V15H10.25V18.75H14.25ZM19.25 15H15.5V18.75H18.875C18.9745 18.75 19.0698 18.7105 19.1402 18.6402C19.2105 18.5698 19.25 18.4745 19.25 18.375V15ZM15.5 13.75H19.25V10.375C19.25 10.2755 19.2105 10.1802 19.1402 10.1098C19.0698 10.0395 18.9745 10 18.875 10H15.875C15.7755 10 15.6802 10.0395 15.6098 10.1098C15.5395 10.1802 15.5 10.2755 15.5 10.375V13.75ZM9 15H5.125C5.02554 15 4.93016 15.0395 4.85984 15.1098C4.78951 15.1802 4.75 15.2755 4.75 15.375V18.375C4.75 18.582 4.918 18.75 5.125 18.75H9V15Z" fill="#1D6BF3" />
                    </svg>
                  </SvgIcon>
                  Сгенерировать нейросетью
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              xs
              sx={{
                padding: '0',
                gap: '20px',
                alignItems: 'flex-end',
              }}
            >
              <Grid xs={12}>
                <Typography variant="caption" sx={{ marginBottom: '4px' }}>
                  Технологии, ключевые слова
                </Typography>
                <Stack spacing={3}>
                  <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={keySkills}
                    getOptionLabel={(option) => option.title}
                    // defaultValue={[keySkills[1]]}
                    value={formData.skills}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        rows={2}
                        multiline
                      />
                    )}
                  />
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Typography variant="caption" sx={{ marginBottom: '4px' }}>
                  Описание работы
                </Typography>
                <TextField
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={20}
                  fullWidth
                  multiline
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: '31px 118px 0',
          gap: '40px',
        }}
        >
          <Button
            type="reset"
            variant="contained"
            color="primary"
            onClick={handleClearForm}
            sx={{
              width: '250px',
              backgroundColor: '#fff',
              color: '#1D6BF3',
              height: '50px',
              border: '1px solid #1D6BF3',
              boxShadow: 'none',
              borderRadius: '6px',
            }}
          >
            Очистить
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#1D6BF3',
              width: '390px',
              color: '#fff',
              height: '50px',
              boxShadow: 'none',
              borderRadius: '6px',
            }}
          >
            Опубликовать вакансию
          </Button>
        </Box>

      </form>

    </Box>
  );
}
