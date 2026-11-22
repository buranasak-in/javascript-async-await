//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
const displayRecieveProfileData = (dataProfile) => {
  console.log(dataProfile); 
}
const displayRecieveOrderdatas = (dataOrder) => {
  console.log(dataOrder);
}
const displayError = (error) => {
  console.log(error);
}

getJohnProfile()
  .then(displayRecieveProfileData)
  .then(getJohnOrders)
  .then(displayRecieveOrderdatas)
  .catch(displayError);