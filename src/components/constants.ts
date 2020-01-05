import { Template, Song, Cover, Reading, Plain } from "./types";

export const HomeRoute = '/';

export const CreateRoute = '/create';

export const PresentRoute = '/present';

const templateTMBCCover:Cover = {
    backgroundImage: null,
    heading: "Sunday Morning Worship",
    subtitle: null,
    title: 'Welcome and Announcements',
    type: 'cover',
};

const templateTMBCSong:Song = {
    backgroundImage: null,
    lyrics: null,
    number: null,
    title: 'Hymn - ',
    songTitle: '',
    type: 'song'
};

const templateTMBCReading:Reading = {
    content: null,
    page: null,
    passage: null,
    title: 'Scripture - ',
    type: 'reading'
};

const templateTMBCPlain:Plain = {
    title: '',
    type: 'plain'
};

export const templateTMBC: Template = [
    {...templateTMBCCover},
    {...templateTMBCSong},
    {...templateTMBCReading},
    {...templateTMBCPlain, title: 'Pastoral Prayer'},
    {...templateTMBCSong},
    {...templateTMBCPlain, title: 'Offerings'},
    {...templateTMBCSong},
    {...templateTMBCReading, title: 'Message - '},
    {...templateTMBCSong},
    {...templateTMBCPlain, title: 'Benediction'},
];

