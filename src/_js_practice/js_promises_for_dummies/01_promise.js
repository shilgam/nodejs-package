// Промисы в JavaScript для чайников
// https://medium.com/@stasonmars/%D0%BF%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D1%8B-%D0%B2-javascript-%D0%B4%D0%BB%D1%8F-%D1%87%D0%B0%D0%B8%CC%86%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2-60bbef963541

// Представьте, что вы ребенок.
// Ваша мама обещает вам, что вы получите новый телефон на следующей неделе.
// Вы не знаете, получите ли вы его до следующей неделе.
// Ваша мама может купить вам совершенно новый телефон,
// а может просто этого не сделать, к примеру, потому что она будет не в настроении

var isMomHappy = true;

// define Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
            // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
};



// test('mum is happy', () => {
//     var isMomHappy = true;
//     expect(askMom()).toEqual({brand: 'Samsung', color: 'black'});
// });
//
// test('mum is not happy', () => {
//     var isMomHappy = false;
//     expect(askMom()).toEqual('mom is not happy');
// });

// 2nd promise
var showOff = function(phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone'

            resolve(message);
        }
    );
};

// call 2nd promise

var askMom = function () {
    console.log('>>> before asking Mom');
    willIGetNewPhone
    .then(showOff) // bounding
    .then(function (fulfilled) {
        console.log(fulfilled);
        // output: 'Hey friend, I have a new black Samsung phone.'
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
    console.log('>>> after asking mom');
};

askMom();
