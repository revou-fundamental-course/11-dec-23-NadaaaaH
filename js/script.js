function replaceName() {
   let name = prompt("Hai, siapa namamu?", " ")
   document.getElementById("name").innerHTML = name
}

replaceName();



function msgUs() {
    document.getElementById( )
}

document.querySelector('.form').addEventListener('submit', function(event) {
    var nama = document.getElementById('name-input').value.trim();
    var tanggalLahir = document.getElementsByName('birthdate')[0].value.trim();
    var jenisKelamin = document.querySelector('input[name="gender"]:checked');
    var pesan = document.getElementById('pesan-input').value.trim();
    var errorText = document.getElementById('error');

    if (nama === '' || tanggalLahir === '' || !jenisKelamin || pesan === '') {
        event.preventDefault();
        errorText.textContent = 'Semua kolom harus diisi!';
    } else {
        errorText.textContent = '';
    }
});
