'use strict'

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;

}

// Create object with properties
var seattle = {         //Create function at the top(separate function list of times 19-37 and put it outside of object)
  name: 'seattle', // by giving the object a property of name, we can use the this.name to reference the object, making it easier to create copies
  minCust: 23,          
  maxCust: 65,          // there needs to be five neat objects with their properties and ONE FUNCTION that does everything
  totalCookies: 0,         //this way, we can write function and just pass in the props 
  cookieSalesPerHr: [],   
  avgCustSale: 6.3,
  storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  listOfTimes: function() {
    var seattleObject = document.getElementById(this.name + 'Cookies');
    var seattleHeader = document.getElementById(this.name + 'Header');
      seattleHeader.textContent = this.name;
    for (var i = 0; i < this.storeHrs.length; i++) {
      var custThisHour = getRandomNum(this.minCust,this.maxCust);
      // rounding cookies per hour total
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

}
seattle.listOfTimes();



var tokyo = {
  name: 'tokyo',
  minCust: 3,
  maxCust: 24,
  totalCookies: 0,
  cookieSalesPerHr: [],
  avgCustSale: 1.2,
  storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  listOfTimes: function() {
    var seattleObject = document.getElementById(this.name + 'Cookies');
    var seattleHeader = document.getElementById(this.name + 'Header');
      seattleHeader.textContent = this.name;
    for (var i = 0; i < this.storeHrs.length; i++) {
      var custThisHour = getRandomNum(this.minCust,this.maxCust);
      // rounding cookies per hour total
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

}
tokyo.listOfTimes();

var dubai = {
  name: 'dubai',
  minCust:11,
  maxCust: 38,
  totalCookies: 0,
  cookieSalesPerHr: [],
  avgCustSale: 3.7,
  storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  listOfTimes: function() {
    var seattleObject = document.getElementById(this.name + 'Cookies');
    var seattleHeader = document.getElementById(this.name + 'Header');
      seattleHeader.textContent = this.name;
    for (var i = 0; i < this.storeHrs.length; i++) {
      var custThisHour = getRandomNum(this.minCust,this.maxCust);
      // rounding cookies per hour total
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

}
dubai.listOfTimes();

var paris = {
  name: 'paris',
  minCust:20,
  maxCust: 38,
  totalCookies: 0,
  cookieSalesPerHr: [],
  avgCustSale: 2.3,
  storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  listOfTimes: function() {
    var seattleObject = document.getElementById(this.name + 'Cookies');
    var seattleHeader = document.getElementById(this.name + 'Header');
      seattleHeader.textContent = this.name;
    for (var i = 0; i < this.storeHrs.length; i++) {
      var custThisHour = getRandomNum(this.minCust,this.maxCust);
      // rounding cookies per hour total
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

}
paris.listOfTimes();


var lima = {
  name: 'lima',
  minCust:2,
  maxCust: 16,
  totalCookies: 0,
  cookieSalesPerHr: [],
  avgCustSale: 4.7,
  storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  listOfTimes: function() {
    var seattleObject = document.getElementById(this.name + 'Cookies');
    var seattleHeader = document.getElementById(this.name + 'Header');
      seattleHeader.textContent = this.name;
    for (var i = 0; i < this.storeHrs.length; i++) {
      var custThisHour = getRandomNum(this.minCust,this.maxCust);
      // rounding cookies per hour total
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

}
lima.listOfTimes();
