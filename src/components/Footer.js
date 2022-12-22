import React from "react";
import { Grid } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import payment from '../assets/payment.svg';
import protectedLogo from '../assets/protected.svg';
import shipping from '../assets/shipping.svg';
import Typography from '@material-ui/core/Typography';


const Footer = () =>{
    return(
        <Box px={{xs:3 , sm:10}} py={{xs:5, sm:10}} bgcolor="text.secondary" style={{backgroundColor: "#fff"}} >
            <Container maxWidth = "lg">
                <Grid container spacing={5} style={{display:"flex",justifyContent:"center"}}>
                    <Grid item xs={12} sm={4} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <Box>
                            <img src={payment} alt="payment"/>
                        </Box>
                        <Typography variant="body1" component="p" style={{textAlign:"center"}} >
                            Podes pagar con tarjeta, débito o efectivo.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <Box>
                            <img src={shipping} alt="shipping"/>
                        </Box>
                        <Typography variant="body1" component="p" style={{textAlign:"center"}}>
                            Tenés envíos gratis en miles de productos.
                        </Typography>                        
                    </Grid>
                    <Grid item xs={12} sm={4} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <Box>
                            <img src={protectedLogo} alt="protected"/>
                        </Box>
                        <Typography variant="body1" component="p" style={{textAlign:"center"}}>
                            ¿No te gusta? podes devolverlo.... estas protegido.
                        </Typography>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default Footer;