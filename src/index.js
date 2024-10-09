import ReactDOM from "react-dom/client";

const item = "MacBook";
function handleClick() {
  alert("곧 도착합니다!");
}
const imgURL = "https://upload.wikimedia.org/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>나만의 {item} 만들기!</h1>
    <img src={imgURL} alt="이미지" />
    <button onClick={handleClick}>확인</button>
  </>
);
