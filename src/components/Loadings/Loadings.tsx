import { Spinner, PikachuLoading, SpinningPokeball } from './LoadingStyles';
import Pikachu from '../../assets/running-pikachu.gif'
import Pokeball from '../../assets/pokeball.svg';


interface ISpinningPokeball{
    backGroundColor:string
}

const Loadings = {

    Spinner() {
        return <Spinner />
    },

    OnePikachuLoading() {
        return <PikachuLoading src={Pikachu} alt='loading' />
    },

    SpinningPokeball({backGroundColor}:ISpinningPokeball) {
        return <SpinningPokeball src={Pokeball} alt='Pokemon loading' backGroundColor={backGroundColor} />
    }

}
export default Loadings;