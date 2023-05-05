import styles from './SignUp.module.sass';
import { useForm } from 'react-hook-form';
import { emailRegExp } from '../../utils/regExp';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../utils/api';
import { useDispatch } from 'react-redux';
import { setLoggedIn, setToken } from '../../store/authSlice';
import { useState } from 'react';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  const [isPassHidden, setIsPassHidden] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    event.preventDefault();
    registerUser(data.email, data.password)
      .then((res) => {
        dispatch(setLoggedIn());
        dispatch(setToken(res.token));
        localStorage.setItem('token', res.token);
        localStorage.setItem('logged', true);
        navigate('/');
        event.target.reset();
        reset();
      })
      .catch((err) => console.log(err));
  };

  // Обработчик клика по кнопке Показать пароль
  const handleShowPass = () => {
    setIsPassHidden(!isPassHidden);
  };

  return (
    <section className={styles.signup}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Регистрация</h1>
        <label htmlFor="name" className={styles.lable}>
          <span>Имя</span>
          <input
            className={errors.name ? styles.inputError : styles.input}
            type="text"
            id="name"
            placeholder="Ваше имя"
            maxLength="30"
            autoFocus
            {...register('name', {
              required: 'Обязательное поле',
              minLength: {
                value: 2,
                message: 'Не менее 2 символов',
              },
            })}
          />
          {errors.name && (
            <p role="alert" className={styles.error}>
              {errors.name?.message}
            </p>
          )}
        </label>

        <label htmlFor="email" className={styles.lable}>
          <span>Электронная почта</span>
          <input
            className={errors.email ? styles.inputError : styles.input}
            type="email"
            id="email"
            placeholder="example@example.ru"
            maxLength="100"
            {...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: emailRegExp,
                message: 'Введите корректный email',
              },
            })}
          />
          {errors.email && (
            <p role="alert" className={styles.error}>
              {errors.email?.message}
            </p>
          )}
        </label>

        <label htmlFor="passowrd" className={styles.lable}>
          <span>Пароль</span>
          <input
            className={errors.password ? styles.inputError : styles.input}
            id="passowrd"
            type={isPassHidden ? 'password' : 'text'}
            maxLength="30"
            {...register('password', {
              required: 'Обязательное поле',
              minLength: {
                value: 8,
                message: 'Не менее 8 символов',
              },
            })}
          />
          <button
            className={styles.showPass}
            type="button"
            onClick={handleShowPass}
          />
          {errors.password && (
            <p role="alert" className={styles.error}>
              {errors.password?.message}
            </p>
          )}
        </label>

        <label htmlFor="confirmation" className={styles.lable}>
          <span>Подтвердите пароль</span>
          <input
            className={errors.confirmation ? styles.inputError : styles.input}
            id="confirmation"
            type={isPassHidden ? 'password' : 'text'}
            maxLength="30"
            {...register('confirmation', {
              required: 'Обязательное поле',
              minLength: {
                value: 8,
                message: 'Не менее 8 символов',
              },
              validate: (val) => {
                if (watch('password') != val) {
                  return 'Пароли не совпадают';
                }
              },
            })}
          />
          <button
            className={styles.showPass}
            type="button"
            onClick={handleShowPass}
          />
          {errors.confirmation && (
            <p role="alert" className={styles.error}>
              {errors.confirmation?.message}
            </p>
          )}
        </label>

        <button className={styles.btn} type="submit" disabled={!isValid}>
          Зарегистрироваться
        </button>
        <span className={styles.span}>
          Уже зарегистрированы?{' '}
          <Link to="/sign-in" className={styles.link}>
            Войти
          </Link>{' '}
        </span>
      </form>
    </section>
  );
};
