import { useMutation } from "@tanstack/react-query"
import classes from "./ImgBox.module.css"
import { useLoaderData } from "react-router-dom"
import { requestNewTomatoData } from "../util/http"
import { socket } from "../util/http"
import { useSelector } from "react-redux"
import Button from "./Button"



const ImgBox = (props) => {

    const ButtonSendHarvest = () => {
        socket.emit("button_request", { request: "harvest" }); // 수확하기 버튼 요청
    };

    const ButtonSendRenewal = () => {
        socket.emit("button_request", { request: "renewal" });  // 갱신하기 버튼
    }

    console.log(props.image)

    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                {props.image?
                <img src={`${props.image}`} alt="tomato image"/>
                :
                <div className={classes['no-image']}>
                    no image data
                </div>
                }
                
            </div>
            <div className={classes.controlContainer}>
                <div className={classes.title}>
                    당일 토마토 현황
                </div>
                <div className={classes.checkingForRipeness}>
                    <div>
                        &#128308; {props.report?.redtomato?props.report?.redtomato:"there's"}
                    </div>
                    <div>
                        &#128993; {props.report?.yellowtomato?props.report?.yellowtomato:"no"}
                    </div>
                    <div>
                        &#128994; {props.report?.greentomato?props.report?.greentomato:"data"}
                    </div>
                </div>
                <div>
                    <Button
                        ButtonSendHarvest={ButtonSendHarvest}
                        ButtonSendRenewal={ButtonSendRenewal}
                    />
                </div>
            </div>
        </div>
    )
}

export default ImgBox;