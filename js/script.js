function replaceName() {
    let storedName = localStorage.getItem("userName")
    if(!storedName) {
        let name = prompt("Hai, siapa namamu?", " ");
        if (name !== null && name!=="") {
            localStorage.setItem("userName", name);
            document.getElementById("name").innerHTML = name;
}
    } else {
        document.getElementById("name"),innerHTML = storedName;
    }
}

replaceName();

function validateForm() {
    var name = document.forms["msgform"]["fullname"].value;
    var birthday = document.forms["msgform"]["birthdate"].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var message = document.forms["msgform"]["pesan"].value;

    var error = document.getElementById('error');
    error.innerHTML = "";

    if (name === "" || birthday === "" || gender === "" || message === "") {
        error.innerHTML = "Mohon mengisi semua persyaratan!";
        return false;
    }

    saveSubmittedValues(name,birthday,gender.value,message )

    return true;
 }

 function saveSubmittedValues(name, birthday, gender, message) {
    localStorage.setItem('submittedName', name);
    localStorage.setItem('submittedBirthday', birthday);
    localStorage.setItem('submittedGender', gender);
    localStorage.setItem('submittedMessage', message);
}


window.onload = function() {
    var submittedValues = document.getElementById('sub');
    var name = localStorage.getItem('submittedName');
    var birthday = localStorage.getItem('submittedBirthday');
    var gender = localStorage.getItem('submittedGender');
    var message = localStorage.getItem('submittedMessage');

    if (name || birthday || gender || message) {
        submittedValues.innerHTML = `
            <div><strong>Nama         :</strong> ${name}<br>
            <strong>Tanggal Lahir :</strong> ${birthday}<br>
            <strong>Jenis Kelamin :</strong> ${gender}<br>
            <br>
            <strong>Pesan        :</strong> ${message}<br><div>
        `;
    }
}


document.addEventListene('DOMContentLoaded', function() {
const buttonActive = document.getElementById('msgbtn');

if(window.location.href.indexOf('MsgUs.html') > -1) {
    buttonActive.classList.add('active')
}
});