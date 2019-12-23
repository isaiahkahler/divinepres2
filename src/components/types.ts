export interface Presentation {
    data: Section[],
    timestamp: number,
}

export type Section = Song | Reading | Plain | Cover;

export interface PresentationSection {
    eventTitle: string | null,
    title: string,
}

export interface Song extends PresentationSection {
    number: string | null,
    lyrics: string[],
    backgroundImage: string | null,
    type: 'song'
}

export interface Reading extends PresentationSection {
    passage: string | null,
    page: string,
    content: any,
    type: 'reading'
}

export interface Plain extends PresentationSection {
    type: 'plain'
}

export interface Cover extends PresentationSection {
    heading: string,
    backgroundImage: string | null,
    subtitle: string | null,
    type: 'cover'
}