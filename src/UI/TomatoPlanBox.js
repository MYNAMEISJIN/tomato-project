import classes from "./TomatoPlanBox.module.css"


const TomatoPlanBox = (props) => {


    return (
        <div className={classes.container}>
            <div classes={classes.date}>
                {props.data.tomato_date} <div style={{color:`${props.dayCheck[1]}`}}>({props.dayCheck[0]})</div>
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
                        {props.data.redtomato}
                    </div>
                </div>
                <div className={classes.contentDetail}>
                    <div>
                        UT
                    </div>
                    <div>
                    {props.data.greentomato+props.data.yellowtomato}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TomatoPlanBox
