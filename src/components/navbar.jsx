import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <header>
        <div className="aviso">
                <p>Envíos gratis a todo CABA por motomensajería | Envíos a todo el país | 15% de descuento abonando por transferencia bancaria o efectivo</p>
        </div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./sections/catalogo.html">Catálogo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./sections/contact.html">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <img class="navbar-brand" href="./index.html" src="/img/beigedOutShort.svg"></img>
                    <i class="fa-solid fa-cart-shopping" href="./sections/checkout.html"></i>
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar