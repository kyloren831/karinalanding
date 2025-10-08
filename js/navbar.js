document.querySelector('#logoutBtnNav').addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    window.location.href = '../../Index.html';
});

document.addEventListener("DOMContentLoaded", async function () {
    const nombreDashboard = document.getElementById('userNameDashboard');
    try {
        const data = await getUserData();
        console.log(data);
        nombreDashboard.innerHTML = `${data.nombre}`;
    } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
    }
});


async function getUserData() {
    const id = localStorage.getItem('token');
    const response = await fetch(`http://localhost:8080/usuarios/${id}`);
    if (!response.ok) throw new Error("Error al hacer fetch");
    const data = await response.json();
    return data;
}
