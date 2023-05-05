import styles from './HeadCards.module.sass';

export const HeadCards = () => {
  return (
    <div className={styles.headCards}>
      <h1 className={styles.title}>Наша команда</h1>
      <h2 className={styles.subtitle}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.{' '}
      </h2>
    </div>
  );
};
