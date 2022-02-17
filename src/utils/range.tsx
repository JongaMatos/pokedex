export default function range(start: number = 1, size: number = 5) {
    
    return Array.from({ length: size }, (_, i) => i + start);
}