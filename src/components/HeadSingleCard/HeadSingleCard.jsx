import styles from './HeadSingleCard.module.sass'
import { useNavigate } from 'react-router-dom';

export const HeadSingleCard = ({data}) => {
    const {avatar,first_name, last_name} = data;
    const navigate = useNavigate();
    const handleClickBtn = () => {
        navigate(-1);
    }
    return(
        <div className={styles.headSingleCard}>
            <button className={styles.btnBack} onClick={() => handleClickBtn()}>Назад</button>
            <img src={avatar} alt={`Портрет ${first_name} ${last_name}`} className={styles.avatar} />
            <div className={styles.textBlock}>
                <h1 className={styles.name}>{`${first_name} ${last_name}`}</h1>
                <p className={styles.position}>Партнер</p>
            </div>
        </div>
    )
}