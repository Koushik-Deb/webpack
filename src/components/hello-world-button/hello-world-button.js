import "./hello-world-button.scss";

class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    button.classList.add("hello-world-button");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello World";
      p.classList.add("hello-world-text");
      document.body.appendChild(p);
    };
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default HelloWorldButton;
