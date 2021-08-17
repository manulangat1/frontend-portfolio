import { createStyles, makeStyles,Theme } from "@material-ui/core/styles";
// import {  } from "@material-ui/styles";


export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        root:{
            // display:'flex',
            // flexWrap:'wrap'
            backgroundColor:'#0a2a4d',
            padding:'2rem'
        },
        container:{
            maxWidth:'xl',
            [theme.breakpoints.down('sm')]: {
				// fontSize: '16px',
                maxWidth:'sm'
			},
        },
        heading:{
            marginBottom:'2rem',
            color:'#ffff !important',
            textAlign:'center'
        },
        subheading:{
            color:'#fca311 !important;'
        },
        img:{
            maxWidth:'100%',
            height:'auto'
        },
        homeText:{
            color:"#fff !important",
            padding:'1rem'
        }
    })
)
