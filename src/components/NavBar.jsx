import './NavBar.css'

export default function NavBar() {
    return (
        <div className='nav-bar-body'>
            <nav>
                <ul className='nav-bar-ul'>
                    <li>
                        <a className='nav-bar-a' href="">About Me</a>
                    </li>
                    <li>
                        <a className='nav-bar-a' href="">Projects</a>
                    </li>
                    <li>
                        <a className='nav-bar-a' href="">Skills</a>
                    </li>
                    <li>
                        <a className='nav-bar-a' href="">Resume</a>
                    </li>
                    <li>
                        <a className='nav-bar-a' href="">Contact</a>
                    </li>
                </ul>
            </nav>
            <hr />
        </div>
    )
}
