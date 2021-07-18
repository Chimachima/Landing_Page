
document.getElementById("submit").addEventListener("click", saveData);

function saveData(e){
    var phone = document.getElementById("phone").value
    var email = document.getElementById("email").value
    var textArea = document.getElementById("textArea").value
    var data = {phone, email, textArea}
    
    localStorage.setItem("data", JSON.stringify(data));

    document.getElementById("phone").value = ""
    var email = document.getElementById("email").value = ""
    var textArea = document.getElementById("textArea").value = ""

    document.getElementById("sent").innerHTML = "Obrigado pelo contato!"
    
    setTimeout(() => {
        document.getElementById("sent").innerHTML =""
    }, 3000);
}


