import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            {
                countries.map((country, index) => <Country key={index} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;