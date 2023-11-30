import './NavBar.css'

export default function NavBar() {
    return (
        <div className='nav-bar-body container-fluid text-center'>
                <div className='row align-items-center '>
                    <div className="col">
                        <a className='nav-bar-a' href="">About Me</a>
                    </div>
                    <div className="col">
                        <a className='nav-bar-a' href="">Projects</a>
                    </div>
                    <div className="col">
                        <a className='nav-bar-a' href="">Skills</a>
                    </div>
                    <div className="col">
                        <a className='nav-bar-a' href="">Resume</a>
                    </div>
                    <div className="col">
                        <a className='nav-bar-a' href="">Contact</a>
                    </div>
                </div>
        </div>
    )
}
