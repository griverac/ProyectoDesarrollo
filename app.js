const express = require('express');
const app = express();
const path = require('path');

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.render('index');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

// Ruta para la página de registro
app.get('/registro', (req, res) => {
    res.render('registro');
});

// Ruta para la página de inicio de sesión
app.get('/login', (req, res) => {
    res.render('login');
});

// Rutas 
//ruta sobre nosotros 
app.get('/sobre_nosotros', (req, res) => {
    res.render('sobre_nosotros');
});

// ruta galeria 
app.get('/galeria', (req, res) => {
    res.render('galeria');
});
 
// ruta servicos 
app.get('/servicios', (req, res) => {
    res.render('servicios');
});


//Ruta noticias 
app.get('/noticias', (req, res) => {
    res.render('noticias');
});


//ruta contacto 
app.get('/contacto', (req, res) => {
    res.render('contacto');
});
