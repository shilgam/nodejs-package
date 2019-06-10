// Part 2
const isMomHappy = false;

const willIGetNewPhone = new Promise(
  (resolve, reject) => {
    if (isMomHappy) {
      const phone = {
        brand: 'Samsung',
        color: 'black'
      };
      resolve(phone);
    } else {
      const reason = new Error('mom is not happy');
      reject(reason);
    }
  }
);

// second promise

async function showOff(phone) {
  return new Promise(
    (resolve, reject) => {
      var message = 'Hey friend, I have a new ' +
        phone.color + ' ' + phone.brand + ' phone';

      resolve(message);
    }
  );
};

// call promise

async function askMom() {
  try {
    console.log('>>> before asking Mom');

    let phone = await willIGetNewPhone;
    let message = await showOff(phone);

    console.log(message);
    console.log('>>> after asking Mom');
  }
  catch (error) {
    console.log(error.messsage);
  }
}

(async () => {
  await askMom();
})();
