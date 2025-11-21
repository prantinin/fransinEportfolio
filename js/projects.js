fetch('../data/projects.json')
    .then(response => response.json())
    .then(projects => {
        const container = document.querySelector('.projectscontents');

        projects.forEach(p => {
            const tile = document.createElement('div');
            tile.className = 'projectlisttile';
            tile.onclick = () => location.href = p.link;

            const img = document.createElement('img');
            img.src = '../assets/icons/green_leaf_border.png';
            img.className = 'listtilebullet';

            const info = document.createElement('div');
            info.className = 'projectinfo';

            const title = document.createElement('p');
            title.className = 'project-title';
            title.textContent = p.title;

            const desc = document.createElement('p');
            desc.className = 'project-desc';
            desc.textContent = p.desc;

            info.appendChild(title);
            info.appendChild(desc);

            tile.appendChild(img);
            tile.appendChild(info);

            container.appendChild(tile);

            const line = document.createElement('hr');
            line.className = 'dark-deco-line';
            container.appendChild(line);
        });
    })
    .catch(err => console.error("Error loading projects:", err));
