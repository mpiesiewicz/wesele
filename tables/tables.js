const table1data = [
    { 
        tableName: "Stolik 1",
        tableData: [
            { id: 0, initial: "" },
            { id: 1, initial: "Marcin B" },
            { id: 2, initial: "Agnieszka" },
            { id: 3, initial: "Natalia G" },
            { id: 4, initial: "Paweł G" },
            { id: 5, initial: "Agnieszka P" },
            { id: 6, initial: "Jacek P" },
            { id: 7, initial: "Zbigniew P" },
            { id: 8, initial: "Teresa P" },
            { id: 9, initial: "Witold P" },
            { id: 10, initial: "" },
            { id: 11, initial: "Czarek S" },
            { id: 12, initial: "Agnieszka S" },
            { id: 13, initial: "Marzena R" },
            { id: 14, initial: "Marek R" },
            { id: 15, initial: "Anna R" },
            { id: 16, initial: "Tomasz R" },
            { id: 17, initial: "Zofia R" },
            { id: 18, initial: "Elźbieta K" },
            { id: 19, initial: "Bogumił K" }
        ]
    },
    { 
        tableName: "Stolik 2",
        tableData: [
            { id: 0, initial: "" },
            { id: 1, initial: "" },
            { id: 2, initial: "Dawid O" },
            { id: 3, initial: "Natalia S" },
            { id: 4, initial: "Sandra S" },
            { id: 5, initial: "Ola B" },
            { id: 6, initial: "Natalia B" },
            { id: 7, initial: "Anna B" },
            { id: 8, initial: "Andrzej B" },
            { id: 9, initial: "Małgorzata P" },
            { id: 10, initial: "" },
            { id: 11, initial: "" },
            { id: 12, initial: "Kasia DJ" },
            { id: 13, initial: "Karolina J" },
            { id: 14, initial: "Eliza G" },
            { id: 15, initial: "Oliwia G" },
            { id: 16, initial: "Os Tow" },
            { id: 17, initial: "Martyna G" },
            { id: 18, initial: "Renata G" },
            { id: 19, initial: "Marcin G" }
        ]
    },
    { 
        tableName: "Stolik 3",
        tableData: [
            { id: 0, initial: "Paweł M" },
            { id: 1, initial: "Marta M" },
            { id: 2, initial: "Marta O" },
            { id: 3, initial: "Piotr M" },
            { id: 4, initial: "Monika S" },
            { id: 5, initial: "Łukasz W" },
            { id: 6, initial: "Ada K" },
            { id: 7, initial: "Mateusz R" },
            { id: 8, initial: "Magda K" },
            { id: 9, initial: "Radek P" },
            { id: 10, initial: "Kuba P" },
            { id: 11, initial: "Piotr P" },
            { id: 12, initial: "Maria K" },
            { id: 13, initial: "Tomek K" },
            { id: 14, initial: "Julita B" },
            { id: 15, initial: "Michał P" },
            { id: 16, initial: "Olga" },
            { id: 17, initial: "Kuba P" },
            { id: 18, initial: "Os Tow" },
            { id: 19, initial: "Przemek G" }
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