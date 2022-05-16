import { info } from "src/app/interfaces/store.interface"

export interface location{
        id: number,
        name: string,
        type: string,
        dimension: string,
        residents: Array<string>,
        url: string,
        created: string
}

export interface locationState{
    items: Array<location>
    info: {}
}

export interface response{
    info:info,
    results: Array<location>
}