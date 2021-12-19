const deleteItem = document.getElementById("deleteItem");

deleteItem.addEventListener("click", () => {
  var x = confirm("Are you to delete");
  if (x == true) {
    return true;
  } else {
    return false;
  }
});
