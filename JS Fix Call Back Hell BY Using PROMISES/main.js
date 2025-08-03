function makeHTTPRequest(method, url) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  const promise = new Promise((resolve, reject) => {
    xhr.onload = () => {
      if (xhr.status == 200) {
        resolve(xhr.response);
      }
    };
  });
  xhr.open(method, url);
  xhr.send();
  return promise;
}
makeHTTPRequest("get", "https://dummyjson.com/users")
  .then((userData) =>
    makeHTTPRequest(
      "get",
      `https://dummyjson.com/users/${userData.users[4].id}`
    )
  )
  .then((singleUserData) =>
    makeHTTPRequest(
      "get",
      `https://dummyjson.com/users/${singleUserData.id}/posts`
    )
  )
  .then((singlePost) => {
    console.log(singlePost.posts[0].title);
  });
