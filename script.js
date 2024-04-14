function toggleMenu() {
    var categoriesList = document.getElementById('categoriesList');
    categoriesList.style.display = categoriesList.style.display === 'block' ? 'none' : 'block';
}

function mostrarProductosPorCategoria(categoria) {
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        if (categoria === 'todos' || producto.dataset.categoria === categoria) {
            producto.style.display = ''; // en lugar de 'block', para volver al valor por defecto
        } else {
            producto.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarProductosPorCategoria('todos');
});
