/**
 * Created by danesmith on 10/27/15.
 */
var randomNumber = function (min, max) {
        return Math.random() * (max - min) + min;
    };

module.exports = randomNumber;
