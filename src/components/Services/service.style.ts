import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from "@material-ui/styles";



export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        root:{
            // background:'#fff !important'
            background:'#0a2a4d'
        },
        servicesHeading:{
            textAlign:'left',
            padding:'2rem',
            color:'#fca311 !important'
        },
        sectionHeading:{
            color:'#fca311 !important',
            textAlign:'center'
            // marginBottom:'1rem'
        },
        sectionItems:{
            padding:'1rem',
            color:'#fff'
        }
    })
)