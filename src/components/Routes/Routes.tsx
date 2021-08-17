import { makeStyles } from '@material-ui/styles'
import React, { Fragment } from 'react'
import { Switch } from 'react-router-dom'
import { classicNameResolver } from 'typescript'
import Contact from '../Contacts/Contact'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Service from '../Services/Service'

const useStyles = makeStyles((theme) => ({
    root:{

    },
    basic:{
        marginTop:'9rem'
    }
}))

const  Routes = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <Header />
            <Switch>
            <div className={classes.basic}>
                    <Home />
                    <Projects />
                    <Service />
                    <Contact />
            </div>
            </Switch>
            <Footer />
            
        </Fragment>
    )
}

export default Routes
