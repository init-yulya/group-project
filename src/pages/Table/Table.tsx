import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Select,
  MenuItem,
  IconButton,
  TextField,
  Avatar,
  Grid,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Telegram from '../../images/telegram.svg';
// import Email from '../../images/email.svg';
import EditIcon from '@mui/icons-material/Edit';

interface Student {
  id: number;
  name: string;
  login: string | null;
  birthdate: string;
  course: number;
  pachkaMail: string | null;
  email: string;
  telegram: string;
  status: string;
  educationStatus: string;
}

const students: Student[] = [
  {
    id: 1,
    name: 'Иванов Иван Иванович',
    login: 'ivan1233333@ya.ru',
    birthdate: '01.01.2000',
    course: 2,
    pachkaMail: 'ivan_pachka@gmail.com',
    email: 'ivan@example.com',
    telegram: 'ivan_telegram',
    status: 'Прошёл ПТ',
    educationStatus: 'Зачислен',
  },
  {
    id: 2,
    name: 'Петров Петр Петрович',
    login: null,
    birthdate: '05.05.1999',
    course: 3,
    pachkaMail: null,
    email: 'petr@example.com',
    telegram: 'petr_telegram',
    status: 'Прешёл в ПА',
    educationStatus: 'Отчислен',
  },
  // и др.
];

const StudentTable: React.FC = () => {
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showPachkaMail, setShowPachkaMail] = useState<boolean>(false);
  const [expandedLoginId, setExpandedLoginId] = useState<number | null>(null);
  const [editingLoginId, setEditingLoginId] = useState<number | null>(null);

  const handleCheckboxChange = (id: number) => {
    if (selectedStudents.includes(id)) {
      setSelectedStudents(selectedStudents.filter((studentId) => studentId !== id));
    } else {
      setSelectedStudents([...selectedStudents, id]);
    }
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, status: newStatus } : student
    );
    // обновить состояние студентов с учетом нового статуса
  }

  const handleEditLogin = (id: number) => {
    setEditingLoginId(id);
  };

  const saveLogin = (id: number, login: string) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, login, pachkaMail: login } : student
    );
    // Здесь обновить состояние студентов в компоненте или передать данные на сервер
    setEditingLoginId(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>#</TableCell>
            <TableCell align='center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="white" stroke="#797981" />
              </svg>
            </TableCell>
            <TableCell align='center'>Студент</TableCell>
            <TableCell align='center'>Логин студента</TableCell>
            <TableCell align='center'>Почта в Пачке</TableCell>
            <TableCell align='center'>Контакты</TableCell>
            <TableCell align='center'>Статус программы трудоустройства</TableCell>
            <TableCell align='center'>Учебный статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell align='center'>
                <Checkbox
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="white" stroke="#797981" />
                  </svg>}
                  checkedIcon={<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1" width="23" height="23" rx="3.5" fill="white" stroke="#1D6BF3" />
                    <path d="M10.304 16.419L6.38501 12.5C6.19748 12.3125 5.94317 12.2072 5.67801 12.2072C5.41284 12.2072 5.15854 12.3125 4.97101 12.5C4.78354 12.6875 4.67822 12.9418 4.67822 13.207C4.67822 13.4722 4.78354 13.7265 4.97101 13.914L8.89001 17.833C9.07574 18.0188 9.29625 18.1662 9.53896 18.2667C9.78166 18.3673 10.0418 18.4191 10.3045 18.4191C10.5672 18.4191 10.8274 18.3673 11.0701 18.2667C11.3128 18.1662 11.5333 18.0188 11.719 17.833L20.971 8.58099C21.1585 8.39347 21.2638 8.13916 21.2638 7.87399C21.2638 7.60883 21.1585 7.35452 20.971 7.16699C20.7835 6.97952 20.5292 6.87421 20.264 6.87421C19.9988 6.87421 19.7445 6.97952 19.557 7.16699L10.304 16.419Z" fill="#1D6BF3" />
                  </svg>
                  }
                  checked={selectedStudents.includes(student.id)}
                  onChange={() => handleCheckboxChange(student.id)}
                />
              </TableCell>
              <TableCell>
                <Grid container alignItems="center" gap={1}>
                  <Grid item>
                    <Avatar>{student.name.charAt(0)}</Avatar>
                  </Grid>
                  <Grid item>
                    {student.name}
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell align='center'>
                {student.login === null ? (
                  <TextField
                    value={''}
                    placeholder='Добавить данные'
                    onChange={(e) => saveLogin(student.id, e.target.value)}
                    onBlur={() => setEditingLoginId(null)}
                  />
                ) : editingLoginId === student.id ? (
                  <TextField
                    value={student.login}
                    onChange={(e) => saveLogin(student.id, e.target.value)}
                    onBlur={() => setEditingLoginId(null)}
                  />
                ) : (
                  <span>
                    {showLogin ? (
                      <span>
                        {student.login.replace(/^(.)(.*)(.)@/, (_, x, y, z) => `${x}${'***'}${z}@`)} {/* какой-то костыль */}
                        <IconButton onClick={() => setShowLogin(false)}>
                          <Visibility />
                        </IconButton>
                      </span>
                    ) : (
                      <span>
                        {student.login}{' '}
                        {student.login === null && (
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                        )}
                        <IconButton onClick={() => setShowLogin(true)}>
                          <VisibilityOff />
                        </IconButton>
                      </span>
                    )}
                  </span>
                )}
              </TableCell>
              <TableCell align='center'>
                {student.pachkaMail === null ? (
                  <TextField
                    value={''}
                    placeholder='Добавить данные'
                    onChange={(e) => saveLogin(student.id, e.target.value)}
                    onBlur={() => setEditingLoginId(null)}
                  />
                ) : editingLoginId === student.id ? (
                  <TextField
                    value={student.pachkaMail}
                    onChange={(e) => saveLogin(student.id, e.target.value)}
                    onBlur={() => setEditingLoginId(null)}
                  />
                ) : (
                  <span>
                    {showPachkaMail ? (
                      <span>
                        {student.pachkaMail.replace(/^(.)(.*)(.)@/, (_, x, y, z) => `${x}${'***'}${z}@`)} {/* какой-то костыль */}
                        <IconButton onClick={() => setShowPachkaMail(false)}>
                          <Visibility />
                        </IconButton>
                      </span>
                    ) : (
                      <span>
                        {student.pachkaMail}{' '}
                        {student.pachkaMail === null && (
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                        )}
                        <IconButton onClick={() => setShowPachkaMail(true)}>
                          <VisibilityOff />
                        </IconButton>
                      </span>
                    )}
                  </span>
                )}
              </TableCell>
              <TableCell>
                <IconButton
                  component="a"
                  href={`https://t.me/${student.telegram}`}
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M22.2647 2.92773C21.98 2.69087 21.6364 2.53563 21.2704 2.47854C20.9045 2.42145 20.5299 2.46464 20.1866 2.60352L2.26566 9.83887C1.88241 9.99656 1.55618 10.2671 1.33026 10.6145C1.10434 10.9619 0.989427 11.3698 1.00076 11.7841C1.0121 12.1984 1.14916 12.5994 1.39374 12.9339C1.63832 13.2685 1.97886 13.5207 2.37016 13.6572L5.99516 14.918L8.01566 21.5996C8.04312 21.6889 8.08297 21.7738 8.13404 21.852C8.14179 21.864 8.15272 21.8729 8.16096 21.8846C8.21996 21.9669 8.29127 22.0397 8.37239 22.1004C8.39546 22.1179 8.41755 22.1344 8.44221 22.15C8.53714 22.213 8.64228 22.2591 8.75294 22.2861L8.76478 22.2871L8.77149 22.29C8.83802 22.3036 8.90574 22.3104 8.97364 22.3105C8.98017 22.3105 8.98597 22.3074 8.99244 22.3073C9.0949 22.3055 9.19647 22.2878 9.29353 22.255C9.31611 22.2473 9.33546 22.2344 9.35737 22.2251C9.42975 22.1951 9.49832 22.1567 9.56166 22.1106C9.61238 22.0678 9.66312 22.0251 9.71388 21.9824L12.416 18.999L16.4463 22.1211C16.8011 22.3973 17.2379 22.5475 17.6875 22.5478C18.1587 22.5472 18.6154 22.3847 18.9809 22.0874C19.3465 21.7901 19.5987 21.3762 19.6954 20.915L22.958 4.89844C23.032 4.53796 23.0065 4.16416 22.8844 3.81703C22.7623 3.4699 22.5481 3.16251 22.2647 2.92773ZM9.37016 15.2363C9.2315 15.3744 9.13672 15.5504 9.0977 15.7422L8.78819 17.2462L8.00413 14.6531L12.0694 12.5362L9.37016 15.2363ZM17.6719 20.54L12.9092 16.8506C12.71 16.6966 12.46 16.6233 12.2092 16.6454C11.9583 16.6675 11.725 16.7833 11.5557 16.9697L10.6903 17.9249L10.9961 16.4384L18.0791 9.35544C18.2482 9.18661 18.3512 8.9628 18.3695 8.72457C18.3878 8.48633 18.3201 8.24943 18.1788 8.05676C18.0375 7.86409 17.8319 7.72841 17.5992 7.67428C17.3664 7.62015 17.122 7.65116 16.9102 7.76169L6.74491 13.0543L3.02055 11.6914L20.999 4.499L17.6719 20.54Z" fill="#1D6BF3" />
                  </svg>
                </IconButton>
                <IconButton
                  component="a"
                  href={`mailto:${student.email}`}
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                    <path d="M22.3233 7.05962H20.8106V5.54682C20.8106 4.6223 20.0585 3.87015 19.134 3.87015H17.6212V2.35749C17.6212 1.42993 16.8687 0.680817 15.9446 0.680817H1.67667C0.754453 0.680864 0 1.42758 0 2.35749V12.2637C0 13.1882 0.752156 13.9404 1.67667 13.9404H3.18937V15.4532C3.18937 16.3777 3.94153 17.1298 4.86605 17.1298H6.37875V18.6425C6.37875 19.567 7.13091 20.3192 8.05542 20.3192H22.3234C23.2479 20.3192 24 19.567 24 18.6425V8.73624C24 7.81177 23.2478 7.05962 22.3233 7.05962ZM14.7343 2.35515L8.81063 8.16048L2.88708 2.35529L14.7343 2.35515ZM1.67442 12.2637L1.67475 3.5116L8.22464 9.93062C8.55019 10.2497 9.07116 10.2496 9.39661 9.93062L15.9465 3.51155L15.9447 12.2659L1.67442 12.2637ZM4.8638 15.4531V13.9404H15.9447C16.8692 13.9404 17.6213 13.1882 17.6213 12.2637V5.54485L19.1362 5.54532C19.1362 5.54532 19.1362 5.54583 19.1362 5.54687L19.134 15.4553L4.8638 15.4531ZM22.3233 18.6447L8.05317 18.6424V17.1297H19.134C20.0586 17.1297 20.8107 16.3776 20.8107 15.4531V8.73427L22.3256 8.7347C22.3256 8.7347 22.3257 8.73521 22.3257 8.73624L22.3233 18.6447Z" fill="#B5B5B7" />
                  </svg>
                </IconButton>
              </TableCell>
              <TableCell align='center'>
                <Select
                  style={{ width: '230px' }}
                  value={student.status}
                  onChange={(e) => handleStatusChange(student.id, e.target.value)}
                >
                  <MenuItem value="Проходит ПТ">Проходит ПТ</MenuItem>
                  <MenuItem value="Прошёл ПТ">Прошёл ПТ</MenuItem>
                  <MenuItem value="Прешёл в преакселер">Прешёл в преакселер</MenuItem>
                  <MenuItem value="Прешёл в ПА">Прешёл в ПА</MenuItem>
                  <MenuItem value="Отчислен">Отчислен</MenuItem>
                  <MenuItem value="Трудоустроился на ПТ">Трудоустроился на ПТ</MenuItem>
                </Select>
              </TableCell>
              <TableCell align='center'>{student.educationStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
