var imagenes = [
    "assets/images/images-setups-index/imagen-setup-blanco-y-negro-inicio.webp",
    "assets/images/images-setups-index/imagen-setup-pantalla.webp",
    "assets/images/images-setups-index/imagen-setup-raton.webp",
    "assets/images/images-setups-index/imagen-setup-teclado.webp",
    "assets/images/images-setups-index/imagen-setup-torre.webp",
    "assets/images/images-setups-index/imagen-setup-color-inicio-2.webp"
];

var textos = [
    { texto: "", url: "" },
    { texto: "", url: "" },
    { texto: "", url: "" },
    { texto: "", url: "" },
    { texto: "", url: "" },
    { texto: "", url: "" }
];

var indiceContenido = 0;

function cambiarContenido() {
    var imagen = document.getElementById("imagenPrincipal");
    var texto = document.getElementById("textoPrincipal");

    imagen.src = imagenes[indiceContenido];
    var enlaceActual = textos[indiceContenido];
    texto.textContent = enlaceActual.texto;
    texto.href = enlaceActual.url;

    indiceContenido++;

    if (indiceContenido == 6) {
        indiceContenido = 0;
    }

    setTimeout(cambiarContenido, 1000);

}
cambiarContenido();