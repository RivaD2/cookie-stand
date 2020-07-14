'use strict'

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;

}

// Create object with properties
var seattle = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  totalCookies: 0,
  cookieSalesPerHr: [],
  avgCustSale: 6.3,
  storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  listOfTimes: function() {
    for (var i = 0; i < this.storeHrs.length; i++) {
      var custThisHour = getRandomNum(23,65);
      // rounding cookies per hour total
      var cookiesPerHr = Math.round(this.avgCustSale * custThisHour;
      this.cookieSalesPerHr.push(cookiesPerHr);
      // add new number to the total
      this.totalCookies = this.totalCookies + cookiesPerHr; //create array for cookie sales each hr
      var seattleObject = document.getElementById('seattlecookies');
      var timesList = document.createElement('li');
      timesList.textContent = this.storeHrs[i] + cookiesPerHr + 'cookies';
      seattleObject.appendChild(timesList);
      
    }
    

  }

}
seattle.listOfTimes();
//we are var to hold total of numbers 


// var Tokyo {
//   minCust: 23,
//   maxCust: 65,
//   totalCookies: 0,
//   avgCustSale: 6.3,
//   storeHrs: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   listOfTimes: function() {
//     for (var i = 0; i < this.storeHrs.length; i++) {
//       var generatedNum = getRandomNum(23,65);
//       // add new number to the total
//       this.totalCookies = this.totalCookies + generatedNum;
//       var seattleObject = document.getElementById('seattle');
//       var timesList = document.createElement('li');
//       timesList.textContent = this.storeHrs[i] + generatedNum + 'cookies';
//       seattleObject.appendChild(timesList);
      
//     }


//   }
// }
// seattle.listOfTimes();
// //we are var to hold total of numbers