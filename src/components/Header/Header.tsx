import React, { Fragment } from 'react'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    
} from '@material-ui/core'

import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles,Theme } from "@material-ui/core/styles";
import Icons from '../Reusable/Icons';

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconHandler from '../Reusable/IconHandler';

const useStyles = makeStyles((theme:Theme) => ({
    root: {
    //   flexGrow: 1,
    color:'yellow',
   
    },
    container:{
        Width:'1400px',
        margin:'auto'
    },
    
    header:{
        backgroundColor:'#007bff',
        background: 'transparent',
        boxShadow:'none',
    },
    button:{
        padding:'1rem'
    },
    main:{
        display:'flex',
        flexDirection:'row',
        padding:'1.5rem',
    },
    title:{
        padding:'0rem 1rem',
        color:'#fff'
    },
    items:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        justifyItems:'flex-end',
        flexBasis:'70%',
        [theme.breakpoints.down('xs')]: {
            display:'none'
        }
        // [theme.breakpoints.down('sm')]:{
        //     display:'none'
        // }
    },
    h1s:{
        flexBasis:'30%',
        color:'black'
    },

  }));

const headerList = [
    {
        id:1,
        name:'HOME',
        link:'/#home'
    },
    {
        id:1,
        name:'PROJECTS',
        link:'/#projects'
    },
    {
        id:1,
        name:'SERVICES',
        link:'/#contacts'
    }
]
const iconList = [
    {
        id:1,
        url:'https://github.com/manulangat1/',
       icon:GitHubIcon
    },
    {
        id:2,
        url:'https://www.linkedin.com/in/emmanuel-langat-7b547a158/',
       icon:LinkedInIcon
    },
    {
        id:1,
        url:'https://twitter.com/LangatIts',
       icon:TwitterIcon
    }
]
const  Header = () => {
    const classes = useStyles()
    const onIconClick = (url:any) => {return window.open(url,'_blank')}
    return (
        <Fragment>
            <AppBar className={classes.header} >
            <div>
            <Toolbar className={classes.main}>

                {
                    iconList.map(ico => (
                        <div key={ico.id}>
                            <IconHandler url={ico.url} Icon={ico.icon} onClick={onIconClick}/>
                        </div>
                    ))
                }
                <div className={classes.items}>
                        {
                            headerList.map(item => (
                                <Typography variant="h6" className={classes.title}>
                                    <Icons  name={item.name} url={item.link} />
                                </Typography>
                            ))
                        }
                </div>   
            </Toolbar>
            </div>
            </AppBar>
        </Fragment>
    )
}

export default Header
