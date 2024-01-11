let container = document.querySelectorAll(".container");
let result = document.querySelector("#result");
let averageMarks = document.querySelector("#averageMarks");
let form = document.querySelector(".input-form");
let GPA = 0;
let average = 0;
let total_credit_hours = 0;
let total_weight_average_CGPA = 0;
let subject_weight_average = [];
let subject_credit_hour = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  container.forEach((v, i) => {
    subject_weight_average[i] = v.childNodes[3].value * v.childNodes[5].value;
    subject_credit_hour[i] = v.childNodes[5].value * 1;
    if(v.childNodes[3].value <= 4  && v.childNodes[3].value  > 3.9 ) {
      v.childNodes[7].value = "A";
    }
    else if(v.childNodes[3].value <= 3.9  && v.childNodes[3].value  >= 3 ) {
      v.childNodes[7].value = "B";
    }
    else if(v.childNodes[3].value >= 2.0   && v.childNodes[3].value  <= 2.9 ) {
      v.childNodes[7].value = "C";
    }
    else if (v.childNodes[3].value  <=2.9 && v.childNodes[3].value  > 0 ) {
      v.childNodes[7].value = "F";
    }
    
  });
  total_weight_average_CGPA = subject_weight_average.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  });
  total_credit_hour = subject_credit_hour.reduce((acc, curr) => {
    acc = acc + parseInt(curr);
    return acc;
  });
  GPA = total_weight_average_CGPA / total_credit_hour;
  GPA = GPA.toFixed(2);
  average = (GPA * 100) / 4;
  average = average.toFixed(2);
  if (isNaN(average) || isNaN(GPA)) {
    result.innerHTML = "Please enter valid marks!";
    averageMarks.innerHTML = "";
  }else{
    result.innerHTML = "GPA is = " + GPA;
    averageMarks.innerHTML = "Average is = " + average + "%";
  }
});
