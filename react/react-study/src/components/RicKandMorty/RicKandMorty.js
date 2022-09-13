import Morty from "./User";

export default function Morty() {

    let [users, setUsers] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then((value) => value.json())
        .then(value => {
                setUsers(value)
            }
        );

    return (
        <div>
            {users.map(user => (<User item = {user} key = {user.id}/>))}
        </div>
    )
}