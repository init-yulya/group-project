import * as yup from 'yup'

export const errors = {
    InvalidEmail: 'Введите корректный email',
    RequiredField: 'Это поле обязательное',
    minLength: 'Минимальная длина 8 символов',
    InvalidPassword: 'Пароль должен содержать спецсимвол, однин заглавный символ, одну цифру'
}

export const schema = yup.object().shape({
    email: yup.string().email(errors.InvalidEmail).required(errors.RequiredField),
    password: yup.string().min(8, errors.minLength)
        .required(errors.RequiredField).matches(/^(?=.*[A-Z])(?=.*[0-9]).{8,40}$/, errors.InvalidPassword),
})
