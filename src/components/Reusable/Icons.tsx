import { IconProps, makeStyles, Typography,Menu } from '@material-ui/core'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

interface iconProps  {
    name:string,
    url:string
}
const useStyles = makeStyles({
    headerComponent:{
        color:'#fff'
    }
})
const  Icons = ({name,url}:iconProps) =>  {
    const classes = useStyles();
    return (
        <Fragment>
             <Typography  variant="h6" className={classes.headerComponent} >
                
                <Link to={url}>
                    {name}
                </Link>
                
            </Typography>
        </Fragment>
    )
}

export default Icons
