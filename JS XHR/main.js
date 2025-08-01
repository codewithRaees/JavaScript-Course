const showDog = document.querySelector(".show-dog");
const blockThread = document.querySelector(".block-main-thread");
const Dog = document.querySelector(".dog");

const xhr = new XMLHttpRequest();
xhr.responseType = "json";

showDog.addEventListener("click", () => {
  xhr.open("get", "https://dog.ceo/api/breed/african/images/random");
  xhr.send();
  console.log(xhr);
  xhr.addEventListener("load", () => {
    Dog.src = xhr.response.message;
  });
});

blockThread.addEventListener("click", () => {
  blockMainThread(8000);
  console.log("this will run after 8 seconds");
});

function blockMainThread(DurationInMS) {
  const start = Date.now();

  while (Date.now() - start < DurationInMS) {}
}

console.log("this will run after 0 seconds");
