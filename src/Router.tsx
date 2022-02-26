import React from 'react'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import { Navbar } from './components';

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
