m.request({
  method: "PUT",
  url: "/api/v1/users/:id",
  params: { id: 1 },
  body: { name: "test" },
}).then(function (result) {
  console.log(result);
});
