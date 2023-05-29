let persons = [];

        
let Cards = parseInt(prompt("Enter the number of cards :"));

for (let i = 0; i < Cards; i++) {
    let name = prompt("Enter the Name " + (i + 1) + ":");
    let email = prompt("Enter the Email " + (i + 1) + ":");
    let image = prompt("Enter the Image URL" + (i + 1) + ":");


    let persondata = {
        Name: name,
        Email: email,
        image: image
    };

    persons.push(persondata);
}

document.write("<div class='container'>");
persons.map((element) => {
    document.write("<div class='cards'>");
    document.write("<h1>" + element.Name + "</h1>");
    document.write("<h1>" + element.Email + "</h1>");
    document.write(`<img src="${element.image}" alt="">`);
    document.write("</div>");
});
document.write("</div>");