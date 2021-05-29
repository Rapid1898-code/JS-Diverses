const fetch = require('node-fetch');

async function main() {
    const response = await fetch('http://localhost:2121/');
    const json = await response.json();
    console.log(json);
}

main().catch(console.error);
