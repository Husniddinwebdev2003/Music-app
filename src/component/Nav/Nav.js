import React from 'react';
import classes from "./Nav.module.css";
import { FaMusic } from "react-icons/fa"

const Nav = ({seetNavShow, navShow}) =>  {
    return (
        <nav className={classes.Nav}>
            <div className={classes.Title}>
                <h3>Waves</h3>
            </div>
            <div className={classes.MenuBtn}>
                <button onClick={() => seetNavShow(!navShow)}>Library <FaMusic /></button>
            </div>
        </nav>
    )
}

export default Nav;
