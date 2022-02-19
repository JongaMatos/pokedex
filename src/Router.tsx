import React from 'react'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'

interface IProps {
    children: JSX.IntrinsicAttributes & React.ReactNode
}

export default function Router({ children }: IProps) {
    return (
        
        <BrowserRouter>

            <Route path='/' render={() => (

                <HashRouter hashType='slash' basename='/'>
                    {children}
                </HashRouter>

            )} />

        </BrowserRouter>

    )
}
