

exports.validateLuhn = (num) =>{
    return 0 === (num.replace(/\D/g, '').spit('').reverse.map(function (d,i){
        return +['0123456789', '0246813579'] [i%2] [+d];
    }).reduce(function(p,n){
        return p + n
    }) % 10)
}