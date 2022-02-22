import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonTypes() {
    return (
        <div>
            <Link to="/type/fire/">Fire</Link>
            <Link to="/type/grass/">grass</Link>
            <Link to="/type/water/">water</Link>


        </div>
    )
}
