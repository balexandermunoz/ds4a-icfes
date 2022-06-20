import React, { useState, useEffect } from 'react';
import { json } from 'd3';
import { feature, mesh } from 'topojson';

const jsonUrl = 'https://gist.githubusercontent.com/john-guerra/43c7656821069d00dcbc/raw/3aadedf47badbdac823b00dbe259f6bc6d9e1899/colombia.geo.json';

export const useWorldAtlas = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        json(jsonUrl).then(topology => {
            const { countries, land } = topology.objects;
            setData({
                countries: feature(topology, countries),
                interiors: mesh(topology, countries, (a, b) => a !== b)
            });
        });
    }, []);

    return data;
};