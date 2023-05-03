import styles from './HeadSection.module.sass';

export const HeadSection = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {
            props.children
        }
        <button className={styles.btn}>Выход</button>
      </div>
    </section>
  );
};
