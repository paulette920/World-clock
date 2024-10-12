function UpdateTime() {
  let kigaliId = document.querySelector("#kigali");
  if (kigaliId) {
    let timeKigaliId = kigaliId.querySelector("#time-kigali");
    let dateKigaliId = kigaliId.querySelector("#date-kigali");
    dateKigaliId.innerHTML = moment().format("MMMM Do YYYY");
    timeKigaliId.innerHTML = moment()
      .tz("Africa/Kigali")
      .format("hh:mm:ss [<small>]A[</small>]");
  }

  let LosangelesId = document.querySelector("#los-angeles");
  if (LosangelesId) {
    let timeLosangelesId = LosangelesId.querySelector("#time-la");
    let dateLosangelesId = LosangelesId.querySelector("#date-la");
    dateLosangelesId.innerHTML = moment().format("MMMM Do YYYY");
    timeLosangelesId.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
}
function Updatecity(event) {
  //here it is bcz the timezones are already set in the value attribute in the html
  let cityTimezones = event.target.value;
  if (cityTimezones === "current-location") {
    cityTimezones = moment.tz.guess();
  }
  let cityName = cityTimezones.replace("_", " ").split("/")[1];
  let citytime = moment().tz(cityTimezones);
  let citiesId = document.querySelector("#cities");
  citiesId.innerHTML = `
  <div class="city" id="kigali">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${citytime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${citytime.format(
            "hh:mm:ss"
          )} <small>${citytime.format("A")} </small></div>
        </div>`;
}
UpdateTime();
setInterval(UpdateTime, 1000);

let selectCity = document.querySelector("#city");
selectCity.addEventListener("change", Updatecity);
