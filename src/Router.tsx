import React from 'react'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

interface IProps {
    children: JSX.IntrinsicAttributes & React.ReactNode
}

export default function Router({ children }: IProps) {
    return (

        <BrowserRouter >

            <Route path='/' render={() => (
                <HashRouter hashType='hashbang' basename='/'>
                    <Navbar />
                    {children}
                </HashRouter>

            )} />

        </BrowserRouter>

    )
}
