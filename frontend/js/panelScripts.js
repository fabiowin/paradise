const api = 'http://localhost:3020';

let currentEditingId;
let cart;
let cartKeys;
let profile;
let editButtonIds = [];

/* ----------- Page Functions -------------- */

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

function renderUserPermission() {
  let html;

  
  $('#panelProfileBackgroundColor').css({"backgroud-color": "var(--mybluecyan)", "min-height": "100px", "border-radius": "5px 5px 0 0"});
  
  if (profile.result.funusuario) {
      switch (profile.result.funusuario) {
        case "1":
            html = `
              <div class="w-100" style="background-color: var(--myred); min-height: 100px; border-radius: 5px 5px 0 0;"></div>
                <div class="text-center padding: 20px;">
                  <img src="../assets/profile-picture.png" alt="mdo" width="120" height="120" class="rounded-circle avatar"
                    style="margin-top: -60px; border: 4px solid white">
                  <h3 style="margin: 10px 0 0 0;" >${profile.result.funcnome}</h3>
                  <img src="../icons/badge-adm.png" style="display: inline-block;"><span id=""
                    style="text-transform: uppercase; font-size: 13px;">Administrador</span>
                  <hr style="color: var(--myred); height: 2px; opacity: 100%; width: 20%; margin-left: 40%;">
                </div>
                <div style="padding: 0 20px;">
                  <h6
                    style="color: #707070; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 2px;">
                    E-mail</h6>
                  <p style="font-size: 13px;" >${profile.result.funcemail}</p>
                  <hr>
                </div>
                <div style="padding: 0 20px;">
                  <h6 style="color: #707070; font-size: 11px; font-weight: bold; text-transform: uppercase;">Sobre</h6>
                  <p style="font-size: 13px;">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
                    text. <br><br>“It's not Latin, though it looks like it, and it actually says nothing,” Before & After
                    magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur
                    in English, which is why at a glance it looks pretty real.”</p>
                </div>
              </div>
            `
          break;
        case "2":
          html = `
            <div class="w-100" style="background-color: var(--mypurple); min-height: 100px; border-radius: 5px 5px 0 0;"></div>
              <div class="text-center padding: 20px;">
                <img src="../assets/profile-picture.png" alt="mdo" width="120" height="120" class="rounded-circle avatar"
                  style="margin-top: -60px; border: 4px solid white">
                <h3 style="margin: 10px 0 0 0;" >${profile.result.funcnome}</h3>
                <img src="../icons/badge-a.png" style="display: inline-block;"><span id=""
                  style="text-transform: uppercase; font-size: 13px;">Funcionário</span>
                <hr style="color: var(--mypurple); height: 2px; opacity: 100%; width: 20%; margin-left: 40%;">
              </div>
              <div style="padding: 0 20px;">
                <h6
                  style="color: #707070; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 2px;">
                  E-mail</h6>
                <p style="font-size: 13px;" >${profile.result.funcemail}</p>
                <hr>
              </div>
              <div style="padding: 0 20px;">
                <h6 style="color: #707070; font-size: 11px; font-weight: bold; text-transform: uppercase;">Sobre</h6>
                <p style="font-size: 13px;">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
                  text. <br><br>“It's not Latin, though it looks like it, and it actually says nothing,” Before & After
                  magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur
                  in English, which is why at a glance it looks pretty real.”</p>
              </div>
            </div>
            `
              break;
            }
            let html = `
            <img src="../icons/icon-adm.png" style="display: inline-block;">
            <span style="text-transform: uppercase; font-size: 13px;">
            Cliente
            </span>
            <hr style="color: var(--mybluecyan); height: 2px; opacity: 100%; width: 20%; margin-left: 40%;">
            `

  }

  if (profile.result.clienome) {
    html = `
      <div class="w-100" style="background-color: var(--mybluecyan); min-height: 100px; border-radius: 5px 5px 0 0;"></div>
        <div class="text-center padding: 20px;">
          <img src="../assets/profile-picture.png" alt="mdo" width="120" height="120" class="rounded-circle avatar"
            style="margin-top: -60px; border: 4px solid white">
          <h3 style="margin: 10px 0 0 0;">${profile.result.clienome}</h3>
          <img src="../icons/icon-adm.png" style="display: inline-block;"><span id=""
            style="text-transform: uppercase; font-size: 13px;">Cliente</span>
          <hr style="color: var(--mybluecyan); height: 2px; opacity: 100%; width: 20%; margin-left: 40%;">
        </div>
        <div style="padding: 0 20px;">
          <h6
            style="color: #707070; font-size: 11px; font-weight: bold; text-transform: uppercase; margin-bottom: 2px;">
            E-mail</h6>
          <p style="font-size: 13px;" >${profile.result.clienemail}</p>
          <hr>
        </div>
        <div style="padding: 0 20px;">
          <h6 style="color: #707070; font-size: 11px; font-weight: bold; text-transform: uppercase;">Sobre</h6>
          <p style="font-size: 13px;">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense
            text. <br><br>“It's not Latin, though it looks like it, and it actually says nothing,” Before & After
            magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur
            in English, which is why at a glance it looks pretty real.”</p>
        </div>
      </div>
    `
  }

  $('#panelProfile').html(html);

}

/* ---------- Product Functions ------------  */

async function renderProducts() {
  let html;
  await $.get(`${api}/produto`, function(data, status) {
    editButtonIds = [];
    
    data.forEach(product => {
      editButtonIds.push(`product${product.prodid}`);
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
            <button id=product${product.prodid} type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

async function handleCreateProduct(event) {
  event.preventDefault();
  
  const postData = getProductModalInputs();

  let request = $.post(`${api}/produto`, postData);
  
  request.done(function(data, status) {
    if (data) {
      alert('O produto foi criado!');
    } else {
      alert('Ocorreu um erro ao criar o produto.');
    }
  })
  
}

async function handleUpdateProduct() {
  const postData = getProductModalInputs();

  let request = 
    $.ajax({
      url: `${api}/produto/${currentEditingId}`,
      type: 'PUT',
      data: postData
    })

  request.done(function(data, status) {
    if (data) {
      alert('O produto foi atualizado!');
    } else {
      alert('Ocorreu um erro ao atualizar o produto.');
    }
  })
}

function getProductModalInputs() {
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

  return postData;
}

async function openEditProductModal(id) {
  $('#finishCreateProduct').hide();
  $('#finishUpdateProduct').show();

  const createProductForm = $('#createProductForm');

  await $.get(`${api}/produto/?prodid=${id}`, function(data, status) {

    const product = data[0];

    createProductForm.find("input[name='newProductName']").val(product.prodnome);
    createProductForm.find("input[name='newProductAmount']").val(product.prodqtd);
    createProductForm.find("input[name='newProductDescription']").val(product.prodesc);
    createProductForm.find("input[name='newProductSupplier']").val(product.fornid);
    createProductForm.find("input[name='newProductPrice']").val(product.prodpre);
  });

}

function addProductEditModalButtonEventListeners() {
  editButtonIds.forEach(id => {
    const productId = parseInt(id.match(/\d+/)[0]);
    $(`#${id}`).on('click', () => {
      currentEditingId = productId;
      openEditProductModal(productId);
    })
  })
}

/* ---------- Employee Functions ---------- */

async function renderEmployees() {
  let html;
  await $.get(`${api}/funcionario`, function(data, status) {
    
    editButtonIds = []

    data.forEach(employee => {
      editButtonIds.push(`employee${employee.funcid}`);
      html += `
        <tr>
        <th scope="row">${employee.funcid}</th>
        <td>${employee.funcnome}</td>
        <td>${employee.funcendere}</td>
        <td>${employee.funcnumero}</td>
        <td>${employee.funuser}</td>
        <td>
            <button id=employee${employee.funcid} type="button" class="btn btn-outline-secondary"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
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

async function handleCreateEmployee(event) {
  event.preventDefault();
  
  const postData = getEmployeeModalInputs();

  let request = $.post(`${api}/funcionario`, postData);
  
  request.done(function(data, status) {
    if (data) {
      alert('O funcionário foi criado!');
    } else {
      alert('Ocorreu um erro ao criar o funcionário.');
    }
  })
}

async function handleUpdateEmployee() {
  const postData = getEmployeeModalInputs();
  
  delete postData.funcsenha;
  console.log(postData);

  let request = 
    $.ajax({
      url: `${api}/funcionario/${currentEditingId}`,
      type: 'PUT',
      data: postData
    })

  request.done(function(data, status) {
    if (data) {
      alert('O funcionario foi atualizado!');
    } else {
      alert('Ocorreu um erro ao atualizar o funcionario.');
    }
  })
}

async function openEditEmployeeModal(id) {
  $('#finishCreateEmployee').hide();
  $('#finishUpdateEmployee').show();

  const createEmployeeForm = $('#createEmployeeForm');

  await $.get(`${api}/funcionario/?funcid=${id}`, function(data, status) {
    const employee = data[0];

    createEmployeeForm.find("input[name='newEmployeeName']").val(employee.funcnome);
    createEmployeeForm.find("input[name='newEmployeeNumber']").val(employee.funcnumero);
    createEmployeeForm.find("input[name='newEmployeeAddress']").val(employee.funcendere);
    createEmployeeForm.find("input[name='newEmployeeEmail']").val(employee.funcemail);
    createEmployeeForm.find("input[name='newEmployeeUser']").val(employee.funuser);
    createEmployeeForm.find("input[name='newEmployeePassword']").prop('disabled', 'true');
    createEmployeeForm.find("select[name='newEmpoloyeePermission']").val(employee.funusuario);

  });

}

function addEmployeeEditModalButtonEventListeners() {
  editButtonIds.forEach(id => {
    const employeeId = parseInt(id.match(/\d+/)[0]);
    $(`#${id}`).on('click', () => {
      currentEditingId = employeeId;
      openEditEmployeeModal(employeeId);
    })
  })
}

function getEmployeeModalInputs() {
  const createEmployeeForm = $('#createEmployeeForm');

  const funcnome = createEmployeeForm.find("input[name='newEmployeeName']").val();
  const funcendere = createEmployeeForm.find("input[name='newEmployeeAddress']").val();
  const funcnumero = createEmployeeForm.find("input[name='newEmployeeNumber']").val();
  const funcemail = createEmployeeForm.find("input[name='newEmployeeEmail']").val();
  const funuser = createEmployeeForm.find("input[name='newEmployeeUser']").val();
  const funcsenha = createEmployeeForm.find("input[name='newEmployeePassword']").val();
  const funusuario = parseInt(createEmployeeForm.find("select[name='newEmpoloyeePermission']").val());
  
  const postData = {
    funcnome: funcnome,
    funcendere: funcendere,
    funcnumero: funcnumero,
    funcemail: funcemail,
    funuser: funuser,
    funcsenha: funcsenha,
    funusuario: funusuario
  }

  return postData;
}

/* ---------- Supplier Functions ---------- */

async function renderSuppliers() {
  let html;
  await $.get(`${api}/fornecedor`, function(data, status) {

    editButtonIds = [];

    data.forEach(supplier => {
      editButtonIds.push(`supplier${supplier.fornid}`)
      html += `
        <tr>
          <th scope="row">${supplier.fornid}</th>
          <td>${supplier.fornnome}</td>
          <td>${supplier.fornende}</td>
          <td>${supplier.fornnume}</td>
          <td>${supplier.fornemail}m</td>
          <td>
            <button id=supplier${supplier.fornid} type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
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

async function handleCreateSupplier(event) {
  event.preventDefault();
  
  const postData = getEmployeeModalInputs();
  
  let request = $.post(`${api}/fornecedor`, postData);
  
  request.done(function(data, status) {
    if (data) {
      alert('O fornecedor foi criado!');
    } else {
      alert('Ocorreu um erro ao criar o fornecedor.');
    }
  })
}

async function handleUpdateSupplier() {
  const postData = getSupplierModalInputs();
  
  let request = 
    $.ajax({
      url: `${api}/fornecedor/${currentEditingId}`,
      type: 'PUT',
      data: postData
    })

  request.done(function(data, status) {
    if (data) {
      alert('O fornecedor foi atualizado!');
    } else {
      alert('Ocorreu um erro ao atualizar o fornecedor.');
    }
  })
}

async function openEditSupplierModal(id) {
  $('#finishCreateSupplier').hide();
  $('#finishUpdateSupplier').show();

  const createSupplierForm = $('#createSupplierForm');

  await $.get(`${api}/fornecedor/?fornid=${id}`, function(data, status) {
    const supplier = data[0];

    createSupplierForm.find("input[name='newSupplierName']").val(supplier.fornnome);
    createSupplierForm.find("input[name='newSupplierNumber']").val(supplier.fornnume);
    createSupplierForm.find("input[name='newSupplierAddress']").val(supplier.fornende);
    createSupplierForm.find("input[name='newSupplierEmail']").val(supplier.fornemail);

  });

}

function addSupplierEditModalButtonEventListeners() {
  editButtonIds.forEach(id => {
    const supplierid = parseInt(id.match(/\d+/)[0]);
    $(`#${id}`).on('click', () => {
      currentEditingId = supplierid;
      openEditSupplierModal(supplierid);
    })
  })
}

function getSupplierModalInputs() {
  const createSupplierForm = $('#createSupplierForm');
  
  const fornnome = createSupplierForm.find("input[name='newSupplierName']").val();
  const fornende = createSupplierForm.find("input[name='newSupplierAddress']").val();
  const fornnume = createSupplierForm.find("input[name='newSupplierNumber']").val();
  const fornemail = createSupplierForm.find("input[name='newSupplierEmail']").val();
  
  const postData = {
    fornnome: fornnome,
    fornende: fornende,
    fornnume: fornnume,
    fornemail: fornemail
  }

  return postData;
}

/* ---------- Client Functions ---------- */

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




$(document).ready(function() {

  cart = JSON.parse(localStorage.getItem("cart"));
  const jsonCartKeys = localStorage.getItem("cartKeys");
  cartKeys = JSON.parse(jsonCartKeys);
  profile = JSON.parse(localStorage.getItem("profile"));


  renderUserPermission();

  renderCart();

  $('#nav-contact-tab').on('click', async () => {
    await renderProducts()
      .then(() => {
        addProductEditModalButtonEventListeners();
      });
  });

  $('#nav-funcionario-tab').on('click', async () => {
    await renderEmployees()
      .then(() => {
        addEmployeeEditModalButtonEventListeners();
      })
  });

  $('#nav-fornecedor-tab').on('click', async () => {
    await renderSuppliers()
      .then(() => {
        addSupplierEditModalButtonEventListeners();
      })
  });

  $('#nav-cliente-tab').on('click', () => {
    renderClients();
  });

/* -------------- Product Forms --------------  */

  $('#finishCreateProduct').on('click', async function (event) {
    await handleCreateProduct(event);
  });

  $('#finishUpdateProduct').on('click', async function (event) {
    event.preventDefault();
    await handleUpdateProduct();
  })

/* -------------- Employee Forms --------------  */

  $('#finishCreateEmployee').on('click', async function(event) {
    await handleCreateEmployee(event);
  });

  $('#finishUpdateEmployee').on('click', async function(event) {
    event.preventDefault();
    await handleUpdateEmployee();
  })


/* ------------- Supplier Forms ---------------- */

  $('#finishCreateSupplier').on('click', async function(event) {
    await handleCreateSupplier(event);
  });

  $('#finishUpdateSupplier').on('click', async function(event) {
    event.preventDefault();
    await handleUpdateSupplier();
  })



 /* ----------- Open Create Modals ------------ */ 
  $('#openCreateProductModal').on('click', () => {
    $('#finishCreateProduct').show();
    $('#finishUpdateProduct').hide();

    $('#createProductForm input').val('');
  });

  $('#openCreateEmployeeModal').on('click', () => {
    $('#finishCreateEmployee').show();
    $('#finishUpdateEmployee').hide();

    $('#openCreateEmployeeModal input').val('');
  })

  $('#openCreateSupplierModal').on('click', () => {
    $('#finishCreateSupplier').show();
    $('#finishUpdateSupplier').hide();

    $('#openCreateSupplierModal input').val('');
  })

});