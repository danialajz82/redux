const fruitStates = {
  apple: 5,
  orange: 10,
};
const foodStates = {
  sandwich: 15,
};

const fruitReducer = (state = fruitStates, action) => {
  switch (action.type) {
    case "Buy_Apple":
      return { ...state, apple: state.apple - 1 };
    case "Buy_Orange":
      return { ...state, orange: state.orange - 1 };
    default:
      return state;
  }
};

const foodReducer = (state = foodStates, action) => {
  switch (action.type) {
    case "Buy_Sandwich":
      return { ...state, sandwich: state.sandwich - 1 };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  fruit : fruitReducer, 
  food: foodReducer
})
const store = Redux.createStore(rootReducer);

const render = () => {
  document.getElementById("apple-count").innerHTML =
    "تعداد سیب ها" + store.getState().fruit.apple;
  document.getElementById("orange-count").innerText =
    "تعداد پرتغال ها" + store.getState().fruit.orange;
    document.getElementById("sandwich-count").innerText =
    "تعداد ساندویج ها" + store.getState().food.sandwich;
};

store.subscribe(() => {
  render();
});

document.getElementById("buy-apple").addEventListener("click", () => {
  store.dispatch({ type: "Buy_Apple" });
});
document.getElementById("buy-orange").addEventListener("click", () => {
  store.dispatch({ type: "Buy_Orange" });
});
document.getElementById("buy-sandwich").addEventListener("click", () => {
  store.dispatch({ type: "Buy_Sandwich" });
});

render();
