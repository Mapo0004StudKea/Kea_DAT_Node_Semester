import fs from 'fs';

export function readPage(path) { // read the content of a file
    return fs.readFileSync(path).toString(); // read the file
}

const header = readPage('./public/components/header/header.html'); // read the header.html file
const footer = readPage('./public/components/footer/footer.html'); // read the footer.html file

export function constructPage(pageContent, options={}) { // options is an object with optional properties
    return header
        .replace('$NAV_TITLES$', options.title  || 'Doginder') // if options.title is not provided, use 'Doginder'
        .replace('$CSS_LINKS$', options.cssLinks  || '') // if options.cssLinks is not provided, use ''
    + pageContent // the content of the page
    + footer; // the footer
}