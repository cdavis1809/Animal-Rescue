function moreInfo() {
  let interest = prompt("Would you like more information?");
  let place = prompt("What is your zipcode?");
  let email = prompt("What is your email?");
  interest = interest.toLowerCase();
  interest = interest.trim();
  if (interest === "yes") {
    alert(
      "Thank you, We will email you with information regarding the Animal Rescue flight chapter in your area."
    );
  } else {
    alert("Thank you for reading about Animal Rescue Flights!");
  }
}
{
  let infoButton = document.querySelector("button");
  infoButton.addEventListener("click", moreInfo);
}
