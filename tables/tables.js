const table1data = [
    { 
        tableName: "Stolik 1",
        tableData: [
            { id: 0, "initial": "Zofia R" },
            { id: 1, "initial": "Elżbieta K" },
            { id: 2, "initial": "Bogumił K" },
            { id: 3, "initial": "Tomasz R" },
            { id: 4, "initial": "Anna R" },
            { id: 5, "initial": "Marzena R" },
            { id: 6, "initial": "Marek R" },
            { id: 7, "initial": "Agnieszka S" },
            { id: 8, "initial": "Czarek S" },
            { id: 9, "initial": "" },
            { id: 10, "initial": "Witold P" },
            { id: 11, "initial": "Teresa P" },
            { id: 12, "initial": "Zbigniew P" },
            { id: 13, "initial": "Jacek P" },
            { id: 14, "initial": "Agnieszka P" },
            { id: 15, "initial": "Natalia G" },
            { id: 16, "initial": "Paweł G" },
            { id: 17, "initial": "Agnieszka D" },
            { id: 18, "initial": "Marcin B" },
            { id: 19, "initial": "" }
        ]
    },
    { 
        tableName: "Stolik 2",
        tableData: [
            { id: 0, initial: "Przemek G" },
            { id: 1, initial: "Magda S" },
            { id: 2, initial: "Mateusz R" },
            { id: 3, initial: "Monika S" },
            { id: 4, initial: "Łukasz W" },
            { id: 5, initial: "Ada K" },
            { id: 6, initial: "Marta O" },
            { id: 7, initial: "Piotr M" },
            { id: 8, initial: "" },
            { id: 9, initial: "" },
            { id: 10, initial: "Radek P" },
            { id: 11, initial: "Magda K" },
            { id: 12, initial: "Julita B" },
            { id: 13, initial: "Michał P" },
            { id: 14, initial: "Olga P" },
            { id: 15, initial: "Kuba P" },
            { id: 16, initial: "Maria K" },
            { id: 17, initial: "Tomek K" },
            { id: 18, initial: "" },
            { id: 19, initial: "" }
        ]
    },
    { 
        tableName: "Stolik 3",
        tableData: [
            { id: 0, initial: "Marcin G" },
            { id: 1, initial: "Renata G" },
            { id: 2, initial: "Paweł M" },
            { id: 3, initial: "Marta M" },
            { id: 4, initial: "Oliwia G" },
            { id: 5, initial: "Eliza G" },
            { id: 6, initial: "Martyna G" },
            { id: 7, initial: "Mateusz N" },
            { id: 8, initial: "Sandra S" },
            { id: 9, initial: "" },
            { id: 10, initial: "Małgorzata P" },
            { id: 11, initial: "Andrzej B" },
            { id: 12, initial: "Anna B" },
            { id: 13, initial: "Kuba P" },
            { id: 14, initial: "Piotr P" },
            { id: 15, initial: "Ola B" },
            { id: 16, initial: "Natalia B" },
            { id: 17, initial: "Natalia S" },
            { id: 18, initial: "Dawid O" },
            { id: 19, initial: "" }
        ]
    }
];




const tableNames = [
    { id: 0, name: "Stół 1" },
    { id: 1, name: "Stół 2" },
    { id: 2, name: "Stół 3" }
];

document.addEventListener("DOMContentLoaded", function() {


    // Get the table element
    const table1 = document.getElementById("table1");
    const table2 = document.getElementById("table2");
    const table3 = document.getElementById("table3");


    // Call the function to create chairs and assign initials
    createTables(table1, table1data[0]);
    createTables(table2, table1data[1]);
    createTables(table3, table1data[2]);


    // Function to create chairs and assign initials
    function createTables(tableObj, data) {

        // Add header content
        const tableHeader = tableObj.querySelector("h3");
        tableHeader.textContent = data.tableName

        // Get tableContent
        const tableContent = tableObj.querySelector(".table-content")

        // Create chairs and assign initials
        data.tableData.forEach(item => {
            const leftPosition = item.id < 10 ? -120 : 20;
            const topPosition = item.id < 10 ? item.id * 50 : (item.id - 10) * 50; // Adjusted top position for chairs on the right side
            createChair(tableContent, item.id, leftPosition, topPosition, item.initial);
        });
    }

    // Function to create a chair element and position it
    function createChair(tableObj, id, left, top, text) {
        const chair = document.createElement("div");
        chair.classList.add("chair");
        chair.id = "chair-" + id;
        chair.style.left = left + "px";
        chair.style.top = top + "px";
        chair.textContent = text;
        tableObj.appendChild(chair);
    }

});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("table");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}