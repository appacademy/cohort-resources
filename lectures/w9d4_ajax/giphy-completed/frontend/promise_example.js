const myFirstPromise = new Promise((resolve, reject) => {
  // resolve will pass the argument to .then
  // reject passes the arg to .catch
  setTimeout(() => {
    // resolve("wheee");
    reject("it broke")
  }, 3000);
});


myFirstPromise
  // .then will keep going as long as these are successful
  .then((successMessage) => {
    console.log(`Yaay!! ${successMessage} first then`);
    return "i made it to the second then"
  })
  .then((successMessage) => console.log(`Yaay!! ${successMessage} second then`))
  .catch((failureMessage) => console.log(`Booo !! ${failureMessage}`));
