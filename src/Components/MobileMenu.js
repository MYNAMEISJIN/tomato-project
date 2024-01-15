import classes from "./MobileMenu.module.css"
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { mobileMenuController } from "../store/slices/firstSlice";
import { HashLink } from "react-router-hash-link";
import React from "react";
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div onClick={props.onClose} className={classes.backdrop} />
}

const MobileMenuOverlay = (props) => {
    return <div className={classes.container}> {/*e.stopPropagation helps me not to click backdrop and menu area at the same time*/}
        <div className={classes.closeItemContainer}>
            <div className={classes.closeItem} style={{ marginRight: "10%" }}>
                <IoClose size="2rem" onClick={props.onClose} />
            </div>
        </div>
        <div className={classes.menuItemContainer}>
            <HashLink smooth to="/#home" onClick={props.onClose}>
                Home
            </HashLink>
            <HashLink smooth to="/#tomato-plan" onClick={props.onClose}>
                Tomato Plan
            </HashLink>
            <div style={{ height: "25%" }}>
                {/*sorry this is to adjust menu items little bit higher*/}
            </div>
        </div>
    </div>
}

const MobileMenu = () => {
    const dispatch = useDispatch()
    const menuCloseHandler = () => {
        dispatch(mobileMenuController())
    }
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={menuCloseHandler}/>, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<MobileMenuOverlay onClose={menuCloseHandler} />, document.getElementById("mobile-menu-overlay-root"))}
        </React.Fragment>
    )
}

export default MobileMenu;