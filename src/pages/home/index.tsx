import React, { useState, useEffect } from 'react';
import Home from './home';
import { getStored } from '../../components/storage';
import { Presentation } from '../../components/types';



export default function HomeContainer(props: {}) {

    const [presentations, setPresentations] = useState<Presentation[]>([]);

    useEffect(() => {
        setPresentations(getStored());
    }, []);

    return(
        <Home presentations={presentations} />
    );
}