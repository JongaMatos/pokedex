import { idText } from "typescript";

export default function urlToId(url: string) {
    
    const id = parseInt(url.split("/").slice(-2)[0])
    // console.log(id);
    return id;
}

