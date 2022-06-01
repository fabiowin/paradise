let cart = [];
let productsObject = {};

const getProducts = async () => {
  await $.get("http://localhost:3020/produto", function(data, status) {
    data.forEach(product => {
      cart = [
      ...cart,  
      {
        ...product,
        cartQuantity: 0
      }]
    })
  });


  cart.forEach(product => {
    productsObject = 
      {
        ...productsObject,
        [product.prodnome]: 
          {
            ...product
          }
      }
  });

}

const renderProducts = async () => {
  await getProducts();
  let addToCartIds = [];
  let removeFromCartIds = [];
  let productsHtml = "";
  cart.map(product => {
    productsHtml += 
    `
      <div class="col-md-4 " style="margin: 20px 0px;">
        <div class="shadow bg-white text-black mycard card-sales">
          <div class="shadow-sm unit unit-sales" >
            <a class="arrow arrow-sales" id=add${product.prodnome}ToCart >
              ▴
            </a>
            <p class="unit-counter" id=product${product.prodnome}CartQuantity>
            ${product.cartQuantity}
            </p>
            <a class="arrow arrow-sales" id="remove${product.prodnome}FromCart">
              ▾
            </a>
          </div>
          <div class="text-center">
            <hr>
            <img class="align-center" src="${product.prodfoto}" width="200px" style="z-index: 10 !important; height: 200px;"><br>
            <div class="circle circle-sales"></div><br>
            <p class="mycard-title card-sales-title mt-4">${product.prodnome}</p>
            <p class="h5 card-description" style="max-width: 350px;" >${product.prodesc}</p>
          </div>
          <button type="button" class="buy buy_sales">Comprar</button>
          <span class="fixed price price-sales">✦ R$${product.prodpre}</span>
        </div>
      </div>
      
    `
          
    addToCartIds.push({
      id: `#add${product.prodnome}ToCart`, 
      product
    });
    removeFromCartIds.push({
      id:`#remove${product.prodnome}FromCart`,
      product
    })
    
  })

  $('#productsRow').html(productsHtml);

  loadAddToCartEventListeners(addToCartIds);
  loadRemoveFromCartEventListeners(removeFromCartIds);

}

/* ========= Add to cart functions ========================================================================= */

function addToCart(product) {
  if (product.cartQuantity < product.prodqtd) {
    const prodNome = product.prodnome;
    
    productsObject[prodNome].cartQuantity = ++product.cartQuantity;
    $(`#product${product.prodnome}CartQuantity`).text(productsObject[prodNome].cartQuantity.toString());
  } else alert(`Temos apenas ${product.prodqtd} unidades de ${product.prodnome} disponível no estoque!`)

}
function loadAddToCartEventListeners(addToCartIds) {
  addToCartIds.forEach(productId => {
    $(productId.id).on('click', () => {
      addToCart(productId.product)
    })
  })
}
/* ======================================================================================================== */

/* ========= Remove from cart functions ========================================================================= */

function removeFromCart(product) {
  if (product.cartQuantity > 0) {
    const prodNome = product.prodnome;
  
    productsObject[prodNome].cartQuantity = --product.cartQuantity;
    $(`#product${product.prodnome}CartQuantity`).text(productsObject[prodNome].cartQuantity.toString());
  } else return;ß
}

function loadRemoveFromCartEventListeners(removeFromCartIds) {
  removeFromCartIds.forEach(productId => {
    $(productId.id).on('click', () => {
      removeFromCart(productId.product);
    })
  })
}

/* ======================================================================================================== */



$(document).ready(async function() {
  await renderProducts();

  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  $('#profileName').text(loggedIn.username);
  console.log(loggedIn);






})