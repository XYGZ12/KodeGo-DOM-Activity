function addItem() {
    let newLi = document.createElement('li');
    newLi.className = 'newClassName';
    newLi.id = 'newId';
    let liTextNode = document.createTextNode('This is a new li');
 newLi.appendChild(liTextNode);
 document.getElementById("items").appendChild(newLi);

 let newButton = document.createElement("button");
 let buttonTextNode = document.createTextNode("X");
 newButton.appendChild(buttonTextNode);
 document.getElementById("newId").appendChild(newButton);
}

// function addForm() {
//     document.getElementById("addForm").submit();
//   }

//   function appendLi() {
//     const list = document.getElementById("myList");
//     list.appendChild(element);
//   }

// let addItem = document.getElementById('item');
// console.log(addItem);

// let addForm = document.getElementById('addForm');

// addForm.addEventListener("submit", (e) => {
//     e.preventDefault();
  
//     // handle submit
//   });

let list = document.getElementsByTagName("UL")[0];
  list.getElementsByTagName("li")[0].id = "item1";
  list.getElementsByTagName("li")[1].id = "item2";
  list.getElementsByTagName("li")[2].id = "item3";
  list.getElementsByTagName("li")[3].id = "item4";

let liItemOne = document.getElementById("item1");

function removeLiOne() {
   liItemOne.parentNode.removeChild(liItemOne);
 }

 let liItemTwo = document.getElementById("item2");

function removeLiTwo() {
    liItemTwo.parentNode.removeChild(liItemTwo);
  }

  let liItemThree = document.getElementById("item3");

function removeLiThree() {
    liItemThree.parentNode.removeChild(liItemThree);
  }

  let liItemFour = document.getElementById("item4");

  function removeLiFour() {
    liItemFour.parentNode.removeChild(liItemFour);
  }