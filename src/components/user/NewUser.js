import UserForm from "./UserForm";
import styles from './NewUser.module.css';

const NewUser = props => {

    const newUserHandler = user => {
         props.onAddUser(user);
    };


    return <div className={styles['new-user']}>
        <UserForm  onNewUser={newUserHandler} />
    </div>
};

export default NewUser;