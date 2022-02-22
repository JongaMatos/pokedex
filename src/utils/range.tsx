export default function range(start: number = 1, size: number = 5, max: number) {
    if (start < 1)
        start = 1;
    if (start + size > max)
        start = max - size + 1;

    return Array.from({ length: size }, (_, i) => i + start);
}