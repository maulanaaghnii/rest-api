// let mahasiswa = {

//     nama: "Mek",
//     nim: "A11.2019.12028",
//     email: "mek@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));


// VANILLA JS (Manual)
// // xhr = XML Http Request
// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {

//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);

//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();


//JQUERY
$.getJSON('coba.json', function (data) {

    console.log(data);

});