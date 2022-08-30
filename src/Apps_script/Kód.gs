function onEdit(e) {
  const options = {
    method: "post",
    title: "remoteDeploy",
    branch: "main",
    url: "https://api.netlify.com/build_hooks/60fad2f76d22ec00c9d44587",
    created_at: "2021-07-23T14:32:23.941Z",
    id: "60fad2f76d22ec00c9d44587",
    site_id: "8dffa25e-7eb5-464d-8936-106a1a278e5a",
    msg: "POST https://api.netlify.com/build_hooks/60fad2f76d22ec00c9d44587 to trigger a build",
  };
  const url =
    "https://api.netlify.com/build_hooks/60fad2f76d22ec00c9d44587?trigger_branch=main&trigger_title=triggered+by+Apps+Script";
  let response = UrlFetchApp.fetch(url, options);
  Logger.log(response);
}
