import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => (
    <nav className={`navbar navbar-inverse ${styles.Navbar}`}>
        <div className={"container-fluid"}>
            <div className={"navbar-header"} style={{color: "grey"}}>
                <a className={"navbar-brand"} href={"#"}>
                    <span style={{fontWeight: '900'}}>Meme</span>
                    <span style={{color: 'tomato'}}>.</span>
                    <span style={{fontStyle: 'italic'}}>js</span>
                </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">Thumbnail</a>
                    </li>
                    <li>
                        <a href="#">New Meme</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
