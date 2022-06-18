// По возрасту есть ограничения: от 6 лет включительно
// врядли человек может начать курить раньше

var MINIMUM_AGE = 6;
var EIGHTEEN_YEARS = 18;

do {
  var visitorAge = +prompt("Сколько вам лет?");
}
while
  ((isNaN(visitorAge))
  || (Boolean(visitorAge) === false)
  || (visitorAge < MINIMUM_AGE));

let smoking = confirm("Вы курите?");

if ((visitorAge < EIGHTEEN_YEARS) && (!smoking)) {
  alert("Так держать!");
} else if ((visitorAge < EIGHTEEN_YEARS) && (smoking)) {
  alert("Маме расскажу");
} else if ((visitorAge >= EIGHTEEN_YEARS) && (!smoking)) {
  alert("Молодец, и не надо");
} else {
  alert("Ну и зря");
}
