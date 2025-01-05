// Données des produits par défaut
let products = [
    {
        id: 1,
        title: "Kit PSG Domicile 2023/24",
        price: 89.99,
        image: "images/psg.jpg"
    },
    {
        id: 2,
        title: "Kit Real Madrid Domicile 2023/24",
        price: 94.99,
        image: "images/real.jpg"
    },
    {
        id: 3,
        title: "Kit Barcelona Domicile 2023/24",
        price: 89.99,
        image: "images/barcelona.jpg"
    },
    {
        id: 4,
        title: "Kit Manchester City Domicile 2023/24",
        price: 84.99,
        image: "images/mancity.jpg"
    },
    {
        id: 5,
        title: "Kit Bayern Munich Domicile 2023/24",
        price: 89.99,
        image: "images/bayern.jpg"
    },
    {
        id: 6,
        title: "Kit Liverpool Domicile 2023/24",
        price: 79.99,
        image: "images/liverpool.jpg"
    },
    {
        id: 7,
        title: "Kit Manchester United Domicile 2023/24",
        price: 84.99,
        image: "images/manutd.jpg"
    },
    {
        id: 8,
        title: "Kit Arsenal Domicile 2023/24",
        price: 82.99,
        image: "images/arsenal.jpg"
    },
    {
        id: 9,
        title: "Kit AC Milan Domicile 2023/24",
        price: 79.99,
        image: "images/milan.jpg"
    },
    {
        id: 10,
        title: "Kit Inter Milan Domicile 2023/24",
        price: 79.99,
        image: "images/inter.jpg"
    },
    {
        id: 11,
        title: "Kit Juventus Domicile 2023/24",
        price: 84.99,
        image: "images/juventus.jpg"
    },
    {
        id: 12,
        title: "Kit Borussia Dortmund Domicile 2023/24",
        price: 79.99,
        image: "images/dortmund.jpg"
    }
];

// Fonction pour charger les produits depuis le localStorage
function loadProducts() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        products = JSON.parse(savedProducts);
    } else {
        // Si aucun produit n'est sauvegardé, utiliser les produits par défaut
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Fonction pour afficher les produits
function displayProducts(productsToDisplay = products) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const productCard = `
            <div class="col-md-3 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 300px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text mt-auto">${product.price}€</p>
                        <button class="btn btn-primary" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Fonction de recherche
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// Fonction de tri par prix
function sortProducts(order) {
    const sortedProducts = [...products].sort((a, b) => {
        if (order === 'asc') {
            return a.price - b.price;
        } else if (order === 'desc') {
            return b.price - a.price;
        }
        return 0;
    });
    displayProducts(sortedProducts);
}

// Événements
document.addEventListener('DOMContentLoaded', () => {
    // Charger les produits depuis le localStorage
    loadProducts();
    
    // Afficher les produits
    displayProducts();
    
    // Gestionnaire de recherche
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });
    
    // Gestionnaire de tri par prix
    const filterPrice = document.getElementById('filterPrice');
    filterPrice.addEventListener('change', (e) => {
        sortProducts(e.target.value);
    });

    // Écouter les changements dans le localStorage
    window.addEventListener('storage', (e) => {
        if (e.key === 'products') {
            loadProducts();
            displayProducts();
        }
    });
}); 