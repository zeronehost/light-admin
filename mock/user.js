const posts = [{
  url: "/sys/login",
  response() {
    return {
      code: 0,
      token: "11111111111"
    };
  }
},{
  url: "/sys/logout",
  response() {
    return {
      code: 0
    };
  }
}].map(item => {
  item["method"] = "post";
  return item;
});

export default [
  ...posts
];