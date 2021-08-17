import React from 'react'
import { useStyles } from './reusable.styles'

interface IconHandlerProps{
    Icon:any;
    url:string;
    onClick?:any;
}


const  IconHandler = ({Icon,url,onClick}:IconHandlerProps) => {
    const classes = useStyles()
    return (
        <section>
            <div className={classes.iconStatus} onClick={() => onClick(url)}>
            <Icon />
            </div>
        </section>
    )
}

export default IconHandler
