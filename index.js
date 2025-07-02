const button = document.getElementById("btn");
const heading1 = document.querySelector(".first");
const heading2 = document.querySelector(".second");
const heading3 = document.querySelector(".third");

button.addEventListener("click", async () => {
  const result = await displayColors();
  console.log(result);
});

async function displayColors() {
  try {
    await addColor(heading1, "red", 2000);
    await addColor(heading2, "blue", 1000);
    await addColor(heading3, "green", 3000);
  } catch (error) {
    console.log(error);
  }
  return ` hello`;
}

function addColor(element, color, time) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
      }, time);
      resolve();
    } else {
      reject(new Error(`There is no such element: ${element}`));
    }
  });
}
