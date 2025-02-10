//your JS code here. If required.
const student = {
  name:"John",
};

function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys(student));


const testObj1 = {
  name: "Jane",
  age: 25,
  city: "New York",
};
console.log(getKeys(testObj1));

const testObj2 = {
  title: "Developer",
};
console.log(getKeys(testObj2));