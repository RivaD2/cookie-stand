'use strict';


// Lab 07: Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.



//FIRST CONSTRUCTOR FUNCTION DEFINES TEMPLATES FOR STORES
// storeHrs is a global variable because every store needs it

var storeHrs = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function Store (name, minCust, maxCust,avgCustomerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.totalCookies = 0;
  this.cookieSalesPerHr = [];
  this.avgCustSale = avgCustomerSale;
  this.storeHrs= storeHrs;
}

//NEW CODE FOR STORE HOUR TIMES HEADER AND TOTAL FOOTER, delete all if code breaks // LAB 08b START:
// this.timeDisplay = function() {
//   Store.prototype.render= function() {
//   var mainTable = document.getElementById('mainTable'); 
//   var storeTableRow = document.createElement('tr');
//   var storeNameTableData = document.createElement('th'); 
//   storeNameTableData.textContent = this.name; 
//   storeTableRow.appendChild(storeNameTableData);
//    mainTable.appendChild(storeTableRow);

// }
// for (var i = 0; i < this.storeHrs.length; i++) {  //this will calculate cookie sales for one hr
//var cookies = this.calculateCookiesSold();
//this.cookieSalesPerHr.push(cookies);
// }
//};
// cookieStore.prototype.calculateCookiesSold =function() {
//return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min * this.avgCustomerSale);
// };

//cookiestore.protype.calculateHourlySales = function() {
//for every hour randomly generate that hours cookies/customers
//}

//NEW CODE FOR FORM 
var storeForm = document.getElementById('addStore');
storeForm.addEventListener("submit", addStore);
function addStore(event) {
  event.preventDefault();

  var name =event.target.name.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCustomerSale = event.target.avgCustomerSale.value;

  var newStore = new Store (name, minCust, maxCust,avgCustomerSale);
  newStore.render();
}


//** Need to add totals to table and times at top */
Store.prototype.render= function() {// Start here for table creation and add html element if it doesn't exist (that is step 2)
  var mainTable = document.getElementById('mainTable'); // We get a reference to the table here
  var storeTableRow = document.createElement('tr');// create a table row because we need one ROW FOR EVERY STORE --(working inward toward child elements)
  //create table data for store name
  var storeNameTableData = document.createElement('td'); // EVERY ROW HAS TABLE DATA so we had to reference to the td
  // set the content of the table data
  storeNameTableData.textContent = this.name; //this is not a method, we are assigning a property
  //added table data to the ROW object and by passing it in
  storeTableRow.appendChild(storeNameTableData);


  //* IF I WANT TO CREATE ANOTHER TABLE, I WOULD USE ANOTHER RENDER FUNCTION(use name like employeeTable)


  // Loop through storeHrs and create table data for each one
  // I will need to calc cookiesSold (create var) and set it to text content of table data
  // Append table data to row

  for (var i = 0; i < this.storeHrs.length; i++) {
    var custThisHour = this.getRandomNum(this.minCust,this.maxCust);
    var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
    this.cookieSalesPerHr.push(cookiesPerHr);//use push method to add cookie sales per hr onto array
    this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
    var specificHourTableData = document.createElement('td');
    specificHourTableData.textContent = cookiesPerHr;
    storeTableRow.appendChild(specificHourTableData);
  }

  // added the row to the table
  mainTable.appendChild(storeTableRow);
};


Store.prototype.getRandomNum = function(min, max) { // Took getRandomNum and we turned it into a method
  min = Math.ceil(min); // The same code still works in the method
  max = Math.floor(max);// THe only thing I had to change was the function to the method, and line34 to this.getRandom
  return Math.floor(Math.random() * (max - min)) + min;
};
//math.random MDN reference above used with prototype method


//SECOND, 5 DIFFERENT INSTANCES OF THE STORE OBJECT ARE CREATED
// Below each instance are the render method calls/function calls for each location using listOfTimes

var seattleStore = new Store('Seattle',23,65,6.3); // new Store(arguments)
var tokyoStore = new Store('Tokyo',3,24,1.2);// new variables aren't necessary
var dubaiStore = new Store('Dubai',11,38,3.7);
var parisStore = new Store('Paris',20,38,2.3);
var limaStore = new Store('Lima',2,16,4.7);


//seattleStore.listOfTimes();
seattleStore.render(); // render method still holds the functionality that listOfTimes function had
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();



