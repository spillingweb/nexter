import { DUMMY_HOMES } from '../../data/homes';
import HomeItem from './HomeItem';
import styles from './Homes.module.scss';

const Homes = () => {
    return (
        <section id="homes" className={styles.homes}>
            {DUMMY_HOMES.map(home => (
                <HomeItem key={home.id} home={home} />
            ))}
        </section>
    )
}

export default Homes;