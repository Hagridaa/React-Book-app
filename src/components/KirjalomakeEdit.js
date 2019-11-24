import React, {useState} from 'react';
import { useParams} from 'react-router';
import TextField from '@material-ui/core/TextField';
import { Paper, Typography, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import axios from "axios";
import ClearIcon from '@material-ui/icons/Clear';




function KirjalomakeEdit () {
    const [editkirja, setValues] = useState({
        id: '',
        nimi: '',
        kirjailija: ''
    });

    
    const [viesti, setViesti] = useState('');
   
    let { id } = useParams();
    let { nimi } = useParams();
    let { kirjailija } = useParams();

    const muutaTeksti = (e) => {
        setValues({
            ...editkirja,[e.target.name]: e.target.setValues
        });

        setViesti('');
    };

    // const tyhjenna = (e) => {
    //     e.preventDefault();
    
    //     setValues({
    //         id: '',
    //         nimi: '',
    //         kirjailija:''

    //     });
    //   };

       const poistaKirja = () => {
        const deletoiKirja = async () => {
            await axios ('http://localhost:8080/kirja/delete/' + id).then(Response =>{
                if (Response.status === 200) {
                    setValues ( {nimi: '', kirjailija: ''});
                    setViesti('Deletointi onnistui!');
                    
                } else {
                    setViesti('Kannasta deletointi ei onnistunut!');
                }
            });
        }
        deletoiKirja();
       
    }
    

    
    const lisaaKirja = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id',id);
        formData.append('nimi', editkirja.nimi);
        formData.append('kirjailija', editkirja.kirjailija);
        axios.post('http://localhost:8080/kirja/edit', formData).then(Response =>{
            if (Response.status === 200) {
                setValues ( {nimi: '', kirjailija: ''});
                // setViesti('Lisäys kantaan onnistui!');
            } else {
                // setViesti('Kantaan lisääminen ei onnistunut!');
            }
        })
        }

    return(
        <Grid container justify = "center">
        <Paper style={ {width: 500, height: 400,margin:20, padding: 20, background:'pink',}}>
            <Typography>Muokkaa valitsemaasi kirjaa tässä:</Typography>
            Id: { id}
            nimi: { nimi}
            kirjailija: { kirjailija}
        <form> 
        {/* <TextField  variant="outlined" label = 'Kirjan id' name="id" id='id' value={id} margin='normal'/> <br/> */}

            <TextField  variant="outlined" label = 'Kirjan nimi' name="nimi" id='nimi' value={editkirja.nimi} margin='normal' required onChange={ (e) => muutaTeksti(e)}/> <br/>

            <TextField  variant="outlined" label ='Kirjailia' name="kirjailija" value={editkirja.kirjailija}  margin='normal' onChange={ (e) => muutaTeksti(e)}/> <br/> <br/>

            <br/>

            <Button variant='contained' color='primary' style={ {marginRight:20, marginLeft: 20} } onClick={ lisaaKirja }><CreateIcon /> Muokkaa</Button>
           {/*<input type="submit" value="lisää" onClick={(e) => lisaa(e)}/>*/}
           <Button variant='contained' color='primary' style={ {marginRight:20, marginLeft: 20} } onClick={poistaKirja } ><CreateIcon /> POISTA kirja</Button>
           {/* <Button onClick={tyhjenna} variant='contained' color='secondary'><ClearIcon /> Tyhjennä</Button> */}
           
           
        </form>
        { viesti }
        
        </Paper>
        </Grid>


        
    )
}

export default KirjalomakeEdit;