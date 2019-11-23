import React from 'react';
import './App.css';
import Kirjalomake from './components/Kirjalomake';
import KirjaLista from './components/KirjaLista';
import theme from './components/Theme';
import {MuiThemeProvider} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Henkilokunta from './components/Henkilokunta'
import './tyyli.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


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
  <React.Fragment>
    <Router>
    <MuiThemeProvider theme= { theme}>
    <CssBaseline />
    
    <Header/>
    
       
       

    {/*<Kirjalomake/>*/}
    {/*<Henkilokunta/>*/}
    {/*<KirjaLista kirjat={kirjatlistassa}/>*/}
    {/*<Tiedonhaku />*/}
    {/*<Tiedonhakulomake/>*/}
 
{/*tässä ohjeete miten reititetään*/}
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

         {/*<Route path="/Tiedonhakulomake">
            <Tiedonhakulomake/>
          </Route>*/}

          <Route path="/">
            <Home />
          </Route>
         
        </Switch>

    <Footer/>
   
    </MuiThemeProvider>
    </Router>
    </React.Fragment>
);

}

export default KirjaApp;