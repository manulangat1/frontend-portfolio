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
    Box
} from '@material-ui/core'

import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import Icons from '../Reusable/Icons';

const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
    color:'yellow'
    },
    header:{
        background: '#222',
        // height:'rem'
    },
    button:{
        padding:'1rem'
    }
  }));

const headerList = [
    {
        id:1,
        name:'home'
    }
]
const  Header = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <AppBar className={classes.header}>
            <Toolbar>
                {
                    headerList.map(header => (
                        <Icons name={header.name} />
                    ))
                }
                <Button color="inherit" className={classes.button}>Login</Button>
            </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Header
