function delayBlocking() {
  alert("Fetching user data");
  return "Blocking delay completed ";
}

console.log("Start blocking delay");
console.log(delayBlocking());
console.log("This message is blocked untill delay is complete");

//Non blockin Asynchronous
function nonBlockingDelay() {
  setTimeout(() => {
    console.log("Non blocking delay completed after 2s !");
  }, 2000);
}

console.log("fetch Start");

nonBlockingDelay();

console.log("fetch End");
