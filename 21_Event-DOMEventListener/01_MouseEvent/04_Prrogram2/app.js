//add the event handlers such that whenever any list item is clicked , it’s color changes to crimson.
let listItems = document.querySelectorAll("li");
 listItems.forEach(function(item) {
    item.addEventListener("click", function() {
        this.style.color = "crimson";
    });
  });