import React from 'react';
import {Grid, CardHeader, Card, Typography, CardContent} from '@material-ui/core';


function Home(){

    return(

<Grid spacing={4} container justify="center">
                
                                <Grid>
                                        <Card style={{maxWidth: 350, minWidth: 350}}>
                                        <CardHeader title='Lukemisen iloa' align='center'/>
                                    <CardContent>
                                        <Typography variant='h6' align='center'>Tässä sovelluksessa voit kirjata kaikki lukemasi ja kuuntelemasi kirjat muistiin</Typography>
                                    
                                    </CardContent>
                                        
                                        </Card>
                                </Grid>
                            
            </Grid>
)
}

export default Home;