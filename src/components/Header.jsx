import { Link } from "react-router-dom"

function Header(){
    return(
        <header className="main-header">
            <h1 className="title">Fight Club</h1>
            <nav className="navBar">
                <Link to="/">Game</Link>
                <Link to="/form">Create a Hero or Villain!</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header