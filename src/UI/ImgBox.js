import classes from "./ImgBox.module.css"
import { useLoaderData } from "react-router-dom"

const ImgBox = () => {
    const data=useLoaderData()
    

   
  
    const ButtonHandler=()=>{
        alert("수확하기!")
    }

 

    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img src="tomato.jpg" />
            </div>
            <div className={classes.controlContainer}>
                <div className={classes.title}>
                    당일 토마토 현황
                </div>
                <div className={classes.checkingForRipeness}>
                    <div>
                        &#128308; 3
                    </div>
                    <div>
                        &#128993; 3
                    </div>
                    <div>
                        &#128994; 3
                    </div>
                </div>
                <div>
                    <button className={classes.button} onClick={ButtonHandler}>
                        수확하기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImgBox;