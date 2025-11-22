const params = new URLSearchParams(window.location.search);
const expId = params.get("id");

fetch('../data/expdeets.json')
    .then(res => res.json())
    .then(details => {
        const exp = details.find(d => d.id === expId);

        if (!exp) {
            console.error("Experience not found");
            return;
        }

        // TITLE
        document.querySelector('.page-title').textContent = exp.title;
        
        // REFLECTIONS (first and second .ref-desc)
        const refDescs = document.querySelectorAll('.ref-desc');
        if (refDescs.length >= 2) {
            refDescs[0].textContent = exp.contrib;   // contributions
            refDescs[1].textContent = exp.learned;   // skills learned
        }
    })
    .catch(err => console.error("Error loading experience details:", err));