const people = [
  {
    name: "Alice",
    address: { city: "New York", street: { name: "Broadway", number: 123 } },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 },
    },
  },
];

const [firstperson, secondperson]=people;

const {name,address:{city,street:{name:StreeName, number:streetnumber}}}=firstperson;



const {name:bobName, address:{city:LCity,street:{name:sName,number}}}=secondperson
console.log(`[ "${name} lives in ${city} on ${StreeName}" , "${bobName} lives in ${LCity} on ${sName}"]`)