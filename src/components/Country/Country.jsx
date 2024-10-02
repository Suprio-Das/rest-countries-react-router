import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Country.css';
const Country = ({ country }) => {
    const { official } = country.name;
    const {flags} = country;
    console.log(country)
    const navigate = useNavigate();
    const handleViewDetails = () => {
        navigate(`/country/${official}`);
    }
    return (
        <div className='country-card'>
            <img src={flags.png} alt={official} />
            <h3>{official}</h3>
            <button onClick={handleViewDetails}>View Details</button>
        </div>

    );
};

Country.propTypes = {
    country: PropTypes.object,
};

export default Country;