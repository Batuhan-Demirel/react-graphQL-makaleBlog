import React from 'react'
import {Link} from "react-router-dom"

export const Baslik = () => {
    return (
        <nav className="nav-container">
            <div className="logo">
                <Link to="/"><div>BD</div></Link>
            </div>
         <ul>
             <li>
                 <Link to="/"><div>Makale Listesi</div></Link>
             </li>
             <li>
                 <Link to="/ekle"><div>Makale ekle</div></Link>
             </li>
         </ul>
        </nav>
    )
}
