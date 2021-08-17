import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        root:{
            // color:'#fff !important',
            flexGrow:1,
            padding:'2rem',
            background:'#fff !important'
        },
        projects:{
            // flexGrow:1,
            padding:'2rem',
            background:'#fff !important'
        },
        projectHeading:{
            textAlign:'center',
            padding:'2rem',
            background:'#fff !important'
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
          },
        title:{
            padding:'0.4rem',
            // marginBottom:'0.8rem',
            textAlign:'center',
            color:'white',
        },
        description:{
            padding:'0.4rem',
            marginBottom:'0.8rem',
            
        },
        card:{
            // background:'red'
            background:'white !important'
        }
    })

)