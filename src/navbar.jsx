

const Nav = () => {
    return (
        <nav className="nav navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#">Blogs</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link lien" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link lien" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link lien" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;