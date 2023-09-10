document.addEventListener('DOMContentLoaded', function() {
const currentDayOfTheWeek = document.querySelector('[data-testid = "currentDayOfTheWeek"]');
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');
const currentUTCTime = document.querySelector('[data-testid = "currentUTCTime"]');
const myTrack = document.querySelector('[data-testid="myTrack"]');
const githubUrl = document.querySelector('[data-testid="githubURL"]')


const date = new Date();
const currentDay = daysOfWeek[date.getDay()]
console.log(currentDay)
const currentTime = date.toUTCString()

currentDayOfTheWeek.textContent = currentDay;
slackUserNameElement.textContent ="Salami Ayokunle";
currentUTCTime.textContent = currentTime;
myTrack.textContent = "Front-end";
githubUrl.textContent = "Github";
githubUrl.href="https://github.com/Emmanuelsalami25"

})
