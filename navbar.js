document.addEventListener("DOMContentLoaded", function () {
    const navbar =
        `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                    <a class="navbar-brand" href="#">Proyecto Feria UBI</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav">
                            <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="menuNav">
                        <ul class="navbar-nav ms-auto me-2">
                            <li class="nav-item"><a class="nav-link active" href="index.html">Inicio</a></li>
                            <li class="nav-item"><a class="nav-link" href="quienessomos.html">About Us</a></li>
                            <li class="nav-item"><a class="nav-link" href="Contacto.html">Contacto</a></li>
                        </ul>
                        <button id="darkToggle" class="btn btn-outline-light btn-sm btn-dark-toggle" onclick="toggleTema()">Dark Mode</button>
                    </div>
            </div>
        </nav>

`;
    const navbarContainer = document.getElementById("navbar-container")
    navbarContainer.innerHTML = navbar


});