//IMPORTACIÓN GLOBAL
// function info(text){
//     console.log("INFO:" + text);
//     return text;
// }

// function error(text){
//     console.log("ERROR:" + text);
//     return text;
// }

//module.exports = { info, error};

//FIN EXPORTACIÓN GLOBAL

//IMPORTACIÓN PARCIAL
// module.exports.info = function info (text){
//     console.log("INFO:" + text);
//     return text;
// }

// module.exports.error = function error(text){
//     console.log("ERROR:" + text);
//     return text;
// }

//O TAMBIÉN LA IMPORTACIÓN PARCIAL SE PUEDE ASÍ
function info (text){
    console.log("INFO:" + text);
    return text;
}

 function error(text){
    console.log("ERROR:" + text);
    return text;
}

module.exports.info = info;
module.exports.error = error;