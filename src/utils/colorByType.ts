 const colorByType = (type: string) => {
    switch (type) {
        case 'grass':
            return '#74CB48'
        case 'fire':
            return '#F57D31'
        case 'water':
            return '#6493EB'
        case 'normal':
            return '#AAA67F'
        case 'rock':
            return '#B69E31'
        case 'ghost':
            return '#70559B'
        case 'fighting':
            return '#C12239'
        case 'steel':
            return '#B7B9D0'
        case 'flying':
            return '#A891EC'
        case 'poison':
            return '#A43E9E'
        case 'ground':
            return '#DEC16B'
        case 'psychic':
            return '#FB5584'
        case 'ice':
            return '#9AD6DF'
        case 'dark':
            return '#75574C'
        case 'electric':
            return '#F9CF30'
        case 'fairy':
            return '#E69EAC'
        case 'dragon':
            return '#7037FF'
        case 'bug':
            return '#A7B723'
        default:
            return '#EFEFEF'
    }
};

export default colorByType;