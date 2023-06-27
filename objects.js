// everything is JS is somehow an object include objects
// An object is a container of properties with key-value pairs.
// Objects are class-free. Very useful for collecting and organizing data. Objects can contain other objects
// JS includes a prototype linkage feature that allows one object to inherit properties of another. This can reduce object initialization time and memory consumption
const empty_object = {};

const student = {
  firstName: "Wenslaus",
  lastName: "Kachasu",
};

// -- Objects nesting other objects --
const flight = {
  airline: "Virgin Airlines",
  number: 256,
  departures: {
    IATA: "NYC",
    time: "2024-01-24 15:38",
    city: " New York",
  },
  arrival: {
    IATA: "LAX",
    time: "2024-01-25 11:27",
    city: "Los Angels",
  },
};

// -- Retreval --
student["firstName"]; // "Wenslaus"
flight.departures.IATA; // "NYC"
student.middleName; // undefined

const middle = student["middle-name"] || "(none)";
const status = flight.status || "unknown";

// Attempting tp retreieve values from undefined will throw a TypeError exception. This can be guarded against with the && operator
flight.equipment && flight.equipment.model; // undefined

// -- Update --
student.lastName = "Katowa";
student["middle-name"] = "Ngezi";
flight.equipment = {
  model: "Airbus A200",
};
flight.status = "overdue";

// -- Reference --
// Objects are passed around by reference. They are never copied
const x = student;
x.nickname = "Wensy";
const nick = student.nickname; // nick is "Wensy" because x is student. References to the same object

var a = {},
  b = {},
  c = {}; // a, b and c each refre to a different empty object
a = b = c = {}; // a, b and c all refer to the same empty object

// -- Prototype --
// every object is linked to a prototype object from which it can inherit properties
// All objects created from object literals are linked to Object.prototype
if (typeof Object.create !== "function") {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}

var another_student = Object.create(student);
another_student.firstName = "Washington";
another_student["middle-name"] = "junior";
another_student.nickname = "Jasberry";
