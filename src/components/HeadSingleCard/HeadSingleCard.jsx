import styles from './HeadSingleCard.module.sass'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '../../utils/useMediaQuery';

export const HeadSingleCard = ({data}) => {
    const {avatar,first_name, last_name} = data;
    const navigate = useNavigate();
    const isTablet = useMediaQuery('(max-width: 900px)');
    const handleClickBtn = () => {
        navigate(-1);
    }
    return(
        <div className={styles.headSingleCard}>
            {
                !isTablet ? <button className={styles.btnBack} onClick={() => handleClickBtn()}>Назад</button> : <button className={styles.btnTablet}/>
            }
            
            <img src={avatar} alt={`Портрет ${first_name} ${last_name}`} className={styles.avatar} />
            <div className={styles.textBlock}>
                <h1 className={styles.name}>{`${first_name} ${last_name}`}</h1>
                <p className={styles.position}>Партнер</p>
            </div>
        </div>
    )
}