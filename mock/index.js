import Mock from "mockjs";

import user from "./user";

Mock.XHR.prototype.withCredentials = true;

[...user].forEach(item => Mock.mock(`/api/v1${item.url}`, item.method, item.response));

console.log(Mock);

// export default mocks;
// Mock.mock("/api/v1/sys/login", "post", () => {return {code: 0, token: 111};});