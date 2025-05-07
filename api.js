// api.js

// Función para mostrar un menú simulado en api1.html
function cargarMenu() {
    const menu = [
      { categoria: 'Entradas', platos: ['Bruschetta', 'Empanadas', 'Sopa del día'] },
      { categoria: 'Platos principales', platos: ['Lasaña', 'Parrillada', 'Pescado al horno'] },
      { categoria: 'Postres', platos: ['Tiramisú', 'Helado artesanal', 'Flan casero'] }
    ];
  
    const contenedor = document.getElementById('menu');
    if (!contenedor) return;
  
    contenedor.innerHTML = menu.map(categoria => `
      <h3>${categoria.categoria}</h3>
      <ul>
        ${categoria.platos.map(plato => `<li>${plato}</li>`).join('')}
      </ul>
    `).join('');
  }
  
  // Función para obtener una receta aleatoria en api2.html
  function cargarRecetaAleatoria() {
    const contenedor = document.getElementById('receta');
    if (!contenedor) return;
  
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => {
        const meal = data.meals[0];
        contenedor.innerHTML = `
          <h3>${meal.strMeal}</h3>
          <img src="${meal.strMealThumb}" width="200">
          <p>${meal.strInstructions.slice(0, 200)}...</p>
        `;
      })
      .catch(err => {
        contenedor.innerHTML = `<p>Error al cargar la receta.</p>`;
        console.error(err);
      });
  }
  
  // Función para mostrar ubicaciones (puedes expandir esto si usas más ubicaciones)
  function cargarUbicaciones() {
    const contenedor = document.getElementById('ubicaciones');
    if (!contenedor) return;
  
    const ubicaciones = [
      { ciudad: "Bogotá", lat: 4.65, lon: -74.05 },
      { ciudad: "Medellín", lat: 6.25, lon: -75.57 },
      { ciudad: "Cali", lat: 3.45, lon: -76.53 }
    ];
  
    contenedor.innerHTML = ubicaciones.map(ubi => `
      <p><strong>${ubi.ciudad}</strong> — 
      <a href="https://www.openstreetmap.org/?mlat=${ubi.lat}&mlon=${ubi.lon}#map=15/${ubi.lat}/${ubi.lon}" target="_blank">Ver en mapa</a></p>
    `).join('');
  }
  