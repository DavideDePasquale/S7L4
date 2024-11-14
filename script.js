const url = "https://api.pexels.com/v1/search?query=phone";
const apiKey = "iAAIopUEElZ679kN1LfuObdyI7Cc7sQceLiwpr393dDb1l3yc62FTK1n";
const FetchEs = () => {
    fetch(url, {
        method: "GET",
        headers: { Authorization: apiKey }
    })
        .then(resp => {
            console.log(resp);
            if (resp.ok) {
                return resp.json();
            }
        })
        .then(photo => {
            const main = document.querySelector("main");
            console.log(photo);

            photo.forEach(elemento => {
                const card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `<div class="card mb-4 shadow-sm">
                    ${elemento.photos.src.large} 
                    <div class="card-body">
                    <h5 class="card-title"> ${elemento.alt} </h5>
                    <div
                class="d-flex justify-content-between align-items-center"
                >
                    <div class="btn-group">
                    <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    >
                    View
                    </button>
                    <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    >
                    Edit
                    </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                    </div>
                    </div>
                    </div>`;
                main.append(card);
            })
            const loadBtn = document.getElementById("loadBtn");
            loadBtn.addEventListener("click", function () {
            })

        })
};
window.onload = () => {
    FetchEs();
}
