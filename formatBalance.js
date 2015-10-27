/**
 * Created by danesmith on 10/27/15.
 */
var number = require('./randomNumber');
var dollar = require('./makeDollars');

var balance = function(){
    return dollar(number(100, 1000000));
};
var text = function(){
    return "Account balance: \n";
};



module.exports.balance = balance;
module.exports.text = text;
