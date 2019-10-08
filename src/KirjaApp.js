import React, { Fragment } from 'react';
import './App.css';
import Kirjalomake from './components/Kirjalomake';
import KirjaLista from './components/KirjaLista';
import Tiedonhakulomake from './components/Tiedonhakulomake';
import theme from './components/Theme';


import { Grid, Card, MuiThemeProvider, Typography} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Henkilokunta from './components/Henkilokunta'
import { red } from '@material-ui/core/colors';
import './tyyli.css';
import {blue,green,yellow} from '@material-ui/core/colors';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

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


function KirjaApp() {
return(
    <Router>
    <MuiThemeProvider theme= { theme}>
    <React.Fragment>
    <Header/>
        <Card style={ {marginTop: 20, marginBottom: 20 } }>
        <CssBaseline />
        <Typography variant = 'h3' style={ {textAlign: "center"}}>Lukemani ja kuuntelemani kirjat talteen</Typography>
        </Card>
       

    {/*<Kirjalomake/>*/}
    {/*<Henkilokunta/>*/}
    {/*<KirjaLista kirjat={kirjatlistassa}/>*/}
    {/*<Tiedonhaku />*/}
    {/*<Tiedonhakulomake/>*/}
 

    <Switch>
    <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Kirjalomake">
            <Kirjalomake />
          </Route>

          <Route path="/KirjaLista">
            <KirjaLista kirjat={kirjatlistassa} />
          </Route>

          <Route path="/Henkilokunta">
            <Henkilokunta/>
          </Route>

          <Route path="/Tiedonhakulomake">
            <Tiedonhakulomake/>
          </Route>
         
        </Switch>

    <Footer/>
    </React.Fragment>
    </MuiThemeProvider>
    </Router>
);

}

export default KirjaApp;