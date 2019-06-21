function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  console.log("ln-3, arr[randomIndex]: " + arr[randomIndex].side);
  return arr[randomIndex];
}

export {choice};