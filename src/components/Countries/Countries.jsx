import { useLoaderData } from "react-router-dom";

const Countries = () => {
    const countries = useLoaderData();
    console.log(countries)
    return (
        <div>
            
        </div>
    );
};

export default Countries;