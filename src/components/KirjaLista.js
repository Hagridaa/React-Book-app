import React from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function KirjaLista (props) {
    return (
            <Grid spacing={4} container>
                <CardHeader>Kirjat listassa:</CardHeader>
                
                {
                        props.kirjat.map(kirja => {
                            return(
                                
                                <Grid item key={kirja.id}>
                                        <Card style={{maxWidth: 350, minWidth: 350}}>
                                        <CardHeader title='Lukemani kirja'/>
                                    <CardContent>
                                        <Typography variant='h6'> Kirjan nimi: {kirja.nimi}</Typography>
                                        <Typography variant='body2'> Kirjailija: {kirja.kirjailija} </Typography>
                                    </CardContent>
                                        
                                        </Card>
                                </Grid>
                            )
                        }
                    )
                }
            </Grid>
    )
}

export default KirjaLista;