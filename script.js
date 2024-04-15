document.addEventListener('DOMContentLoaded', function() {
    // Inicializar visibilidad de elementos
    document.getElementById('productosDestacados').style.display = 'none';
    document.getElementById('categoriesList').style.display = 'none';

    iniciarCarrusel(); // Iniciar el carrusel de imágenes

    // Configurar la visibilidad inicial del carrusel de imágenes
    let indiceImagen = 0;
    const imagenes = document.querySelectorAll('.slider-img');
    imagenes.forEach(img => img.style.display = 'none');
    imagenes[indiceImagen].style.display = 'block'; // Muestra solo la primera imagen inicialmente

    // Cambiar imagen cada 3 segundos
    setInterval(() => {
        imagenes[indiceImagen].style.display = 'none'; // Oculta la imagen actual
        indiceImagen = (indiceImagen + 1) % imagenes.length; // Calcula el índice de la próxima imagen
        imagenes[indiceImagen].style.display = 'block'; // Muestra la próxima imagen
    }, 3000);
});
function toggleMenu() {
    var categoriesList = document.getElementById('categoriesList');
    var productosDestacados = document.getElementById('productosDestacados');
    
    // Asegurarse de ocultar los productos destacados completamente, incluyendo el texto y las imágenes
    productosDestacados.style.display = 'none';

    // Alternar la visibilidad de las categorías
    if (categoriesList.style.display === 'block') {
        categoriesList.style.display = 'none';
    } else {
        categoriesList.style.display = 'block';
    }
}

function mostrarProductosDestacados() {
    var productosDestacados = document.getElementById('productosDestacados');
    var categoriesList = document.getElementById('categoriesList');
    var otrosContenidos = document.querySelectorAll('.producto'); // Asume que 'producto' es la clase de otros contenidos que también deben ocultarse.

    // Ocultar categorías y cualquier otro contenido no relacionado con Home
    categoriesList.style.display = 'none';
    otrosContenidos.forEach(function(contenido) {
        contenido.style.display = 'none';
    });

    // Alternar la visibilidad de productos destacados
    productosDestacados.style.display = productosDestacados.style.display === 'none' ? 'block' : 'none';
}


function mostrarProductosPorCategoria(categoria) {
    const productos = document.querySelectorAll('.producto[data-categoria]');
    const slider = document.querySelector('.slider-container');

    slider.style.display = 'none'; // Ocultar slider
    productos.forEach(producto => {
        producto.style.display = producto.dataset.categoria === categoria || categoria === 'todos' ? 'block' : 'none';
    });
}
