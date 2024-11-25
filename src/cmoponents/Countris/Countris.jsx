import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countris = () => {
    const [countris, setCountris] = useState([]);
    useEffect(() => {
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => setCountris(data))
    }, [])
    return (
        <div>
            <h3>Countris :{countris.length} </h3>
            {
                countris.map(country =><Country key={country.cca3} country={country}> </Country>)
            }
        </div>
    );
};

export default Countris;