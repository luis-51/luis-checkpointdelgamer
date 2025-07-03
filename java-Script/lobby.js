const juegos = [
  { nombre: "Horizon Zero Dawn", url: "../Paginas/horizon-zero-dawn.html" },
  { nombre: "POKEMON", url: "../Paginas/POKEMON.html" },
  { nombre: "fcmobile", url: "../Paginas/fcmobileprincipal.html" },
  { nombre: "terraria", url: "../Paginas/terraria.html" }

];

function buscarJuego() {
  const entrada = document.getElementById("busqueda").value.toLowerCase();
  const encontrado = juegos.find(juego => juego.nombre.toLowerCase().includes(entrada));

  if (encontrado) {
    window.location.href = encontrado.url;
  } else {
    alert("Juego no encontrado.");
  }
}

// Descripciones para "Juegos que marcaron épocas"
const descripcionesRetro = {
  mario: `
    <h3>Super Mario Bros (1985)</h3>
    <p><strong>Lanzamiento:</strong> 1985</p>
    <p><strong>Desarrollador:</strong> Nintendo</p>
    <p>Con su gorra roja, bigote inconfundible y espíritu valiente, Super Mario es mucho más que un simple plomero: es una leyenda que ha marcado generaciones enteras de jugadores.
    Creado por Shigeru Miyamoto y debutando en el arcade Donkey Kong en 1981, Mario dio el gran salto a la fama en 1985, con el lanzamiento de Super Mario Bros. para la consola NES. Desde entonces, se convirtió en el símbolo de Nintendo y en el rostro de la industria de los videojuegos.
    En sus aventuras, Mario viaja por mundos mágicos, salta entre plataformas, entra en tuberías misteriosas y lucha contra criaturas como Goombas, Koopas y su archienemigo: Bowser, el Rey de los Koopas. Su misión casi siempre es la misma: salvar a la Princesa Peach y proteger el Reino Champiñón.
    A lo largo de más de 200 juegos, Mario ha demostrado que es mucho más que un héroe clásico. Ha corrido en karts, jugado tenis, peleado en combates épicos, e incluso ha viajado al espacio. Siempre acompañado de su fiel hermano Luigi, su amigo dinosaurio Yoshi, y muchos otros personajes entrañables.
    Con poderes como el Súper Hongo, la Flor de Fuego y la mítica Estrella de Invencibilidad, Mario nos ha enseñado que, con valor y una buena dosis de saltos, no hay castillo imposible de conquistar.</p>
  `,
  Doom: `
    <h3>Doom (1993)</h3>
    <p><strong>Lanzamiento:</strong> 1993</p>
    <p><strong>Desarrollador:</strong> id Software</p>
    <p>En 1993, mientras el mundo conocía los píxeles violentos y el sonido estridente de una nueva era de videojuegos, nació una leyenda brutal: el Doomguy, el marine sin nombre que no necesita hablar para imponer respeto.
    Protagonista del revolucionario DOOM desarrollado por id Software, Doomguy fue el primer gran símbolo de los shooters en primera persona. Lanzado en PC, DOOM cambió la historia con su acción frenética, atmósfera infernal y ritmo sangriento. Su historia es sencilla pero poderosa: un solo hombre enfrentándose, escopeta en mano, contra las hordas del infierno.
    Doomguy es un soldado del futuro enviado a una base en Marte. Pero cuando un experimento de teletransportación se sale de control, se abre un portal al infierno. Desde ese momento, él es la única barrera entre la humanidad y la destrucción total. Sin miedo, sin piedad, con pura furia, arrasa demonios con armas icónicas como la escopeta, la BFG 9000 y la motosierra.
    No necesita nombre, ni diálogos. Su personalidad está en sus acciones: rápido, brutal, imparable.</p>
  `,
  zelda: `
    <h3>The Legend of Zelda (1986)</h3>
    <p><strong>Lanzamiento:</strong> 1986</p>
    <p><strong>Desarrollador:</strong> Nintendo</p>
    <p>En 1986, el mundo conoció una historia mágica que combinaba exploración, acertijos y combate: The Legend of Zelda. En el corazón de esa leyenda estaba un joven valiente con túnica verde y alma de guerrero: Link.
  Creado por Shigeru Miyamoto y lanzado para la consola Famicom Disk System en Japón (y luego en la NES en el resto del mundo), The Legend of Zelda fue un hito: un juego de aventura con un mundo abierto, secretos ocultos y una narrativa de fantasía inspirada en mitos medievales.
  En el primer juego, Link debe salvar el reino de Hyrule, derrotar al malvado Ganon y reunir los fragmentos de la Trifuerza de la Sabiduría para rescatar a la Princesa Zelda. Sin diálogos largos ni tutoriales, el jugador es lanzado a un mundo misterioso con solo una espada y la frase:
  “It’s dangerous to go alone! Take this.”</p>
  `,
  sonic: `
    <h3>Sonic The Hedgehog (1991)</h3>
    <p><strong>Lanzamiento:</strong> 1991</p>
    <p><strong>Desarrollador:</strong> SEGA</p>
    <p>En 1991, SEGA necesitaba una mascota capaz de competir con Mario, y lo logró con un personaje azul, atrevido y lleno de actitud: Sonic the Hedgehog. Este veloz erizo no solo se convirtió en el ícono de SEGA, sino en una leyenda de los videojuegos.
    Nacido en el corazón del equipo Sonic Team, Sonic debutó en la consola Sega Genesis (Mega Drive) con el juego que lleva su nombre: Sonic the Hedgehog. A diferencia de otros héroes de su época, Sonic corría a velocidades increíbles a través de mundos llenos de loops, rampas, trampas y anillos dorados. El ritmo frenético y su estilo rebelde conquistaron a toda una generación.</p>
  `
};

// Función para mostrar descripción de juegos retro
function mostrarDescripcionRetro(clave) {
  const caja = document.getElementById("descripcion-retro");
  caja.innerHTML = descripcionesRetro[clave] || "<p>Descripción no disponible.</p>";
}

const descripcionesPersonajes = {
  kratos: `
    <h3>Kratos</h3>
    <p>Kratos es el protagonista de la saga God of War, una serie de videojuegos de acción creada por Santa Monica Studio y lanzada 
    por Sony. Es un guerrero espartano conocido por su furia descontrolada, fuerza sobrehumana y sed de venganza contra los dioses.
    En los primeros juegos, Kratos sirve a los dioses del Olimpo, pero al ser traicionado por ellos, se rebela y los enfrenta uno a 
    uno. En su camino, destruye prácticamente todo el panteón griego, incluyendo a Zeus, Ares, y Hades. Años después,en los juegos
    más recientes (God of War 2018 y Ragnarök), Kratos vive en los reinos nórdicos. Aquí, con una actitud más madura y serena, 
    intenta guiar a su hijo Atreus y controlar su pasado violento, mientras enfrenta a dioses como Baldur, Thor y Odín.</p>
  `,
  mario: `
    <h3>Mario Bros</h3>
    <p>Mario es el personaje más famoso de los videojuegos, creado por Shigeru Miyamoto para Nintendo. Apareció por primera vez 
    en Donkey Kong (1981) y se convirtió en protagonista en Super Mario Bros (1985), el juego que revolucionó las plataformas 2D.
    Es un plomero italiano alegre, valiente y carismático que siempre está listo para rescatar a la Princesa Peach del malvado
    Bowser, el rey de los Koopas. Vive en el Reino Champiñón y suele estar acompañado por su hermano Luigi.</p>
  `,
  lara: `
    <h3>Lara Croft</h3>
    <p>Lara Croft es la protagonista de la saga Tomb Raider, una de las heroínas más icónicas y revolucionarias del mundo de los
    videojuegos. Fue creada por Core Design y debutó en 1996 en la consola PlayStation original. Desde entonces, Lara ha sido símbolo
    de valentía, inteligencia y exploración.Arqueóloga británica, experta en historia antigua y combate, Lara viaja por todo el mundo
    en busca de tesoros perdidos, tumbas olvidadas y secretos prohibidos, enfrentándose a trampas mortales, criaturas legendarias y
    organizaciones secretas.Con su estilo característico (trenza, pistolas dobles y actitud intrépida), Lara rompió moldes al
    convertirse en una protagonista fuerte e independiente en una época dominada por personajes masculinos.</p>
  `,
  link: `
    <h3>Link</h3>
    <p>Link es el protagonista de la saga The Legend of Zelda, una de las franquicias más influyentes de Nintendo y de la historia 
    de los videojuegos. Apareció por primera vez en 1986 en The Legend of Zelda para la NES. Es un joven guerrero valiente y silencioso,
    elegido por el destino para proteger el Reino de Hyrule, derrotar a poderosos enemigos como Ganon y salvar a la Princesa Zelda. A lo 
    largo de los años, ha enfrentado múltiples encarnaciones y aventuras, en distintos tiempos y dimensiones, pero su espíritu heroico permanece intacto.</p>
  `
};

function mostrarDescripcionPersonaje(id) {
  const contenedor = document.getElementById("descripcion-personaje");
  contenedor.innerHTML = descripcionesPersonajes[id] || "<p>Descripción no disponible.</p>";
}
