import axios from "axios";
import { SetStateAction, useCallback, useEffect, useState } from "react";

const BASE_URL = "https://restcountries.com/v3.1";

// to get all countries - /all
// to filter by capital city - /capital/{capital}

const FILTERABLE_CAPITALS = [
    "Tallinn",
    "Helsinki",
    "Stockholm",
    "Oslo",
    "Copenhagen",
    "Reykjavik",
] as const;

type Capital = (typeof FILTERABLE_CAPITALS)[number];

interface Country {
    name: {
        common: string;
    };
    capital: string;
}

const CountriesPage = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchCountries() {
            const response = await axios.get(`${BASE_URL}/all`);
            setCountries(response.data);
        }
        fetchCountries();
    }, []);

    const handleSelectChange = useCallback(
        (event: { target: { value: SetStateAction<string> } }) => {
            async function fetchCountries() {
                const response = await axios.get(
                    `${BASE_URL}/capital/${event.target.value}`
                );
                setCountries(response.data);
            }
            fetchCountries();
        },
        []
    );

    return (
        <div>
            <select onChange={handleSelectChange}>
                {FILTERABLE_CAPITALS.map((capital: Capital) => {
                    return (
                        <option key={capital} value={capital}>
                            {capital}
                        </option>
                    );
                })}
            </select>

            {countries.map((country: Country) => {
                return <Country country={country?.name?.common} />;
            })}
        </div>
    );
};

function Country({ country }: { country: string }) {
    return <div key={country}>{country}</div>;
}

export default CountriesPage;
