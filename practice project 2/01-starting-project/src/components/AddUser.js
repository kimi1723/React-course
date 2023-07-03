import {useState} from 'react';
import styles from './AddUser.module.css';
import Card from './reusable-blocks/Card';
import Button from './reusable-blocks/Button';

const AddUser = (props) => {
    const [users, setUsers] = useState([]);
    const [usernameInputValue, setUsernameInputValue] = useState('');
    const [ageInputValue, setAgeInputValue] = useState('');
    let tab = [], isEmpty, errorCode, isProperAge;

    const usernameChangeHandler = e => {
        setUsernameInputValue(e.target.value);
    }

    const ageChangeHandler = e => {
        setAgeInputValue(e.target.value);
    }

    if(ageInputValue.trim().length === 0 || usernameInputValue.trim().length === 0) isEmpty = true;
    if(ageInputValue > 0) isProperAge = true;

    const submitHandler = (e) => {
        e.preventDefault();

        if(isEmpty) {
            errorCode = 0;
            return props.handleError(errorCode);
        } else if(!isProperAge) {
            errorCode = 1;
            return props.handleError(errorCode);
        } else {
            errorCode = 200;
            props.handleError(errorCode)
        }

        tab.push(...users, {
            key: Math.random().toString(),
            username:usernameInputValue,
                    age:ageInputValue
        })

    //     setUsers(prevUsers => 
    //          [...prevUsers,
    //             {
    //                 username: usernameInputValue,
    //                 age: ageInputValue,
    //             }
    //         ] 
    //    );

          setUsers(tab);


        props.sendData(tab);
        setUsernameInputValue('');
        setAgeInputValue('');
    }

    return <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <label htmlFor="username" className={styles.label}>Username</label>
                <input type="text" className={styles.input} id="username" onChange={usernameChangeHandler} value={usernameInputValue}/>

                <label htmlFor="age" className={styles.label}>Age (Years)</label>
                <input type="number" className={styles.input} id="age" onChange={ageChangeHandler} value={ageInputValue}/>

                <Button type="submit" >Add User</Button>
            </form>
    </Card>
}

export default AddUser;