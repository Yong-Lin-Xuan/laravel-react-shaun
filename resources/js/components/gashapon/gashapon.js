import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100%",
        "& .main": {
            margin: 0,
            padding: 0,
            width: "100vw",
            height: "200vw",
            minHeight: "100vh",
            position: "relative",
            "@media (min-width: 300px)": {
                "& .carousel-control-prev, & .carousel-control-next": {
                    width: "8vw",
                    height: "12vw",
                    margin: "100vw 7vw 0 9vw",
                },
            },
        },
    },
});

function gashapon(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className="main">
                
            </div>
        </div>
    );
}

export default withStyles(styles)(gashapon);
