export default function Morty(props){

    let {item:user} = this.props;

    return(
        <div>
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>
            <p>{user.status}</p>
            <p>{user.species}</p>
            <p>{user.gender}</p>
            <img src={user.image} alt={user.name}/>

        </div>
    )
}