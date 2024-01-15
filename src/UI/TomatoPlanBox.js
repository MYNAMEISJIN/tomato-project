import classes from "./TomatoPlanBox.module.css"


const TomatoPlanBox = (props) => {
    return (
        <div className={classes.container}>
            <div classes={classes.date}>
                {props.data.date} <span style={{color:`${props.dayCheck[1]}`}}>({props.dayCheck[0]})</span>
            </div>

            <div className={classes.content}>
                <div style={{ height: "1rem" }}>
                    {/*to make a space*/}
                </div>
                <div className={classes.contentDetail}>
                    <div>
                        RT
                    </div>
                    <div>
                        {props.data.rt}
                    </div>
                </div>
                <div className={classes.contentDetail}>
                    <div>
                        UT
                    </div>
                    <div>
                        {props.data.ut}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TomatoPlanBox
