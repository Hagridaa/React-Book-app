import React, { useState, useEffect } from 'react';
import KirjaLista from './KirjaLista';
import { Typography } from '@material-ui/core';

function HaeKirjat () {
    const [kirjat, setKirja] = useState([]);
    const [virhe, setVirhe] = useState('haetaan');

    useEffect(() => {
        async function haeKaikkiKirjat () {
            try {
                const response = await fetch('http://localhost:8080/kirja/all');
                const json = await response.json();
                console.log(json.toString());
                setKirja(json);
               
                setVirhe('');
                
            } catch (error) {
                setKirja([]);
                setVirhe('Tietojen haku ei onnistu');
            }
        }

        haeKaikkiKirjat();
    }, []);

    if (virhe.length > 0) {
    return (<Typography>{ virhe }</Typography>);
    }

    if (kirjat.length > 0) {
        return ( <KirjaLista kirjat = {kirjat} />);
    }

    return (<Typography>Yhtään kirjaa ei löytynyt</Typography>);

}

export default HaeKirjat;