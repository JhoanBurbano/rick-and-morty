import { info } from "src/app/interfaces/store.interface"

export interface episode{
        id: number,
        name: string,
        air_date: string,
        espisode: string,
        characters: Array<string>,
        url: string,
        created: string
}

export interface episodeState{
    items: Array<episode>,
    info: {}
}

export interface response{
    info:info,
    results: Array<episode>
}