import React from 'react';
import styles from './Navbar.module.scss';
import {Link} from "react-router-dom";

const Navbar = () => (
    <nav className={`navbar navbar-inverse ${styles.Navbar}`}>
        <div className={"container-fluid"}>
            <div className={"navbar-header"} style={{color: "grey"}}>
                <Link className={"navbar-brand"} to={"/"}>
                    <span style={{fontWeight: '900'}}>Meme</span>
                    <span style={{color: 'tomato'}}>.</span>
                    <span style={{fontStyle: 'italic'}}>js</span>
                </Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <Link to={"/"}>
                            Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/thumbnail"}>Thumbnail</Link>
                    </li>
                    <li>
                        <Link to={"/editor"}>New Meme</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
