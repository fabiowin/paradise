
$(document).ready(function() {
  
  const profileName = $('#profile-name');
  
  let loggedIn;
  
  
  $("#loginForm").submit(function(event) {
    event.preventDefault();
    
    const user = $('#floatingInput').val();
    const pass = $('#floatingPassword').val();
    
    $.post("http://localhost:3020/api/auth/signin",
    {
      username: user,
      password: pass
    },
    function(data, status){
      console.log(status);
      if(data){
        loggedIn = data;
        console.log(loggedIn);
        window.location.replace("http://localhost:5500/frontend/pages/firstpage.html");
        localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
      }
      
    });
    
    
    
    
  });
  
  
  
  
  
});