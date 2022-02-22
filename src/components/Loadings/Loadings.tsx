import { Spinner,PikachuLoading } from './LoadingStyles';
import Pikachu from '../../assets/running-pikachu.gif'



const Loadings = {

    Spinner() {
        return<Spinner />
    },

    OnePikachuLoading(){
        return <PikachuLoading src={Pikachu} alt='loading'/>
    }


}
export default Loadings;