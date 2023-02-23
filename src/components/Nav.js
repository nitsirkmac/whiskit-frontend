import { Link } from "react-router-dom"
import { NavStyle } from './appStyles'


export default function Nav(props) {
    return (
        <NavStyle className="nav">
            <Link to="/">
                <div>All Recipes</div>
            </Link>

            <div> Favorites </div>
            <div> Make It Again </div>
            <div> Want To Make </div>
            
            <Link to='/logout'>
                <div>Logout</div>
            </Link>
        </NavStyle>
    )
}

