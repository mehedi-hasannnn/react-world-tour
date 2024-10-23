import CountrySpec from "../CountrySpec/CountrySpec";

const CountryDetail = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <CountrySpec>
                country = {country}
                handleVisitedCountry = {handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
            </CountrySpec>
        </div>
    );
};

export default CountryDetail;