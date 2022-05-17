import { info } from "src/app/interfaces/store.interface"

export interface character{
        id: number,
        name: string,
        status: string,
        espisode: string,
        type: string,
        gender: string,
        origin: objectDetails,
        location: objectDetails,
        image: string,
        episode: Array<string>,
        url: string,
        created: string,
        species: string,
}

export interface characterState{
    items: Array<character>,
    info:{},
}

export interface responseCharacters{
    info:info,
    results: Array<character>
}
export interface objectDetails {
    name: string,
    url: string
}