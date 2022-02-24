export default function urlToId(url: string) {
    
    const id:Number = parseInt(url.split("/").slice(-2)[0])
    return id;
}

