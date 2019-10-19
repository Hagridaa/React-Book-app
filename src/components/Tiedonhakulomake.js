// //const response = await fetch('https://api.finna.fi/v1/search?lookfor=' + kirjailija);
// import React, {useState} from 'react';


// function hae () {

//   const [kirjailija, setValues] = useState({
//     title: '',
//     nimi: ''
//   });

//   const [viesti, setViesti] = useState('');
  

//   async function fetchUrl(kirjailija) {
//     try {
//       const response = await fetch('https://api.finna.fi/v1/search?lookfor=' + kirjailija);
//       const json = await response.json();

//       setValues({
//         nimi: json.nimi,
//         title: json.title
//       });
// setViesti(''); 
// } catch(error) {
//     setViesti('lisää kirjailijan nimi');
//   }
// }


// const HaeKirjailija = (e) => {
//   e.preventDefault();
//   FetchUrl(kirjailija);
// }

// return (
//   <div>

// <form>
//           <label htmlFor='kirjailija'>kirjailija </label>
//           <input type='text' size='15' name='nimi' onBlur={ (e) => setKirjailja(e.target.value) }/>
//           &nbsp;<input type='submit' value='Hae' onClick={ (e) => HaeKirjailija(e) } />
//       </form>

//           kirjailija.nimi.lenght > 0 ?
//            <div>
//              <h3> {kirjailija.nimi}</h3>
//              <p>
//                {kirjailija.title}
//              </p>

//              <p>
//                {viesti}
//              </p>
//            </div>

//   </div>
// );

// }

// export default Tiedonhakulomake;