import TomatoPlanBox from "../UI/TomatoPlanBox";
import classes from "./TomatoPlanPanel.module.css"
import React from "react";
import Carousel from "../UI/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"
import { tomatoPlanMenuAnimationTriggerController } from "../store/slices/animationSlice";

const DUMMY_TOMATO_PLAN_DATA = [
    {
        tomato_date: "no data",
        redtomato: 0,
        greentomato: 0,
        yellowtomato: 0,
    },
    {
        tomato_date: "no data",
        redtomato: 0,
        greentomato: 0,
        yellowtomato: 0,
    },
    {
        tomato_date: "no data",
        redtomato: 0,
        greentomato: 0,
        yellowtomato: 0,
    }, {
        tomato_date: "no data",
        redtomato: 0,
        greentomato: 0,
        yellowtomato: 0,
    }, {
        tomato_date: "no data",
        redtomato: 0,
        greentomato: 0,
        yellowtomato: 0,
    }, {
        tomato_date: "no data",
        redtomato: 0,
        greentomato: 0,
        yellowtomato: 0,
    },
]


function TomatoPlanPanel() {
    const dispatch = useDispatch()
    const TomatoPlanPanelAnimate = useSelector((state) => state.animationReducer.tomatoPlanTrigger)
    const { tomatoReportByWeek } = useSelector((state) => state.tomatoDataReducer)
    const onAnimationComplete = () => {
        dispatch(tomatoPlanMenuAnimationTriggerController(false));
    };
    let tomatoData;


    if (tomatoReportByWeek.length === 0) {
        tomatoData = DUMMY_TOMATO_PLAN_DATA;

    } else {
        tomatoData = tomatoReportByWeek
    }


    return <motion.div className={classes.container}
        initial={{ y: [0, 0, 0, 0] }}
        animate={TomatoPlanPanelAnimate ? {
            y: [10, 0, -10, 0],
        } : undefined}

        transition={{
            type: "spring",
            duration: 1.5, // Increased duration
            stiffness: 1000, // Experiment with stiffness
            damping: 20, // Experiment with damping
            onComplete: onAnimationComplete,
        }}
    >
        <div style={{ display: "none" }}>tomato plan</div>


        <div className={classes.defaultView}>
            {tomatoData.map((data, index) => (
                <TomatoPlanBox key={index} data={data} dayCheck={index === 0 ? ["당일", "#D10000"] : ["예상", "#828282"]} />
            ))}
        </div>

        <div className={classes.carouselView}>
            <Carousel>
                {tomatoData.map((data, index) => (
                    <TomatoPlanBox key={index} data={data} dayCheck={index === 0 ? ["당일", "#D10000"] : ["예상", "#828282"]} />
                ))}
            </Carousel>
        </div>
    </motion.div>



}

export default TomatoPlanPanel;