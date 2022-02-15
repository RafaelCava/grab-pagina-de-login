const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

    e.preventDefault();
    const dEmail = "rafael.mendes@tallos.com.br";
    const dSenha = "rafael"
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    if(email == dEmail && senha == dSenha){
        alert("dados enviados")
    }
    else{
        const input1 = document.getElementById("email").style.borderColor = "RGB(255, 87, 87)";
        const input2 = document.getElementById("senha").style.borderColor = "RGB(255, 87, 87)";
        const m1 = document.getElementById("m1").style.display = "initial";
        const m2 = document.getElementById("m2").style.display = "initial";

    }
    

});