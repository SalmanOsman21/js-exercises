function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succes = true;
      if (succes) {
        resolve("Data fetched succesfully");
      } else {
        reject("Failed reject");
      }
    }, 2000);
  });
}

fetchDataWithPromise()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
