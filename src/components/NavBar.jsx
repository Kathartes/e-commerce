import CartWidget from "./Cart/CartWidget";


function NavBar() {
        return (
            <>
            <header>
                <nav class="navbar navbar-expand-lg  bg-success" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">E-commerce</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Ofertas</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Historial</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </a>
                        <ul class="dropdown-menu bg-success">
                            <li><a class="dropdown-item" href="#">Primera</a></li>
                            <li><a class="dropdown-item" href="#">Segunda</a></li>
                            <li><a class="dropdown-item" href="#">Tercera</a></li>
                        </ul>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <CartWidget />
                    </span>
                    </div>
                </div>
                </nav>
            </header>
            </>
        )
}

export default NavBar;

