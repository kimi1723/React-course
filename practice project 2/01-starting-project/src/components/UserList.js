import styles from './UserList.module.css';
import Card from './reusable-blocks/Card';

const UserList = (props) => {
    const users = props.users.map(user => { 
        return <li key={user.key} className={styles.li}>
                <p>{user.username} {`(${user.age} years old)`}</p>
            </li>
    })
    
    return <Card>
        <ul>
            {users}
        </ul>
    </Card>
}

export default UserList;