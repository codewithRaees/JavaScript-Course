function makeHTTPRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status == 200) {
      callback(xhr.response);
    }
  };
  xhr.send();
}

makeHTTPRequest("get", "https://dummyjson.com/users", (userData) => {
  console.log(userData);
  makeHTTPRequest(
    "get",
    `https://dummyjson.com/users/${userData.users[4].id}`,
    (singleUserData) => {
      console.log(singleUserData);
      makeHTTPRequest(
        "get",
        `https://dummyjson.com/users/${singleUserData.id}/posts`,
        (userPosts) => {
          console.log(userPosts);
          makeHTTPRequest(
            "get",
            `https://dummyjson.com/users/${singleUserData.id}/posts`,
            (singPost) => {
              console.log(singPost.posts[0].title);
            }
          );
        }
      );
    }
  );
});
