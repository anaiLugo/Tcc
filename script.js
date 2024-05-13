document.addEventListener('DOMContentLoaded', function() {
    const productosDestacados = document.getElementById('productosDestacados');
    const categoriesList = document.getElementById('categoriesList');
    const imagenes = document.querySelectorAll('.slider-img');

    // Inicializa elementos ocultos al cargar la página
    ocultarElementosInicialmente([productosDestacados, categoriesList]);
    
    // Configura y ejecuta el carrusel de imágenes si hay imágenes disponibles
    configurarCarruselImagenes(imagenes);

    // Función auxiliar para ocultar elementos
    function ocultarElementosInicialmente(elementos) {
        elementos.forEach(el => {
            if (el) el.style.display = 'none';
        });
    }

    // Función para configurar el carrusel de imágenes
    function configurarCarruselImagenes(imagenes) {
        if (imagenes.length > 0) {
            let indiceImagen = 0;
            imagenes.forEach(img => img.style.display = 'none'); // Ocultar todas las imágenes inicialmente
            imagenes[indiceImagen].style.display = 'block'; // Mostrar la primera imagen

            // Cambiar imagen cada 3 segundos
            setInterval(() => {
                imagenes[indiceImagen].style.display = 'none';
                indiceImagen = (indiceImagen + 1) % imagenes.length;
                imagenes[indiceImagen].style.display = 'block';
            }, 3000);
        }
    }
});

function toggleMenu() {
    const categoriesList = document.getElementById('categoriesList');
    const productosDestacados = document.getElementById('productosDestacados');

    // Alternar la visibilidad de la lista de categorías
    if (categoriesList) {
        categoriesList.style.display = (categoriesList.style.display === 'block') ? 'none' : 'block';
    }

    // Ocultar productos destacados al alternar el menú
    if (productosDestacados) {
        productosDestacados.style.display = 'none';
    }
}

function mostrarProductosDestacados() {
    const productosDestacados = document.getElementById('productosDestacados');
    const categoriesList = document.getElementById('categoriesList');
    const otrosContenidos = document.querySelectorAll('.producto');

    // Ocultar lista de categorías y otros contenidos al mostrar productos destacados
    categoriesList.style.display = 'none';
    otrosContenidos.forEach(contenido => contenido.style.display = 'none');

    // Alternar la visibilidad de productos destacados
    productosDestacados.style.display = (productosDestacados.style.display === 'none') ? 'block' : 'none';
}

function mostrarProductosPorCategoria(categoria) {
    const productos = document.querySelectorAll('.producto[data-categoria]');
    const slider = document.querySelector('.slider-container');

    // Ocultar el carrusel de imágenes al filtrar por categoría
    if (slider) {
        slider.style.display = 'none';
    }

    // Mostrar solo los productos que coinciden con la categoría seleccionada
    productos.forEach(producto => {
        producto.style.display = (producto.dataset.categoria === categoria || categoria === 'todos') ? 'block' : 'none';
    });
}
