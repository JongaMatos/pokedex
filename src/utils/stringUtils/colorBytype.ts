const colorByType = (type: string) => {

    switch (type) {
        case 'grass'://Done
            return '#59C04B'
        case 'fire'://Done
            return '#F3973E'
        case 'water'://Done
            return '#3393DD'
        case 'normal'://done
            return '#929BA3'
        case 'rock'://Done
            return '#C9B787'
        case 'ghost'://Done
            return '#4B6AB3'
        case 'fighting'://Done
            return '#E13A6A'
        case 'steel'://Done
            return '#5A8FA3'
        case 'flying'://Done
            return '#8AACE4'
        case 'poison'://Done
            return '#B667CF'
        case 'ground'://Done
            return '#E97337'
        case 'psychic'://Done
            return '#EE6375'
        case 'ice'://done
            return '#5CD2C1'
        case 'dark'://done
            return '#5B5366'
        case 'electric'://Done
            return '#FBD349'
        case 'fairy'://Done
            return '#EF89EC'
        case 'dragon'://Done
            return '#1D70CA'
        case 'bug'://Done
            return '#84C435'
        case 'shadow'://Done
            return '#5B5366'
        default:
            return '#EFEFEF'
    }
};

export default colorByType;