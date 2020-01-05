const fs = require('fs');
const fetch = require('node-fetch');

async function fetchHymn(hymn) {
    const response = await fetch(`http://localhost:4000/api/hymn/${hymn}`);
    return await response.text();
}

async function fetchHymnTitle(hymn) {
    const response = await fetch(`http://localhost:4000/api/hymntitle/${hymn}`);
    return await response.text();
}


const obj = {};

const promiseTimeout = function (ms, promise) {

    // Create a promise that rejects in <ms> milliseconds
    let timeout = new Promise((resolve, reject) => {
        let id = setTimeout(() => {
            clearTimeout(id);
            reject('Timed out in ' + ms + 'ms.')
        }, ms)
    })

    // Returns a race between our timeout and the passed in promise
    return Promise.race([
        promise,
        timeout
    ]);
};


async function get() {
    for (let index = 2; index <= 666; index++) {

        // if (index === 381) {
        //     index++;
        // }


        try {
            const title = await promiseTimeout(10000, fetchHymnTitle(index.toString()));

            try {
                const lyrics = await promiseTimeout(10000, fetchHymn(index.toString()));

                obj[index] = { title: title, lyrics: lyrics }
                console.log(`fetched ${index}/${666}`);

            } catch (e) {
                console.log(`failed to fetch lyrics ${index}`);
                console.error(e);
                obj[index] = { title: title, lyrics: '' }
            }

        } catch (e) {
            console.log(`failed to fetch ${index}`);
            console.error(e);
        }

    }
}

get().then(() => {
    console.log('complete');
    const x = JSON.stringify(obj);
    fs.writeFile('songs.json', x, () => { console.log('wrote') });
});




