import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";




export const useStyles = makeStyles((theme:Theme) => 
 createStyles({
     footer:{
         padding:'3rem',
         background:'#0a2a4d'
     },
     salutation:{
         textAlign:'center',
         color:'#fff',
         marginBottom:'1rem'
     }
 }))