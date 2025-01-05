// Initialisation du panier
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartCount = document.getElementById('cartCount');

// Fonction pour ajouter un produit au panier
function addToCart(product) {
    // Vérifier si le produit existe déjà dans le panier
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Sauvegarder le panier dans localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mettre à jour le compteur du panier
    updateCartCount();
    
    // Afficher une notification
    showNotification('Produit ajouté au panier !');
}

// Fonction pour mettre à jour le compteur du panier
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Fonction pour afficher le contenu du panier
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center">Votre panier est vide</p>';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        
        cartItems.innerHTML += `
            <div class="cart-item mb-3">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" alt="${item.title}" style="width: 50px; height: 50px; object-fit: cover;">
                    <div class="ms-3">
                        <h6 class="mb-0">${item.title}</h6>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-sm btn-outline-secondary me-2" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-secondary ms-2" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <p class="mb-0">${item.price}€ x ${item.quantity} = ${subtotal}€</p>
                    </div>
                    <button class="btn btn-danger ms-auto" onclick="removeFromCart(${item.id})">
                        <i class="bi bi-trash"></i> Supprimer
                    </button>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML += `
        <div class="text-end mt-3">
            <h5>Total: ${total.toFixed(2)}€</h5>
        </div>
    `;
}

// Fonction pour mettre à jour la quantité
function updateQuantity(productId, change) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += change;
        if (product.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            displayCart();
        }
    }
}

// Fonction pour supprimer un produit du panier
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

// Fonction pour afficher une notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success notification';
    notification.innerHTML = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Style pour la notification
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        animation: fadeIn 0.3s, fadeOut 0.3s 1.7s;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);

// Événements
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    // Gestionnaire pour le bouton du panier
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', () => {
        displayCart();
        const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
        cartModal.show();
    });
    
    // Gestionnaire pour le bouton de commande
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Votre panier est vide !');
                return;
            }
            
            // Calculer le total
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('orderTotal').textContent = total.toFixed(2);
            
            // Fermer le modal du panier
            const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
            cartModal.hide();
            
            // Ouvrir le modal de commande
            const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
            orderModal.show();
        });
    }
    
    // Gestionnaire pour le bouton de confirmation de commande
    const confirmOrderBtn = document.getElementById('confirmOrderBtn');
    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener('click', () => {
            const name = document.getElementById('orderName').value;
            const phone = document.getElementById('orderPhone').value;
            const email = document.getElementById('orderEmail').value;
            const address = document.getElementById('orderAddress').value;
            
            if (!name || !phone || !email || !address) {
                alert('Veuillez remplir tous les champs');
                return;
            }
            
            // Créer la commande
            const order = {
                name: name,
                phone: phone,
                email: email,
                address: address,
                items: cart,
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                date: new Date().toISOString(),
                status: 'En attente'
            };
            
            // Sauvegarder la commande
            let orders = JSON.parse(localStorage.getItem('orders') || '[]');
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Vider le panier
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            // Fermer le modal
            const orderModal = bootstrap.Modal.getInstance(document.getElementById('orderModal'));
            orderModal.hide();
            
            // Afficher un message de confirmation
            showNotification('Commande confirmée ! Merci de votre achat.');
        });
    }
}); 