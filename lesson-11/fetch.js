// fetch('https://swapi.dev/api/planets/7', {
//     method: 'GET'
// }).then(response => {
//     return response.json()
// }).then(vlad => {
//     console.log(vlad);
// })
// .catch(err => {
//     console.log(123,err)
// })

const fetchFunc = async () => {
    console.time('event1')
    try{
        const fetch1 = await fetch('https://swapi.dev/api/planets/1', {method: 'GET'});
        const resFetch1 = await fetch1.json();
        console.log(resFetch1);
    } catch(e){}

        const fetch2 = await fetch('https://swapi.dev/api/planets/2', {method: 'GET'});
    const resFetch2 = await fetch2.json();
    console.log(resFetch2);

        const fetch3 = await fetch('https://swapi.dev/api/planets/3', {method: 'GET'});
    const resFetch3 = await fetch3.json();
    console.log(resFetch3);

        const fetch4 = await fetch('https://swapi.dev/api/planets/4', {method: 'GET'});
    const resFetch4 = await fetch4.json();
    console.log(resFetch4);
    console.timeEnd('event1')

    console.time('promiseAll')
    const numbers = [1,2,3,4];
    const allPromises = numbers.map(num => fetch(`https://swapi.dev${num === 1 ? num : ''}/api/planets/${num}`, {method: 'GET'}))

        const awaitedPromises = await Promise.allSettled(allPromises)
        console.log(awaitedPromises)
        const awaitedJsons = await Promise.allSettled(awaitedPromises.map(prom => prom?.value?.json()))
        console.log(awaitedJsons)

    console.timeEnd('promiseAll')
}

// fetchFunc()

class FetchHandler {
    constructor(url, headers = {}){
        this.url = url;
        this.headers = headers;
    }

    async #fetchCall(apiSubPath, method = 'GET') {
        return fetch(`${this.url}${apiSubPath}`, {method, headers: this.headers})
    }

    async fetchPlanet(planetId) {
        try {
            const fetchResp = await this.#fetchCall(`/api/planets/${planetId}`)
            return fetchResp.json() 
        } catch(e){
            console.log(e)
        }
    }
}

const fetcher = new FetchHandler('https://swapi.dev');

const asyncCaller = async () => {
    console.log(await fetcher.fetchPlanet(13))
}

asyncCaller()