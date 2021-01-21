import React, { Fragment, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Fab from "@material-ui/core/Fab"
import { Phone } from "@material-ui/icons"
import transitions from '@material-ui/core/styles/transitions';

const useStyles = makeStyles(theme => ({
    fab: {
        position: "fixed",
        bottom: "100px",
        left: "20px",
        color: "#d10024",
        backgroundColor: "transparent"
    },
    hotlineActive: {
        position: "fixed",
        bottom: "100px",
        left: "80px",
        color: "#d10024",
        backgroundColor: "transparent",
        width: "200px",
        textAlign: "center",
        padding: "10px 0",
        borderRadius: "20px",
        fontWeight: "bolder",
        boxShadow: "5px 5px 10px 5px #eee",
        transitions: "all .5s ease",
    }
}))
const HotlineComponent = () => {
    const [displayHotline, setDisplayHotline] = useState(false)
    const classes = useStyles()
    return (
        <Fragment>
            <Fab className={classes.fab} onClick={() => setDisplayHotline(!displayHotline)}>
                <Phone />
            </Fab>
            {
                displayHotline && <div className={classes.hotlineActive}>
                    0931.839.693
                     <br />
                    (Hỗ trợ kỹ thuật)
            </div>
            }


        </Fragment>
    );
};

export default HotlineComponent;