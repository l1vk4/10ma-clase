const portfolio = document.querySelector("#porotito");

async function datos(raw) {
    try {
        let consulta = await fetch(raw);
let resultado = await consulta.json();
let trabajos = resultado.data;
console.log(trabajos);
        console.log(trabajos);
        trabajos.forEach((v) => {
            portfolio.innerHTML += `<div class="col">
                        <div class="card shadow-sm h-100">
                            <img src="${v.photo}" class="card-img-top" alt="${v.title}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${v.title}</h5>
                                <p class=" flex-grow-1">${v.description}</p>
                                <div class="d-flex justify-content-between align-items-center mt-auto">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">${v.category}</button>
                                    </div>
                                    <span class="date-badge">${v.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
        });
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

datos("https://api.myjson.online/v1/records/3fb2b81d-5f1e-40fa-a582-fdd841fd8467");
