let showBtnDiv = document.getElementsByName("showBtn")[0].parentElement.parentElement;
let showBtnValue = showBtnDiv.innerHTML;
let data1Element = document.getElementsByName("data1")[0];
let data2Element = document.getElementsByName("data2")[0];
showBtnDiv.innerHTML = "";

let data1Text = data1Element.previousSibling;
let data2Text = data2Element.previousSibling;

data1Element.addEventListener("input", (event) => { if (data1Element.value === "") { data1Text.innerHTML = "Phone number, username or email address"; } else { data1Text.innerHTML = ""; } });
data2Element.addEventListener("input", (event) => { if (data2Element.value === "") { data2Text.innerHTML = "Password"; showBtnDiv.innerHTML = ""; } else { data2Text.innerHTML = ""; showBtnDiv.innerHTML = showBtnValue; let showBtn = showBtnDiv.childNodes[0].childNodes[0]; showBtn.addEventListener("click", () => { if (data2Element.type === "password") { data2Element.type = "text"; } else { data2Element.type = "password" } }); } });
