function search() {
  const input = document.getElementsByTagName("input");
  let food = {
    morning: input[0].value,
    afternoon: input[1].value,
    evening: input[2].value,
  };
  console.log(food);
  fetch("http://127.0.0.1:5000/search-food/food/", {
    method: "POST",
    body: JSON.stringify(food),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      let sumCalories =
        parseInt(json[0]["calories"]) +
        parseInt(json[1][0]["calories"]) +
        parseInt(json[2][0]["calories"]);
      alert(`This the amount of calories you ate for the day ${sumCalories}`);
    })
    .catch((err) => {
      console.log(err);
    });
}
