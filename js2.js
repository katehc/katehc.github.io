document.getElementById("vacancySearch").addEventListener("submit", apiCall);
document.addEventListener('DOMContentLoaded', defaultTen());
const resultTable = document.getElementById("results_table");

//Method to display 10 results when page loads 
function defaultTen(){

    //Base URL
    let url = "http://api.lmiforall.org.uk/api/v1/vacancies/search";
    console.log(url);

    //API Call
    fetch(url)

    .then(response => {
        // Error handling if response status is 404
        if (response.status == 404) {
            alert("Job description not found");
            throw new Error("Job description not found");
        }
        // Otherwise return the response
        return response;
    })
.then(response => response.json()) ////Return response as json 
.then(data => { //Using the json response 
    //logging result object of response 
console.log(data);

//Calling display Vacancies to add details to the table
displayVacancies(data);
})
}

//Method to call the API using input from search bar
function apiCall(evt) {
    evt.preventDefault();

    //Deletes rows populated without search
    resultTable.deleteRow(-1);
    resultTable.deleteRow(-1);
    resultTable.deleteRow(-1);
    resultTable.deleteRow(-1);
    resultTable.deleteRow(-1);
    resultTable.deleteRow(-1);
    resultTable.deleteRow(-1);
    resultTable.deleteRow(-1);
    resultTable.deleteRow(-1);
    resultTable.deleteRow(-1);
    


    let vacanciesUrl = "http://api.lmiforall.org.uk/api/v1/vacancies/search";
    let jobInfo = "http://api.lmiforall.org.uk/api/v1/soc/search";
    let vacancy = document.getElementById("searchBox").value;
    vacancy = encodeURIComponent(vacancy);
    let url = vacanciesUrl + "?keywords=" + vacancy;
    console.log(url);

    console.log("API call using fetch");

    //API Call
        fetch(url)
            .then(response => {
                // Rrror handling if response status is 404
                if (response.status == 404) {
                    alert("Vacancies not found");
                    throw new Error("Vacancies not found");
                }
                // Otherwise return the response
                return response;
            })
        .then(response => response.json()) ////Return response as json 
        .then(data => { //Using the json response 
            //logging result object of response 
        console.log(data);

        //Adds vacancies to table
        displayVacancies(data);
        return fetch(vacanciesUrl);
    })
    
    .then(response => response.json())
    .then(response => {
     console.log(response);

     let title = response.find(jobtitle => jobtitle.title == jobtitle);
    
}
)
}


function displayVacancies(data){
    
    console.log(data);

    //Counter 
    let i = 1;

    //For each vacancy
    Object.values(data).forEach(vacancy => {
        //while loop to limit rows to 10
        while (i < 11) {
            printRow(data[i], i);
            console.log(vacancy);
            i++;
        }
  });
}

//Method to print each row
function printRow(vacancy, i){
var title = vacancy.title;

    //Create new row using counter
    var row = resultTable.insertRow(i);

    //Create cells in new row
    var titleCell = row.insertCell(0);
    var jobSummaryCell = row.insertCell(1);
    var jobLocationCell = row.insertCell(2);
    var dateCell = row.insertCell(3);
    var companyCell = row.insertCell(4);
    var link = row.insertCell(5);
 //   var generalInfoCell = row.insertCell(6);

    titleCell.innerHTML = vacancy.title;
    jobSummaryCell.innerHTML = "<p id=\"summaryBox\">" + vacancy.summary+ "</p>";
    jobLocationCell.innerHTML = vacancy.location.location;
    dateCell.innerHTML = vacancy.activedate.start;
    companyCell.innerHTML = vacancy.company;
    link.innerHTML = "<a href=\" " + vacancy.link + " \">Link to job posting</a>";
 //   var generalInfo = generalInformation(title);
 //   generalInfoCell.innerHTML =  generalInfo;

}

//Method to get general information from second api - incomplete 
/*
function generalInformation(title){

    let generalDetails;
    title=title.replaceAll(" ","+");
    console.log(title);
  
    console.log("in general info");
      let descriptionUrl = "http://api.lmiforall.org.uk/api/v1/soc/search?q=" + title;
      console.log(descriptionUrl);

      console.log("API call using fetch");

      //API Call
     fetch(descriptionUrl)
  .then(response => response.json())
  .then(data => { 
    generalDetails = data.soc;
    console.log(generalDetails); 
  return fetch(descriptionUrl);
  })
}
  */
  
