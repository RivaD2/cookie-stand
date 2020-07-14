'use strict'


// Lab 07: Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

//FIRST CONSTRUCTOR FUNCTION DEFINES TEMPLATES FOR HOTELS
var storeHrs = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function Store (name, minCust, maxCust, totalCookies, cookieSalesPerHr,avgCustSale,storeHrs) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.totalCookies = totalCookies;
  this.cookieSalesPerHr = [];
  this.avgCustSale = avgCustomerSale;
  this.storeHrs = storeHrs;
}

//SECOND, 5 DIFFERENT INSTANCES OF THE STORE OBJECT ARE CREATED
  var seattleStore = new Store('Seattle',23,65,0,[],6.3,); // new Store(parameters)
  var tokyoStore = new Store('Tokyo',3,24,0,[],1.2,);  // new variables aren't necessary 
  var dubaiStore = new Store('Dubai',11,38,0,[],3.7,);
  var parisStore = new Store('Paris',20,38,0,[],2.3,);
  var limaStore = new Store('Lima',2,16,0,[],4.7,);

// NOW I HAVE INSTANCES AND CAN ACCESS PROPERTIES USING . NOTATION
  // prototypes belong here// this will generate random Customers per hour

  //Store.prototype.getRandomNum = function(minCust,maxCust) {
  //create loop to iterate through storeHrs and generate random customers per hr for each hr of ops
  //take a look at total cookie amount


function listOfTimes() {
  var seattleObject = document.getElementById(this.name + 'Cookies');
  var seattleHeader = document.getElementById(this.name + 'Header');
    seattleHeader.textContent = this.name;
  for (var i = 0; i < this.storeHrs.length; i++) {
    var custThisHour = getRandomNum(this.minCust,this.maxCust); 
    // rounding cookies per hour total
    //could take line 24 -26 into a function instead and then call the custPerHr function
    var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
    this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
    // add new number to the total
    this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
    var timesList = document.createElement('li');
    timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
    seattleObject.appendChild(timesList);
    
  } 
   var totalList = document.createElement('li');
   totalList.textContent = 'Total: ' + this.totalCookies;
   seattleObject.appendChild(totalList);

  }
listOfTimes();





function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;

}

// Create object with properties
// var seattle = {         //Create function at the top(separate function list of times 19-37 and put it outside of object)
//   name: 'seattle', // by giving the object a property of name, we can use the this.name to reference the object, making it easier to create copies
//   minCust: 23,          
//   maxCust: 65,          // there needs to be five neat objects with their properties and ONE FUNCTION that does everything
//   totalCookies: 0,         //this way, we can write function and just pass in the props 
//   cookieSalesPerHr: [],   
//   avgCustSale: 6.3,
//  storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   listOfTimes: function() {
//     var seattleObject = document.getElementById(this.name + 'Cookies');
//     var seattleHeader = document.getElementById(this.name + 'Header');
//       seattleHeader.textContent = this.name;
//     for (var i = 0; i < this.storeHrs.length; i++) {
//       var custThisHour = getRandomNum(this.minCust,this.maxCust); 
//       // rounding cookies per hour total
//       //could take line 24 -26 into a function instead and then call the custPerHr function
//       var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
//       this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
//       // add new number to the total
//       this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
//       var timesList = document.createElement('li');
//       timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
//       seattleObject.appendChild(timesList);
      
//     } 
//      var totalList = document.createElement('li');
//      totalList.textContent = 'Total: ' + this.totalCookies;
//      seattleObject.appendChild(totalList);


// // //   }

// // }
// // seattle.listOfTimes();



// var tokyo = {
//   name: 'tokyo',
//   minCust: 3,
//   maxCust: 24,
//   totalCookies: 0,
//   cookieSalesPerHr: [],
//   avgCustSale: 1.2,
//   storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   listOfTimes: function() {
//     var seattleObject = document.getElementById(this.name + 'Cookies');
//     var seattleHeader = document.getElementById(this.name + 'Header');
//       seattleHeader.textContent = this.name;
//     for (var i = 0; i < this.storeHrs.length; i++) {
//       var custThisHour = getRandomNum(this.minCust,this.maxCust);
//       // rounding cookies per hour total
//       var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
//       this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
//       // add new number to the total
//       this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
//       var timesList = document.createElement('li');
//       timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
//       seattleObject.appendChild(timesList);
      
//     } 
//      var totalList = document.createElement('li');
//      totalList.textContent = 'Total: ' + this.totalCookies;
//      seattleObject.appendChild(totalList);


//   }

// }
// tokyo.listOfTimes();

// var dubai = {
//   name: 'dubai',
//   minCust:11,
//   maxCust: 38,
//   totalCookies: 0,
//   cookieSalesPerHr: [],
//   avgCustSale: 3.7,
//   storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   listOfTimes: function() {
//     var seattleObject = document.getElementById(this.name + 'Cookies');
//     var seattleHeader = document.getElementById(this.name + 'Header');
//       seattleHeader.textContent = this.name;
//     for (var i = 0; i < this.storeHrs.length; i++) {
//       var custThisHour = getRandomNum(this.minCust,this.maxCust);
//       // rounding cookies per hour total
//       var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
//       this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
//       // add new number to the total
//       this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
//       var timesList = document.createElement('li');
//       timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
//       seattleObject.appendChild(timesList);
      
//     } 
//      var totalList = document.createElement('li');
//      totalList.textContent = 'Total: ' + this.totalCookies;
//      seattleObject.appendChild(totalList);


//   }

// }
// dubai.listOfTimes();

// var paris = {
//   name: 'paris',
//   minCust:20,
//   maxCust: 38,
//   totalCookies: 0,
//   cookieSalesPerHr: [],
//   avgCustSale: 2.3,
//   storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   listOfTimes: function() {
//     var seattleObject = document.getElementById(this.name + 'Cookies');
//     var seattleHeader = document.getElementById(this.name + 'Header');
//       seattleHeader.textContent = this.name;
//     for (var i = 0; i < this.storeHrs.length; i++) {
//       var custThisHour = getRandomNum(this.minCust,this.maxCust);
//       // rounding cookies per hour total
//       var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
//       this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
//       // add new number to the total
//       this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
//       var timesList = document.createElement('li');
//       timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
//       seattleObject.appendChild(timesList);
      
//     } 
//      var totalList = document.createElement('li');
//      totalList.textContent = 'Total: ' + this.totalCookies;
//      seattleObject.appendChild(totalList);


//   }

// }
// paris.listOfTimes();


// var lima = {
//   name: 'lima',
//   minCust:2,
//   maxCust: 16,
//   totalCookies: 0,
//   cookieSalesPerHr: [],
//   avgCustSale: 4.7,
//   storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   listOfTimes: function() {
//     var seattleObject = document.getElementById(this.name + 'Cookies');
//     var seattleHeader = document.getElementById(this.name + 'Header');
//       seattleHeader.textContent = this.name;
//     for (var i = 0; i < this.storeHrs.length; i++) {
//       var custThisHour = getRandomNum(this.minCust,this.maxCust);
//       // rounding cookies per hour total
//       var cookiesPerHr = Math.round(this.avgCustSale * custThisHour);
//       this.cookieSalesPerHr.push(cookiesPerHr); //use push method to add cookie sales per hr onto array
//       // add new number to the total
//       this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
//       var timesList = document.createElement('li');
//       timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
//       seattleObject.appendChild(timesList);
      
//     } 
//      var totalList = document.createElement('li');
//      totalList.textContent = 'Total: ' + this.totalCookies;
//      seattleObject.appendChild(totalList);


//   }

// }
// lima.listOfTimes();
