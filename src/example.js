const originalArray = [
  { id: 1, name: "John", age: 30, city: "New York" },
  { id: 2, name: "Jane", age: 25, city: "London" },
  { id: 3, name: "Bob", age: 35, city: "Paris" },
];

function selectFields(jsonArray, fields) {
  return jsonArray.map((obj) => {
    const newObj = {};

    fields.forEach((field) => {
      if (obj.hasOwnProperty(field)) {
        newObj[field] = obj[field];
      }
    });

    return newObj;
  });
}

const selectedFields = ["name", "city"];
const result = selectFields(originalArray, selectedFields);
console.log(result)
// [{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Bob", age: 35 }];