import {simpson} from "../../simpson";
import Simpson from "./Simpson";


export default function Simpsons() {
    return (
        <div className='container'>
            {
                simpson.map((user, index) =>
                    (<Simpson item={user} key={index}/>))
            }
        </div>
    )
}