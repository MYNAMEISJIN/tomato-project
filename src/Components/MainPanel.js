import styles from "./MainPanel.module.css"
import BigBox from "../UI/BigBox"
import ImgBox from "../UI/ImgBox"
import SmallBox from "../UI/SmallBox"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"

//state.tomatoDataReducer.tomatoPlanTrigger
const MainPanel = () => {
    const {
        todayTotalTomato,
        accumulatedTotalTomato,
        image,
        imageUpdatedTime,
        monthlyTotalHarvestedTomato,
        tomatoReportByWeek,
        harvestLoading,
        renewalLoading,
    } = useSelector((state) => state.tomatoDataReducer)



    return (
        <motion.div className={styles.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        //  initial={{y:-1000}} 
        // animate={{y:0}}
        // transition={{delay:0.2}}s
        >
            <div className={styles.spaceContainer}>
                {/*to make space*/}
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.leftContainer}>
                    <div className={styles.boxContainer}>
                        <BigBox color={"white"} title={"총 토마토 개수"} data={todayTotalTomato} />
                        <SmallBox title={"월 총 수확량"} side={"월"} data={monthlyTotalHarvestedTomato[monthlyTotalHarvestedTomato.length - 1]?.total} />
                    </div>
                    <div className={styles.boxContainer}>
                        <BigBox color={"#D10000"} title={"당일 수확 가능량"} data={tomatoReportByWeek[0]?.redtomato} />
                        <SmallBox title={"총 누적 수량"} side={"2024"} data={accumulatedTotalTomato} />
                    </div>

                </div>
                <div className={styles.rightContainer}  >
                    <ImgBox report={tomatoReportByWeek[0]} image={image} imageUpdatedTime={imageUpdatedTime} harvestLoading={harvestLoading} renewalLoading={renewalLoading} />
                </div>
            </div>
        </motion.div >
    )
}

export default MainPanel