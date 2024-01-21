import classes from "./BigBox.module.css"

function BigBox(props) {

    return (
        <div className={classes.container}>
            <div className={classes.title} style={{ color: `${props.color}` }}>
                {props.title}
            </div>
            <div className={classes.content}>
                <div>{props.data || props.data === 0 ? props.data : 0}&nbsp;&nbsp;</div>
                <div className={classes.sideSpan}>/&nbsp;&nbsp;금일</div>
            </div>
        </div>
    )
}

export default BigBox;