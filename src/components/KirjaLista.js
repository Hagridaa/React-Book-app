import React from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';


function KirjaLista (props) {
    return (
            <div>
                <Grid container justify = "center">
                <h1>Alla näet kaikki sovellukseen lisäämäsi kirjat:</h1>
                </Grid>
        
            <Grid spacing={4} container>

                
                {
                        props.kirjat.map(kirja => {
                            return(
                            
                                
                                <Grid item key={kirja.id}>
                                        <Card style={{maxWidth: 350, minWidth: 350, marginTop: 30, marginLeft: 30}}>
                                        <CardHeader title='Lukemani kirja'/>
                                    <CardContent>
                                        <Typography variant='h6'> Kirjan nimi: {kirja.nimi}</Typography>
                                        <Typography variant='body2'> Kirjailija: {kirja.kirjailija} </Typography>
                                        <Button variant='contained' color='primary' style={ {marginRight:20, marginLeft: 20} } ><CreateIcon /> POISTA kirja</Button>
                                    </CardContent>
                                        </Card>
                                </Grid>
                                
                                
                            )
                        }
                    )
                }
            </Grid>
            <Grid>
                <Grid item xs='12' style= {{marginTop: 30, marginLeft: 30, marginRight:30}}>
                <Card>
                <CardHeader>ensimmäinen</CardHeader>
                    <CardContent>

                        
                        
                    dfkjlgjfkdsk
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
            </div>
    )
}

export default KirjaLista;