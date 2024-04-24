const btnAPI = document.getElementById('btnAPI');
const userInfo = document.getElementById('userInfo');
const loader = document.getElementById('loader');
const userError = document.getElementById('userError');

btnAPI.addEventListener('click', readUsers);

function readUsers(e) {
    e.preventDefault();

    // Mostrar el loader
    loader.classList.remove('hidden');

    //CONSUMO
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Ocultar el loader
            loader.classList.add('hidden');
            printHTML(data);
        })
        .catch((error) => {
            // Ocultar el loader
            loader.classList.add('hidden');
            printError(error);
        });
}

function printHTML(data) {
    userInfo.innerHTML = ''; // Limpiar cualquier contenido anterior
    userInfo.style.display = 'block';
    data.forEach(user => {
        const userElement = document.createElement('div');
        userElement.textContent = `Nombre: ${user.name}, Email: ${user.email}`;
        userInfo.appendChild(userElement);
    });
}

function printError() {
    userError.innerHTML = '';
    userError.style.display = 'block';
    const error2 = document.createElement('p');
    error2.textContent = 'Error al cargar datos!!';
    userError.appendChild(error2);
}
