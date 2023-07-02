import styles from './ErrorModal.module.css';
import Card from './reusable-blocks/Card';
import Button from './reusable-blocks/Button';

const ErrorModal = (props) => {
    const errors = [
        "Please enter a valid name and age(non-empty values)", 
        "Please enter a valid age(>0)",
    ];
    
    let errorMsg = errors[props.errorCode];

    const closeModalHandler = () => {
        props.closeErrorModal();
    }


    return <div className={styles['error-bg']}>
                <div className={styles["error-modal"]}>
                        <div className={styles.error}>
                            <p>Invalid input</p>
                        </div>
                        <Card classes='card-modal'>
                            <p className={styles["error-msg"]}>{errorMsg}</p>
                            <Button onClick={closeModalHandler}>Okay</Button>
                        </Card>
                </div>
            </div>
}

export default ErrorModal;