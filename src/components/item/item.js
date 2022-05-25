import styles from './item.module.scss';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Item(props) {

    const locale = "fi-Fi";
    const paymentDate = new Date(props.data.paymentDate).toLocaleDateString(locale);
    const numberFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' });
    const amount = numberFormat.format(props.data.amount);

    let average;
    let period;
    if (props.data.periodStart && props.data.periodEnd) {
        const periodStart = new Date(props.data.periodStart);
        const periodEnd = new Date(props.data.periodEnd);
        period = periodStart.toLocaleDateString(locale) + " - " + periodEnd.toLocaleDateString(locale);
        const days = (periodEnd - periodStart) / (1000*60*60*24);
        average = numberFormat.format(props.data.amount / days * 30);
    }

    return (
        <div className={styles.item}>
            <div className={styles.item_data}>
                <div className={styles.item_type}>{props.data.type}</div>
                <div className={styles.item_amount}>{amount}</div>
                <div className={styles.item_date}>{paymentDate}</div>
                <div className={styles.item_timespan}>{period}</div>
                <div className={styles.item_receiver}>{props.data.receiver}</div>
                <div className={styles.item_average}>{ average ? average + "/kk" : ""}</div>
            </div>
            <div className={styles.item_edit}>
                <Link to={"/edit/"+props.data.id}><AiOutlineRight /></Link>
            </div>
        </div>
    );
}

export default Item;