console.log("hello");



// // Asks the user if they are sure that they want to submit the form.
// var submitButton = document.getElementById("lindaSubmit");

// submitButton.addEventListener("click", function (event) {
//     event.preventDefault();
//     var submitNow = confirm("Are you sure you want to submit this form?");
//     if (submitNow === true) {
//         console.log("submit is true");
//         //I need code here to actually submit the form
//     } else {
//         alert("Have a nice day.  Maybe you will submit another day.");
//     }
// });

// // Asks the user if they are sure they want to reset the data on the form.
// var resetButton = document.getElementById("lindaReset");

// resetButton.addEventListener("click", function (event) {
//     event.preventDefault();
//     var submitNow = confirm("Are you sure you want to reset the information on the form?");
//     if (submitNow === true) {
//         console.log("reset is true");
//         // I need code here to actually reset the form.
//     } else {
//         alert("Reset is cancelled");
//     }
// });

// Assignment Day 6 - Create a table with images and descriptions using JavaScript:::

// Create an array of images
// img1 - Instructor's example works
// img2 - my attempt to access the image from the internet doesn't work.  Just an icon for a broken link.
// img3&4 - internal file.  But too big for the screen.
var img1 = 'https://www.northsave.com/SharedContent/images/QuadraTravel/Quadra5.jpg';
var img2 = 'https://5.imimg.com/data5/TL/KN/MY-33478789/trolley-travel-bag-500x500.jpg';
var img3 = 'https://img.freepik.com/free-vector/traveler-s-background-with-flat-design_23-2147641666.jpg';
var img4 = 'https://www.cdc.gov/features/travel-and-stds/travel-and-stds_456px.jpg';
var imageArray = [img1, img2, img3, img4];

// Create an array of descriptions
var desc1 = 'Sally really likes to go here.';
var desc2 = 'Most couples love this destination';
var desc3 = 'This is a very sunny spot';
var desc4 = 'Great destination';
var descArray = [desc1, desc2, desc3, desc4];

// Create the table and top row tags
var table = document.createElement('table');
var tr = document.createElement('tr');

// Create the header tag for column1 and insert "Images" into the cell
var th1 = document.createElement('th');
var imageHeader = document.createTextNode('Images');

// Add the header tag for column1 to the Table row
th1.appendChild(imageHeader);
tr.appendChild(th1);

// Create the header tag for column2 and insert "Descriptions" into the cell
var th2 = document.createElement('th');
var descriptionHeader = document.createTextNode('Descriptions');

// Add the header tag for column2 to the Table row
th2.appendChild(descriptionHeader);
tr.appendChild(th2);

// Add the Row tag to the Table
table.appendChild(tr);

// Loop through the imageArray, creating a row tag and a data tag then inserting an image into the cell
// 1. Create a row and data tag
// 2. Insert image from the imageArray
// 3. Adding the row and data to the table row - column1
for (var i = 0; i < imageArray.length; i++) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var image = document.createElement('img');
    image.src = imageArray[i];
    image.height = "300";
    td1.appendChild(image);
    tr.appendChild(td1);

    // 4. Create a data tag for column2
    // 5. Insert text from descArray
    // 6. Add the data for column2
    var td2 = document.createElement('td');
    var paragraph = document.createElement('p');
    var paragraphText = document.createTextNode(descArray[i]);
    paragraph.appendChild(paragraphText);
    td2.appendChild(paragraph);
    tr.appendChild(td2);

    // 7. steps 1-6 are added to the table after each iteration in the imageArray.
    table.appendChild(tr);
}

// new table is added to the ID called lindaTable
document.getElementById("lindaTable").appendChild(table);

// Day 7 Assignment
// 1. focus and blur input boxes with descpriton for form contents
// I would like to to this with a loop and array.  But I can't get it to work

var txtInput = ['txtName', 'txtAddress', 'txtCity', 'txtProvince', 'txtPostalCode', 'txtPhone'];
var txtDesc = ['txtNameDesc', 'txtAddressDesc', 'txtCityDesc', 'txtProvinceDesc',
    'txtPostalCodeDesc', 'txtPhoneDesc'];

//for (var i = 0; i < txtInput.length; i++) {
    var tbName = document.getElementById("txtName");  //  'txtInput[i]'
    tbName.addEventListener("focus", function (event) {
        var divToShow = document.getElementById("txtNameDesc"); // "txtDesc[i]"
        divToShow.style.display = "block";
    });
    tbName.addEventListener("blur", function (event) {
        var divToShow = document.getElementById("txtNameDesc"); // "txtDesc[i]"
        divToShow.style.display = "none";
    });
//}

var tbAddress = document.getElementById("txtAddress");
tbAddress.addEventListener("focus", function (event) {
    var divToShow = document.getElementById("txtAddressDesc");
    divToShow.style.display = "block";
});
tbAddress.addEventListener("blur", function (event) {
    var divToShow = document.getElementById("txtAddressDesc");
    divToShow.style.display = "none";
});
