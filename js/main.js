const giftData = {
    workspace: {
        title: "Workspace & Ambiente",
        subtitle: "Cosas que mejorarían mi espacio de trabajo diario",
        items: [
            { image: "src/images/reloj-digital.webp", name: "Reloj Digital Minimalista", desc: "Me gustaría uno con LED suave, sin muchas distracciones visuales", price: "$" },
            { image: "src/images/lampara-escritorio.webp", name: "Lámpara de Escritorio", desc: "Que se pueda regular entre luz cálida y fría sería ideal", price: "$" },
            { image: "src/images/desk-mat.webp", name: "Desk Mat Grande", desc: "Algo que se vea bien y proteja el escritorio, tipo cuero o tela", price: "$" },
            { image: "src/images/difusor.webp", name: "Difusor o Humidificador", desc: "Pequeño, para que el espacio huela bien y tenga mejor ambiente", price: "$" },
            { image: "src/images/plantas.webp", name: "Plantas Sencillas", desc: "Algo fácil de cuidar como pothos o suculentas", price: "$" },
            { image: "src/images/estantes.webp", name: "Estantes Flotantes", desc: "Para aprovechar la pared y tener más espacio", price: "$" },
            { image: "src/images/repisa.webp", name: "Repisa o Librería Pequeña", desc: "Donde poner libros y cosas sin que estorben", price: "$" }
        ]
    },
    tech: {
        title: "Tecnología & Gadgets",
        subtitle: "Esas cosas que me cuestan pedir pero me encantarían",
        items: [
            { image: "src/images/audifonos.webp", name: "Audífonos Buenos", desc: "Ya sea over-ear o in-ear, que tengan buena calidad y pueda llevarlos a cualquier lado", price: "$$" },
            { image: "src/images/stream-deck.webp", name: "Stream Deck Mini", desc: "Para hacer atajos y ser más eficiente programando o jugando", price: "$$" },
            { image: "src/images/webcam.webp", name: "Webcam Decente", desc: "Por si tengo entrevistas o reuniones importantes", price: "$$" },
            { image: "src/images/cargador-inalambrico.webp", name: "Cargador Inalámbrico", desc: "Para cargar el teléfono sin cables", price: "$" },
            { image: "src/images/power-bank.webp", name: "Power Bank", desc: "Compacto, para llevarlo a todos lados", price: "$" }
        ]
    },
    study: {
        title: "Estudio & Aprendizaje",
        subtitle: "Para seguir aprendiendo sin estresarme",
        items: [
            { image: "src/images/curso-online.webp", name: "Curso Online", desc: "De programación, algoritmos o algo técnico que me interese", price: "$$" },
            { image: "src/images/libro-tecnico.webp", name: "Libro Técnico", desc: "Algo específico y útil, como lógica de programación, idiomas (no inglés lol), etc.", price: "$" },
            { image: "src/images/audifonos-cancelacion.webp", name: "Audífonos con Cancelación", desc: "Si no elijo otros audífonos, estos serían útiles", price: "$$$" }
        ]
    },
    gaming: {
        title: "Gaming y Anime",
        subtitle: "Para disfrutar mejor mis tiempos de juego y mis gustos de entretenimiento",
        items: [
            { image: "src/images/tarjeta-regalo.webp", name: "Tarjeta de Regalo", desc: "De Steam, Riot Points o la que sea", price: "$$" },
            { image: "src/images/luces-rgb.webp", name: "Luces RGB", desc: "Suaves para crear ambiente mientras juego", price: "$" },
            { image: "src/images/control-pc.webp", name: "Control para PC", desc: "Para jugar algunos juegos más relajado", price: "$$" },
            { image: "src/images/manga-anime.webp", name: "Mangas", desc: "Jujutsu Kaisen, Blue Lock, Chainsaw Man, JoJo's Bizarre Adventure", price: "$" },
            { image: "src/images/plushies.webp", name: "Peluches de anime o juegos, o peluches en general", desc: "Fnaf, Blue Lock, Jujutsu Kaisen, animales, puede ser cualquier cosa", price: "$" },
            { image: "src/images/nendo.webp", name: "Nendoroids o figuras de anime", desc: "Fnaf, Blue Lock, Jujutsu Kaisen, Chainsaw Man, o preguntar", price: "$" },
        ]
    },
    gym: {
        title: "Gym & Ejercicio",
        subtitle: "Para las metas de 2026",
        items: [
            { image: "src/images/ropa-deportiva.webp", name: "Ropa Deportiva", desc: "Camisetas, shorts o joggers cómodos para entrenar", price: "$" },
            { image: "src/images/membresia-gym.webp", name: "Membresia del Gym", desc: "Membresía o pases mensuales", price: "$$" },
            { image: "src/images/pelota-futbol.webp", name: "Balon Futból", desc: "Para desarrollar una nueva habilidad en algo que ha comenzado a gustarme recientemente", price: "$"},
        ]
    },
    selfcare: {
        title: "Autocuidado & Descanso",
        subtitle: "Cosas que sé que necesito pero descuido",
        items: [
            { image: "src/images/mascara-dormir.webp", name: "Máscara para Dormir", desc: "Para bloquear la luz y dormir mejor", price: "$" },
            { image: "src/images/organizador.webp", name: "Organizador para Escritorio", desc: "Para mantener todo en orden", price: "$" }
        ]
    },
    books: {
        title: "Libros",
        subtitle: "Lecturas que realmente me gustaría tener",
        items: [
            { image: "src/images/libro-habitos.webp", name: "Sobre Hábitos", desc: "Algo práctico sobre productividad o identidad personal", price: "$" },
            { image: "src/images/filosofia.webp", name: "Filosofía Accesible", desc: "Estoicismo o pensamiento moderno", price: "$" }
        ]
    },
    experiences: {
        title: "Experiencias",
        subtitle: "Cosas que no ocupan espacio pero sí crean recuerdos",
        items: [
            { image: "src/images/viaje-montana.webp", name: "Viaje a la Montaña", desc: "Algo corto para despejar la mente", price: "$$" },
            { image: "src/images/clase-prueba.webp", name: "Clase de Prueba", desc: "Artes marciales o algo nuevo que quiera intentar", price: "$$" },
            { image: "src/images/entrada-evento.webp", name: "Entrada a Evento", desc: "Concierto pequeño, obra, o algo que me llame la atención", price: "$" },
            { image: "src/images/pecera.webp", name: "Pecera", desc: "Con todo lo necesario para empezar", price: "$$" },
            { image: "src/images/poster.webp", name: "Póster Minimalista", desc: "Algo de programación, fútbol o filosofía", price: "$" }
        ]
    }
};

function createSections() {
    const container = document.getElementById('sections-container');
    
    Object.keys(giftData).forEach(key => {
        const section = giftData[key];
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section';
        sectionDiv.dataset.category = key;
        
        sectionDiv.innerHTML = `
            <div class="section-title">
                <h2>${section.title}</h2>
                <p>${section.subtitle}</p>
            </div>
            <div class="cards-grid">
                ${section.items.map(item => `
                    <div class="card">
                        <div class="card-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">${item.name}</h3>
                            <p class="card-description">${item.desc}</p>
                            <div class="card-price">${item.price}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(sectionDiv);
    });
}

function createSnowflakes() {
    const snow = document.getElementById('snow');
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.opacity = Math.random();
        snow.appendChild(snowflake);
    }
}

function setupFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            const sections = document.querySelectorAll('.section');
            
            sections.forEach(section => {
                if (filter === 'all' || section.dataset.category === filter) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
    createSections();
    setupFilterButtons();
});
