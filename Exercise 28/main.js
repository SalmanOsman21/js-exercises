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

async function displayUserDara() {
  try {
    const user = await fetchDataWithPromise;
    console.log("user Data", user);
  } catch (err) {
    console.log(`Error ${err}`);
  }
}

displayUserDara();
