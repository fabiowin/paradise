let cart = [];
let productsObject = {};
let objectKeys = [];

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
      
      objectKeys.push(product.prodnome);
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
  $('#cartProfileName').text(loggedIn.username);
  $('#cartProfileEmail').text(loggedIn.email);

  $('#logoutButton').on('click', () => {
    localStorage.clear();
  })

  $('#cartCheckout').on('click', () => {
    localStorage.setItem("cart", JSON.stringify(productsObject));

    const jsonCartKeys = JSON.stringify(objectKeys);
    localStorage.setItem("cartKeys", jsonCartKeys);
  })






/* ============== Cart render event listener ==================  */

  $('#cartButton').on('click', () => {
    let html = ``;
    let isEmpty = true;
    objectKeys.forEach(object => {
      const product = productsObject[object];
      if (product.cartQuantity > 0) {
        isEmpty = false;
        html += `
          <tr>
            <div class="d-flex align-items-center" style="display: inline-block; vertical-align:middle; padding: 3p; margin:4px">
              <td style="width: 2%;"><a href="#"><img src="../assets/beer-offer.png" alt="Remover produto" width="12px" style="margin: 0 0px; padding: 0;"></a></td>
              <td style="width: 8%;"><span class="badge bg-success bg-opacity-10 text-success small">x ${product.cartQuantity}</span></td>
              <td style="width: 80%;"><h6 style="display: inline-block; font-size: 14px; margin: 0;">${product.prodnome}</h6></td>
              <td style="width: 10%;"><h6 style="font-size:12px ;display: inline-block; margin: 0 0 0 2px; padding: 0;">R$${product.prodpre * product.cartQuantity}</h6></td>
            </div>
          </tr>
        `
      }
    });
          
    if (isEmpty) {
      html = `<tr><td><h6>Seu carrinho está vazio!</h6></td></tr>`
    }
    $('#cartTable').html(html);

  });
})