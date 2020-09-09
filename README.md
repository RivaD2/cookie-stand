# cookie-stand

**Overview: Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location.**

1. Build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application.

2. Pat needs you to take a leading role in doing the design work and construction of a public-facing page, too. They already have a logo image picked out (below), but Pat is requesting your assistance in the design of the documents, color scheme, fonts, and any additio

**Feature Tasks Day 1:**
1. Store the min/max hourly customers, and the average cookies per customer, in object properties
2. Use a method of that object to generate a random number of customers per hour. 
3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
4. Store the results for each location in a separate array… perhaps as a property of the object representing that location
5. Display the values of each array as unordered lists in the browser. Display the lists on `sales.html.`

**Feature Tasks Day 2:**
* Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.
* Replace the lists of your data for each store and build a single table of data instead.
* Display each stores data in a table format similar to what is provided. 
* Break each column by the hour and complete each row with a “Daily Location Total”.
* Each cookie stand location should have a separate `render()` method that creates and appends its row to the table
* The header row and footer row are each created in their own stand-alone function

**Feature Tasks Day 3:**
* Your public-facing index.html page should include the following:
 * locations with addresses,
 * hours open
 * contact information
 * A link to your `sales.html` page
 * Include a link to your `index.html` page on your `sales.html` pages as well.
 * Use all images provided in `class-08/lab-b/assets/` 

**Feature Tasks Day 4:**
* Create a new HTML form to accept the information for a new cookie stand. Be sure to utulize the `<fieldset>` tag.
* Upon sumbission of the HTML form, create an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.
* Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!).
* When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.
* Validate your html through HTML5 validation.


