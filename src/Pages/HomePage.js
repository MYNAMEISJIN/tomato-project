import MainPanel from "../Components/MainPanel";
import classes from "./HomePage.module.css"
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { homeMenuAnimationTriggerController } from "../store/slices/animationSlice";


const HomePage = (props) => {
    const dispatch=useDispatch();
    const homePanelAnimate = useSelector((state) => state.animationReducer.homeTrigger)

    const onAnimationComplete = () => {
        dispatch(homeMenuAnimationTriggerController(false));
      };

    return (
        <motion.div id={props.id} className={classes.container}
            initial={{ y: [0, 0, 0, 0], }}
            animate={homePanelAnimate ? {
                y: [10, 0, -10, 0],
            } : undefined}
            transition={
                {
                    type: "spring",
                    duration: 3, // Increased duration
                    stiffness: 1000, // Experiment with stiffness
                    damping: 20, // Experiment with damping}
                    onComplete:onAnimationComplete,

                }}
        >
            <MainPanel />
        </motion.div>

    )
}

export default HomePage;