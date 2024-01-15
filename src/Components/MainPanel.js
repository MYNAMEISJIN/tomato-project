import styles from "./MainPanel.module.css"
import BigBox from "../UI/BigBox"
import ImgBox from "../UI/ImgBox"
import SmallBox from "../UI/SmallBox"
// import { useQuery } from "@tanstack/react-query"
// import fetchTomatoData from "../util/http"
import { useLoaderData } from "react-router-dom"
import { motion } from "framer-motion"


const MainPanel = () => {

    // const { data, isPending, isError, error } = useQuery({
    //     queryKey: ["tomatoData"],
    //     queryFn: fetchTomatoData,
    // })

    // console.log(data)

    //const data = useLoaderData()



    return (
        <motion.div className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 } }
            transition={{delay:0.5}}
        //  initial={{y:-1000}} 
        // animate={{y:0}}
        // transition={{delay:0.2}}
        >
            <div className={styles.spaceContainer}>
                {/*to make space*/}
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.boxContainer}>
                        <BigBox color={"white"} title={"총 토마토 개수"} />
                        <SmallBox title={"월 총 수확량"} side={"월"} />
                    </div>
                    <div className={styles.boxContainer}>
                        <BigBox color={"#D10000"} title={"당일 수확 가능량"} /> {/*data={data&&data.harvestableTomatos.redtomato}*/}
                        <SmallBox title={"총 누적 수량"} side={"2024"} />
                    </div>

                </div>
                <div className={styles.rightContainer}>
                    <ImgBox />
                </div>
            </div>
        </motion.div >
    )
}

export default MainPanel