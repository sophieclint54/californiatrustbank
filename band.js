function validateform()
{
    var text = document.getElementById('text').value;
var password =document.getElementById('password').value;

if(text=="Highfashioncompany" && password=="Chemistry0277"){
    alert('Welcome Back Miley Lindsey Henderson')

    window.location.href="home.html"
} else{
    alert("Incorrect username or password")
}
}

var btn=document.getElementById('sub');
btn.onclick= function(){
    alert('Welcome back Miley Lindsey Henderson')
}

