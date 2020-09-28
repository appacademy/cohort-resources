console.log('Commence Operation Destructure')

// const person = {
//   firstName: "Mats",
//   lastName: "Sundin",
//   country: 'Sweden',
//   city: 'Stockholm',
//   twitter: '@matssundin',
//   team: 'Maple Leafs',
//   sweaterNumber: 13
// };

// ES5

// var first = person.firstName;
// var last = person.lastName;
// var number = person.sweaterNumber;

// console.log(first, last, number);

// ES6

// let {firstName: first, lastName: last, sweaterNumber: number} = person;
// console.log(first, last, number);
// console.log(person);


const person = {
  firstName: 'Mats',
  lastName: 'Sundin',
  country: 'Sweden',
  links: {
    social: {
      twitter: '@matssundin',
      facebook: 'www.facebook.com/matssundin',
    },
    web: {
      blog: 'www.matssundin.com'
    }
  }
};

//ES5
// var twitter = person.links.social.twitter;
// var blog = person.links.web.blog;

//ES6

let {twitter: twitterHandle, facebook: facebookLink} = person.links.social;
console.log(twitterHandle, facebookLink);

let {links: {social: {twitter: tH, facebook: fL}}} = person;
console.log(tH, fL);