let newDeployHash = Math.round(Math.random() * 10000);
sessionStorage.setItem("deployHash", newDeployHash);
let oldDeployHash = sessionStorage.getItem("deployHash");

function isDeployHashEqual() {
  if (oldDeployHash === newDeployHash) {
    location.reload();
  }
}
setInterval(isDeployHashEqual, 5000);
