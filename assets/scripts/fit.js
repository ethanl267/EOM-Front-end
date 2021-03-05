function getFoods() {
  fetch("http://127.0.0.1:5000/food/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((food) => {
        let item = createFoodItem(food);
        let list = document.getElementById("calories");
        list.innerHTML += item;
      });
    });
}

function createFoodItem(food) {
  return `
    <div>
        <h4>${food.foods}</h4>
    </div>
    `;
}
