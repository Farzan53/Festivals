// Navbar Start
document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
    submenu.addEventListener('mouseover', function () {
        let dropdownMenu = submenu.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.style.display = 'block';
        }
    });
    submenu.addEventListener('mouseout', function () {
        let dropdownMenu = submenu.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.style.display = 'none';
        }
    });
});
// Navbar Ends


// Cart Start
let cart = [];

function addToCart(itemName, itemDescription) {
const item = {
name: itemName,
description: itemDescription
};

cart.push(item);

document.getElementById("cartCount").innerText = cart.length;
}

function removeFromCart(index) {
cart.splice(index, 1);

document.getElementById("cartCount").innerText = cart.length;

showCart();
}

function showCart() {
const cartContainer = document.getElementById("cartItemsContainer");

cartContainer.innerHTML = "";

if (cart.length === 0) {
cartContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
cart.forEach((item, index) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    cartItemDiv.innerHTML = `
        <h6>${item.name}</h6>
        <p>${item.description}</p>
        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(cartItemDiv);
});
}

const cartModal = document.getElementById("cartModal");
cartModal.style.display = "flex";
}

function closeCart() {
const cartModal = document.getElementById("cartModal");
cartModal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

addToCartButtons.forEach(button => {
button.addEventListener("click", function () {
    const itemName = button.getAttribute("data-name");
    const itemDescription = button.getAttribute("data-description");

    addToCart(itemName, itemDescription);
});
});

const cartIcon = document.getElementById("cartIcon");
cartIcon.addEventListener("click", showCart);
});
// Cart End


// Home Start
// Islam Card
const islamCard = document.getElementById('islamCard');
const islamFestivals = document.getElementById('islamFestivals');
const showLessBtn = document.getElementById('showLessBtn');

// Christianity
const christianityCard = document.getElementById('christianityCard');
const christianityFestivals = document.getElementById('christianityFestivals');
const christianityShowLessBtn = document.getElementById('christianityShowLessBtn');

// Judaism
const judaismCard = document.getElementById('judaismCard');
const judaismFestivals = document.getElementById('judaismFestivals');
const judaismShowLessBtn = document.getElementById('judaismShowLessBtn');

// Buddhism
const buddhismCard = document.getElementById('buddhismCard');
const buddhismFestivals = document.getElementById('buddhismFestivals');
const buddhismShowLessBtn = document.getElementById('buddhismShowLessBtn');

// Shinto
const shintoCard = document.getElementById('shintoCard');
const shintoFestivals = document.getElementById('shintoFestivals');
const shintoShowLessBtn = document.getElementById('shintoShowLessBtn');

// Sikhism
const sikhismCard = document.getElementById('sikhismCard');
const sikhismFestivals = document.getElementById('sikhismFestivals');
const sikhismShowLessBtn = document.getElementById('sikhismShowLessBtn');

// Hinduism
const hinduismCard = document.getElementById('hinduismCard');
const hinduismFestivals = document.getElementById('hinduismFestivals');
const hinduismShowLessBtn = document.getElementById('hinduismShowLessBtn');

// Taoism
const taoismCard = document.getElementById('taoismCard');
const taoismFestivals = document.getElementById('taoismFestivals');
const taoismShowLessBtn = document.getElementById('taoismShowLessBtn');

// Zoroastrianism
const zoroastrianismCard = document.getElementById('zoroastrianismCard');
const zoroastrianismFestivals = document.getElementById('zoroastrianismFestivals');
const zoroastrianismShowLessBtn = document.getElementById('zoroastrianismShowLessBtn');

// Voodoo
const voodooCard = document.getElementById('voodooCard');
const voodooFestivals = document.getElementById('voodooFestivals');
const voodooShowLessBtn = document.getElementById('voodooShowLessBtn');


// Hiding All Festivals
function hideAllFestivals() {
islamFestivals.style.display = 'none';
christianityFestivals.style.display = 'none';
judaismFestivals.style.display = 'none';
buddhismFestivals.style.display = 'none';
shintoFestivals.style.display = 'none';
sikhismFestivals.style.display = 'none';
hinduismFestivals.style.display = 'none';
taoismFestivals.style.display = 'none';
zoroastrianismFestivals.style.display = 'none';
voodooFestivals.style.display = 'none';
}


// Islam Card Click Event
islamCard.addEventListener('click', function() {
if (islamFestivals.style.display === 'none' || islamFestivals.style.display === '') {
hideAllFestivals();
islamFestivals.style.display = 'block';
} else {
islamFestivals.style.display = 'none';
}
});

// Christianity Card Click Event
christianityCard.addEventListener('click', function () {
if (christianityFestivals.style.display === 'none' || christianityFestivals.style.display === '') {
hideAllFestivals();
christianityFestivals.style.display = 'block';
} else {
christianityFestivals.style.display = 'none';
}
});

// Judaism Card Click Event
judaismCard.addEventListener('click', function () {
if (judaismFestivals.style.display === 'none' || judaismFestivals.style.display === '') {
hideAllFestivals();
judaismFestivals.style.display = 'block';
} else {
judaismFestivals.style.display = 'none';
}
});

// Buddhism Card Click Event
buddhismCard.addEventListener('click', function () {
if (buddhismFestivals.style.display === 'none' || buddhismFestivals.style.display === '') {
hideAllFestivals();
buddhismFestivals.style.display = 'block';
} else {
buddhismFestivals.style.display = 'none';
}
});

// Shinto Card Click Event
shintoCard.addEventListener('click', function() {
if (shintoFestivals.style.display === 'none' || shintoFestivals.style.display === '') {
hideAllFestivals();
shintoFestivals.style.display = 'block';
} else {
shintoFestivals.style.display = 'none';
}
});

// Sikhism Card Click Event
sikhismCard.addEventListener('click', function () {
if (sikhismFestivals.style.display === 'none' || sikhismFestivals.style.display === '') {
hideAllFestivals();
sikhismFestivals.style.display = 'block';
} else {
sikhismFestivals.style.display = 'none';
}
});

// Hinduism Card Click Event
hinduismCard.addEventListener('click', function () {
if (hinduismFestivals.style.display === 'none' || hinduismFestivals.style.display === '') {
hideAllFestivals();
hinduismFestivals.style.display = 'block';
} else {
hinduismFestivals.style.display = 'none';
}
});

// Taoism Card Click Event
taoismCard.addEventListener('click', function () {
if (taoismFestivals.style.display === 'none' || taoismFestivals.style.display === '') {
hideAllFestivals();
taoismFestivals.style.display = 'block';
} else {
taoismFestivals.style.display = 'none';
}
});

// Zoroastrianism Card Click Event
zoroastrianismCard.addEventListener('click', function () {
if (zoroastrianismFestivals.style.display === 'none' || zoroastrianismFestivals.style.display === '') {
hideAllFestivals();
zoroastrianismFestivals.style.display = 'block';
} else {
zoroastrianismFestivals.style.display = 'none';
}
});

// Voodoo Card Click Event
voodooCard.addEventListener('click', function () {
if (voodooFestivals.style.display === 'none' || voodooFestivals.style.display === '') {
hideAllFestivals();
voodooFestivals.style.display = 'block';
} else {
voodooFestivals.style.display = 'none';
}
});


// Show Less Buttons For Festivals
showLessBtn.addEventListener('click', function() {
islamFestivals.style.display = 'none';
});

christianityShowLessBtn.addEventListener('click', function () {
christianityFestivals.style.display = 'none';
});

judaismShowLessBtn.addEventListener('click', function () {
judaismFestivals.style.display = 'none';
});

buddhismShowLessBtn.addEventListener('click', function () {
buddhismFestivals.style.display = 'none';
});

shintoShowLessBtn.addEventListener('click', function() {
shintoFestivals.style.display = 'none';
});

sikhismShowLessBtn.addEventListener('click', function () {
sikhismFestivals.style.display = 'none';
});

hinduismShowLessBtn.addEventListener('click', function () {
hinduismFestivals.style.display = 'none';
});

taoismShowLessBtn.addEventListener('click', function () {
taoismFestivals.style.display = 'none';
});

zoroastrianismShowLessBtn.addEventListener('click', function () {
zoroastrianismFestivals.style.display = 'none';
});

voodooShowLessBtn.addEventListener('click', function () {
voodooFestivals.style.display = 'none';
});



// Islamic Festivals
// Get elements for Eid ul-Fitr
const eidCard = document.getElementById('eidUlFitrCard'); 
const eidContent = document.getElementById('eidContent'); 
const eidShowLessBtn = document.getElementById('eidShowLessBtn'); 

// Get elements for Eid ul-Adha
const eidAlAdhaCard = document.getElementById('eidAlAdhaCard');
const eidAlAdhaContent = document.getElementById('eidAlAdhaContent');
const eidAlAdhaShowLessBtn = document.getElementById('eidAlAdhaShowLessBtn');

// Get elements for Ramadan
const ramadanCard = document.getElementById('ramadanCard'); 
const ramadanContent = document.getElementById('ramadanContent'); 
const ramadanShowLessBtn = document.getElementById('ramadanShowLessBtn'); 

// Get elements for Hajj
const hajjCard = document.getElementById('hajjCard'); 
const hajjContent = document.getElementById('hajjContent');
const hajjShowLessBtn = document.getElementById('hajjShowLessBtn');

// Toggle Eid ul-Fitr content
eidCard.addEventListener('click', function() {
if (eidAlAdhaContent.style.display === 'block') {
eidAlAdhaContent.style.display = 'none';
eidAlAdhaShowLessBtn.style.display = 'none';
}
if (ramadanContent.style.display === 'block') {
ramadanContent.style.display = 'none';
ramadanShowLessBtn.style.display = 'none';
}
if (hajjContent.style.display === 'block') {
hajjContent.style.display = 'none';
hajjShowLessBtn.style.display = 'none';
}

if (eidContent.style.display === 'none' || eidContent.style.display === '') {
eidContent.style.display = 'block';
eidShowLessBtn.style.display = 'block';
} else {
eidContent.style.display = 'none';
eidShowLessBtn.style.display = 'none';
}
});

// Toggle Eid ul-Adha content
eidAlAdhaCard.addEventListener('click', function() {
if (eidContent.style.display === 'block') {
eidContent.style.display = 'none';
eidShowLessBtn.style.display = 'none';
}
if (ramadanContent.style.display === 'block') {
ramadanContent.style.display = 'none';
ramadanShowLessBtn.style.display = 'none';
}
if (hajjContent.style.display === 'block') {
hajjContent.style.display = 'none';
hajjShowLessBtn.style.display = 'none';
}

if (eidAlAdhaContent.style.display === 'none' || eidAlAdhaContent.style.display === '') {
eidAlAdhaContent.style.display = 'block';
eidAlAdhaShowLessBtn.style.display = 'block';
} else {
eidAlAdhaContent.style.display = 'none';
eidAlAdhaShowLessBtn.style.display = 'none';
}
});

// Toggle Ramadan content
ramadanCard.addEventListener('click', function() {
if (eidContent.style.display === 'block') {
eidContent.style.display = 'none';
eidShowLessBtn.style.display = 'none';
}
if (eidAlAdhaContent.style.display === 'block') {
eidAlAdhaContent.style.display = 'none';
eidAlAdhaShowLessBtn.style.display = 'none';
}
if (hajjContent.style.display === 'block') {
hajjContent.style.display = 'none';
hajjShowLessBtn.style.display = 'none';
}

if (ramadanContent.style.display === 'none' || ramadanContent.style.display === '') {
ramadanContent.style.display = 'block';
ramadanShowLessBtn.style.display = 'block';
} else {
ramadanContent.style.display = 'none';
ramadanShowLessBtn.style.display = 'none';
}
});

// Toggle Hajj content
hajjCard.addEventListener('click', function() {
if (eidContent.style.display === 'block') {
eidContent.style.display = 'none';
eidShowLessBtn.style.display = 'none';
}
if (eidAlAdhaContent.style.display === 'block') {
eidAlAdhaContent.style.display = 'none';
eidAlAdhaShowLessBtn.style.display = 'none';
}
if (ramadanContent.style.display === 'block') {
ramadanContent.style.display = 'none';
ramadanShowLessBtn.style.display = 'none';
}

if (hajjContent.style.display === 'none' || hajjContent.style.display === '') {
hajjContent.style.display = 'block';
hajjShowLessBtn.style.display = 'block';
} else {
hajjContent.style.display = 'none';
hajjShowLessBtn.style.display = 'none';
}
});

// Hiding Content
eidShowLessBtn.addEventListener('click', function() {
eidContent.style.display = 'none';
eidShowLessBtn.style.display = 'none';
});

eidAlAdhaShowLessBtn.addEventListener('click', function() {
eidAlAdhaContent.style.display = 'none';
eidAlAdhaShowLessBtn.style.display = 'none';
});

ramadanShowLessBtn.addEventListener('click', function() {
ramadanContent.style.display = 'none';
ramadanShowLessBtn.style.display = 'none'; 
});

hajjShowLessBtn.addEventListener('click', function() {
hajjContent.style.display = 'none'; 
hajjShowLessBtn.style.display = 'none';
});



// Chritian Festivals
// Get elements for Easter
const easterCard = document.getElementById('easterCard');
const easterContent = document.getElementById('easterContent');
const easterShowLessBtn = document.getElementById('easterShowLessBtn');

// Get elements for Christmas
const christmasCard = document.getElementById('christmasCard');
const christmasContent = document.getElementById('christmasContent');
const christmasShowLessBtn = document.getElementById('christmasShowLessBtn');

// Get elements for Halloween
const halloweenCard = document.getElementById('halloweenCard');
const halloweenContent = document.getElementById('halloweenContent');
const halloweenShowLessBtn = document.getElementById('halloweenShowLessBtn');

// Get elements for Advent
const adventCard = document.getElementById('adventCard');
const adventContent = document.getElementById('adventContent');
const adventShowLessBtn = document.getElementById('adventShowLessBtn');

// Toggle Easter content
easterCard.addEventListener('click', function() {
if (christmasContent.style.display === 'block') {
christmasContent.style.display = 'none';
christmasShowLessBtn.style.display = 'none';
}
if (halloweenContent.style.display === 'block') {
halloweenContent.style.display = 'none';
halloweenShowLessBtn.style.display = 'none';
}
if (adventContent.style.display === 'block') {
adventContent.style.display = 'none';
adventShowLessBtn.style.display = 'none';
}

if (easterContent.style.display === 'none' || easterContent.style.display === '') {
easterContent.style.display = 'block';
easterShowLessBtn.style.display = 'block';
} else {
easterContent.style.display = 'none';
easterShowLessBtn.style.display = 'none';
}
});

// Toggle Christmas content
christmasCard.addEventListener('click', function() {
if (easterContent.style.display === 'block') {
easterContent.style.display = 'none';
easterShowLessBtn.style.display = 'none';
}
if (halloweenContent.style.display === 'block') {
halloweenContent.style.display = 'none';
halloweenShowLessBtn.style.display = 'none';
}
if (adventContent.style.display === 'block') {
adventContent.style.display = 'none';
adventShowLessBtn.style.display = 'none';
}

if (christmasContent.style.display === 'none' || christmasContent.style.display === '') {
christmasContent.style.display = 'block';
christmasShowLessBtn.style.display = 'block';
} else {
christmasContent.style.display = 'none';
christmasShowLessBtn.style.display = 'none';
}
});

// Toggle Halloween content
halloweenCard.addEventListener('click', function() {
if (easterContent.style.display === 'block') {
easterContent.style.display = 'none';
easterShowLessBtn.style.display = 'none';
}
if (christmasContent.style.display === 'block') {
christmasContent.style.display = 'none';
christmasShowLessBtn.style.display = 'none';
}
if (adventContent.style.display === 'block') {
adventContent.style.display = 'none';
adventShowLessBtn.style.display = 'none';
}

if (halloweenContent.style.display === 'none' || halloweenContent.style.display === '') {
halloweenContent.style.display = 'block';
halloweenShowLessBtn.style.display = 'block';
} else {
halloweenContent.style.display = 'none';
halloweenShowLessBtn.style.display = 'none';
}
});

// Toggle Advent content
adventCard.addEventListener('click', function() {
if (easterContent.style.display === 'block') {
easterContent.style.display = 'none';
easterShowLessBtn.style.display = 'none';
}
if (christmasContent.style.display === 'block') {
christmasContent.style.display = 'none';
christmasShowLessBtn.style.display = 'none';
}
if (halloweenContent.style.display === 'block') {
halloweenContent.style.display = 'none';
halloweenShowLessBtn.style.display = 'none';
}

if (adventContent.style.display === 'none' || adventContent.style.display === '') {
adventContent.style.display = 'block';
adventShowLessBtn.style.display = 'block';
} else {
adventContent.style.display = 'none';
adventShowLessBtn.style.display = 'none';
}
});

// Hiding Content
easterShowLessBtn.addEventListener('click', function() {
easterContent.style.display = 'none';
easterShowLessBtn.style.display = 'none';
});

christmasShowLessBtn.addEventListener('click', function() {
christmasContent.style.display = 'none';
christmasShowLessBtn.style.display = 'none';
});

halloweenShowLessBtn.addEventListener('click', function() {
halloweenContent.style.display = 'none';
halloweenShowLessBtn.style.display = 'none';
});

adventShowLessBtn.addEventListener('click', function() {
adventContent.style.display = 'none';
adventShowLessBtn.style.display = 'none';
});



// Judaism Festivals
// Get elements for Purim
const purimCard = document.getElementById('purimCard');
const purimContent = document.getElementById('purimContent');
const purimShowLessBtn = document.getElementById('purimShowLessBtn');

// Get elements for Shabbat
const shabbatCard = document.getElementById('shabbatCard');
const shabbatContent = document.getElementById('shabbatContent');
const shabbatShowLessBtn = document.getElementById('shabbatShowLessBtn');

// Get elements for Sukkot
const sukkotCard = document.getElementById('sukkotCard');
const sukkotContent = document.getElementById('sukkotContent');
const sukkotShowLessBtn = document.getElementById('sukkotShowLessBtn');

// Get elements for Passover
const passoverCard = document.getElementById('passoverCard');
const passoverContent = document.getElementById('passoverContent');
const passoverShowLessBtn = document.getElementById('passoverShowLessBtn');


// Toggle Purim content
purimCard.addEventListener('click', function() {
if (shabbatContent.style.display === 'block') {
shabbatContent.style.display = 'none';
shabbatShowLessBtn.style.display = 'none';
}
if (sukkotContent.style.display === 'block') {
sukkotContent.style.display = 'none';
sukkotShowLessBtn.style.display = 'none';
}
if (passoverContent.style.display === 'block') {
passoverContent.style.display = 'none';
passoverShowLessBtn.style.display = 'none';
}

if (purimContent.style.display === 'none' || purimContent.style.display === '') {
purimContent.style.display = 'block';
purimShowLessBtn.style.display = 'block';
} else {
purimContent.style.display = 'none';
purimShowLessBtn.style.display = 'none';
}
});

// Toggle Shabbat content
shabbatCard.addEventListener('click', function() {
if (purimContent.style.display === 'block') {
purimContent.style.display = 'none';
purimShowLessBtn.style.display = 'none';
}
if (sukkotContent.style.display === 'block') {
sukkotContent.style.display = 'none';
sukkotShowLessBtn.style.display = 'none';
}
if (passoverContent.style.display === 'block') {
passoverContent.style.display = 'none';
passoverShowLessBtn.style.display = 'none';
}

if (shabbatContent.style.display === 'none' || shabbatContent.style.display === '') {
shabbatContent.style.display = 'block';
shabbatShowLessBtn.style.display = 'block';
} else {
shabbatContent.style.display = 'none';
shabbatShowLessBtn.style.display = 'none';
}
});

// Toggle Sukkot content
sukkotCard.addEventListener('click', function() {
if (purimContent.style.display === 'block') {
purimContent.style.display = 'none';
purimShowLessBtn.style.display = 'none';
}
if (shabbatContent.style.display === 'block') {
shabbatContent.style.display = 'none';
shabbatShowLessBtn.style.display = 'none';
}
if (passoverContent.style.display === 'block') {
passoverContent.style.display = 'none';
passoverShowLessBtn.style.display = 'none';
}

if (sukkotContent.style.display === 'none' || sukkotContent.style.display === '') {
sukkotContent.style.display = 'block';
sukkotShowLessBtn.style.display = 'block';
} else {
sukkotContent.style.display = 'none';
sukkotShowLessBtn.style.display = 'none';
}
});

// Toggle Passover content
passoverCard.addEventListener('click', function() {
if (purimContent.style.display === 'block') {
purimContent.style.display = 'none';
purimShowLessBtn.style.display = 'none';
}
if (shabbatContent.style.display === 'block') {
shabbatContent.style.display = 'none';
shabbatShowLessBtn.style.display = 'none';
}
if (sukkotContent.style.display === 'block') {
sukkotContent.style.display = 'none';
sukkotShowLessBtn.style.display = 'none';
}

if (passoverContent.style.display === 'none' || passoverContent.style.display === '') {
passoverContent.style.display = 'block';
passoverShowLessBtn.style.display = 'block';
} else {
passoverContent.style.display = 'none';
passoverShowLessBtn.style.display = 'none';
}
});

// Hiding Content
purimShowLessBtn.addEventListener('click', function() {
purimContent.style.display = 'none';
purimShowLessBtn.style.display = 'none';
});

shabbatShowLessBtn.addEventListener('click', function() {
shabbatContent.style.display = 'none';
shabbatShowLessBtn.style.display = 'none';
});

sukkotShowLessBtn.addEventListener('click', function() {
sukkotContent.style.display = 'none';
sukkotShowLessBtn.style.display = 'none';
});

passoverShowLessBtn.addEventListener('click', function() {
passoverContent.style.display = 'none';
passoverShowLessBtn.style.display = 'none';
});



// Buddhism Festivals
// Get elements for Vesak
const vesakCard = document.getElementById('vesakCard');
const vesakContent = document.getElementById('vesakContent');
const vesakShowLessBtn = document.getElementById('vesakShowLessBtn');

// Get elements for Magha Puja
const maghaPujaCard = document.getElementById('maghaPujaCard');
const maghaPujaContent = document.getElementById('maghaPujaContent');
const maghaPujaShowLessBtn = document.getElementById('maghaPujaShowLessBtn');

// Get elements for Uposatha
const uposathaCard = document.getElementById('uposathaCard');
const uposathaContent = document.getElementById('uposathaContent');
const uposathaShowLessBtn = document.getElementById('uposathaShowLessBtn');

// Get elements for Bodhi Day
const bodhiDayCard = document.getElementById('bodhiDayCard');
const bodhiDayContent = document.getElementById('bodhiDayContent');
const bodhiDayShowLessBtn = document.getElementById('bodhiDayShowLessBtn');

// Toggle Vesak content
vesakCard.addEventListener('click', function() {
if (maghaPujaContent.style.display === 'block') {
maghaPujaContent.style.display = 'none';
maghaPujaShowLessBtn.style.display = 'none';
}
if (uposathaContent.style.display === 'block') {
uposathaContent.style.display = 'none';
uposathaShowLessBtn.style.display = 'none';
}
if (bodhiDayContent.style.display === 'block') {
bodhiDayContent.style.display = 'none';
bodhiDayShowLessBtn.style.display = 'none';
}

if (vesakContent.style.display === 'none' || vesakContent.style.display === '') {
vesakContent.style.display = 'block';
vesakShowLessBtn.style.display = 'block';
} else {
vesakContent.style.display = 'none';
vesakShowLessBtn.style.display = 'none';
}
});

// Toggle Magha Puja content
maghaPujaCard.addEventListener('click', function() {
if (vesakContent.style.display === 'block') {
vesakContent.style.display = 'none';
vesakShowLessBtn.style.display = 'none';
}
if (uposathaContent.style.display === 'block') {
uposathaContent.style.display = 'none';
uposathaShowLessBtn.style.display = 'none';
}
if (bodhiDayContent.style.display === 'block') {
bodhiDayContent.style.display = 'none';
bodhiDayShowLessBtn.style.display = 'none';
}

if (maghaPujaContent.style.display === 'none' || maghaPujaContent.style.display === '') {
maghaPujaContent.style.display = 'block';
maghaPujaShowLessBtn.style.display = 'block';
} else {
maghaPujaContent.style.display = 'none';
maghaPujaShowLessBtn.style.display = 'none';
}
});

// Toggle Uposatha content
uposathaCard.addEventListener('click', function() {
if (vesakContent.style.display === 'block') {
vesakContent.style.display = 'none';
vesakShowLessBtn.style.display = 'none';
}
if (maghaPujaContent.style.display === 'block') {
maghaPujaContent.style.display = 'none';
maghaPujaShowLessBtn.style.display = 'none';
}
if (bodhiDayContent.style.display === 'block') {
bodhiDayContent.style.display = 'none';
bodhiDayShowLessBtn.style.display = 'none';
}

if (uposathaContent.style.display === 'none' || uposathaContent.style.display === '') {
uposathaContent.style.display = 'block';
uposathaShowLessBtn.style.display = 'block';
} else {
uposathaContent.style.display = 'none';
uposathaShowLessBtn.style.display = 'none';
}
});

// Toggle Bodhi Day content
bodhiDayCard.addEventListener('click', function() {
if (vesakContent.style.display === 'block') {
vesakContent.style.display = 'none';
vesakShowLessBtn.style.display = 'none';
}
if (maghaPujaContent.style.display === 'block') {
maghaPujaContent.style.display = 'none';
maghaPujaShowLessBtn.style.display = 'none';
}
if (uposathaContent.style.display === 'block') {
uposathaContent.style.display = 'none';
uposathaShowLessBtn.style.display = 'none';
}

if (bodhiDayContent.style.display === 'none' || bodhiDayContent.style.display === '') {
bodhiDayContent.style.display = 'block';
bodhiDayShowLessBtn.style.display = 'block';
} else {
bodhiDayContent.style.display = 'none';
bodhiDayShowLessBtn.style.display = 'none';
}
});

// Hiding Content
vesakShowLessBtn.addEventListener('click', function() {
vesakContent.style.display = 'none';
vesakShowLessBtn.style.display = 'none';
});

maghaPujaShowLessBtn.addEventListener('click', function() {
maghaPujaContent.style.display = 'none';
maghaPujaShowLessBtn.style.display = 'none';
});

uposathaShowLessBtn.addEventListener('click', function() {
uposathaContent.style.display = 'none';
uposathaShowLessBtn.style.display = 'none';
});

bodhiDayShowLessBtn.addEventListener('click', function() {
bodhiDayContent.style.display = 'none';
bodhiDayShowLessBtn.style.display = 'none';
});



// Shinto Festivals
// Get elements for Torii
const toriiCard = document.getElementById('toriiCard');
const toriiContent = document.getElementById('toriiContent');
const toriiShowLessBtn = document.getElementById('toriiShowLessBtn');

// Get elements for Haiden
const haidenCard = document.getElementById('haidenCard');
const haidenContent = document.getElementById('haidenContent');
const haidenShowLessBtn = document.getElementById('haidenShowLessBtn');

// Get elements for Jinja
const jinjaCard = document.getElementById('jinjaCard');
const jinjaContent = document.getElementById('jinjaContent');
const jinjaShowLessBtn = document.getElementById('jinjaShowLessBtn');

// Get elements for Gohei
const goheiCard = document.getElementById('goheiCard');
const goheiContent = document.getElementById('goheiContent');
const goheiShowLessBtn = document.getElementById('goheiShowLessBtn');

// Toggle Torii content
toriiCard.addEventListener('click', function() {
if (haidenContent.style.display === 'block') {
haidenContent.style.display = 'none';
haidenShowLessBtn.style.display = 'none';
}
if (jinjaContent.style.display === 'block') {
jinjaContent.style.display = 'none';
jinjaShowLessBtn.style.display = 'none';
}
if (goheiContent.style.display === 'block') {
goheiContent.style.display = 'none';
goheiShowLessBtn.style.display = 'none';
}

if (toriiContent.style.display === 'none' || toriiContent.style.display === '') {
toriiContent.style.display = 'block';
toriiShowLessBtn.style.display = 'block';
} else {
toriiContent.style.display = 'none';
toriiShowLessBtn.style.display = 'none';
}
});

// Toggle Haiden content
haidenCard.addEventListener('click', function() {
if (toriiContent.style.display === 'block') {
toriiContent.style.display = 'none';
toriiShowLessBtn.style.display = 'none';
}
if (jinjaContent.style.display === 'block') {
jinjaContent.style.display = 'none';
jinjaShowLessBtn.style.display = 'none';
}
if (goheiContent.style.display === 'block') {
goheiContent.style.display = 'none';
goheiShowLessBtn.style.display = 'none';
}

if (haidenContent.style.display === 'none' || haidenContent.style.display === '') {
haidenContent.style.display = 'block';
haidenShowLessBtn.style.display = 'block';
} else {
haidenContent.style.display = 'none';
haidenShowLessBtn.style.display = 'none';
}
});

// Toggle Jinja content
jinjaCard.addEventListener('click', function() {
if (toriiContent.style.display === 'block') {
toriiContent.style.display = 'none';
toriiShowLessBtn.style.display = 'none';
}
if (haidenContent.style.display === 'block') {
haidenContent.style.display = 'none';
haidenShowLessBtn.style.display = 'none';
}
if (goheiContent.style.display === 'block') {
goheiContent.style.display = 'none';
goheiShowLessBtn.style.display = 'none';
}

if (jinjaContent.style.display === 'none' || jinjaContent.style.display === '') {
jinjaContent.style.display = 'block';
jinjaShowLessBtn.style.display = 'block';
} else {
jinjaContent.style.display = 'none';
jinjaShowLessBtn.style.display = 'none';
}
});

// Toggle Gohei content
goheiCard.addEventListener('click', function() {
if (toriiContent.style.display === 'block') {
toriiContent.style.display = 'none';
toriiShowLessBtn.style.display = 'none';
}
if (haidenContent.style.display === 'block') {
haidenContent.style.display = 'none';
haidenShowLessBtn.style.display = 'none';
}
if (jinjaContent.style.display === 'block') {
jinjaContent.style.display = 'none';
jinjaShowLessBtn.style.display = 'none';
}

if (goheiContent.style.display === 'none' || goheiContent.style.display === '') {
goheiContent.style.display = 'block';
goheiShowLessBtn.style.display = 'block';
} else {
goheiContent.style.display = 'none';
goheiShowLessBtn.style.display = 'none';
}
});

// Hiding Content
toriiShowLessBtn.addEventListener('click', function() {
toriiContent.style.display = 'none';
toriiShowLessBtn.style.display = 'none';
});

haidenShowLessBtn.addEventListener('click', function() {
haidenContent.style.display = 'none';
haidenShowLessBtn.style.display = 'none';
});

jinjaShowLessBtn.addEventListener('click', function() {
jinjaContent.style.display = 'none';
jinjaShowLessBtn.style.display = 'none';
});

goheiShowLessBtn.addEventListener('click', function() {
goheiContent.style.display = 'none';
goheiShowLessBtn.style.display = 'none';
});



// Sikhism Festivals
// Get elements for Baisakhi
const baisakhiCard = document.getElementById('baisakhiCard');
const baisakhiContent = document.getElementById('baisakhiContent');
const baisakhiShowLessBtn = document.getElementById('baisakhiShowLessBtn');

// Get elements for Maghi
const maghiCard = document.getElementById('maghiCard');
const maghiContent = document.getElementById('maghiContent');
const maghiShowLessBtn = document.getElementById('maghiShowLessBtn');

// Get elements for Diwali
const diwaliCard = document.getElementById('diwaliCard');
const diwaliContent = document.getElementById('diwaliContent');
const diwaliShowLessBtn = document.getElementById('diwaliShowLessBtn');

// Get elements for Lohri
const lohriCard = document.getElementById('lohriCard');
const lohriContent = document.getElementById('lohriContent');
const lohriShowLessBtn = document.getElementById('lohriShowLessBtn');

// Toggle Baisakhi content
baisakhiCard.addEventListener('click', function() {
if (maghiContent.style.display === 'block') {
maghiContent.style.display = 'none';
maghiShowLessBtn.style.display = 'none';
}
if (diwaliContent.style.display === 'block') {
diwaliContent.style.display = 'none';
diwaliShowLessBtn.style.display = 'none';
}
if (lohriContent.style.display === 'block') {
lohriContent.style.display = 'none';
lohriShowLessBtn.style.display = 'none';
}

if (baisakhiContent.style.display === 'none' || baisakhiContent.style.display === '') {
baisakhiContent.style.display = 'block';
baisakhiShowLessBtn.style.display = 'block';
} else {
baisakhiContent.style.display = 'none';
baisakhiShowLessBtn.style.display = 'none';
}
});

// Toggle Maghi content
maghiCard.addEventListener('click', function() {
if (baisakhiContent.style.display === 'block') {
baisakhiContent.style.display = 'none';
baisakhiShowLessBtn.style.display = 'none';
}
if (diwaliContent.style.display === 'block') {
diwaliContent.style.display = 'none';
diwaliShowLessBtn.style.display = 'none';
}
if (lohriContent.style.display === 'block') {
lohriContent.style.display = 'none';
lohriShowLessBtn.style.display = 'none';
}

if (maghiContent.style.display === 'none' || maghiContent.style.display === '') {
maghiContent.style.display = 'block';
maghiShowLessBtn.style.display = 'block';
} else {
maghiContent.style.display = 'none';
maghiShowLessBtn.style.display = 'none';
}
});

// Toggle Diwali content
diwaliCard.addEventListener('click', function() {
if (baisakhiContent.style.display === 'block') {
baisakhiContent.style.display = 'none';
baisakhiShowLessBtn.style.display = 'none';
}
if (maghiContent.style.display === 'block') {
maghiContent.style.display = 'none';
maghiShowLessBtn.style.display = 'none';
}
if (lohriContent.style.display === 'block') {
lohriContent.style.display = 'none';
lohriShowLessBtn.style.display = 'none';
}

if (diwaliContent.style.display === 'none' || diwaliContent.style.display === '') {
diwaliContent.style.display = 'block';
diwaliShowLessBtn.style.display = 'block';
} else {
diwaliContent.style.display = 'none';
diwaliShowLessBtn.style.display = 'none';
}
});

// Toggle Lohri content
lohriCard.addEventListener('click', function() {
if (baisakhiContent.style.display === 'block') {
baisakhiContent.style.display = 'none';
baisakhiShowLessBtn.style.display = 'none';
}
if (maghiContent.style.display === 'block') {
maghiContent.style.display = 'none';
maghiShowLessBtn.style.display = 'none';
}
if (diwaliContent.style.display === 'block') {
diwaliContent.style.display = 'none';
diwaliShowLessBtn.style.display = 'none';
}

if (lohriContent.style.display === 'none' || lohriContent.style.display === '') {
lohriContent.style.display = 'block';
lohriShowLessBtn.style.display = 'block';
} else {
lohriContent.style.display = 'none';
lohriShowLessBtn.style.display = 'none';
}
});

// Hiding Content
baisakhiShowLessBtn.addEventListener('click', function() {
baisakhiContent.style.display = 'none';
baisakhiShowLessBtn.style.display = 'none';
});

maghiShowLessBtn.addEventListener('click', function() {
maghiContent.style.display = 'none';
maghiShowLessBtn.style.display = 'none';
});

diwaliShowLessBtn.addEventListener('click', function() {
diwaliContent.style.display = 'none';
diwaliShowLessBtn.style.display = 'none';
});

lohriShowLessBtn.addEventListener('click', function() {
lohriContent.style.display = 'none';
lohriShowLessBtn.style.display = 'none';
});



// Hinduism Festivals
// Get elements for Holi
const holiCard = document.getElementById('holiCard');
const holiContent = document.getElementById('holiContent');
const holiShowLessBtn = document.getElementById('holiShowLessBtn');

// Get elements for Navratri
const navratriCard = document.getElementById('navratriCard');
const navratriContent = document.getElementById('navratriContent');
const navratriShowLessBtn = document.getElementById('navratriShowLessBtn');

// Get elements for Janmashtami
const janmashtamiCard = document.getElementById('janmashtamiCard');
const janmashtamiContent = document.getElementById('janmashtamiContent');
const janmashtamiShowLessBtn = document.getElementById('janmashtamiShowLessBtn');

// Get elements for Rama Navami
const ramaNavamiCard = document.getElementById('ramaNavamiCard');
const ramaNavamiContent = document.getElementById('ramaNavamiContent');
const ramaNavamiShowLessBtn = document.getElementById('ramaNavamiShowLessBtn');

// Toggle Holi content
holiCard.addEventListener('click', function() {
if (navratriContent.style.display === 'block') {
navratriContent.style.display = 'none';
navratriShowLessBtn.style.display = 'none';
}
if (janmashtamiContent.style.display === 'block') {
janmashtamiContent.style.display = 'none';
janmashtamiShowLessBtn.style.display = 'none';
}
if (ramaNavamiContent.style.display === 'block') {
ramaNavamiContent.style.display = 'none';
ramaNavamiShowLessBtn.style.display = 'none';
}

if (holiContent.style.display === 'none' || holiContent.style.display === '') {
holiContent.style.display = 'block';
holiShowLessBtn.style.display = 'block';
} else {
holiContent.style.display = 'none';
holiShowLessBtn.style.display = 'none';
}
});

// Toggle Navratri content
navratriCard.addEventListener('click', function() {
if (holiContent.style.display === 'block') {
holiContent.style.display = 'none';
holiShowLessBtn.style.display = 'none';
}
if (janmashtamiContent.style.display === 'block') {
janmashtamiContent.style.display = 'none';
janmashtamiShowLessBtn.style.display = 'none';
}
if (ramaNavamiContent.style.display === 'block') {
ramaNavamiContent.style.display = 'none';
ramaNavamiShowLessBtn.style.display = 'none';
}

if (navratriContent.style.display === 'none' || navratriContent.style.display === '') {
navratriContent.style.display = 'block';
navratriShowLessBtn.style.display = 'block';
} else {
navratriContent.style.display = 'none';
navratriShowLessBtn.style.display = 'none';
}
});

// Toggle Janmashtami content
janmashtamiCard.addEventListener('click', function() {
if (holiContent.style.display === 'block') {
holiContent.style.display = 'none';
holiShowLessBtn.style.display = 'none';
}
if (navratriContent.style.display === 'block') {
navratriContent.style.display = 'none';
navratriShowLessBtn.style.display = 'none';
}
if (ramaNavamiContent.style.display === 'block') {
ramaNavamiContent.style.display = 'none';
ramaNavamiShowLessBtn.style.display = 'none';
}

if (janmashtamiContent.style.display === 'none' || janmashtamiContent.style.display === '') {
janmashtamiContent.style.display = 'block';
janmashtamiShowLessBtn.style.display = 'block';
} else {
janmashtamiContent.style.display = 'none';
janmashtamiShowLessBtn.style.display = 'none';
}
});

// Toggle Rama Navami content
ramaNavamiCard.addEventListener('click', function() {
if (holiContent.style.display === 'block') {
holiContent.style.display = 'none';
holiShowLessBtn.style.display = 'none';
}
if (navratriContent.style.display === 'block') {
navratriContent.style.display = 'none';
navratriShowLessBtn.style.display = 'none';
}
if (janmashtamiContent.style.display === 'block') {
janmashtamiContent.style.display = 'none';
janmashtamiShowLessBtn.style.display = 'none';
}

if (ramaNavamiContent.style.display === 'none' || ramaNavamiContent.style.display === '') {
ramaNavamiContent.style.display = 'block';
ramaNavamiShowLessBtn.style.display = 'block';
} else {
ramaNavamiContent.style.display = 'none';
ramaNavamiShowLessBtn.style.display = 'none';
}
});

// Hiding Content
holiShowLessBtn.addEventListener('click', function() {
holiContent.style.display = 'none';
holiShowLessBtn.style.display = 'none';
});

navratriShowLessBtn.addEventListener('click', function() {
navratriContent.style.display = 'none';
navratriShowLessBtn.style.display = 'none';
});

janmashtamiShowLessBtn.addEventListener('click', function() {
janmashtamiContent.style.display = 'none';
janmashtamiShowLessBtn.style.display = 'none';
});

ramaNavamiShowLessBtn.addEventListener('click', function() {
ramaNavamiContent.style.display = 'none';
ramaNavamiShowLessBtn.style.display = 'none';
});



// Taoism Festivals
// Get elements for Lantern Festival
const lanternFestivalCard = document.getElementById('lanternFestivalCard');
const lanternFestivalContent = document.getElementById('lanternFestivalContent');
const lanternFestivalShowLessBtn = document.getElementById('lanternFestivalShowLessBtn');

// Get elements for Qingming Festival
const qingmingFestivalCard = document.getElementById('qingmingFestivalCard');
const qingmingFestivalContent = document.getElementById('qingmingFestivalContent');
const qingmingFestivalShowLessBtn = document.getElementById('qingmingFestivalShowLessBtn');

// Get elements for Supreme Purity Festival
const supremePurityFestivalCard = document.getElementById('supremePurityFestivalCard');
const supremePurityFestivalContent = document.getElementById('supremePurityFestivalContent');
const supremePurityFestivalShowLessBtn = document.getElementById('supremePurityFestivalShowLessBtn');

// Get elements for All Souls Festival
const allSoulsFestivalCard = document.getElementById('allSoulsFestivalCard');
const allSoulsFestivalContent = document.getElementById('allSoulsFestivalContent');
const allSoulsFestivalShowLessBtn = document.getElementById('allSoulsFestivalShowLessBtn');

// Toggle Lantern Festival content
lanternFestivalCard.addEventListener('click', function() {
if (qingmingFestivalContent.style.display === 'block') {
qingmingFestivalContent.style.display = 'none';
qingmingFestivalShowLessBtn.style.display = 'none';
}
if (supremePurityFestivalContent.style.display === 'block') {
supremePurityFestivalContent.style.display = 'none';
supremePurityFestivalShowLessBtn.style.display = 'none';
}
if (allSoulsFestivalContent.style.display === 'block') {
allSoulsFestivalContent.style.display = 'none';
allSoulsFestivalShowLessBtn.style.display = 'none';
}

if (lanternFestivalContent.style.display === 'none' || lanternFestivalContent.style.display === '') {
lanternFestivalContent.style.display = 'block';
lanternFestivalShowLessBtn.style.display = 'block';
} else {
lanternFestivalContent.style.display = 'none';
lanternFestivalShowLessBtn.style.display = 'none';
}
});

// Toggle Qingming Festival content
qingmingFestivalCard.addEventListener('click', function() {
if (lanternFestivalContent.style.display === 'block') {
lanternFestivalContent.style.display = 'none';
lanternFestivalShowLessBtn.style.display = 'none';
}
if (supremePurityFestivalContent.style.display === 'block') {
supremePurityFestivalContent.style.display = 'none';
supremePurityFestivalShowLessBtn.style.display = 'none';
}
if (allSoulsFestivalContent.style.display === 'block') {
allSoulsFestivalContent.style.display = 'none';
allSoulsFestivalShowLessBtn.style.display = 'none';
}

if (qingmingFestivalContent.style.display === 'none' || qingmingFestivalContent.style.display === '') {
qingmingFestivalContent.style.display = 'block';
qingmingFestivalShowLessBtn.style.display = 'block';
} else {
qingmingFestivalContent.style.display = 'none';
qingmingFestivalShowLessBtn.style.display = 'none';
}
});

// Toggle Supreme Purity Festival content
supremePurityFestivalCard.addEventListener('click', function() {
if (lanternFestivalContent.style.display === 'block') {
lanternFestivalContent.style.display = 'none';
lanternFestivalShowLessBtn.style.display = 'none';
}
if (qingmingFestivalContent.style.display === 'block') {
qingmingFestivalContent.style.display = 'none';
qingmingFestivalShowLessBtn.style.display = 'none';
}
if (allSoulsFestivalContent.style.display === 'block') {
allSoulsFestivalContent.style.display = 'none';
allSoulsFestivalShowLessBtn.style.display = 'none';
}

if (supremePurityFestivalContent.style.display === 'none' || supremePurityFestivalContent.style.display === '') {
supremePurityFestivalContent.style.display = 'block';
supremePurityFestivalShowLessBtn.style.display = 'block';
} else {
supremePurityFestivalContent.style.display = 'none';
supremePurityFestivalShowLessBtn.style.display = 'none';
}
});

// Toggle All Souls Festival content
allSoulsFestivalCard.addEventListener('click', function() {
if (lanternFestivalContent.style.display === 'block') {
lanternFestivalContent.style.display = 'none';
lanternFestivalShowLessBtn.style.display = 'none';
}
if (qingmingFestivalContent.style.display === 'block') {
qingmingFestivalContent.style.display = 'none';
qingmingFestivalShowLessBtn.style.display = 'none';
}
if (supremePurityFestivalContent.style.display === 'block') {
supremePurityFestivalContent.style.display = 'none';
supremePurityFestivalShowLessBtn.style.display = 'none';
}

if (allSoulsFestivalContent.style.display === 'none' || allSoulsFestivalContent.style.display === '') {
allSoulsFestivalContent.style.display = 'block';
allSoulsFestivalShowLessBtn.style.display = 'block';
} else {
allSoulsFestivalContent.style.display = 'none';
allSoulsFestivalShowLessBtn.style.display = 'none';
}
});

// Hiding Content
lanternFestivalShowLessBtn.addEventListener('click', function() {
lanternFestivalContent.style.display = 'none';
lanternFestivalShowLessBtn.style.display = 'none';
});

qingmingFestivalShowLessBtn.addEventListener('click', function() {
qingmingFestivalContent.style.display = 'none';
qingmingFestivalShowLessBtn.style.display = 'none';
});

supremePurityFestivalShowLessBtn.addEventListener('click', function() {
supremePurityFestivalContent.style.display = 'none';
supremePurityFestivalShowLessBtn.style.display = 'none';
});

allSoulsFestivalShowLessBtn.addEventListener('click', function() {
allSoulsFestivalContent.style.display = 'none';
allSoulsFestivalShowLessBtn.style.display = 'none';
});



// Zoroastrianism Festivals
// Get elements for Ayathrima
const ayathrimaCard = document.getElementById('ayathrimaCard');
const ayathrimaContent = document.getElementById('ayathrimaContent');
const ayathrimaShowLessBtn = document.getElementById('ayathrimaShowLessBtn');

// Get elements for Maidhyairya
const maidhyairyaCard = document.getElementById('maidhyairyaCard');
const maidhyairyaContent = document.getElementById('maidhyairyaContent');
const maidhyairyaShowLessBtn = document.getElementById('maidhyairyaShowLessBtn');

// Get elements for Nowruz
const nowruzCard = document.getElementById('nowruzCard');
const nowruzContent = document.getElementById('nowruzContent');
const nowruzShowLessBtn = document.getElementById('nowruzShowLessBtn');

// Get elements for Gahanbar
const gahanbarCard = document.getElementById('gahanbarCard');
const gahanbarContent = document.getElementById('gahanbarContent');
const gahanbarShowLessBtn = document.getElementById('gahanbarShowLessBtn');

// Toggle Ayathrima content
ayathrimaCard.addEventListener('click', function() {
if (maidhyairyaContent.style.display === 'block') {
maidhyairyaContent.style.display = 'none';
maidhyairyaShowLessBtn.style.display = 'none';
}
if (nowruzContent.style.display === 'block') {
nowruzContent.style.display = 'none';
nowruzShowLessBtn.style.display = 'none';
}
if (gahanbarContent.style.display === 'block') {
gahanbarContent.style.display = 'none';
gahanbarShowLessBtn.style.display = 'none';
}

if (ayathrimaContent.style.display === 'none' || ayathrimaContent.style.display === '') {
ayathrimaContent.style.display = 'block';
ayathrimaShowLessBtn.style.display = 'block';
} else {
ayathrimaContent.style.display = 'none';
ayathrimaShowLessBtn.style.display = 'none';
}
});

// Toggle Maidhyairya content
maidhyairyaCard.addEventListener('click', function() {
if (ayathrimaContent.style.display === 'block') {
ayathrimaContent.style.display = 'none';
ayathrimaShowLessBtn.style.display = 'none';
}
if (nowruzContent.style.display === 'block') {
nowruzContent.style.display = 'none';
nowruzShowLessBtn.style.display = 'none';
}
if (gahanbarContent.style.display === 'block') {
gahanbarContent.style.display = 'none';
gahanbarShowLessBtn.style.display = 'none';
}

if (maidhyairyaContent.style.display === 'none' || maidhyairyaContent.style.display === '') {
maidhyairyaContent.style.display = 'block';
maidhyairyaShowLessBtn.style.display = 'block';
} else {
maidhyairyaContent.style.display = 'none';
maidhyairyaShowLessBtn.style.display = 'none';
}
});

// Toggle Nowruz content
nowruzCard.addEventListener('click', function() {
if (ayathrimaContent.style.display === 'block') {
ayathrimaContent.style.display = 'none';
ayathrimaShowLessBtn.style.display = 'none';
}
if (maidhyairyaContent.style.display === 'block') {
maidhyairyaContent.style.display = 'none';
maidhyairyaShowLessBtn.style.display = 'none';
}
if (gahanbarContent.style.display === 'block') {
gahanbarContent.style.display = 'none';
gahanbarShowLessBtn.style.display = 'none';
}

if (nowruzContent.style.display === 'none' || nowruzContent.style.display === '') {
nowruzContent.style.display = 'block';
nowruzShowLessBtn.style.display = 'block';
} else {
nowruzContent.style.display = 'none';
nowruzShowLessBtn.style.display = 'none';
}
});

// Toggle Gahanbar content
gahanbarCard.addEventListener('click', function() {
if (ayathrimaContent.style.display === 'block') {
ayathrimaContent.style.display = 'none';
ayathrimaShowLessBtn.style.display = 'none';
}
if (maidhyairyaContent.style.display === 'block') {
maidhyairyaContent.style.display = 'none';
maidhyairyaShowLessBtn.style.display = 'none';
}
if (nowruzContent.style.display === 'block') {
nowruzContent.style.display = 'none';
nowruzShowLessBtn.style.display = 'none';
}

if (gahanbarContent.style.display === 'none' || gahanbarContent.style.display === '') {
gahanbarContent.style.display = 'block';
gahanbarShowLessBtn.style.display = 'block';
} else {
gahanbarContent.style.display = 'none';
gahanbarShowLessBtn.style.display = 'none';
}
});

// Hiding Content
ayathrimaShowLessBtn.addEventListener('click', function() {
ayathrimaContent.style.display = 'none';
ayathrimaShowLessBtn.style.display = 'none';
});

maidhyairyaShowLessBtn.addEventListener('click', function() {
maidhyairyaContent.style.display = 'none';
maidhyairyaShowLessBtn.style.display = 'none';
});

nowruzShowLessBtn.addEventListener('click', function() {
nowruzContent.style.display = 'none';
nowruzShowLessBtn.style.display = 'none';
});

gahanbarShowLessBtn.addEventListener('click', function() {
gahanbarContent.style.display = 'none';
gahanbarShowLessBtn.style.display = 'none';
});



// Voodoo Festivals
// Get elements for Ouidah Voodoo Festival
const ouidahVoodooFestivalCard = document.getElementById('ouidahVoodooFestivalCard');
const ouidahVoodooFestivalContent = document.getElementById('ouidahVoodooFestivalContent');
const ouidahVoodooFestivalShowLessBtn = document.getElementById('ouidahVoodooFestivalShowLessBtn');

// Get elements for VoodooFest
const voodooFestCard = document.getElementById('voodooFestCard');
const voodooFestContent = document.getElementById('voodooFestContent');
const voodooFestShowLessBtn = document.getElementById('voodooFestShowLessBtn');

// Get elements for Festival of Yemanja
const festivalOfYemanjaCard = document.getElementById('festivalOfYemanjaCard');
const festivalOfYemanjaContent = document.getElementById('festivalOfYemanjaContent');
const festivalOfYemanjaShowLessBtn = document.getElementById('festivalOfYemanjaShowLessBtn');

// Toggle Ouidah Voodoo Festival content
ouidahVoodooFestivalCard.addEventListener('click', function() {
if (voodooFestContent.style.display === 'block') {
voodooFestContent.style.display = 'none';
voodooFestShowLessBtn.style.display = 'none';
}
if (festivalOfYemanjaContent.style.display === 'block') {
festivalOfYemanjaContent.style.display = 'none';
festivalOfYemanjaShowLessBtn.style.display = 'none';
}

if (ouidahVoodooFestivalContent.style.display === 'none' || ouidahVoodooFestivalContent.style.display === '') {
ouidahVoodooFestivalContent.style.display = 'block';
ouidahVoodooFestivalShowLessBtn.style.display = 'block';
} else {
ouidahVoodooFestivalContent.style.display = 'none';
ouidahVoodooFestivalShowLessBtn.style.display = 'none';
}
});

// Toggle VoodooFest content
voodooFestCard.addEventListener('click', function() {
if (ouidahVoodooFestivalContent.style.display === 'block') {
ouidahVoodooFestivalContent.style.display = 'none';
ouidahVoodooFestivalShowLessBtn.style.display = 'none';
}
if (festivalOfYemanjaContent.style.display === 'block') {
festivalOfYemanjaContent.style.display = 'none';
festivalOfYemanjaShowLessBtn.style.display = 'none';
}

if (voodooFestContent.style.display === 'none' || voodooFestContent.style.display === '') {
voodooFestContent.style.display = 'block';
voodooFestShowLessBtn.style.display = 'block';
} else {
voodooFestContent.style.display = 'none';
voodooFestShowLessBtn.style.display = 'none';
}
});

// Toggle Festival of Yemanja content
festivalOfYemanjaCard.addEventListener('click', function() {
if (ouidahVoodooFestivalContent.style.display === 'block') {
ouidahVoodooFestivalContent.style.display = 'none';
ouidahVoodooFestivalShowLessBtn.style.display = 'none';
}
if (voodooFestContent.style.display === 'block') {
voodooFestContent.style.display = 'none';
voodooFestShowLessBtn.style.display = 'none';
}

if (festivalOfYemanjaContent.style.display === 'none' || festivalOfYemanjaContent.style.display === '') {
festivalOfYemanjaContent.style.display = 'block';
festivalOfYemanjaShowLessBtn.style.display = 'block';
} else {
festivalOfYemanjaContent.style.display = 'none';
festivalOfYemanjaShowLessBtn.style.display = 'none';
}
});

// Hiding Content
ouidahVoodooFestivalShowLessBtn.addEventListener('click', function() {
ouidahVoodooFestivalContent.style.display = 'none';
ouidahVoodooFestivalShowLessBtn.style.display = 'none';
});

voodooFestShowLessBtn.addEventListener('click', function() {
voodooFestContent.style.display = 'none';
voodooFestShowLessBtn.style.display = 'none';
});

festivalOfYemanjaShowLessBtn.addEventListener('click', function() {
festivalOfYemanjaContent.style.display = 'none';
festivalOfYemanjaShowLessBtn.style.display = 'none';
});

// Home End


// About Us Start
document.querySelectorAll('.tab-button').forEach(button => {
button.addEventListener('click', () => {
document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
document.getElementById(button.dataset.tab).classList.add('active');

button.classList.add('active');
});
});

document.querySelectorAll('.team-button').forEach(button => {
button.addEventListener('click', () => {
document.querySelectorAll('.team-button').forEach(btn => btn.classList.remove('active'));

document.querySelectorAll('.member-panel').forEach(panel => panel.classList.remove('active'));
document.getElementById(button.dataset.tab).classList.add('active');

button.classList.add('active');
});
});
// About Us Ends


// Books Start
const books = document.querySelectorAll('.book-card');
  
  books.forEach((book, index) => {
    book.addEventListener('click', function() {
      const description = this.querySelector('.book-description');
      const isVisible = description.style.display === 'block';

      description.style.display = isVisible ? 'none' : 'block';
    });

    const showLessBtn = document.getElementById(`showLessBtn${index + 1}`);
    if (showLessBtn) {
      showLessBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        const description = document.querySelectorAll('.book-description')[index];
        description.style.display = 'none';
      });
    }
  });


// Books End