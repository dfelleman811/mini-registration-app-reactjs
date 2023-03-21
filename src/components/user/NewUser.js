import UserForm from "./UserForm";

const NewUser = props => {

    const newUserHandler = user => {
         props.onAddUser(user);
    };


    return <div>
        <UserForm onNewUser={newUserHandler}/>
    </div>
};

export default NewUser;