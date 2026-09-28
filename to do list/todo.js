let add = document.querySelector("#add");
let taskinput = document.querySelector("#taskInput");
let list = document.getElementById("task");

add.addEventListener("click", () => {
  let newlist = document.createElement("li");

  newlist.innerText = taskinput.value;

  let del = document.createElement("button");
  del.innerText = "Delete";

  let edit = document.createElement("button");
  edit.innerText = "Edit";

  newlist.appendChild(edit);
  newlist.appendChild(del);

  list.appendChild(newlist);

  del.addEventListener("click", () => {
    newlist.remove();
  });

  edit.addEventListener("click", () => {
    taskinput.value = newlist.firstChild.textContent;
    newlist.remove();
  });

  taskinput.value = "";
});
