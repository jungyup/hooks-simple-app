import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
    // initialize state
    const [resources, setResources] = useState([]);

    // You can either declare function here or inside useEffect
    // const fetchResource = async () => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

    //     setResources(response.data);
    // };

    // use this in place of componentDidUpdate lifecycle method
    // arrow function will be called whenever the vlaue inside array is different
    useEffect(() => {
        (async resource => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

            setResources(response.data);
        })(resource);
    }, [resource]);

    return resources;
}

export default useResources;