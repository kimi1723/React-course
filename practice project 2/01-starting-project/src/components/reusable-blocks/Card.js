import styles from './Card.module.css';

const Card = (props) => {
    const classes = props.classes;
    // console.log(styles.classes)

    return <div className={`${styles.card} ${styles.classes}`}>
        {props.children}
    </div>
}

export default Card;