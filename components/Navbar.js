
// == Componente de navbar 01 == //

class navbar01 extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    
          
  
<!-- Codigo -->
          
      

<header class="bg-white/90">

  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

    <div class="flex h-16 items-center justify-between">

      <div class="md:flex md:items-center md:gap-12">

        <a class="block text-teal-600" href="index.html">

        <img src="https://i.ibb.co/qxDhcrC/image-6.png" alt="">

          

        </a>

      </div>

      <div class="hidden md:block">

        <nav aria-label="Global">

          <ul class="flex items-center gap-6 text-sm">

            <li class="hover:-translate-y-2  ">
              <a
                class="text-teal-500 transition hover:text-gray-500/75"
                href="/"
              >
                Início
              </a>
            </li>

            <li class="hover:-translate-y-2">
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Sobre
              </a>
            </li>

            <li class="hover:-translate-y-2">
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Produtos
              </a>
            </li>

            <li class="hover:-translate-y-2">
              <a
                class="text-gray-500 transition hover:text-gray-500/75"
                href="/"
              >
                Suporte
              </a>
            </li>

            
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4 ">
        <div class="hidden sm:flex gap-4 ">
          <a
            class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:scale-105"
            href="/"
          >
            Entrar
          </a>

          <div class="hidden sm:flex">
            <a
              class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 hover:scale-105"
              href="/"
            >
              Cadastrar
            </a>
          </div>
        </div>

        <div class="block md:hidden">
          <button
            class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  
  

          
          
<!-- Codigo -->
        

      `;
  }
}

customElements.define("navbar-01", navbar01);


// ================================================================================== //









