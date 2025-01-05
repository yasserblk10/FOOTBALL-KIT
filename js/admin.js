// Vérification de l'authentification
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'index.html';
    }
}

// Gestion des produits
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

// Gestion des commandes
let orders = [
    {
        id: 1,
        date: "2024-01-15",
        clientName: "Jean Dupont",
        phone: "06 12 34 56 78",
        email: "jean.dupont@email.com",
        address: "123 Rue de Paris, 75001 Paris",
        products: ["Kit PSG Domicile 2023/24", "Kit Barcelona Domicile 2023/24"],
        total: 179.98,
        status: "En cours"
    },
    {
        id: 2,
        date: "2024-01-16",
        clientName: "Marie Martin",
        phone: "06 98 76 54 32",
        email: "marie.martin@email.com",
        address: "456 Avenue des Champs-Élysées, 75008 Paris",
        products: ["Kit Real Madrid Domicile 2023/24", "Kit Manchester United Domicile 2023/24"],
        total: 179.98,
        status: "Livré"
    },
    {
        id: 3,
        date: "2024-01-17",
        clientName: "Pierre Durand",
        phone: "07 11 22 33 44",
        email: "pierre.durand@email.com",
        address: "789 Boulevard Saint-Michel, 75005 Paris",
        products: ["Kit Manchester City Domicile 2023/24", "Kit Liverpool Domicile 2023/24"],
        total: 164.98,
        status: "En attente"
    },
    {
        id: 4,
        date: "2024-01-18",
        clientName: "Sophie Bernard",
        phone: "06 55 44 33 22",
        email: "sophie.bernard@email.com",
        address: "321 Rue de la République, 69002 Lyon",
        products: ["Kit Bayern Munich Domicile 2023/24", "Kit Juventus Domicile 2023/24", "Kit AC Milan Domicile 2023/24"],
        total: 254.97,
        status: "En cours"
    },
    {
        id: 5,
        date: "2024-01-19",
        clientName: "Lucas Petit",
        phone: "07 99 88 77 66",
        email: "lucas.petit@email.com",
        address: "147 Avenue Jean Jaurès, 33000 Bordeaux",
        products: ["Kit Arsenal Domicile 2023/24", "Kit AC Milan Domicile 2023/24"],
        total: 162.98,
        status: "En attente"
    },
    {
        id: 6,
        date: "2024-01-20",
        clientName: "Emma Dubois",
        phone: "06 23 45 67 89",
        email: "emma.dubois@email.com",
        address: "258 Rue Victor Hugo, 59000 Lille",
        products: ["Kit Manchester United Domicile 2023/24", "Kit Barcelona Domicile 2023/24", "Kit Real Madrid Domicile 2023/24"],
        total: 269.97,
        status: "Livré"
    },
    {
        id: 7,
        date: "2024-01-21",
        clientName: "Thomas Moreau",
        phone: "07 34 56 78 90",
        email: "thomas.moreau@email.com",
        address: "369 Avenue de la Liberté, 13001 Marseille",
        products: ["Kit Inter Milan Domicile 2023/24", "Kit Borussia Dortmund Domicile 2023/24", "Kit PSG Domicile 2023/24"],
        total: 249.97,
        status: "En cours"
    },
    {
        id: 8,
        date: "2024-01-22",
        clientName: "Julie Lambert",
        phone: "06 87 65 43 21",
        email: "julie.lambert@email.com",
        address: "147 Rue de la Paix, 44000 Nantes",
        products: ["Kit PSG Domicile 2023/24", "Kit Real Madrid Domicile 2023/24", "Kit Barcelona Domicile 2023/24"],
        total: 274.97,
        status: "En attente"
    },
    {
        id: 9,
        date: "2024-01-23",
        clientName: "Antoine Rousseau",
        phone: "06 11 22 33 44",
        email: "antoine.r@email.com",
        address: "15 Boulevard des Sports, 31000 Toulouse",
        products: ["Kit Liverpool Domicile 2023/24", "Kit Arsenal Domicile 2023/24"],
        total: 162.98,
        status: "Livré"
    },
    {
        id: 10,
        date: "2024-01-24",
        clientName: "Sarah Michel",
        phone: "07 66 55 44 33",
        email: "sarah.m@email.com",
        address: "42 Rue du Stade, 67000 Strasbourg",
        products: ["Kit Bayern Munich Domicile 2023/24", "Kit Juventus Domicile 2023/24"],
        total: 174.98,
        status: "En cours"
    },
    {
        id: 11,
        date: "2024-01-25",
        clientName: "Paul Leroy",
        phone: "06 99 88 77 66",
        email: "paul.l@email.com",
        address: "28 Avenue du Football, 35000 Rennes",
        products: ["Kit Borussia Dortmund Domicile 2023/24", "Kit Inter Milan Domicile 2023/24"],
        total: 159.98,
        status: "En attente"
    },
    {
        id: 12,
        date: "2024-01-26",
        clientName: "Claire Martin",
        phone: "07 12 34 56 78",
        email: "claire.m@email.com",
        address: "73 Rue des Champions, 06000 Nice",
        products: ["Kit PSG Domicile 2023/24", "Kit Manchester City Domicile 2023/24", "Kit Real Madrid Domicile 2023/24"],
        total: 269.97,
        status: "Livré"
    }
];

// Tableau des factures
let invoices = [
    {
        number: 'FAC-001',
        date: '2024-01-15',
        client: 'John Doe',
        amount: 269.97,
        status: 'Payée',
        items: [
            { product: 'Kit PSG Domicile 2023/24', quantity: 2, price: 89.99 },
            { product: 'Kit Barcelona Domicile 2023/24', quantity: 1, price: 89.99 }
        ]
    },
    {
        number: 'FAC-002',
        date: '2024-01-16',
        client: 'Jane Smith',
        amount: 179.98,
        status: 'En attente',
        items: [
            { product: 'Kit Real Madrid Domicile 2023/24', quantity: 1, price: 94.99 },
            { product: 'Kit Manchester City Domicile 2023/24', quantity: 1, price: 84.99 }
        ]
    }
];

// Ajouter après la déclaration des autres tableaux
let clients = [
    {
        id: 1,
        name: "Jean Dupont",
        email: "jean.dupont@email.com",
        phone: "06 12 34 56 78",
        address: "123 Rue de Paris, 75001 Paris",
        totalPurchases: 89.99
    },
    {
        id: 2,
        name: "Marie Martin",
        email: "marie.martin@email.com",
        phone: "06 98 76 54 32",
        address: "456 Avenue des Champs-Élysées, 75008 Paris",
        totalPurchases: 184.98
    },
    {
        id: 3,
        name: "Pierre Durand",
        email: "pierre.durand@email.com",
        phone: "07 11 22 33 44",
        address: "789 Boulevard Saint-Michel, 75005 Paris",
        totalPurchases: 84.99
    }
];

async function loadProducts() {
    try {
        displayProductsTable();
        updateStats();
    } catch (error) {
        console.error('Erreur:', error);
    }
}

function displayProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    tbody.innerHTML = products.map(product => `
        <tr>
            <td>${product.id}</td>
            <td><img src="${product.image}" alt="${product.title}"></td>
            <td>${product.title}</td>
            <td>${product.price}€</td>
            <td>
                <button class="btn btn-sm btn-warning" onclick="editProduct(${product.id})">Modifier</button>
                <button class="btn btn-sm btn-danger" onclick="deleteProduct(${product.id})">Supprimer</button>
            </td>
        </tr>
    `).join('');
}

function updateStats() {
    document.getElementById('totalProducts').textContent = products.length;
    const totalRevenue = products.reduce((sum, product) => sum + product.price, 0);
    document.getElementById('totalRevenue').textContent = `${totalRevenue.toFixed(2)}€`;
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        // Créer le contenu du modal
        document.getElementById('productModal').innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modifier le produit</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="productName" class="form-label">Nom du produit</label>
                            <input type="text" class="form-control" id="productName" value="${product.title}" required>
                        </div>
                        <div class="mb-3">
                            <label for="productPrice" class="form-label">Prix (€)</label>
                            <input type="number" step="0.01" class="form-control" id="productPrice" value="${product.price}" required>
                        </div>
                        <div class="mb-3">
                            <label for="productImage" class="form-label">URL de l'image</label>
                            <input type="text" class="form-control" id="productImage" value="${product.image}" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="button" class="btn btn-primary" onclick="saveProduct()">Enregistrer</button>
                    </div>
                </div>
            </div>
        `;
        
        const modal = document.getElementById('productModal');
        modal.setAttribute('data-product-id', id);
        
        // Afficher le modal
        new bootstrap.Modal(modal).show();
    }
}

function deleteProduct(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
        products = products.filter(p => p.id !== id);
        
        // Sauvegarder dans le localStorage
        saveData();
        
        // Mettre à jour l'affichage
        displayProductsTable();
        updateStats();
        
        // Afficher une notification
        showNotification('Produit supprimé avec succès !');
    }
}

// Fonction pour afficher les commandes
function displayOrders() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = orders.map(order => `
        <tr>
            <td>${order.date}</td>
            <td>${order.clientName}</td>
            <td>${order.phone}</td>
            <td>${order.email}</td>
            <td>${order.address}</td>
            <td>${order.products.join('<br>')}</td>
            <td>${order.total.toFixed(2)}€</td>
            <td>
                <span class="badge ${getStatusBadgeClass(order.status)}">
                    ${order.status}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-info" onclick="viewOrderDetails(${order.id - 1})">
                    Voir détails
                </button>
                <button class="btn btn-sm btn-warning" onclick="editOrder(${order.id - 1})">
                    Modifier
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteOrder(${order.id - 1})">
                    Supprimer
                </button>
            </td>
        </tr>
    `).join('');
    
    updateOrderStats();
}

// Fonction pour mettre à jour les statistiques des commandes
function updateOrderStats() {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const ordersEnCours = orders.filter(order => order.status === "En cours").length;
    const ordersLivrees = orders.filter(order => order.status === "Livré").length;

    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('totalRevenue').textContent = `${totalRevenue.toFixed(2)}€`;
}

// Fonction pour obtenir la classe du badge selon le statut
function getStatusBadgeClass(status) {
    switch(status) {
        case 'En attente':
            return 'bg-warning';
        case 'En cours':
            return 'bg-info';
        case 'Livré':
            return 'bg-success';
        case 'Annulé':
            return 'bg-danger';
        default:
            return 'bg-secondary';
    }
}

// Fonction pour voir les détails d'une commande
function viewOrderDetails(index) {
    const order = orders[index];
    if (!order) return;

    document.getElementById('orderClientInfo').innerHTML = `
        <strong>Client:</strong> ${order.clientName}<br>
        <strong>Téléphone:</strong> ${order.phone}<br>
        <strong>Email:</strong> ${order.email}<br>
        <strong>Adresse:</strong> ${order.address}<br>
        <strong>Date de commande:</strong> ${order.date}
    `;
    
    document.getElementById('orderStatus').value = order.status;
    
    const itemsBody = document.getElementById('orderItemsDetails');
    itemsBody.innerHTML = order.products.map(product => {
        const productPrice = order.total / order.products.length;
        return `
            <tr>
                <td>${product}</td>
                <td>1</td>
                <td>${productPrice.toFixed(2)}€</td>
                <td>${productPrice.toFixed(2)}€</td>
            </tr>
        `;
    }).join('');
    
    document.getElementById('orderTotalDetails').textContent = `${order.total.toFixed(2)}€`;
    
    // Stocker l'index de la commande en cours
    document.getElementById('orderDetailsModal').setAttribute('data-order-index', index);
    
    new bootstrap.Modal(document.getElementById('orderDetailsModal')).show();
}

// Fonction pour modifier une commande
function editOrder(index) {
    const order = orders[index];
    if (!order) return;

    // Remplir le formulaire de modification
    document.getElementById('editOrderClientName').value = order.clientName;
    document.getElementById('editOrderPhone').value = order.phone;
    document.getElementById('editOrderEmail').value = order.email;
    document.getElementById('editOrderAddress').value = order.address;
    document.getElementById('editOrderStatus').value = order.status;

    // Stocker l'index de la commande en cours
    document.getElementById('editOrderModal').setAttribute('data-order-index', index);
    
    new bootstrap.Modal(document.getElementById('editOrderModal')).show();
}

// Fonction pour sauvegarder les modifications d'une commande
function saveOrderChanges() {
    const modal = document.getElementById('editOrderModal');
    const index = parseInt(modal.getAttribute('data-order-index'));
    
    if (index >= 0 && index < orders.length) {
        orders[index] = {
            ...orders[index],
            clientName: document.getElementById('editOrderClientName').value,
            phone: document.getElementById('editOrderPhone').value,
            email: document.getElementById('editOrderEmail').value,
            address: document.getElementById('editOrderAddress').value,
            status: document.getElementById('editOrderStatus').value
        };

        // Sauvegarder dans le localStorage
        saveData();
        
        // Mettre à jour l'affichage
        displayOrders();
        
        // Fermer le modal
        bootstrap.Modal.getInstance(modal).hide();
        
        // Afficher une notification
        showNotification('Commande modifiée avec succès !', 'alert-success');
    }
}

// Fonction pour supprimer une commande
function deleteOrder(index) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette commande ?')) {
        orders.splice(index, 1);
        
        // Sauvegarder dans le localStorage
        saveData();
        
        // Mettre à jour l'affichage
        displayOrders();
        
        // Afficher une notification
        showNotification('Commande supprimée avec succès !', 'alert-success');
    }
}

// Fonction pour mettre à jour le statut d'une commande
function updateOrderStatus() {
    const modal = document.getElementById('orderDetailsModal');
    const index = parseInt(modal.getAttribute('data-order-index'));
    
    if (index >= 0 && index < orders.length) {
        const newStatus = document.getElementById('orderStatus').value;
        orders[index].status = newStatus;
        
        // Sauvegarder dans le localStorage
        saveData();
        
        // Mettre à jour l'affichage
        displayOrders();
        
        // Fermer le modal
        bootstrap.Modal.getInstance(modal).hide();
        
        // Afficher une notification
        showNotification('Statut de la commande mis à jour !', 'alert-success');
    }
}

// Fonction pour afficher une notification
function showNotification(message, type = 'alert-success') {
    const notification = document.createElement('div');
    notification.className = `alert ${type} notification`;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.innerHTML = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Fonction pour sauvegarder les données
function saveData() {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('clients', JSON.stringify(clients));
    localStorage.setItem('invoices', JSON.stringify(invoices));
}

// Fonction pour charger les données
function loadData() {
    // Charger les produits
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        products = JSON.parse(savedProducts);
    }

    // Charger les commandes
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }

    // Charger les clients
    const savedClients = localStorage.getItem('clients');
    if (savedClients) {
        clients = JSON.parse(savedClients);
    }

    // Charger les factures
    const savedInvoices = localStorage.getItem('invoices');
    if (savedInvoices) {
        invoices = JSON.parse(savedInvoices);
    }
}

// Fonction pour sauvegarder la section active
function saveActiveSection(sectionId) {
    localStorage.setItem('activeSection', sectionId);
}

// Fonction pour afficher/masquer les sections
function showSection(sectionId) {
    // Cacher toutes les sections
    document.getElementById('dashboardSection').style.display = 'none';
    document.getElementById('productsSection').style.display = 'none';
    document.getElementById('ordersSection').style.display = 'none';
    document.getElementById('invoiceSection').style.display = 'none';
    document.getElementById('clientsSection').style.display = 'none';
    
    // Afficher la section demandée
    document.getElementById(sectionId).style.display = 'block';
    saveActiveSection(sectionId);

    // Mettre à jour l'affichage selon la section
    switch(sectionId) {
        case 'productsSection':
            displayProductsTable();
            break;
        case 'ordersSection':
            displayOrders();
            break;
        case 'clientsSection':
            displayClients();
            break;
        case 'invoiceSection':
            displayInvoices();
            break;
        case 'dashboardSection':
            updateStats();
            break;
    }
}

// Fonction pour ajouter un nouveau produit
function addNewProduct() {
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Ajouter un produit</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="productForm">
                        <div class="mb-3">
                            <label for="productName" class="form-label">Nom du produit</label>
                            <input type="text" class="form-control" id="productName" required>
                        </div>
                        <div class="mb-3">
                            <label for="productPrice" class="form-label">Prix (€)</label>
                            <input type="number" step="0.01" min="0" class="form-control" id="productPrice" required>
                        </div>
                        <div class="mb-3">
                            <label for="productImage" class="form-label">URL de l'image</label>
                            <input type="text" class="form-control" id="productImage" required>
                            <small class="text-muted">Exemple: images/nom-du-kit.jpg</small>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-primary" onclick="saveProduct()">Enregistrer</button>
                </div>
            </div>
        </div>
    `;
    
    // Enlever l'attribut data-product-id pour indiquer qu'il s'agit d'un nouveau produit
    modal.removeAttribute('data-product-id');
    
    // Afficher le modal
    new bootstrap.Modal(modal).show();
}

// Fonction pour sauvegarder un produit
function saveProduct() {
    const productName = document.getElementById('productName').value.trim();
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productImage = document.getElementById('productImage').value.trim();
    const modal = document.getElementById('productModal');
    const productId = modal.getAttribute('data-product-id');

    if (!productName || !productPrice || !productImage) {
        showNotification('Veuillez remplir tous les champs', 'alert-danger');
        return;
    }

    if (productId) {
        // Modification d'un produit existant
        const productIndex = products.findIndex(p => p.id === parseInt(productId));
        if (productIndex !== -1) {
            products[productIndex] = {
                ...products[productIndex],
                title: productName,
                price: productPrice,
                image: productImage
            };
        }
    } else {
        // Ajout d'un nouveau produit
        const newId = Math.max(...products.map(p => p.id)) + 1;
        products.push({
            id: newId,
            title: productName,
            price: productPrice,
            image: productImage
        });
    }

    // Sauvegarder dans le localStorage
    saveData();

    // Mettre à jour l'affichage
    displayProductsTable();
    updateStats();

    // Fermer le modal
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();

    // Afficher une notification de succès
    showNotification(productId ? 'Produit modifié avec succès !' : 'Produit ajouté avec succès !', 'alert-success');
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    
    // Charger les données sauvegardées
    loadData();

    // Gestionnaires de navigation
    document.getElementById('dashboardLink').addEventListener('click', () => showSection('dashboardSection'));
    document.getElementById('productsLink').addEventListener('click', () => showSection('productsSection'));
    document.getElementById('ordersLink').addEventListener('click', () => {
        showSection('ordersSection');
        displayOrders(); // Afficher explicitement les commandes
    });
    document.getElementById('invoiceLink').addEventListener('click', () => showSection('invoiceSection'));
    document.getElementById('clientsLink').addEventListener('click', () => showSection('clientsSection'));

    // Ajouter l'écouteur pour le bouton d'ajout de produit
    document.getElementById('addProductBtn').addEventListener('click', addNewProduct);

    // Ajouter l'écouteur pour le bouton de génération de facture
    document.getElementById('generateInvoiceBtn').addEventListener('click', () => {
        generateInvoice();
        saveData();
        showNotification('Nouvelle facture générée avec succès !', 'alert-success');
    });

    // Ajouter l'écouteur pour le bouton d'ajout de client
    document.getElementById('addClientBtn').addEventListener('click', () => {
        addNewClient();
    });

    // Ajouter l'écouteur pour le bouton de sauvegarde de client
    document.getElementById('saveClientBtn').addEventListener('click', () => {
        saveClient();
        saveData();
        showNotification('Client sauvegardé avec succès !', 'alert-success');
    });

    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('isAdminLoggedIn');
        window.location.href = 'index.html';
    });

    // Toujours afficher le tableau de bord au démarrage
    showSection('dashboardSection');
    
    // Afficher les données initiales et sauvegarder dans le localStorage
    displayProductsTable();
    displayOrders(); // S'assurer que les commandes sont affichées au démarrage
    displayClients();
    displayInvoices();
    updateStats();
    saveData(); // Sauvegarder les données initiales
});

// Fonction pour générer une nouvelle facture
function generateInvoice() {
    const invoiceNumber = `FAC-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    const today = new Date().toISOString().split('T')[0];
    const amount = (Math.random() * 500 + 100).toFixed(2);
    
    const newInvoice = {
        number: invoiceNumber,
        date: today,
        client: 'Nouveau Client',
        amount: parseFloat(amount),
        status: 'En attente',
        items: [
            { 
                product: 'Kit Football', 
                quantity: 1, 
                price: parseFloat(amount)
            }
        ]
    };
    
    // Ajouter la nouvelle facture au tableau
    invoices.unshift(newInvoice);
    
    // Mettre à jour l'affichage
    displayInvoices();
}

// Mettre à jour l'affichage des factures
function displayInvoices() {
    const tbody = document.getElementById('invoicesTableBody');
    tbody.innerHTML = invoices.map(invoice => `
        <tr>
            <td>${invoice.number}</td>
            <td>${invoice.date}</td>
            <td>${invoice.client}</td>
            <td>${invoice.amount.toFixed(2)}€</td>
            <td><span class="badge ${invoice.status === 'Payée' ? 'bg-success' : 'bg-warning'}">${invoice.status}</span></td>
            <td>
                <button class="btn btn-sm btn-info" onclick="viewInvoice('${invoice.number}')">Voir</button>
                <button class="btn btn-sm btn-secondary" onclick="downloadInvoice('${invoice.number}')">Télécharger</button>
            </td>
        </tr>
    `).join('');
}

// Fonction pour voir une facture
function viewInvoice(invoiceNumber) {
    const invoice = invoices.find(inv => inv.number === invoiceNumber);
    if (!invoice) return;

    // Remplir les détails de la facture dans le modal
    document.getElementById('invoiceNumber').textContent = invoice.number;
    document.getElementById('invoiceDate').textContent = invoice.date;
    document.getElementById('clientInfo').textContent = invoice.client;
    document.getElementById('invoiceTotal').textContent = invoice.amount.toFixed(2) + '€';
    
    // Remplir les articles
    const itemsHtml = invoice.items.map(item => `
        <tr>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>${item.price.toFixed(2)}€</td>
            <td>${(item.quantity * item.price).toFixed(2)}€</td>
        </tr>
    `).join('');
    document.getElementById('invoiceItems').innerHTML = itemsHtml;

    // Mettre à jour le statut
    const statusElement = document.getElementById('invoiceStatus');
    statusElement.textContent = invoice.status;
    statusElement.className = `badge ${invoice.status === 'Payée' ? 'bg-success' : 'bg-warning'}`;

    // Afficher le modal
    new bootstrap.Modal(document.getElementById('invoiceModal')).show();
}

// Fonction pour télécharger une facture
function downloadInvoice(invoiceNumber) {
    const invoice = invoices.find(inv => inv.number === invoiceNumber);
    if (!invoice) return;

    // Créer le contenu de la facture
    let content = `
FOOTBALL KITS STORE
------------------
Facture N°: ${invoice.number}
Date: ${invoice.date}
Client: ${invoice.client}

Articles:
${invoice.items.map(item => 
    `${item.product}
    Quantité: ${item.quantity}
    Prix unitaire: ${item.price.toFixed(2)}€
    Sous-total: ${(item.quantity * item.price).toFixed(2)}€
`).join('\n')}

Total: ${invoice.amount.toFixed(2)}€
Statut: ${invoice.status}
`;

    // Créer un blob et le télécharger
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${invoice.number}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Fonction pour afficher les clients
function displayClients() {
    const tbody = document.getElementById('clientsTableBody');
    tbody.innerHTML = clients.map(client => `
        <tr>
            <td>${client.id}</td>
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td>${client.address}</td>
            <td>${client.totalPurchases.toFixed(2)}€</td>
            <td>
                <button class="btn btn-sm btn-warning" onclick="editClient(${client.id})">Modifier</button>
                <button class="btn btn-sm btn-danger" onclick="deleteClient(${client.id})">Supprimer</button>
            </td>
        </tr>
    `).join('');
}

// Fonction pour ajouter un nouveau client
function addNewClient() {
    document.getElementById('clientName').value = '';
    document.getElementById('clientEmail').value = '';
    document.getElementById('clientPhone').value = '';
    document.getElementById('clientAddress').value = '';
    
    const modal = document.getElementById('clientModal');
    modal.removeAttribute('data-client-id');
    new bootstrap.Modal(modal).show();
}

// Fonction pour éditer un client
function editClient(id) {
    const client = clients.find(c => c.id === id);
    if (!client) return;
    
    const modal = document.getElementById('clientModal');
    modal.setAttribute('data-client-id', id);
    
    document.getElementById('clientName').value = client.name;
    document.getElementById('clientEmail').value = client.email;
    document.getElementById('clientPhone').value = client.phone;
    document.getElementById('clientAddress').value = client.address;
    
    new bootstrap.Modal(modal).show();
}

// Fonction pour supprimer un client
function deleteClient(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
        clients = clients.filter(c => c.id !== id);
        displayClients();
        updateStats();
    }
}

// Fonction pour sauvegarder un client
function saveClient() {
    const name = document.getElementById('clientName').value.trim();
    const email = document.getElementById('clientEmail').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const address = document.getElementById('clientAddress').value.trim();
    const modal = document.getElementById('clientModal');
    const clientId = modal.getAttribute('data-client-id');
    
    if (!name || !email || !phone || !address) {
        showNotification('Veuillez remplir tous les champs', 'alert-danger');
        return;
    }
    
    if (clientId) {
        // Modification d'un client existant
        const index = clients.findIndex(c => c.id === parseInt(clientId));
        if (index !== -1) {
            clients[index] = {
                ...clients[index],
                name,
                email,
                phone,
                address
            };
        }
    } else {
        // Ajout d'un nouveau client
        const newId = Math.max(...clients.map(c => c.id), 0) + 1;
        clients.push({
            id: newId,
            name,
            email,
            phone,
            address,
            totalPurchases: 0
        });
    }
    
    // Sauvegarder dans le localStorage
    saveData();
    
    // Mettre à jour l'affichage
    displayClients();
    
    // Fermer le modal
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
    
    // Afficher une notification de succès
    showNotification(
        clientId ? 'Client modifié avec succès !' : 'Client ajouté avec succès !',
        'alert-success'
    );
} 