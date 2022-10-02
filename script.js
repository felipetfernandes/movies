let movies = [
    /* // Loki
    {
        name: "LOKI",
        availability: "ESTÁ DISPONÍVEL AGORA!",
        duration: "51min",
        stars: 4,
        year: "2021",
        background: "url(img/loki.svg)",
        synopsis:
            "Em “Loki” da Marvel Studios, o vilão mercurial Loki (Tom Hiddleston) retoma seu papel como o Deus do Mal em uma nova série que ocorre após os eventos de “Vingadores: Endgame”.",
    }, */
     // Cães de Aluguel
     {
        name: "Cães de Aluguel",
        availability: "ESTÁ DISPONÍVEL AGORA!",
        duration: "1h 39min",
        stars: 4,
        year: "1992",
        background: "url(img/caes-de-aluguel.jpg)",
        miniature: "img/caes-de-aluguel-mini.jpg",
        synopsis:
            "Criminoso reúne seis bandidos para grande roubo de diamantes. Algo sai errado e um deles é ferido durante roubo e os bandidos precisam descobrir quem foi que os traiu, o que gera enorme tensão no grupo e enfraquece a todos.",
    },
    // Bastardos Inglórios
    {
        name: "Bastardos Inglórios",
        availability: "ESTÁ DISPONÍVEL AGORA!",
        duration: "2h 33min",
        stars: 5,
        year: "2009",
        background: "url(img/bastardos-inglorios.jpg)",
        miniature: "img/bastardos-inglorios-mini.jpg",
        synopsis:
            "Durante a Segunda Guerra Mundial, na França, um grupo de judeus americanos conhecidos como Bastardos espalha o terror entre o terceiro Reich. Ao mesmo tempo, Shosanna, uma judia que fugiu dos nazistas, planeja vingança quando um evento em seu cinema reunirá os líderes do partido.",
    },
    // Django Livre
    {
        name: "Django Livre",
        availability: "ESTÁ DISPONÍVEL AGORA!",
        duration: "2h 45min",
        stars: 5,
        year: "2012",
        background: "url(img/django-livre.jpg)",
        miniature: "img/django-livre-mini.jpg",
        synopsis:
            "No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para caçar os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a participar de competições mortais.",
    },
    // Os Oito Odiados
    {
        name: "Os Oito Odiados",
        availability: "ESTÁ DISPONÍVEL AGORA!",
        duration: "3h 7min",
        stars: 4,
        year: "2015",
        background: "url(img/os-8-odiados.jpg)",
        miniature: "img/os-8-odiados-mini.jpg",
        synopsis:
            "Em busca de abrigo para se proteger de uma nevasca, dois caçadores de recompensas, um prisioneiro e um homem que alega ser xerife conhecem quatro estranhos.",
    },
    // Avatar
    {
        name: "Avatar",
        availability: "ESTÁ DISPONÍVEL AGORA!",
        duration: "2h 41min",
        stars: 4,
        year: "2009",
        background: "url(img/avatar.jpg)",
        miniature: "img/avatar-mini.jpg",
        synopsis:
            "No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem ser primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana que se movimentam livremente em Pandora",
    },
];

const title = document.querySelector("h1");
const availability = document.querySelector("h2");
const duration = document.querySelectorAll("h3")[0];
const stars = document.querySelector("picture");
const emptyStar = "img/emptyStar.svg";
const fullStar = "img/fullStar.svg";
const year = document.querySelectorAll("h3")[1];
const background = document.querySelector(".wrapper");
const miniature = document.querySelector(".miniature");
const synopsis = document.querySelectorAll("p");
const body = document.querySelector("body");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
let page = 0;
let maxPage = movies.length - 1;
let movie = movies[page];

function createStar(type, amount) {
    for (let index = 0; index < amount; index++) {
        const createStar = document.createElement("img");
        createStar.src = type;
        stars.appendChild(createStar);
    }
}

function resetStars() {
    while (stars.firstChild) {
        stars.removeChild(stars.firstChild);
    }
}

function pageCreate(movie) {
    title.innerText = movie.name;
    availability.innerText = movie.availability;
    duration.innerText = movie.duration;
    year.innerText = movie.year;
    background.style = `background-image: ${movie.background}`;
    miniature.setAttribute('src', movie.miniature)
    synopsis[0].innerText = movie.synopsis;
    synopsis[1].innerText = movie.synopsis;
    resetStars();
    createStar(fullStar, movie.stars);
    createStar(emptyStar, 5 - movie.stars);
}

pageCreate(movie);

function leftPage() {
    if (page == 0) {
        page = maxPage;
        movie = movies[page];
    } else {
        page -= 1;
        movie = movies[page];
    }
    pageCreate(movie);
}

function rightPage() {
    if (page == maxPage) {
        page = 0;
        movie = movies[page];
    } else {
        page += 1;
        movie = movies[page];
    }
    pageCreate(movie);
}

function nextPage() {
    if (window.event.key == "ArrowRight") {
        rightPage();   
    } else if (window.event.key == "ArrowLeft") {
        leftPage();
    }
}

body.addEventListener("keydown", nextPage);
right.addEventListener('click', rightPage);
left.addEventListener('click', leftPage);
