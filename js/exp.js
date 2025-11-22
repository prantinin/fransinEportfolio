fetch('../data/exp.json')
    .then(response => response.json())
    .then(exps => {
        const container = document.querySelector('.expcontents');

        exps.forEach(e => {
            const tile = document.createElement('div');
            tile.className = 'explisttile';
            tile.onclick = () => location.href = `expdetails.html?id=${e.id}`;

            const img = document.createElement('img');
            img.src = '../assets/icons/green_leaf_border.png';
            img.className = 'listtilebullet';

            const info = document.createElement('div');
            info.className = 'expinfo';

            const title = document.createElement('p');
            title.className = 'exp-title';
            title.textContent = e.title;

            const desc = document.createElement('p');
            desc.className = 'exp-desc';
            desc.textContent = e.desc;

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
    .catch(err => console.error("Error loading experiences:", err));