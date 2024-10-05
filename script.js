function UpdateTime() {
  let kigaliId = document.querySelector("#kigali");
  let timeKigaliId = kigaliId.querySelector("#time-kigali");
  let dateKigaliId = kigaliId.querySelector("#date-kigali");
  dateKigaliId.innerHTML = moment().format("MMMM Do YYYY");
  timeKigaliId.innerHTML = moment()
    .tz("Africa/Kigali")
    .format("hh:mm:ss [<small>]A[</small>]");

  let LosangelesId = document.querySelector("#los-angeles");
  let timeLosangelesId = LosangelesId.querySelector("#time-la");
  let dateLosangelesId = LosangelesId.querySelector("#date-la");
  dateLosangelesId.innerHTML = moment().format("MMMM Do YYYY");
  timeLosangelesId.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("hh:mm:ss [<small>]A[</small>]");
}
UpdateTime();
setInterval(UpdateTime, 1000);
