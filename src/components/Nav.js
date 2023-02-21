import { Link } from "react-router-dom"

export default function Nav(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>WhiskIt!</div>
            </Link>
            <Link to='/logout'>
                <div>Logout</div>
            </Link>
        </nav>
    )
}

