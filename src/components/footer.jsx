import React from 'react'
import './footer.css'

const footer = () => {
    return (
    <footer>
    <div className="footerCont">
    <div className="información">
        <p>
            Categorías
        </p>
        <ul>
            <li>
                <a href="index.html">Inicio</a>
            </li>
            <li>
                <a href="./sections/catalogo.html">Catálogo</a>
            </li>
            <li>
                <a href="./sections/contact.html">Contacto</a>
            </li>
        </ul>
    </div>
    <div className="redesSociales">
            <p>
                Seguinos en nuestras redes para más novedades!
            </p>
            <ul>
                <li><i class="fa-brands fa-whatsapp"></i><a href="https://wa.me/1122233344?text=Hola!%20Quería%20hacerte%20una%20consulta..." target="blank"> +541122233344</a></li>
                <li><i class="fa-brands fa-instagram"></i><a href="https://www.instagram.com/beiged_out" target="blank"> @beiged_out</a></li>
                <li><i class="fa-regular fa-envelope"></i><a href="mailto:beiged@out.com" target="blank"> Beiged@out.com</a></li>
                <li><i class="fa-solid fa-location-dot"></i><a href="https://goo.gl/maps/vc3u1782g8y4N4EP9" target="blank"> Av. Cabildo 3067, Buenos Aires, Argentina</a></li>
            </ul>
    </div>
    <div className="newsletter">
        <form className="formNL">
            <p>Suscribite a nuestro Newsletter</p>
            <div class="form-outline mb-4">
                <label class="form-label" for="form4Example1">Nombre</label>
                <input type="text" id="form4Example1" class="form-control" placeholder="Su Nombre" />
            </div>
            <div class="form-outline mb-4">
                <label class="form-label" for="form4Example2">Correo electrónico</label>
                <input type="email" id="form4Example2" class="form-control" placeholder="ejemplo@mail.com" />
            </div>
            <button type="submit" class="btn btn-dark btn-block mb-4">Enviar</button>
        </form>
    </div>
</div>
    <p>
        Beiged out! © All rights Reserved 2023.
    </p>
</footer>
  )
}

export default footer