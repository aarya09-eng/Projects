function calage() {
  let dob = document.getElementById("dob").value;

  if (dob === "") {
    document.getElementById("msg").textContent =
      "Please enter your date of birth";

    return;
  }

  let birthdate = new Date(dob);
  let today = new Date();

  let year = today.getFullYear() - birthdate.getFullYear();
  let month = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  if (days < 0) {
    month--;

    let previousmonth = new Date(today.getFullYear(), today.getMonth(), 0);

    days += previousmonth.getDate();
  }

  if (month < 0) {
    year--;
    month += 12;
  }

  if (birthdate > today) {
    document.getElementById("msg").textContent =
      "Please enter a valid date of birth";

    return;
  }

  document.getElementById("msg").textContent =
    "Your age is " + year + " Years, " + month + " Months, " + days + " Days.";
}
