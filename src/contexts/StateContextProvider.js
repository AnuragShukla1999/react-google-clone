const { createContext, useState, useContext } = require("react");


const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (url) => {
        setLoading(true);

        const res = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c475fe8f75mshf397b77fa5d22eap1e924cjsnaee7c482b0b7',
                'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com'
            },
        });

        const data = await res.json();

        setResults(data);
        setLoading(false);
    };

    return (
        <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }} >
            {children}
        </StateContext.Provider>
    );
};


export const useStateContext = () => useContext(StateContext);