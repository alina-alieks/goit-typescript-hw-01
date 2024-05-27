import "./style.css";
import "../src/generics/5";
// import "../src/generics/6";

console.log(typeof new Date("2021-01-01")); //object

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  </div>
`;
