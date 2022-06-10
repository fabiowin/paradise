const api = "http://localhost:3020";

async function handleCreateClient() {

  const createClientForm = $('#createClientForm');

  const clienome = createClientForm.find("input[name='newClientName']").val();
  const clienendere = createClientForm.find("input[name='newClientAddress']").val();
  const clienumero = createClientForm.find("input[name='newClientNumber']").val();
  const clienascis = createClientForm.find("input[name='newClientDate']").val();
  const clienemail = createClientForm.find("input[name='newClientEmail']").val();
  const cliensenha = createClientForm.find("input[name='newClientPassword']").val();

  const postData = {
    clienome: clienome,
    clienendere: clienendere,
    clienumero: clienumero,
    clienascis: clienascis,
    clienemail: clienemail,
    cliensenha: cliensenha
  }

  let request = $.post(`${api}/auth/signup`, postData);

  request.done(function(data, status) {
    if (data) {
      alert('O cliente foi criado!');
      window.location.replace("http://localhost:5500/frontend/pages/index.html");
    } else {
      alert('Ocorreu um erro ao criar o cliente.');
    }
  })

}

$(document).ready(function() {

  $('#createClientForm').submit(async function (event) {
    event.preventDefault();

    const checked = document.getElementById('form6Example8').checked;

    if (checked) { await handleCreateClient() }
    else { alert('É obrigatório aceitar os termos de uso para registrar! ') }
    
  })

})