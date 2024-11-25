
import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name ,flags ,area } =country;
    return (
        <div className='country'>
            <h2>Name:{name.common}</h2>
            <h3>area {area}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;