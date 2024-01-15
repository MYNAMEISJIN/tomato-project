import { useEffect } from "react";
import TomatoPlanPanel from "../Components/TomatoPlanPanel";
import classes from "./TomatoPlanPage.module.css"
import { useSelector } from "react-redux";
import { motion } from "framer-motion"



const TomatoPlanPage = (props) => {


    return <motion.div id={props.id} className={classes.container}
        initial={{ opacity:0}}
        animate={{ opacity:1 }}
        transition={{ delay: 1 }}
    // initial={{ y: -1000 }} 
    // animate={{ y: 0 }}
    >
        <TomatoPlanPanel />
    </motion.div>
}

export default TomatoPlanPage;