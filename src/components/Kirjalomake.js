import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Card, Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';


//drop down valikko, josta voi valita pitikö kirjasta vai ei?

function Kirjalomake () {

    const [kirja, setValues] = useState ({

        nimi: "",
        kirjailija: ""
    });

    const muuta = (e) => {

        setValues({
            ...kirja, [e.target.name]: e.target.value
        });

        }

        const lisaa = (e) => {
            e.preventDefault();
            setValues({
            nimi: "",
            kirjailija: ""
            });

        }

    return (
        <Paper style={ {margin:20, padding: 20, background:'pink'}}>
            <Typography>Tallenna lukemasi kirjat talteen tässä:</Typography>
        <form> 
            <TextField  variant="outlined" label = 'Kirjan nimi' name="nimi" id='nimi' value={kirja.nimi} margin='normal' required full onChange={ (e) => muuta(e)}/> <br/>

            <TextField  variant="outlined" label ='Kirjailia' name="kirjailija" value={kirja.kirjailija}  margin='normal' onChange={ (e) => muuta(e)}/> <br/> <br/>

            <br/>

            <Button variant='contained' color='primary' style={ {marginRight:20, marginLeft: 20} } onClick={e => lisaa(e) }><CreateIcon /> Lisää</Button>
           {/*<input type="submit" value="lisää" onClick={(e) => lisaa(e)}/>*/}
        </form>
        </Paper>


        
    )

}
export default Kirjalomake; 

{/*style={ {marginLeft: 20, marginRight: 20, maxWidth: 200}}*/}