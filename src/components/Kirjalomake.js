import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Paper, Typography, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
    
    paper: { 
        backgroundColor:"white",
      textAlign:"center",
    //   marginRight: 20,
    },
  }));


//drop down valikko, josta voi valita pitikö kirjasta vai ei?

function Kirjalomake () {

    const classes = useStyles();

    const [kirja, setValues] = useState ({

        nimi: "",
        kirjailija: ""
    });

    const [viesti, setViesti] = useState('');

    const muuta = (e) => {
        setValues({
            ...kirja, [e.target.name]: e.target.value
        });

        }

        const lisaaKirja = (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('nimi', kirja.nimi);
            formData.append('kirjailija', kirja.kirjailija);
            axios.post('http://localhost:8080/kirja/add', formData).then(Response =>{
                if (Response.status === 200) {
                    setValues ( {nimi: '', kirjailija: ''});
                    setViesti('Lisäys kantaan onnistui!');
                } else {
                    setViesti('Kantaan lisääminen ei onnistunut!');
                }
            })
            }

        

    return (
        <Grid container justify = "center">
        <Paper style={ {width: 500, height: 350,margin:20, padding: 20, background:'pink'}} className = {classes.paper}>
            <Typography>Tallenna lukemasi kirjat talteen tässä:</Typography>
        <form> 
        
            <TextField  variant="outlined" label = 'Kirjan nimi' name="nimi" id='nimi' value={kirja.nimi} margin='normal' required onChange={ (e) => muuta(e)}/> <br/>

            <TextField  variant="outlined" label ='Kirjailia' name="kirjailija" value={kirja.kirjailija}  margin='normal' onChange={ (e) => muuta(e)}/> <br/> <br/>

            <br/>

            <Button variant='contained' color='primary' style={ {marginRight:20, marginLeft: 20} } onClick={ lisaaKirja }><CreateIcon /> Lisää</Button>
           {/*<input type="submit" value="lisää" onClick={(e) => lisaa(e)}/>*/}
        </form>
        </Paper>
        </Grid>


        
    )

}
export default Kirjalomake; 