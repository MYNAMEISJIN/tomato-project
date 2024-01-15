import TomatoPlanBox from "../UI/TomatoPlanBox";
import classes from "./TomatoPlanPanel.module.css"
import React from "react";
import Carousel from "../UI/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"
import { tomatoPlanMenuAnimationTriggerController } from "../store/slices/animationSlice";
import { useQuery } from "@tanstack/react-query";
import fetchTomatoData from "../util/http";
import { useLoaderData } from "react-router-dom";

const DUMMY_TOMATO_PLAN_DATA = [
    {
        id: 1,
        rt: 7,
        ut: 9,
        date: "2024.03.19"
    },
    {
        id: 2,
        rt: 10,
        ut: 9,
        date: "2024.03.20"
    },
    {
        id: 3,
        rt: 2,
        ut: 1,
        date: "2024.03.21"
    },
    {
        id: 4,
        rt: 8,
        ut: 9,
        date: "2024.03.22"
    },
    {
        id: 5,
        rt: 7,
        ut: 9,
        date: "2024.03.23"
    },
    {
        id: 6,
        rt: 10,
        ut: 2,
        date: "2024.03.24"
    },
    {
        id: 7,
        rt: 5,
        ut: 7,
        date: "2024.03.25"
    },
]

function TomatoPlanPanel() {
    const data = useLoaderData()
    const dispatch = useDispatch()
    const TomatoPlanPanelAnimate = useSelector((state) => state.animationReducer.tomatoPlanTrigger)
    const onAnimationComplete = () => {
        dispatch(tomatoPlanMenuAnimationTriggerController(false));
    };


    //   const { data, isPending, isError, error } = useQuery({
    //     queryKey: ["tomatoData"],
    //     queryFn: fetchTomatoData,
    // })

    // console.log(data)

    console.log(data)


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
            {DUMMY_TOMATO_PLAN_DATA.map((data, index) => (
                <TomatoPlanBox key={data.id} data={data} dayCheck={index === 0 ? ["당일", "#D10000"] : ["예상", "#828282"]} />
            ))}
        </div>


        <div className={classes.carouselView}>
            <Carousel>
                {DUMMY_TOMATO_PLAN_DATA.map((data, index) => (
                    <TomatoPlanBox key={data.id} data={data} dayCheck={index === 0 ? ["당일", "#D10000"] : ["예상", "#828282"]} />
                ))}
            </Carousel>
        </div>
    </motion.div>
    


}

export default TomatoPlanPanel;