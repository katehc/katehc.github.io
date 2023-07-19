document.getElementById("menuBar");

function getData(evt) {
    evt.preventDefault();

        // Gets the values from the input form 
         let jobTitle = document.getElementById("jobTitle").value;
         console.log(jobTitle);

         let pay = document.getElementById("pay").value;
         console.log(pay);

         let frequency = document.getElementById("frequency").value;
         console.log(frequency);

         let hours = document.getElementById("hours").value;
         console.log(hours);

         submit(jobTitle, pay, frequency, hours);
}

function submit(jobTitle, pay, frequency, hours) {

  var title = document.getElementById("title");
  var payRates = document.getElementById("payRates");
  var workingHours = document.getElementById("workingHours");

console.log(jobTitle);
   title.innerHTML = "Job Title: <b>" + jobTitle + "</b>";
    console.log(title);
    workingHours.innerHTML = "Working <b>" + hours + "</b> hours per week for <b> £" + pay + "</b> per <b>" + frequency + "</b> breaks down into: ";

    // Show the results section using the "display: block" CSS property
   document.getElementById("result_section").style.display = "block";

    //switch case to calculate pay rates depending on frequency input 
    switch (frequency) {
        case "Year":
            salaryPerYear = Math.round(pay);
            salaryPerMonth = Math.round(pay / 12);
            salaryPerWeek = Math.round(pay / 52);
            salaryPerHour = Math.round(salaryPerWeek / hours);
            let perYear = "<b> £" + salaryPerYear + "</b> per Year";
            let perMonth = "<b> £" + salaryPerMonth + "</b> per Month";
            let perWeek = "<b> £" + salaryPerWeek + "</b> per Week";
            let perHour = "<b> £" + salaryPerHour + "</b> per Hour";
            payRates.innerHTML = perYear + " <br>" + perMonth + " <br> " + perWeek + " <br> " + perHour;
            break;
        case "Month":
            salaryPerYear = Math.round(pay * 12);
            salaryPerMonth = Math.round(pay);
            salaryPerWeek = Math.round(pay / 4);
            salaryPerHour = Math.round(salaryPerWeek / hours);
            perYear = "<b> £" + salaryPerYear + "</b> per Year";
            perMonth = "<b> £" + salaryPerMonth + "</b> per Month";
            perWeek = "<b> £" + salaryPerWeek + "</b> per Week";
            perHour = "<b> £" + salaryPerHour + "</b> per Hour";
            payRates.innerHTML = perYear + " <br>" + perMonth + " <br> " + perWeek + " <br> " + perHour;
            break;
        case "Week":
            salaryPerYear = Math.round(pay * 52);
            salaryPerMonth = Math.round(pay * 4);
            salaryPerWeek = Math.round(pay);
            salaryPerHour = Math.round(salaryPerWeek / hours);
            perYear = "<b> £" + salaryPerYear + "</b> per Year";
            perMonth = "<b> £" + salaryPerMonth + "</b> per Month";
            perWeek = "<b> £" + salaryPerWeek + "</b> per Week";
            perHour = "<b> £" + salaryPerHour + "</b> per Hour";
            payRates.innerHTML = perYear + " <br>" + perMonth + " <br> " + perWeek + " <br> " + perHour;
            break;
        case "Hour":
            salaryPerYear = Math.round(pay * hours * 52);
            salaryPerMonth = Math.round(pay * hours * 4);
            salaryPerWeek = Math.round(pay * hours);
            salaryPerHour = Math.round(pay);
            perYear = "<b> £" + salaryPerYear + "</b> per Year";
            perMonth = "<b> £" + salaryPerMonth + "</b> per Month";
            perWeek = "<b> £" + salaryPerWeek + "</b> per Week";
            perHour = "<b> £" + salaryPerHour + "</b> per Hour";
            payRates.innerHTML = perYear + " <br>" + perMonth + " <br> " + perWeek + " <br> " + perHour;
            break;
    }
 
}   


document.getElementById("jsValue").value = yourVariable;
var date;
function setDate(val) {
    date = val;
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("menuBar");
  if (x.className === "menuBar") {
    x.className += " responsive";
  } else {
    x.className = "menuBar";
  }
}