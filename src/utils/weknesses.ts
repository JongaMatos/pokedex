import { IType } from "../global";

export default function weknesses(types: IType[]) {
    var weaknesses: string[] = [];


    function add(type: string) {

        const indexWeak = weaknesses.findIndex((weak) => weak === type);
        // const indexType = types.findIndex((item) => item.type.name === type);
        const indexType = -1

        if (indexWeak === -1 && indexType === -1)
            weaknesses.push(type);
    }


    types.map((item) => {

        switch (item.type.name) {
            case 'grass'://Done
                ['bug', 'fire', 'flying', 'ice', 'poison'].map((type: string) => (add(type)));
                break;
            case 'fire'://Done
                ['ground', 'rock', 'water'].map((type: string) => (add(type)));
                break;

            case 'water'://Done
                ['ground', 'rock', 'fire'].map((type: string) => (add(type)));
                break;

            case 'normal'://done
                ['fighting'].map((type: string) => (add(type)));
                break;

            case 'rock'://Done
                ['fighting', 'grass', 'ground', 'steel', 'water'].map((type: string) => (add(type)));
                break;

            case 'ghost':
                ['shadow', 'ghost'].map((type: string) => (add(type)));
                break;

            case 'fighting'://Done
                ['fairy', 'flying', 'psychic'].map((type: string) => (add(type)));
                break;

            case 'steel'://Done
                ['fighting', 'flying', 'ground'].map((type: string) => (add(type)));
                break;

            case 'flying'://Done
                ['electric', 'ice', 'rock'].map((type: string) => (add(type)));
                break;

            case 'poison'://Done
                ['ground', 'psychic'].map((type: string) => (add(type)));
                break;

            case 'ground'://Done
                ['ice', 'grass', 'water'].map((type: string) => (add(type)));
                break;

            case 'psychic'://Done
                ['bug', 'shadow', 'ghost'].map((type: string) => (add(type)));
                break;

            case 'ice'://done
                ['fighting', 'fire', 'rock', 'steel'].map((type: string) => (add(type)));
                break;

            case 'dark'://done
                [].map((type: string) => (add(type)));
                break;

            case 'electric'://Done
                ['ground'].map((type: string) => (add(type)));
                break;

            case 'fairy'://Done
                ['steel', 'poison'].map((type: string) => (add(type)));
                break;

            case 'dragon'://Done
                ['dragon', 'fairy', 'ice'].map((type: string) => (add(type)));
                break;

            case 'bug'://Done
                ['fire', 'flying', 'rock'].map((type: string) => (add(type)));
                break;

            case 'shadow'://Done
                ['bug', 'fairy', 'fighting'].map((type: string) => (add(type)));
                break;

            default:
                break;

        }
        return true;
    });

    // [].map((type: string) => ( add(type) ))



    return weaknesses;
}
