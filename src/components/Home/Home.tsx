import { Container, Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import React, { Fragment } from 'react'
import { useStyles } from './Home.styles'
import PlaceHolder from '/home/manulangat/Desktop/personal/frontend/src/Assets/img/image_to_use.png'
const homeText = [
    {
        id:1,
        text:'I am a self-motivated, ambitious person who has developed a mature and responsible approach to any task that I undertake.'
    },
    {
        id:2,
        text:`I'm a Full Stack developer with skills in Web Apps Development basically 2 years experience in mobile development, 4 years in web development with a creative, adaptable nature and an eye for detail.`
    },
    // {
    //     id:3,
    //     text:`I pursue my passion for App Development (Web & Mobile) in a team where I can work collaboratively with others towards an objective of professional excellence, for a dynamic and fresh digital brand.`
    // }
]
const  Home =() =>{
    const classes = useStyles()
    // const matches =
    return (
            <section id="#home">
                <Container maxWidth="lg">
                <Grid container  >
                    <Grid item xs={12} sm={6} style={{display:'flex',flexDirection:'column'}}>
                        <div >
                            <h1 className={classes.heading}>Hi, Am <span className={classes.subheading}>Emmanuel Langat.</span></h1>
                            {
                                homeText.map(text => (
                                    <p className={classes.homeText} key={text.id}>
                                        {text.text}
                                    </p>
                                ))
                            }
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>

                            <img className={classes.img} src={PlaceHolder} alt="an tit of code" />

                    </Grid>

                </Grid>
                </Container>
            </section>
    )
}

export default Home
