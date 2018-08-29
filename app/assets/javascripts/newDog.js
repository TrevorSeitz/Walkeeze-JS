function createNewDog() {
  // create a new dog
  $(".new_dog").on("submit", function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: this.action,
      data: $(".new_dog :input")
    }).done(function(data) {
      $("div.returned_new_dog").append(
        `<ul>
      Congratulations on your new Dog ${data.name}
      <p></p>
      <li>Breed: ${data.breed}</li>
      <li>Age: ${data.age}</li>
      <li>Notes: ${data.notes}</li>
      </ul>`
      );
    });
  });
}
