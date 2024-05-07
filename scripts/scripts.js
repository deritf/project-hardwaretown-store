// --------------------------------------- MENU SUPERIOR HEADER PRINCIPAL para pantallas de 1200px o mayores ---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const enlaceComponentes = document.getElementById("enlace-componentes");
  const enlacePreensamblados = document.getElementById("enlace-preensamblados");
  const enlacePerifericos = document.getElementById("enlace-perifericos");
  const enlaceTuSetup = document.getElementById("enlace-tu-setup");
  const seccionHeaderCComponentes = document.getElementById(
    "seccion-header-c-componentes"
  );
  const seccionHeaderCPreensamblados = document.getElementById(
    "seccion-header-c-preensamblados"
  );
  const seccionHeaderCPerifericos = document.getElementById(
    "seccion-header-c-perifericos"
  );
  const seccionHeaderCTuSetup = document.getElementById(
    "seccion-header-c-tu-setup"
  );
  const header = document.querySelector("header");

  let headerCVisible = null;

  function cerrarTodasSecciones() {
    seccionHeaderCComponentes.style.display = "none";
    seccionHeaderCPreensamblados.style.display = "none";
    seccionHeaderCPerifericos.style.display = "none";
    seccionHeaderCTuSetup.style.display = "none";
    headerCVisible = null;
  }

  enlaceComponentes.addEventListener("click", function (event) {
    event.preventDefault();
    if (headerCVisible !== "componentes") {
      cerrarTodasSecciones();
      seccionHeaderCComponentes.style.display = "block";
      headerCVisible = "componentes";
    } else {
      cerrarTodasSecciones();
    }
  });

  enlacePreensamblados.addEventListener("click", function (event) {
    event.preventDefault();
    if (headerCVisible !== "preensamblados") {
      cerrarTodasSecciones();
      seccionHeaderCPreensamblados.style.display = "block";
      headerCVisible = "preensamblados";
    } else {
      cerrarTodasSecciones();
    }
  });

  enlacePerifericos.addEventListener("click", function (event) {
    event.preventDefault();
    if (headerCVisible !== "perifericos") {
      cerrarTodasSecciones();
      seccionHeaderCPerifericos.style.display = "block";
      headerCVisible = "perifericos";
    } else {
      cerrarTodasSecciones();
    }
  });

  enlaceTuSetup.addEventListener("click", function (event) {
    event.preventDefault();
    if (headerCVisible !== "tu-setup") {
      cerrarTodasSecciones();
      seccionHeaderCTuSetup.style.display = "block";
      headerCVisible = "tu-setup";
    } else {
      cerrarTodasSecciones();
    }
  });

  header.addEventListener("mouseleave", function () {
    cerrarTodasSecciones();
  });

  const btnInfo = document.getElementById("btn-info");
  const contenedorInfo = document.getElementById("contenedor-info");

  btnInfo.addEventListener("click", function () {
    if (
      contenedorInfo.style.display === "none" ||
      contenedorInfo.style.display === ""
    ) {
      contenedorInfo.style.display = "block";
      btnInfo.classList.add("active");
      btnInfo.textContent = "- Info";
    } else {
      contenedorInfo.style.display = "none";
      btnInfo.classList.remove("active");
      btnInfo.textContent = "+ Info";
    }
  });
});

// --------------------------------------- RANGO DE PRECIOS FILTRO TIENDA ---------------------------------------

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 100;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// --------------------------------------- APARICION DE MINI MENU BUSQUEDA Y OTROS ---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const miniMenuHamburguesa = document.getElementById("mini-menu-hamburguesa");
  const miniBusqueda = document.getElementById("mini-busqueda");
  const seccionMiniHeaderCMenu = document.getElementById(
    "seccion-mini-header-c-menu"
  );
  const seccionMiniHeaderCBuscador = document.getElementById(
    "seccion-mini-header-c-buscador"
  );
  const header = document.querySelector("header");

  let headerCVisible = null;

  function cerrarTodasSecciones() {
    seccionMiniHeaderCMenu.style.display = "none";
    seccionMiniHeaderCBuscador.style.display = "none";
    headerCVisible = null;
  }

  miniMenuHamburguesa.parentNode.addEventListener("click", function (event) {
    event.preventDefault();
    if (headerCVisible !== "minimenuhamburguesa") {
      cerrarTodasSecciones();
      seccionMiniHeaderCMenu.style.display = "block";
      headerCVisible = "minimenuhamburguesa";
    } else {
      cerrarTodasSecciones();
    }
  });

  miniBusqueda.parentNode.addEventListener("click", function (event) {
    event.preventDefault();
    if (headerCVisible !== "minimenubusqueda") {
      cerrarTodasSecciones();
      seccionMiniHeaderCBuscador.style.display = "flex";
      headerCVisible = "minimenubusqueda";
    } else {
      cerrarTodasSecciones();
    }
  });
});

// --------------------------------------- DESAPARECER MINI MENU si la ventana supera los 1200px ---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const seccionBuscador = document.getElementById(
    "seccion-mini-header-c-buscador"
  );
  const seccionMenu = document.getElementById("seccion-mini-header-c-menu");

  function actualizarEstadoMiniBuscadorYMiniMenu() {
    if (window.innerWidth > 1200) {
      seccionBuscador.style.display = "none";
      seccionMenu.style.display = "none";
    }
  }

  actualizarEstadoMiniBuscadorYMiniMenu();

  window.addEventListener("resize", actualizarEstadoMiniBuscadorYMiniMenu);
});

// --------------------------------------- ELEMENTOS LINK y SUBLINK DEL MINI MENU ---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(
    "#seccion-mini-header-c-menu .ul_links .link"
  );

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      const sublinks = this.querySelectorAll(".sublink");

      // Si los sublinks ya están visibles, se ocultan
      if (sublinks[0].style.display === "block") {
        sublinks.forEach(function (sublink) {
          sublink.style.display = "none";
        });
      } else {
        // Ocultar todos los sublinks que estén visibles
        document.querySelectorAll(".sublink").forEach(function (sublink) {
          sublink.style.display = "none";
        });

        // Mostrar los sublinks correspondientes al link clicado
        sublinks.forEach(function (sublink) {
          sublink.style.display = "block";
        });
      }
    });
  });
});

// --------------------------------------- MANTENER EL CÍRCULO ROSA ACTIVO EN EL MINI MENU AL HACER CLICK ---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const miniMenuHamburguesa = document.getElementById("mini-menu-hamburguesa");
  const miniBusqueda = document.getElementById("mini-busqueda");
  const seccionMiniHeaderCMenu = document.getElementById(
    "seccion-mini-header-c-menu"
  );
  const seccionMiniHeaderCBuscador = document.getElementById(
    "seccion-mini-header-c-buscador"
  );

  function toggleBackgroundColorVisibility(element) {
    element.classList.toggle("background-color-visible");
  }

  function cerrarTodasSecciones() {
    miniMenuHamburguesa.parentNode.classList.remove("background-color-visible");
    miniBusqueda.parentNode.classList.remove("background-color-visible");
  }

  miniMenuHamburguesa.parentNode.addEventListener("click", function (event) {
    cerrarTodasSecciones();
    event.preventDefault();
    if (getComputedStyle(seccionMiniHeaderCMenu).display !== "none") {
      toggleBackgroundColorVisibility(miniMenuHamburguesa.parentNode);
    }
  });

  miniBusqueda.parentNode.addEventListener("click", function (event) {
    cerrarTodasSecciones();
    event.preventDefault();
    if (getComputedStyle(seccionMiniHeaderCBuscador).display !== "none") {
      toggleBackgroundColorVisibility(miniBusqueda.parentNode);
    }
  });
});

// --------------------------------------- RESETEAR EL MARCADO DE ELEMENTOS EN EL MINI MENU SI LA PANTALLA SE AMPLIA A 1200px o mas ---------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const miniMenuHamburguesa = document.getElementById("mini-menu-hamburguesa");
  const miniBusqueda = document.getElementById("mini-busqueda");
  const seccionMiniHeaderCMenu = document.getElementById(
    "seccion-mini-header-c-menu"
  );
  const seccionMiniHeaderCBuscador = document.getElementById(
    "seccion-mini-header-c-buscador"
  );

  function toggleBackgroundColorVisibility(element) {
    element.classList.toggle("background-color-visible");
  }

  function cerrarTodasSecciones() {
    miniMenuHamburguesa.parentNode.classList.remove("background-color-visible");
    miniBusqueda.parentNode.classList.remove("background-color-visible");
  }

  function cerrarTodasSeccionesSiEsMayorDe1200px() {
    const mediaQuery = window.matchMedia("screen and (min-width: 1200px)");

    function handleMediaQueryChange(mediaQueryList) {
      if (mediaQueryList.matches) {
        cerrarTodasSecciones();
      }
    }

    mediaQuery.addEventListener("change", function (event) {
      handleMediaQueryChange(event.target);
    });

    // Verificar el estado inicial
    if (mediaQuery.matches) {
      cerrarTodasSecciones();
    }
  }

  miniMenuHamburguesa.parentNode.addEventListener("click", function (event) {
    cerrarTodasSecciones();
    event.preventDefault();
    if (getComputedStyle(seccionMiniHeaderCMenu).display !== "none") {
      toggleBackgroundColorVisibility(miniMenuHamburguesa.parentNode);
    }
  });

  miniBusqueda.parentNode.addEventListener("click", function (event) {
    cerrarTodasSecciones();
    event.preventDefault();
    if (getComputedStyle(seccionMiniHeaderCBuscador).display !== "none") {
      toggleBackgroundColorVisibility(miniBusqueda.parentNode);
    }
  });

  // Llamar a la función para cerrar secciones si la pantalla es mayor de 1200px
  cerrarTodasSeccionesSiEsMayorDe1200px();
});

// --------------------------------------- BOTON TO THE TOP - HACIA ARRIBA ---------------------------------------

const toTop = document.querySelector("#boton-hacia-arriba img");

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.parentElement.classList.add("active");
  } else {
    toTop.parentElement.classList.remove("active");
  }
});
