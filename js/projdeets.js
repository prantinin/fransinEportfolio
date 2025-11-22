const params = new URLSearchParams(window.location.search);
const projId = params.get("id");

fetch('../data/projectdeets.json')
    .then(res => res.json())
    .then(details => {
        const proj = details.find(d => d.id === projId);

        if (!proj) {
            console.error("Project not found");
            return;
        }

        // TITLE
        document.querySelector('.page-title').textContent = proj.title || proj.projTitle;

        // VIDEO (if you store a video URL)
        if (proj.demo) {
            const video = document.querySelector('.projdemo source');
            video.src = proj.demo;
            document.querySelector('.projdemo').load();
        }

        // GIT LINK
        const gitLink = document.querySelector('.gitdiv a');
        if (proj.gitLink) {
            gitLink.href = proj.gitLink;
            gitLink.textContent = proj.gitLink;
        }

        // DESCRIPTION
        const descEl = document.querySelector('.desc p');
        if (proj.desc) {
            descEl.textContent = proj.desc;
        }

        // REFLECTIONS
        const refDescs = document.querySelectorAll('.ref-desc');
        if (refDescs.length >= 2) {
            refDescs[0].textContent = proj.contrib;   // contributions
            refDescs[1].textContent = proj.learned;   // skills learned
        }
    })
    .catch(err => console.error("Error loading project details:", err));