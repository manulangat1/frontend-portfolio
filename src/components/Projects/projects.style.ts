import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        root:{

        },
        projectHeading:{
            textAlign:'center',
            padding:'2rem',
            background:'#fff !important'
        }
    })

)