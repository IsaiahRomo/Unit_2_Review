"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Isaiah Romo
   Date:   2/3/20

	
*/
// tracks the set date
var thisDay = new Date("August 30, 2018");
// adds this the Html code making the first part of the table
var tableHTML = "<table id='eventTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML +="<tr>";
tableHTML +="<th>Date</th>";
tableHTML +="<th>Event</th>";
tableHTML +="<th>Price</th>";
tableHTML +="</tr>";
var endDate = new Date(thisDay.getTime() + (14 * 24 * 60 * 60 * 1000));

// goes through the array getting the descriptions, time, date, and prices for events
for(var i = 0; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();

   // add this the Html code only if it set between the week it wants
   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr>";
      tableHTML += "<td>" + eventDay + "@" + eventTime + "</td>";
      tableHTML += "<td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>" + eventPrices[i] + "</td>";
      tableHTML += "</tr>";
   }
}
// close the table and changes the html code of the element id eventList
tableHTML += "</table>"
document.getElementById("eventList").innerHTML = tableHTML;
