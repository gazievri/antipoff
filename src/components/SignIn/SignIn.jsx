import styles from './SignIn.module.sass';
import { useForm } from 'react-hook-form';
import { emailRegExp } from '../../utils/regExp';
import { useNavigate, Link } from 'react-router-dom';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });

  const navigate = useNavigate();

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <section className={styles.sigin}>
      <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Войти</h1>

        <label htmlFor="email" className={styles.lable}>
          <span>Электронная почта</span>
          <input
            className={errors.email ? styles.inputError : styles.input}
            type="email"
            id="email"
            placeholder="example@example.ru"
            maxLength="100"
            autoFocus
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
            type="password"
            maxLength="30"
            {...register('password', {
              required: 'Обязательное поле',
              minLength: {
                value: 8,
                message: 'Не менее 8 символов',
              },
            })}
          />
          {errors.password && (
            <p role="alert" className={styles.error}>
              {errors.password?.message}
            </p>
          )}
        </label>

        <button className={styles.btn} type="submit" disabled={!isValid}>
          Войти
        </button>
        <span className={styles.span}>
          Еще не зарегистрированы? <Link to="/sign-up" className={styles.link}>Регистрация</Link>{' '}
        </span>
      </form>
    </section>
  );
};
