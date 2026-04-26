function populateGrids() {
    const grids = document.querySelectorAll('.js-product-grid');
    grids.forEach(grid => {
        grid.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const card = document.createElement('div');
            card.className = 'card-skeleton';
            card.innerHTML = `
                <div class="card-img-shimmer"></div>
                <div class="card-text-shimmer" style="width: 80%"></div>
                <div class="card-text-shimmer" style="width: 50%"></div>
            `;
            grid.appendChild(card);
        }
    });
}

function initInteractions() {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const grids = document.querySelectorAll('.js-product-grid');
            grids.forEach(g => {
                g.style.opacity = '0';
                g.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    populateGrids();
                    g.style.opacity = '1';
                    g.style.transform = 'translateY(0)';
                }, 200);
            });
        });
    });
}

window.onload = () => {
    initInteractions();
    populateGrids();
};