import {  Container, useMediaQuery } from '@material-ui/core'
import Grid from '@material-ui/core/Grid/Grid'
import React from 'react'
import { useStyles } from './projects.style'
// src/Assets/img/image_to_use.png
import PlaceHolder from '../../Assets/img/image_to_use.png'
// import Card from '@material-ui/core/Card';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import EditIcon from '@material-ui/icons/Edit';
const projects = [
    {
        id:1,
        title:"hey",
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Aliquam ultrices sagittis orci a scelerisque purus. Sollicitudin ac orci phasellus egestas tellus. Eu facilisis sed odio morbi quis commodo odio aenean. Arcu ac tortor dignissim convallis aenean. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Vitae nunc sed velit dignissim sodales ut eu. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Tortor consequat id porta nibh venenatis cras sed felis. Sit amet commodo nulla facilisi nullam vehicula ipsum. Fames ac turpis egestas maecenas pharetra convallis posuere. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Massa eget egestas purus viverra accumsan in. Sed vulputate mi sit amet mauris commodo. Purus ut faucibus pulvinar elementum integer enim neque. Gravida rutrum quisque non tellus orci ac auctor augue.',
        image:PlaceHolder
    },
    {
        id:2,
        title:"hey",
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Aliquam ultrices sagittis orci a scelerisque purus. Sollicitudin ac orci phasellus egestas tellus. Eu facilisis sed odio morbi quis commodo odio aenean. Arcu ac tortor dignissim convallis aenean. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Vitae nunc sed velit dignissim sodales ut eu. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Tortor consequat id porta nibh venenatis cras sed felis. Sit amet commodo nulla facilisi nullam vehicula ipsum. Fames ac turpis egestas maecenas pharetra convallis posuere. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Massa eget egestas purus viverra accumsan in. Sed vulputate mi sit amet mauris commodo. Purus ut faucibus pulvinar elementum integer enim neque. Gravida rutrum quisque non tellus orci ac auctor augue.',
        image:PlaceHolder
    },
    {
        id:3,
        title:"hey",
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Aliquam ultrices sagittis orci a scelerisque purus. Sollicitudin ac orci phasellus egestas tellus. Eu facilisis sed odio morbi quis commodo odio aenean. Arcu ac tortor dignissim convallis aenean. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Vitae nunc sed velit dignissim sodales ut eu. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Tortor consequat id porta nibh venenatis cras sed felis. Sit amet commodo nulla facilisi nullam vehicula ipsum. Fames ac turpis egestas maecenas pharetra convallis posuere. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Massa eget egestas purus viverra accumsan in. Sed vulputate mi sit amet mauris commodo. Purus ut faucibus pulvinar elementum integer enim neque. Gravida rutrum quisque non tellus orci ac auctor augue.',
        image:PlaceHolder
    },
]
const Projects = () => {
    const classes = useStyles()
    // const matches = useMediaQuery()
    return (
        <section id="/#projects" className={classes.projects}>
            <h1 className={classes.projectHeading} > Here are some of my past projects</h1>
            {/* <Container style={{backgroundColor:'#fff !important'}} > */}
            <Grid container spacing={4} style={{backgroundColor:'#fff !important'}}  >
           
                {
                    projects.map(project => (
                        <Grid item xs={12} sm={6} style={{marginBottom:'1rem',background:'white !important'}} key={project.id}>
                             <Card className={classes.card} style={{backgroundColor:'white !important'}}>
                                    <CardHeader
                                    title={project.title} className={classes.title}    />
                                        <CardMedia className={classes.media} image={project.image}/>
                                        <CardContent style={{backgroundColor:'white !important'}}>
                                        <h1 className={classes.title}>{project.title}</h1>
                                        <p className={classes.description}>{project.desc}</p>
                                    </CardContent>
                                    <EditIcon />
                                </Card>
                        </Grid>
                    ))
                }
            
                
            </Grid>
            {/* </Container> */}
            
        </section>
    )
}

export default Projects
