import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import TomatoPlanPage from "./TomatoPlanPage";
import MainNavigation from "../Components/MainNavigation";
import React from "react";
import styles from "./RootLayout.module.css"
import MobileMenu from "../Components/MobileMenu";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import fetchTomatoData, { queryClient } from "../util/http";


const RootLayout = () => {
    const mobileMenu = useSelector((state) => state.firstReducer.value)

    const { data, isError, error } = useQuery({
        queryKey: ["tomatoData"],
        queryFn: fetchTomatoData,
    })


    return (<>
        <div className={styles.container}>
            <MainNavigation />
            {mobileMenu && <MobileMenu />}
            {/* <Outlet /> */}
            <HomePage id={"home"} />
            <TomatoPlanPage id={"tomato-plan"} />
            {/*id is for to do hash link*/}
        </div>
    </>)

}

export default RootLayout;

export function loader(){
    return queryClient.fetchQuery({
        queryKey: ["tomatoData"],
        queryFn: fetchTomatoData,
    })
}

