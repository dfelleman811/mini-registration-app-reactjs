import User from "./User";

const UsersList = props => {

    return <div>
        {props.users.map(u => <User key={u.id} name={u.name} age={u.age}/>)}
    </div>

};

export default UsersList;