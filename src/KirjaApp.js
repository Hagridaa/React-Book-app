import React, { Fragment } from 'react';
import './App.css';
import Kirjalomake from './components/Kirjalomake';
import KirjaLista from './components/KirjaLista';
import Tiedonhakulomake from './components/Tiedonhakulomake';


import { Grid, Card, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Henkilokunta from './components/Henkilokunta'
import { red } from '@material-ui/core/colors';
import './tyyli.css';

//import Tiedonhaku from './components/Tiedonhaku';

//LISTA OBJECTI korvataan 2 vaiheessa oikealla kannalla
const kirjatlistassa = [
    {
        id: 1,
        nimi: 'Sieni kirja',
        kirjailija: 'Tove Ansa'
    },

    {
        id: 2,
        nimi: 'Lemmikit',
        kirjailija: 'Hasse Piu'
    }
,
    {
        id: 3,
        nimi: 'Lemmikit kesälomalla',
        kirjailija: 'Hasse Piu'
    }

];
//katso theme fontin väri 
const theme = createMuiTheme({
palette: {
    primary:{ main: red[500]},
    secondary:{main:red[300]}
},
typography: {fontFamily: ['Big Shoulders Display','sans-serif']},
overrides: { },
});

function KirjaApp() {
return(
    <MuiThemeProvider theme= { theme}>
    <React.Fragment>
    <Header/>
        <Card style={ {marginTop: 20, marginBottom: 20 } }>
        <CssBaseline />
        <h1 style={ {textAlign: "center"}}>Lukemani ja kuuntelemani kirjat talteen</h1>
        </Card>
       

    <Kirjalomake/>
    {/*<Henkilokunta/>*/}
    {/*<KirjaLista kirjat={kirjatlistassa}/>*/}
    {/*<Tiedonhaku />*/}
    {/*<Tiedonhakulomake/>*/}
    <Footer/>
    </React.Fragment>
    </MuiThemeProvider>
);

}

export default KirjaApp;