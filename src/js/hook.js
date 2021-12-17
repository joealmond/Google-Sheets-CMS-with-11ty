let buildHash = "";
let hashReference = "";
fetch("buildHash.txt")
  .then((response) => response.text())
  .then((text) => (buildHash = text.valueOf()))
  .then((text) => (hashReference = text.valueOf()))
  .then((text) => sessionStorage.setItem("deployHash", text.valueOf()));

function checkBuildHashChange() {
  console.log("checking");

  fetch("buildHash.txt")
    .then((response) => response.text())
    .then((text) => (buildHash = text.valueOf()));

  if (sessionStorage.getItem("deployHash") !== buildHash) {
    console.log("reload");
    location.reload();
  }
}

setInterval(checkBuildHashChange, 1000);

// const content = reader.readAsText("file://buildHash.txt");

// let hashValue = Math.round(Math.random() * 10000);

//   sessionStorage.setItem("deployHash", hashValue);
// setInterval(hashValue, 3000)

// function checkHash(){
//   if (hashValue === sessionStorage.getItem("deployHash");)
// }

// sessionStorage.setItem("referenceHash", 0);

// let hashValue = sessionStorage.getItem("deployHash");
// let freshHash = 0;
// if (hashValue === null) {
//   hashValue = Math.round(Math.random() * 10000);
//   sessionStorage.setItem("deployHash", hashValue);
//   let freshHash = hashValue;
// }

// if (hashValue !== freshHash) {
//   location.reload();
//   sessionStorage.clear();
// }
