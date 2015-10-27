/**
 * Created by danesmith on 10/27/15.
 */
var dollars = function(number){
    var dollar = Number(number).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return "$" + dollar;
};

module.exports = dollars;