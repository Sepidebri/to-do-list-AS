function openSide(){
    let sideElement = document.getElementById("list-content__inner");
    sideElement.classList.toggle("closed");
    sideElement.style.transition=(" all 2s");
    sideElement.style.transitionTimingFunction=("ease-in");
}
function openSideWithImg() {
    let sideElement = document.getElementById("list-content__inner")
    sideElement.classList.toggle("closed")
    sideElement.style.transition=(" all 2s")
    sideElement.style.transitionTimingFunction=("ease")
}
let button = document.getElementById("button");
let input = document.getElementById("input");
let ul = document.getElementById("list");
function addToList(){
    let inputValue = input.value.trim();
    if(inputValue.length > 0){
        let li = document.createElement("li");
        // let p = document.createElement("p");
        // p.textContent= input.value;
        // li.appendChild(p);
        li.style.transition=(" all 1s");
        li.style.transitionTimingFunction=("ease-in");
        // let i = document.createElement("i");
        // i.classList.add("fas fa-check");
        // li.appendChild(i)
        let closeBtn = document.createElement("img");
        closeBtn.src="/assests/Images/icons8-delete.svg";
        closeBtn.classList.add("cursor");
        closeBtn.classList.add("size-img-delete");
        li.appendChild(closeBtn);
        let doneBtn = document.createElement("img");
        doneBtn.src="/assests/Images/icons8-check-all.svg";
        doneBtn.classList.add("cursor");
        doneBtn.classList.add("size-img-done");
        li.appendChild(doneBtn);
        li.appendChild(document.createTextNode(input.value.trim()))
        input.value="";
        ul.appendChild(li);
        closeBtn.addEventListener("click", deleteItem);
        doneBtn.addEventListener("click", toggleDone);
        function toggleDone(e){
        e.target.parentElement.classList.toggle("done")
        }
        function deleteItem(e){
        console.log(e.target);
        e.target.parentElement.remove();
        }
    }else{
        input.value="";
        alert("لطفا باکس را پر کنید.");
    }
}
function addWithEnter(event){
    console.log(event);
    if(event.which ===13){
        addToList()
    }
}
input.addEventListener("keypress", addWithEnter)