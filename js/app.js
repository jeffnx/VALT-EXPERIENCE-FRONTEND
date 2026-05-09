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

    document.querySelectorAll('.nav-item').forEach(item => {
        const btn = item.querySelector('.cat-btn');
        
        if (btn) {
            btn.addEventListener('click', function(e) {

                if (item.classList.contains('has-submenu')) {
                    e.preventDefault();
                    e.stopPropagation(); 

                    const isOpen = item.classList.contains('open');

                    document.querySelectorAll('.nav-item.has-submenu').forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('open');
                        }
                    });

                    const userDropdown = document.getElementById('user-dropdown');
                    if (userDropdown) {
                        userDropdown.classList.remove('active');
                    }

                    if (isOpen) {
                        item.classList.remove('open');
                    } else {
                        item.classList.add('open');
                    }
                }

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
        }
    });

    const userBtn = document.getElementById('user-btn');
    const userDropdown = document.getElementById('user-dropdown');

    if (userBtn && userDropdown) {
        userBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            document.querySelectorAll('.nav-item.has-submenu').forEach(item => {
                item.classList.remove('open');
            });

            userDropdown.classList.toggle('active');
        });

        userDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    window.addEventListener('click', function() {

        document.querySelectorAll('.nav-item.has-submenu').forEach(item => {
            item.classList.remove('open');
        });

        if (userDropdown) {
            userDropdown.classList.remove('active');
        }
    });

    document.querySelectorAll('.mega-menu').forEach(menu => {
        menu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
}

window.onload = () => {
    initInteractions();
    populateGrids();
};