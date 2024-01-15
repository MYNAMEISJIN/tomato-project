import classes from "./MainNavigation.module.css"
import { HiMenu } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { mobileMenuController } from "../store/slices/firstSlice";
import { HashLink } from "react-router-hash-link";
import {tomatoPlanMenuAnimationTriggerController} from "../store/slices/animationSlice"
import {homeMenuAnimationTriggerController} from "../store/slices/animationSlice"
import {motion} from "framer-motion"


const MainNavigation = () => {
    const dispatch = useDispatch();
    
    
    const homeHandler = () => {
        dispatch(homeMenuAnimationTriggerController(true))
    }
    const tomatoPlanHandler = () => {
        dispatch(tomatoPlanMenuAnimationTriggerController(true))
    }

    const mobileMenuHandler=()=>{
        dispatch(mobileMenuController())
    }



    return (
        <motion.div className={classes.container}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.5}}
        >
            <div style={{ padding: "0.7rem", fontSize: "1.3rem", fontWeight: "bold" }}>
                T . K
            </div>

            <div className={classes.menuItems}>
                <HashLink to="/#home" onClick={homeHandler}>
                    Home
                </HashLink>
                <HashLink to="/#tomato-plan" onClick={tomatoPlanHandler} style={{ marginLeft: "35px", }}>
                    Tomato Plan
                </HashLink>
            </div>

            <div className={classes.teamName} style={{ padding: "0.7rem", fontSize: "1.3rem", fontWeight: "bold" }}>
                CTK
            </div>

            <div className={classes.menuIcon} onClick={mobileMenuHandler}>
                <HiMenu size="2rem" />
            </div>
        </motion.div>
    )
}

export default MainNavigation;