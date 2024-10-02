import './Countries.css';
import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h3 className="styled-title">All Countries</h3>
            <div className="countries">
                {
                    countries.map((country, index) => <Country key={index} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;