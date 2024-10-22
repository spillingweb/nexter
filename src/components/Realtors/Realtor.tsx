import styles from './Realtor.module.scss';
import { RealtorType } from '../../data/realtors';
import Heading from '../UI/Heading';

const Realtor = ({img, name, housesSold}: RealtorType) => {
    return (
        <li className={styles.realtor}>
            <img src={img} alt={name} />
            <div className={styles.info}>
                <Heading level={4} color='light'>{name}</Heading>
                <p>{housesSold} houses sold</p>
            </div>
        </li>
    )
}

export default Realtor;