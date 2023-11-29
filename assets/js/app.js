const states = {
  apple: 5,
};

const reducer = (state = states, action) => {
  switch (action.type) {
    case "Buy_Apple":
      return { apple: state.apple - 1 };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.subscribe(() => {
  document.getElementById("apple-count").innerHTML =
    "apple number:" + store.getState().apple;
});
document.getElementById("buy-apple").addEventListener("click", () => {
  store.dicpatch({ type: "Buy_Apple" });
});

document.getElementById("apple-count").innerHTML =
  "apple number:" + store.getState().apple;
