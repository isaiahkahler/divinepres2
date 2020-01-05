import React, { useState } from 'react';
import Create from './create';
import Template from './template';
import { Presentation, Template as TemplateType } from '../../components/types';
import { store } from '../../components/storage';

export default function CreateContainer(props: {}) {

    const [template, setTemplate] = useState<TemplateType | null>(null);

    if (template === null) {
        return (
            <Template handleChooseTemplate={(_template) => {
                setTemplate(_template);
            }} />
        );
    } else {
        return (
            <Create template={template} handleStorePresentation={(presentation) => {
                store(presentation);
            }} />
        );
    }

}