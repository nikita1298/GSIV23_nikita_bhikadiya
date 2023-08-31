import moment from "moment";

export interface ActorsInfo {
    name:string
}


export const getRuntime = (time: number) => {
    const a = moment().startOf('day')
        .seconds(time * 60)
        .format('H:mm');
    console.log("a", a)
    return a
 
}


export const getActors = (arr: Array<ActorsInfo>) => {
    const ar = arr.map((a) => a.name);
    return ar.join(", ")
}