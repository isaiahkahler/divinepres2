import { Presentation } from "./types";

export function Store(presentation: Presentation) {
    const past = window.localStorage.getItem('presentations');

    if(!!past){ // if past presentations stored
        // unpack past presentations
        const presentationList = JSON.parse(past);
        // add new presentation
        if (Array.isArray(presentationList)) {
            //add to beginning of array
            presentationList.unshift(presentation);
            //remove oldest presentation after five
            if(presentationList.length > 5){
                presentationList.pop();
            }
        } else {
            console.error("Could not store new presentation.");
        }
        // repack and store
        localStorage.setItem('presentations', JSON.stringify(presentationList));
    } else { 
        // if no past presentations stored
        localStorage.setItem('presentations', JSON.stringify([presentation]));
    }
}