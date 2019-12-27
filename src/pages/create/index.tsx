import React, { useState, useEffect, useRef } from 'react';
import Create from './create';
import Template from './template';
import { Presentation, Template as TemplateType } from '../../components/types';

export default function CreateContainer(props: {}) {

    const [template, setTemplate] = useState<TemplateType | null>(null);

    const [presentation, setPresentation] = useState<Presentation>({
        data: [],
        timestamp: Date.now(),
    });

    const _ref = useRef();


    if (template === null) {
        return (
            <Template handleChooseTemplate={(template) => {
                setTemplate(template);
            }} />
        );
    } else {
        return (
            <Create />
        );
    }

}