import React from 'react'
import { useStyles } from './footer.styles'

const  Footer = () => {
    const today = new Date()
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <p className={classes.salutation}>Made with love by Emmanuel Langat</p>
            <p className={classes.salutation}>Rolam Technology @{`${today.getFullYear()}`}</p>
        </footer>
    )
}

export default Footer
