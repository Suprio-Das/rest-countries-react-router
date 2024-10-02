import './CountryDetails.css';
import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {
    // loading the specific country
    const countryData = useLoaderData();

    // getting the first country
    const country = countryData[0];

    // destructuring the country info's
    const { official } = country.name;
    const { flags, area, capital, continents } = country;

    return (
        <div className='countryDetails'>
            <img src={flags.png} alt="" />
            <table className='country-details-table'>
                <tbody>
                    <tr>
                        <td><p>Name</p></td>
                        <td>{official}</td>
                    </tr>
                    <tr>
                        <td><p>Area</p></td>
                        <td>{area}</td>
                    </tr>
                    <tr>
                        <td><p>Capital</p></td>
                        <td>{capital}</td>
                    </tr>
                    <tr>
                        <td><p>Continents</p></td>
                        <td>{continents}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CountryDetails;