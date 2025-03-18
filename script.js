let text = "";
if (phone < 1 || phone > 10) {
    text = "Valid";
} else {
    text = "Invalid";
}

let paragraph = document.createElement("p");
let newContent = document.createTextNode("Hi there and greetings!");
paragraph.appendChild(newContent);
let phone = document.getElementById("phone");
document.body.insertBefore(paragraph, phone);
