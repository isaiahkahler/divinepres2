import { Presentation } from "./types";

const storageKey = 'presentations';

/**
 * Store new presentation
 */
export function store(presentation: Presentation) {
    const past = window.localStorage.getItem(storageKey);

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
        localStorage.setItem(storageKey, JSON.stringify(presentationList));
    } else { 
        // if no past presentations stored
        localStorage.setItem(storageKey, JSON.stringify([presentation]));
    }
}

/**
 * @returns List of stored presentations.
 */
export function getStored():Presentation[]{
    const data = localStorage.getItem(storageKey);
    if(!!data) {
        const parsedData = JSON.parse(data);
        if(Array.isArray(parsedData)){
            return parsedData;
        } else {
            console.error('Could not retrieve presentations.');
        }
    } 
    return [];
}