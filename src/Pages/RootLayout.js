import { Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import TomatoPlanPage from "./TomatoPlanPage";
import MainNavigation from "../Components/MainNavigation";
import React from "react";
import styles from "./RootLayout.module.css"
import MobileMenu from "../Components/MobileMenu";
import { useSelector } from "react-redux";
import fetchTomatoData, { queryClient } from "../util/http";
import { socket } from "../util/http";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tomatoDataController } from "../store/slices/tomatoDataSlice";
import { tomatoHarvestingController } from "../store/slices/tomatoDataSlice";
import { tomatoRenewingController } from "../store/slices/tomatoDataSlice";

const RootLayout = () => {
    const mobileMenu = useSelector((state) => state.firstReducer.value)
    const dispatch = useDispatch();
    

    useEffect(() => {
        socket.on("tomato_data", (data) => {// 처음 홈페이지 들어왔을때, 갱신되었을때, 수확 완료되었을때  
            console.log("tomato_data", data)
            dispatch(tomatoDataController(data))
        })
        socket.on("button_request_reply", (data) => { // 갱신 버튼 클릭후 갱신중이라는 결과값
            if(data.harveststatus){
                dispatch(tomatoHarvestingController(data))
            }
            else if(data.renewalstatus){
                dispatch(tomatoRenewingController(data))
            }
            else{
                console.log("error")
            }
            
        })
    }, [socket]);

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

export function loader() {
    return queryClient.fetchQuery({
        queryKey: ["tomatoData"],
        queryFn: fetchTomatoData,
    })
}

