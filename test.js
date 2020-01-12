//function utk proses menjadi kalimat sapaan
//function ini jg akan dijadikan Callback
function prosesData(full_name){

    console.log("Hello 1"+full_name);
}

//function utk menerima inputan
function getInput(first_name,last_name,myCallback){

    var full_name = first_name+" "+last_name;
    myCallback(full_name);
}

//kasih inputan , callback 'prosesData'
getInput("Ganjar","Setia",prosesData);
