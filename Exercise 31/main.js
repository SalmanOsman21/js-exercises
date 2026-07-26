async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP Error status : ${response.status}`);
    }

    const users = await response.json();
    console.log("Users :", users);
  } catch (error) {
    console.log("Error :", error);
  }
}

getUser();
