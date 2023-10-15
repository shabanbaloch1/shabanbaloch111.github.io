const products = [
    { name: "Head&Shoulders Shampoo (L)", price: 550, imageUrl:"https://imgur.com/AopeH6H.jpg" }, //Add more products here
    { name: "Head&Shoulders Shampoo (S)", price: 300, imageUrl: "https://i.imgur.com/l74CvGs.jpg" },
    { name: "Lifebuoy Shampoo (L)", price: 650, imageUrl: "https://imgur.com/Vtxis94.jpg" }, // 
    { name: "Lifebuoy Shampoo (S)", price: 350, imageUrl: "https://imgur.com/oNw2WNU.jpg" }, // Added ".jpg" extension
    { name: "Clear Shampoo (L)", price: 750, imageUrl: "https://imgur.com/xbdOEyN.jpg" },//
    { name: "Clear Shampoo (S)", price: 350, imageUrl: "https://imgur.com/uMb0qUR.jpg" },//
    { name: "Sunsilk Shampoo (L) ", price: 800, imageUrl:"https://imgur.com/K6j34IG.jpg" }, //
    { name: "Sunsilk Shampoo (S)", price: 350, imageUrl:"https://imgur.com/spCIJQS.jpg" }, //
  { name: "Sunsilk EX Shampoo (L)", price: 1400, imageUrl:"https://imgur.com/4eyUh6c.jpg" }, //
  { name: "Sunsilk EX Shampoo (S)", price: 350, imageUrl:"https://imgur.com/S5wAE9I.jpg" }, //
  { name: "Clinic Plus Shampoo (L)", price: 650, imageUrl:"https://imgur.com/GEU8hcZ.jpg" }, //
  { name: "Clinic Plus Shampoo (S)", price: 300, imageUrl:"https://imgur.com/oCDf1rg.jpg" }, //
  { name: "Vatika Shampoo", price: 300, imageUrl:"https://imgur.com/q6nzJr8.jpg" }, //
  { name: "Seven Herbal Shampoo", price: 300, imageUrl:"https://imgur.com/RJ5EEdL.jpg" }, //
  { name: "TRESemme Shampoo", price: 1200, imageUrl:"https://imgur.com/EOofkeV.jpg" }, //
  { name: "Vierro Shampoo", price: 550, imageUrl:"https://imgur.com/sILVre7.jpg" }, //
  { name: "Shampoo Hair Color", price: 50, imageUrl:"https://imgur.com/gUGcrLT.jpg" }, //
  { name: "Yardlie Black Hair Shampoo", price: 1000, imageUrl:"https://i.imgur.com/5dONeCl.jpg" }, //
  { name: "Seven Herbal Oil", price: 300, imageUrl:"https://imgur.com/CDU6kmY.jpg" }, //
   { name: "Vatika Oil (L)", price: 550, imageUrl:"https://imgur.com/eQVA6lC.jpg" }, //
  { name: "Emami 7 Oil (L)", price: 600, imageUrl:"https://imgur.com/rLepFA9.jpg" }, //
   { name: "Vibel Hair Oil (L)", price: 300, imageUrl:"https://imgur.com/VRIm7SM.jpg" }, //
  { name: "Dabur Amla Jasmine Oil", price: 350, imageUrl:"https://imgur.com/s0Dtuwo.jpg" }, //
  { name: "Senorlta Hair Oil", price: 350, imageUrl:"https://imgur.com/5CjapHn.jpg" }, //
  { name: "Star Royal Oil", price: 350, imageUrl:"https://imgur.com/IRlQK0S.jpg" }, //
  { name: "Dirham Hair Oil", price: 350, imageUrl:"https://imgur.com/itj65X2.jpg" }, //
   { name: "Rose Hair Oil", price: 250, imageUrl:"https://imgur.com/DRCqgOW.jpg" }, //
   { name: "Johnson Baby Oil", price: 450, imageUrl:"https://imgur.com/wvTWmjq.jpg" }, //
  { name: "Dabur Amla Oil (L)", price: 400, imageUrl:"https://imgur.com/cMIrziJ.jpg" }, //
  { name: "Spanish Oil", price: 500, imageUrl:"https://imgur.com/aiM2V0S.jpg" }, //
  { name: "Coconut Oil (L)", price: 700, imageUrl:"https://imgur.com/O3oGigi.jpg" }, //
  { name: "Coconut Oil (S)", price: 600, imageUrl:"https://imgur.com/HhQqS3c.jpg" }, // 
  { name: "Fair Lovely Cream", price: 450, imageUrl:"https://imgur.com/AlHjLlN.jpg" }, //
  { name: "Dove Cream (L)", price: 650, imageUrl:"https://imgur.com/uJ7IQxA.jpg" }, //
  { name: "Goree Beauty Cream", price: 250, imageUrl:"https://imgur.com/TJ8sBhP.jpg" }, //
  { name: "Layla Beauty Cream", price: 250, imageUrl:"https://imgur.com/y9LQOXP.jpg" }, //
  { name: "Seven Day Cream (L)", price: 430, imageUrl:"https://imgur.com/pmXRBCv.jpg" }, //
  { name: "TouchMe Shaving Cream", price: 150, imageUrl:"https://imgur.com/wPqT9GB.jpg" }, //
  { name: "Johnson Baby Cream", price: 700, imageUrl:"https://imgur.com/QIetg15.jpg" }, //
  { name: "Johnson Baby Powder", price: 400, imageUrl:"https://imgur.com/ejVovL1.jpg" }, //
  { name: "Baby Powder (PYRO)", price: 200, imageUrl:"https://imgur.com/mhbji55.jpg" }, //  
  { name: "Vaseline Blueseal Orignal", price: 550, imageUrl:"https://imgur.com/ybEc2qn.jpg" }, //
  { name: "Vaseline Blueseal Men", price: 550, imageUrl:"https://imgur.com/pgQbTUv.jpg" }, //
  { name: "Vaseline Max Lady", price: 700, imageUrl:"https://imgur.com/M4tYH4e.jpg" }, //
  { name: "Vaseline Daniela", price: 700, imageUrl:"https://imgur.com/nHsLrLM.jpg" }, //
  { name: "Vaseline Silky Soft", price: 400, imageUrl:"https://imgur.com/jnS3y6e.jpg" }, //
  { name: "Vaseline Softens", price: 400, imageUrl:"https://imgur.com/Y7x0JHb.jpg" }, //
  { name: "Mosquito Spray", price: 150, imageUrl:"https://imgur.com/Uwwdl2b.jpg" }, //
  { name: "Ant Powder", price: 100, imageUrl:"https://imgur.com/p5QgERd.jpg" }, //
  { name: "Dentist Toothbrush", price: 200, imageUrl:"https://imgur.com/AMppfvG.jpg" }, //
  { name: "Dr Kaps Toothbrush", price: 150, imageUrl:"https://imgur.com/8JKCIw4.jpg" }, //
  { name: "Colgate Herbal ToothPaste (22g)", price: 30, imageUrl:"https://imgur.com/4QPN9Am.jpg" }, //
  { name: "Colgate Herbal ToothPaste (45g)", price: 80, imageUrl:"https://imgur.com/S50fjrd.jpg" }, //
  { name: "Colgate Herbal ToothPaste (100g)", price: 180, imageUrl:"https://imgur.com/9CgQD7M.jpg" }, //
  { name: "Colgate Herbal ToothPaste (150g)", price: 250, imageUrl:"https://imgur.com/LZVmoha.jpg" }, //
  { name: "Colgate MaxFresh ToothPaste (133g)", price: 350, imageUrl:"https://imgur.com/tl80oEK.jpg" }, //
  { name: "Medicam ToothPaste (65g)", price: 180, imageUrl:"https://imgur.com/erGDbvI.jpg" }, //
  { name: "Medicam ToothPaste (35g)", price: 80, imageUrl:"https://imgur.com/ZcWUq7n.jpg" }, //
  { name: "Doctor ToothPaste (65g)", price: 180, imageUrl:"https://imgur.com/FecDdff.jpg" }, //
  { name: "Doctor ToothPaste (35g)", price: 80, imageUrl:"https://imgur.com/M1btrFZ.jpg" }, //
  { name: "Sensodyne ToothPaste (100ml)", price: 250, imageUrl:"https://imgur.com/sRMiGDI.jpg" }, //
  { name: "CloseUp (White Now) ToothPaste", price: 250, imageUrl:"https://imgur.com/tkzcAHt.jpg" }, //
  { name: "CloseUp (Ice White) ToothPaste", price: 300, imageUrl:"https://imgur.com/BOs8Ho3.jpg" }, //
  { name: "Guardex Soap", price: 100, imageUrl:"https://imgur.com/rFtkO1h.jpg" }, //
  { name: "IVY Soap", price: 100, imageUrl:"https://imgur.com/wpzuGLE.jpg" }, //
  { name: "Dove Soap", price: 300, imageUrl:"https://imgur.com/lUmHrjq.jpg" }, //
  { name: "Lux Soap", price: 150, imageUrl:"https://imgur.com/DZxbYmU.jpg" }, //
  { name: "Lifebuoy Soap", price: 100, imageUrl:"https://imgur.com/8IWU2fl.jpg" }, //
  { name: "Dettol Soap", price: 130, imageUrl:"https://imgur.com/FBkpPcZ.jpg" }, //
  { name: "Savannah Soap", price: 100, imageUrl:"https://imgur.com/b7VLUCI.jpg" }, //
  { name: "No.1 Soap", price: 180, imageUrl:"https://imgur.com/J0y3RSz.jpg" }, //
  { name: "Pears 3-Bars Soap", price: 300, imageUrl:"https://imgur.com/VQRVJE9.jpg" }, //
  { name: "Pears Soap", price: 200, imageUrl:"https://imgur.com/kEFDnbV.jpg" }, //
  { name: "Skin White Soap", price: 150, imageUrl:"https://imgur.com/Ue7A3Tn.jpg" }, //
  { name: "Nivea Baby Soap", price: 150, imageUrl:"https://imgur.com/8q9BKq6.jpg" }, //
  { name: "Gillete Foam", price: 500, imageUrl:"https://imgur.com/f1bxEZH.jpg" }, //
  { name: "WildStone CODE BodySpray", price: 1000, imageUrl:"https://imgur.com/zn2xrd0.jpg" }, //
  { name: "Cool Blue Bodyspray", price: 500, imageUrl:"https://imgur.com/cA0ip68.jpg" }, //
  { name: "Home Spray", price: 250, imageUrl:"https://imgur.com/ANzQGlB.jpg" }, //
  { name: "AXE (Signature) BodySpray", price: 550, imageUrl:"https://imgur.com/mshF5fT.jpg" }, //
  { name: "Sapil BodySpray", price: 400, imageUrl:"https://imgur.com/Vs0m68O.jpg" }, //
  { name: "Havoc BodySpray", price: 500, imageUrl:"https://imgur.com/Rw5H3g7.jpg" }, //  
  { name: "Just call me maxi parfum", price: 1850, imageUrl:"https://imgur.com/HezFYci.jpg" }, //
  { name: "Blue Lady parfum", price: 2000, imageUrl:"https://imgur.com/odz5Fcx.jpg" }, //
  { name: "Geometry parfum", price: 1000, imageUrl:"https://imgur.com/Rsxiza8.jpg" }, //
  { name: "Fifa Worldcup Brazil parfum", price: 1000, imageUrl:"https://imgur.com/3mGUrup.jpg" }, //
  { name: "Secret parfum", price: 1750, imageUrl:"https://imgur.com/hvGkxTa.jpg" }, //
  { name: "Danielhills Black parfum", price: 2000, imageUrl:"https://imgur.com/gJc0VWM.jpg" }, //
  { name: "Challenger parfum", price: 700, imageUrl:"https://imgur.com/0RwYzki.jpg" }, //
  { name: "White Orchid parfum", price: 2000, imageUrl:"https://imgur.com/IFC8G8f.jpg" }, //
  { name: "SHIYAKA-AMEERA-RAHAL parfum", price: 800, imageUrl:"https://imgur.com/vpDxyqZ.jpg" }, //
  { name: "Ultimate Blue parfum", price: 1500, imageUrl:"https://imgur.com/YcxDCxE.jpg" }, //
  { name: "Ponds Facewash", price: 450, imageUrl:"https://imgur.com/1vIxjfa.jpg" }, //
  { name: "BF- Beauty facewash", price: 400, imageUrl:"https://imgur.com/K0iZa6V.jpg" }, //
  { name: "Dove Facewash", price: 350, imageUrl:"https://imgur.com/bg5oCTZ.jpg" }, //
  { name: "Fairlovely Facewash", price: 200, imageUrl:"https://imgur.com/mu5Jsdr.jpg" }, //
  { name: "Under Shave (Body Razor)", price: 30, imageUrl:"https://imgur.com/8jBOMSY.jpg" }, //
  { name: "Baby Pack (Pampers)", price: 30, imageUrl:"https://imgur.com/fIdtul4.jpg" }, //
  { name: "Ladies Pack", price: 150, imageUrl:"https://imgur.com/6uCW2Yb.jpg" }, //
  { name: "Cotton Buds(Ear)", price: 50, imageUrl:"https://imgur.com/lG0NpHR.jpg" }, //
  { name: "Gillete Blue-2", price: 170, imageUrl:"https://imgur.com/l2z45sp.jpg" }, //
  { name: "Gillete Blue-3", price: 300, imageUrl:"https://imgur.com/fy52nLG.jpg" }, //
  { name: "Black Rose Color", price: 150, imageUrl:"https://imgur.com/3f5ZFiW.jpg" }, //
  { name: "Tissue Paper (Nine Leaves)", price: 200, imageUrl:"https://imgur.com/mVCHTgB.jpg" }, //
];




const productNameInput = document.getElementById('product-name');
const searchButton = document.getElementById('search-btn');
const productContainer = document.querySelector('.product-container');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const resetButton = document.getElementById('reset-btn');

const cart = [];
let cartTotal = 0;

// Function to update the cart and total price displayed
function updateCart() {
    cartItems.innerHTML = '';
    cartTotal = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerText = `${item.name} Price: ${item.price}`;
        cartItems.appendChild(cartItem);
        cartTotal += item.price;
    });

    totalPrice.innerText = `Total Price: ${cartTotal}`;
}

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Function to reset the cart
function resetCart() {
    cart.length = 0;
    updateCart();
}

// Function to display product details when the "Search" button is clicked
function displayProductDetails() {
    const productName = productNameInput.value.trim().toLowerCase();

    const matchedProducts = products.filter(product =>
        product.name.toLowerCase().includes(productName)
    );

    if (matchedProducts.length > 0) {
        productContainer.innerHTML = '';

        matchedProducts.forEach(product => {
            const { name, price, imageUrl } = product;

            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${imageUrl}" alt="${name}">
                <h2>${name}</h2>
                <p>Price: ${price}</p>
                <button class="add-to-cart-btn">+</button>
            `;
            productContainer.appendChild(productDiv);

            const addToCartButton = productDiv.querySelector('.add-to-cart-btn');
            addToCartButton.addEventListener('click', () => {
                addToCart({ name, price });
            });
        });
    } else {
        alert("Product not found!");
    }
}

// Add event listeners
searchButton.addEventListener('click', displayProductDetails);
resetButton.addEventListener('click', resetCart);
