import { IconProps, makeStyles, Typography,Menu } from '@material-ui/core'
import React, { Fragment } from 'react'

interface iconProps  {
    name:string
}
const useStyles = makeStyles({
    headerComponent:{
        color:'tomato'
    }
})
const  Icons = ({name}:iconProps) =>  {
    const classes = useStyles();
    return (
        <Fragment>
            <Menu>
                {name}
            </Menu>
             {/* <Typography variant="h6" className={classes.headerComponent} >
                {name}
            </Typography> */}
        </Fragment>
    )
}

export default Icons
