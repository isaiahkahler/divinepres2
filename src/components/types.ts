export interface Presentation {
    data: Section[],
    timestamp: number,
}

export type Template = Section[];

export type Section = Song | Reading | Plain | Cover;

export interface PresentationSection {
    title: string,
}

export interface Song extends PresentationSection {
    songTitle: string,
    number: string | null,
    lyrics: string | null,
    backgroundImage: string | null,
    type: 'song'
}

export interface Reading extends PresentationSection {
    passage: string | null,
    page: string | null,
    content: any | null,
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