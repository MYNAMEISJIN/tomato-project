import classes from "./Smallbox.module.css"

function SmallBox (props){

    return(
        <div className={classes.container}>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.content}>
                <div>{props.data}&nbsp;&nbsp;</div>
                <div className={classes.sideSpan}>/&nbsp;&nbsp;{props.side}</div>
            </div>
        </div>
    )
}

export default SmallBox;