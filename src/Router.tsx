import React from 'react'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import { Navbar } from './components';
// import { useQuery } from './utils/hooks';

interface IProps {
    children: JSX.IntrinsicAttributes & React.ReactNode
}

export default function Router({ children }: IProps) {
    return (

        <BrowserRouter >

            <Route path='/pokedex/' render={() => (
                <HashRouter hashType='slash' basename='/'>
                    <Navbar />
                    {children}
                </HashRouter>

            )} />

        </BrowserRouter>

    )
}




// function ScrollToTop() {
//     const {query,setQuery}=useQuery();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [query,setQuery]);

//     return null;
// }