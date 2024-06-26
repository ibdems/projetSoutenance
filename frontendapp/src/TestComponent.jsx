import React, { useEffect, useState, useRef } from 'react';
import Axios from './components/Axios';
import Select from 'react-select';

const TestComponent = () => {
    const [niveau, setNiveau] = useState([]);
    const [loading, setLoading] = useState(true);
    const toast = useRef(null);

    useEffect(() => {
        console.log("useEffect triggered");
        Axios.get('formateurs/niveau/')
          .then(response => {
            const options = response.data.map(item => ({
                value: item.id,
                label: item.libelle
            }));
            setNiveau(options);
            setLoading(false);
            console.log("Data fetched:", options);
          })
          .catch(error => {
            console.error("There was an error fetching the sessions!", error);
            if (toast.current) {
              toast.current.show({
                severity: "error",
                summary: "Erreur",
                detail: "Echec de chargement des sessions! Verifier votre connexion et reactualisez la page",
                life: 7000
              });
            }
          });
    }, []);

    return (
        <div>
            {loading ? "Loading..." : (
                <Select 
                    options={niveau}
                    placeholder="Select Niveau"
                />
            )}
        </div>
    );
};

export default TestComponent;
