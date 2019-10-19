import { red } from '@material-ui/core/colors';
import '../tyyli.css';
import {green,yellow} from '@material-ui/core/colors';
import {createMuiTheme, Paper } from '@material-ui/core';



//katso theme fontin väri 
const theme = createMuiTheme({
    palette: {
        primary:{ main: red[300], secondary: yellow[600]},
        secondary:{main:red[600], secondary:green[green]},
        background: {default: red[100]},
        action: {hover: red[100]}
        
    },
    typography: {color:'primary',fontFamily: ['Big Shoulders Display','sans-serif']},
  
    });

    export default theme;