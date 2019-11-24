import React from 'react';
import {Grid, CardHeader, Card, Typography, CardContent, Paper} from '@material-ui/core';
import BookSwiper from './BookSwiper';

//pitäisikö tähän ttehdä useStyles jne ja tehdä oma tyyli tähän jota kutsua slide43.
function Home(){

    return(
<Paper>
        
<Grid spacing={4} container justify="center">

<Grid item xs={12}>
    <Typography variant = 'h3' style={ {textAlign: "center"}}>Tallenna lukemasi ja kuuntelemasi kirjat talteen</Typography>
    </Grid>
                
                                <Grid item xm={6}>
                                        <Card style={{maxWidth: 350, minWidth: 350, margintop: 20, marginBottom: 20,marginRight: 20}}>
                                        <CardHeader title='Lukemisen iloa' align='center'/>
                                    <CardContent>
                                        <Typography variant='h6' align='center'>Tässä sovelluksessa voit kirjata kaikki lukemasi ja kuuntelemasi kirjat muistiin</Typography>
                                    </CardContent>
                                        </Card>
                                </Grid>

                                <Grid item xm={6}>
                                        <Card style={{maxWidth: 350, minWidth: 350}}>
                                        <CardHeader title='Sukella tarinoihin' align='center'/>
                                    <CardContent>
                                        <Typography variant='h6' align='center'>Ja saat myös vinkkejä uusiin lukuhetkiin! Mitä jos kokeilisit jotain ihan uutta?</Typography>
                                    </CardContent>
                                        </Card>
                                </Grid>
            
</Grid>
        <Grid container justify="center">
            <Grid item xs={2}> 
                <BookSwiper/>
                </Grid>

                
            <Grid item xs={2}> 
                <BookSwiper/>
                </Grid>

                
            <Grid item xs={2}> 
                <BookSwiper/>
                </Grid>

                <Grid item xs={2}> 
                <BookSwiper/>
                </Grid>
        </Grid>

           

            </Paper>
)
}

export default Home;