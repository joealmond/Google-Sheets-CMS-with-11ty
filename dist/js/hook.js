let buildHash;
let hashReference;
fetch("buildHash.txt")
  .then((response) => response.text())
  .then((text) => (buildHash = text.valueOf()))
  .then(() => (hashReference = buildHash));

function checkBuildHashChange() {
  console.log("checking");
  if (hashReference !== buildHash) {
    console.log("reload");
    // location.reload();
  }
}

setInterval(checkBuildHashChange, 3000);

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
