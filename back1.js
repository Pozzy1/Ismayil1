// Sepetimiz boş başlatıyoruz
let cart = [];

// Sepetimizdeki ürünlerin toplam fiyatını hesaplayan fonksiyon
function calculateTotal() {
	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		total += cart[i].price;
	}
	return total.toFixed(2);
}

// Sepetimizi HTML içinde gösteren fonksiyon
function renderCart() {
	let cartContainer = document.getElementById('cart-items');
	cartContainer.innerHTML = '';

	for (let i = 0; i < cart.length; i++) {
		let item = cart[i];
		let itemHTML = `
			<div class="cart-item">
				<div class="cart-item__image">
					<img src="${item.image}" alt="${item.title}">
				</div>
				<div class="cart-item__details">
					<h4>${item.title}</h4>
					<p class="cart-item__price">$${item.price.toFixed(2)}</p>
				</div>
			</div>
		`;
		cartContainer.innerHTML += itemHTML;
	}

	document.getElementById('cart-total').innerText = calculateTotal();
}

// Sayfa yüklendiğinde sepeti oluşturuyoruz
window.onload = function() {
	renderCart();
}

// Sepete ürün ekleyen fonksiyon
function addToCart(title, price, image) {
	let item = {
		title: title,
		price: price,
		image: image
	};
	cart.push(item);
	renderCart();
}

// "Sepete Ekle" butonlarına tıklanınca ürünü sepete ekleyen event listener'lar
let addToCartButtons = document.getElementsByClassName('add-to-cart');
for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click', function() {
		let title = this.getAttribute('data-title');
		let price = parseFloat(this.getAttribute('data-price'));
		let image = this.getAttribute('data-image');
		addToCart(title, price, image);
		alert('Ürün sepete eklendi!');
	});
}
