"use strict";

let date = document.getElementById('date');
let calculate = document.getElementById('calculate');
let result = document.querySelector('.result');

date.max = new Date().toISOString().split('T')[0];

function calculateAge() {
  let birthDate = new Date(date.value);

  let day1 = birthDate.getDate();
  let month1 = birthDate.getMonth() + 1;
  let year1 = birthDate.getFullYear();

  let today = new Date();

  let day2 = today.getDate();
  let month2 = today.getMonth() + 1;
  let year2 = today.getFullYear();

  let day3, month3, year3;

  year3 = year2 - year1;

  if (month2 >= month1) {
    month3 = month2 - month1;
  } 
else 
{
    year3--;
    month3 = 12 + month2 - month1;
}
if (day2 >= day1) 
{
    day3 = day2 - day1;
} 
else 
{
    month3--;
// console.log("months:" +month3);
    day3 = calculateMonth(year1, month1) + day2 - day1;
}

// console.log("days:" +day3);

if (month3 < 0)
{
    month3 = 11;
    year3--;
}
// console.log("years:" +year3);

  result.innerHTML = `${year3} years, ${month3} months, ${day3} days old`;
}

function calculateMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
