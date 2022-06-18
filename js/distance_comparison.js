var START_VALUE = 0;
var ONE_KILOMETER_IN_METERS = 1000;
var ONE_FEET_IN_METERS = 0.305;

// Получаем значение в километрах

do {
  var argKilometers = +prompt("Введите значение в километрах:");
}
while
  (isNaN(argKilometers)
  || (Boolean(argKilometers) === false)
  || (argKilometers < START_VALUE));

// Получаем значение в футах

do {
  var argFeet = +prompt("Введите значение в футах:");
}
while
  (isNaN(argFeet)
  || (Boolean(argFeet) === false)
  || (argFeet < START_VALUE));

let kilometersInMeters = argKilometers * ONE_KILOMETER_IN_METERS;
let feetInMeters = argFeet * ONE_FEET_IN_METERS;

if (argKilometers < feetInMeters) {
  alert(feetInMeters + " футов " + "больше." + "\n" + kilometersInMeters + " километров " + "меньше.");
} else if (kilometersInMeters > feetInMeters) {
  alert(kilometersInMeters + " километров " + "больше." + "\n" + feetInMeters + " футов " + "меньше.");
} else {
  alert("Значения равны!" + "\n" + kilometersInMeters + " = " + feetInMeters);
}

