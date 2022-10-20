const app = {
    grid : function makeGrid(grille, pixels) {
        tbl.textContent = '';
        if(!grille && !pixels) {
            return;
        }
        for(let i = 0; i<grille; i++) {
            const row = document.createElement('tr');
            row.id = ('row' + i);
            tbl.append(row);
    
            for(let b = 0; b<grille; b++) {
                const col = document.createElement('td');
                col.addEventListener('click', app.color);
                row.append(col);
                col.style.width = pixels;
                col.style.height = pixels;
                col.classList.add('white');
            }
        }
    },
    click: function handleData() {
        const grille = text1.value;
        let pixels = text2.value;
        pixels = `${pixels}px`;
        app.grid(grille, pixels);
    },
    color : function changeColor(event) {
        const col = event.currentTarget;
        col.classList.toggle('black');
    }  
    
}


const tbl = document.createElement('table');
const container = document.getElementById('invader');
container.append(tbl);
const formulaire = document.querySelector('form');

const btn = document.createElement('input');
btn.type = 'button';
btn.value = 'Valider';
btn.id = 'valider';
const text1 = document.createElement('input');
text1.type = 'number';
text1.placeholder = 'Taille de la grille';
text1.id = 'grille';
formulaire.append(text1);
const text2 = document.createElement('input');
text2.type = 'number';
text2.placeholder = 'Taille des pixels';
formulaire.append(text2);
formulaire.append(btn);
btn.addEventListener('click', app.click);




