import {useState} from 'react';
import styles from './AddUser.module.css';
import Card from './reusable-blocks/Card';
import Button from './reusable-blocks/Button';

const AddUser = (props) => {
    const [users, setUsers] = useState([]);
    const [usernameInputValue, setUsernameInputValue] = useState('');
    const [ageInputValue, setAgeInputValue] = useState('');
   

    const usernameChangeHandler = e => {
        setUsernameInputValue(e.target.value);
    }

    const ageChangeHandler = e => {
        setAgeInputValue(+e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setUsers(prevUsers => {
            return [...prevUsers,
                {
                    username: usernameInputValue,
                    age: ageInputValue,
                }
            ] 
        });

        props.sendData(users);
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