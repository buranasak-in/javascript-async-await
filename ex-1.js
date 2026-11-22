//Exercise #1

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
// Start coding here
const displayData = (data) => {
  console.log(data);
}
const displayError = (error) => {
  console.log(error);
}
getJohnProfile().then(displayData).catch(displayError);
// console.log(displayData);
