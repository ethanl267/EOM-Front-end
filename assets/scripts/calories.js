function search() {
  const input = document.getElementsByTagName("input");
  let food = {
    morning: input[0].value,
  };
  console.log(food);
  fetch("http://127.0.0.1:5000/search-food/", {
    method: "GET",
    body: JSON.stringify(food),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log(err);
    });
}
