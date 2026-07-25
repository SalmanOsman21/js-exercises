async function fetchData() {
  console.log("Start fetching data");
  const reponse = await fetch("./data.json");

  const data = await reponse.json();
  console.log("Fetched data", data);
}

fetchData();
