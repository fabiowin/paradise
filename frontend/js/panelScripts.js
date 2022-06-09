const api = 'http://localhost:3020';

let cart;
let cartKeys;

function renderCart() {
  let totalPrice = 0;
  let html = ``;
  let isEmpty = true;
  cartKeys.forEach(object => {
    const product = cart[object];
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

      totalPrice += (product.cartQuantity * product.prodpre);    
    }
  });
        
  if (isEmpty) {
    html = `<tr><td><h6>Seu carrinho está vazio!</h6></td></tr>`
  }
  $('#cartTable').html(html);
  $('#cartTotal').html(new Intl.NumberFormat(
    'pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(totalPrice));
  
}

async function renderProducts() {
  let html;
  await $.get(`${api}/produto`, function(data, status) {
    
    data.forEach(product => {
      html += `
        <tr>
        <th scope="row">${product.prodid}</th>
        <td>${product.prodnome}</td>
        <td>${product.prodesc}</td>
        <td>${product.prodqtd}u.</td>
        <td>Coca-Cola</td>
        <td>
          ${new Intl.NumberFormat(
            'pt-BR',
            { style: 'currency', currency: 'BRL' }
          ).format(product.prodpre)}
        </td>
        <td>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-pencil-square" viewBox="0 0 16 16" >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z">
                </path>
                <path fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z">
                </path>
              </svg>
              <span class="visually-hidden">Button</span>
            </button>
          </div>
        </td>
        <td>
          <button type="button" class="btn btn-outline-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-x-square" viewBox="0 0 16 16">
              <path
                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z">
              </path>
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
              </path>
            </svg>
            <span class="visually-hidden">Button</span>
          </button>
        </td>
      </tr>
      `
    });

  });

  $('#productsTable').html(html);
}

async function renderEmployees() {
  let html;
  await $.get(`${api}/funcionario`, function(data, status) {
    
    data.forEach(employee => {
      console.log(employee);
      html += `
        <tr>
        <th scope="row">${employee.funcid}</th>
        <td>${employee.funcnome}</td>
        <td>${employee.funcendere}</td>
        <td>${employee.funcnumero}</td>
        <td>${employee.funuser}</td>
        <td>
            <button type="button" class="btn btn-outline-secondary"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z">
                </path>
                <path fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z">
                </path>
              </svg>
              <span class="visually-hidden">Button</span>
            </button>
        </td>
        <td>
            <button type="button" class="btn btn-outline-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-x-square" viewBox="0 0 16 16">
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z">
                </path>
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
                </path>
              </svg>
              <span class="visually-hidden">Button</span>
            </button>
          </td>
        </tr>
      `
    });

  });

  $('#employeesTable').html(html);
}

async function renderSuppliers() {
  let html;
  await $.get(`${api}/fornecedor`, function(data, status) {
    
    data.forEach(supplier => {
      html += `
        <tr>
          <th scope="row">${supplier.fornid}</th>
          <td>${supplier.fornnome}</td>
          <td>${supplier.fornende}</td>
          <td>${supplier.fornnume}</td>
          <td>${supplier.fornemail}m</td>
          <td>
            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z">
                </path>
                <path fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z">
                </path>
              </svg>
              <span class="visually-hidden">Button</span>
            </button>
          </td>
          <td>
              <button type="button" class="btn btn-outline-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-x-square" viewBox="0 0 16 16">
                  <path
                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z">
                  </path>
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
                  </path>
                </svg>
                <span class="visually-hidden">Button</span>
              </button>
          </td>
       </tr>
      `
    });

  });

  $('#suppliersTable').html(html);
}

async function renderClients() {
  let html;
  await $.get(`${api}/cliente`, function(data, status) {
    data.forEach(client => {
      console.log(client);
      html += `
        <tr>
          <th scope="row">${client.clienid}</th>
          <td>${client.clienome}</td>
          <td>${client.clienendere}</td>
          <td>${client.clienumero}</td>
          <td>${client.clienemail}</td>
        </tr>
      `
    });

  });

  $('#clientsTable').html(html);
}

async function handleCreateProduct(event) {
  event.preventDefault();
  const prodnome = $('#newProductName').val();
  const prodqtd  = parseInt($('#newProductAmount').val());
  const prodesc  = $('#newProductDescription').val();
  const fornid   = parseInt($('#newProductSupplier').val());
  const prodpre  = parseFloat($('#newProductPrice').val());

  const postData = 
  {
    prodnome: prodnome,
    prodqtd: prodqtd,
    prodesc: prodesc,
    fornid: fornid,
    prodpre: prodpre,
    prodfoto: '../assets/guarana'
  }

  let request = $.post(`${api}/produto`, postData);
  
  request.done(function(data, status) {
    if (data) {
      alert('O produto foi criado!');
    } else {
      alert('Ocorreu um erro ao criar o produto.');
    }
  })

  
}

$(document).ready(function() {

  cart = JSON.parse(localStorage.getItem("cart"));

  const jsonCartKeys = localStorage.getItem("cartKeys");
  cartKeys = JSON.parse(jsonCartKeys);

  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

  renderCart();


  $('#panelUsername').text(loggedIn.username);
  $('#panelEmail').text(loggedIn.email);

  $('#nav-contact-tab').on('click', () => {
    renderProducts();
  });

  $('#nav-funcionario-tab').on('click', () => {
    renderEmployees();
  })

  $('#nav-fornecedor-tab').on('click', () => {
    renderSuppliers();
  })

  $('#nav-cliente-tab').on('click', () => {
    renderClients();
  })

  $('#createProductForm').submit(async function (event) {
    await handleCreateProduct(event);
  });

});