
$(document).ready(function() {
  
  const profileName = $('#profile-name');
  
  let loggedIn;
  
  
  $("#loginForm").submit(function(event) {
    event.preventDefault();
    
    const user = $('#floatingInput').val();
    const pass = $('#floatingPassword').val();
    const userType = $('#loginForm').find('input[name="loginUserType"]:checked').val()
    
    $.post("http://localhost:3020/auth/signin",
    {
      clienemail: user,
      cliensenha: pass,
      userType: userType
    },
    function(data, status){
      if(data){
        localStorage.setItem('profile', JSON.stringify(data));
        window.location.replace("http://localhost:5500/frontend/pages/firstpage.html");
      }
    })
      .fail(function() {
        alert("E-mail ou senha inválidos!")
      })
    
    
    
    
  });
  
  
  
  
  
});