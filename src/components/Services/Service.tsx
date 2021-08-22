import { Container, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useStyles } from './service.style'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const languages = [
    {
        id:1,
        title:'Python'
    },
    {
        id:2,
        title:'Javascript'
    }
]
const tools = [
    {
        id:1,
        title:'Heroku'
    },
    {
        id:2,
        title:'Git'
    }
]
const tol = 
    [
        {
            id:1,
            title:'Express'
        },
        {
            id:2,
            title:'React'
        }
    ]

const Service = () => {
    const classes = useStyles()
    return (
        <section id="#services" className={classes.root}>
            <div >
            <Container >
            <h1 className={classes.servicesHeading} >My Experience</h1>
            <Grid container  spacing={4} >
                <Grid item  xs={12} sm={3} className="mx-2" >
                    <Paper className={classes.root}>
                            <h1 className={classes.sectionHeading}>Languages</h1>
                            {
                                languages.map(lang => (
                                    <p className={classes.sectionItems} key={lang.id}>{lang.title}  <NavigateNextIcon /> </p>
                                )
                                )
                            }
                    </Paper>
                    
                </Grid>
                <Grid item  xs={12} sm={3} className="mx-1"  >
                <Paper className={classes.root}>
                    <h1 className={classes.sectionHeading}>Framework</h1>
                    {
                                tol.map(lang => (
                                    <p className={classes.sectionItems} key={lang.id}>{lang.title}   <NavigateNextIcon /> </p>
                                )
                                )
                            }
                        </Paper>
                </Grid>
                <Grid item  xs={12} sm={3}  style={{margin:'0 0.1rem'}} className={classes.root}>
                <Paper style={{zIndex:88}} className={classes.root}>
                    <h1 className={classes.sectionHeading}>Development Tools</h1>
                    {
                                tools.map(lang => (
                                    <p  className={classes.sectionItems} key={lang.id}>{lang.title}  <NavigateNextIcon style={{color:'#fca311 !important'}}/>  </p>
                                )
                                )
                            }
                        </Paper>
                </Grid>
                {/* <Grid item  xs={12} sm={3} className="mx-2"  >
                <Paper>
                    <h1>Hello</h1>
                        </Paper>
                </Grid> */}
            </Grid>
            </Container>
            </div>
            
            
        </section>
    )
}

export default Service
