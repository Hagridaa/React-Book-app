import React, {useState, useEffect} from 'react';



//https://api.finna.fi/v1/<toiminto>?<parametrit>
//https://api.finna.fi/v1/search?lookfor=lehtola, leena
//https://www.kiwi.fi/display/Finna/Finnan+avoin+rajapinta

//harjoittelua

async function fetchUrl (kirjailija) {

    //tähän muuttuvat const (eli mitä haetaan)
    //ja alustus useState avulla
    //esim const [title, setTitle] = useState("");
    //const [viesti, setVirhe] = useState('Haetaan tietoja ...');

    const [title, setTitle] = useState("haetaan tietoja")

    //tähän tietojenhaku functio
    //tee lomake mista haku ja listaus alle materia
    async function fetrcUrl() {

        try {

            const response = await fetch('https://api.finna.fi/v1/search?lookfor=' + kirjailija)

            //muutetaan sitten json muotoon
            //const json = await.response.json();

            //sitten asetetaan saatu tieto ja virhe tyhjäksi
            setTitle(json.items[0].title);
            setVirhe("");

        } catch (error) {
            //jos haku ei onnnistu
            setVirhe('Tiedonhaku ei onnistunut');
            console.log(error); //errori logiin
        }
    }

    //tässä useEffectin avulla tehdään tämä aina kun komponentti aukee ekan kerran
    //if lauseella tulostuu joko haettu tieto 
    //jos ei tule vielä tietoa niin tulostuu viestin sisältö
//[] - kertoo, että toteutetaan vain komponentin alussa kerran
    useEffect(() => {fetrcUrl()}, []);

    if (viesti.length > 0){
        return(<div>{viesti}</div>)
    }

    return
    (<div>{title}</div>)
    
}

export default Tiedonhaku;
