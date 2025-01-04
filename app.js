const express = require("express");
const app = express();

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];


//Filtrado de Usuarios por Especialidad:
const filtroUsuarios = (specialty) => usersData.filter((user) => user.specialty.toLowerCase() === specialty.toLowerCase());


//Ruta principal:
app.get("/", (req, res) => {
    res.send(
        `<h1>Esta es la página principal</h1>
        <a href="/marketing">Marketing</a>
        <a href="/developers">Developers</a>
        <a href="/ventas">Ventas</a>
        <a href="/QAs">QAs</a>
        `
    )
})


//Generación de páginas HTML:
const specialties = ['marketing', 'developers', 'QAs', 'ventas'];

specialties.forEach((specialty) => {
  app.get(`/${specialty}`, (req, res) => {
    const users = filtroUsuarios(specialty);
    if (users.length > 0) {
      const userList = users
        .map((user) => `<li>${user.name}, ${user.age} años</li>`)
        .join('');
      res.send(`
        <h1>Esta es la página de: ${specialty}</h1>
        <p>Usuarios:</p>
        <ul>${userList}</ul>
        <p><a href="/">Página principal</a></p>
      `);
    } else {
      res.send(`
        <h1>Especialidad: ${specialty}</h1>
        <p>No hay usuarios en esta especialidad.</p>
        <p><a href="/">Página principal</a></p>
      `);
    }
  });
});


//Error 404:
app.use((req, res) => {
    res.status(404).send(
        `<h1>Error 404</h1>
        <p>Página no encontrada</p>
        <a href="/">Página principal</a>
        `
    )
})


//Llamada al puerto/servidor:
app.listen(3000, () => {
    console.log("Node.js esta escuchando en el puerto 3000")
})


