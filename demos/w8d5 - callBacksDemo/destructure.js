// Example 1

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

// var firstName = person.firstName;
// var lastName = person.lastName;
// var sweaterNumber = person.sweaterNumber;


//ES6

// let {firstName, lastName, sweaterNumber} = person;

// let {firstName:fname, lastName:lname, sweaterNumber:number} = person;

// console.log(lname, fname, number);







// Example 2

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



// ES5

// var twitter = person.links.social.twitter;
// var facebook = person.links.social.facebook;


// ES6

// let {twitter, facebook} = person.links.social; 
let {links: {social: {twitter:t, facebook:f}}} = person; 


console.log(t, f);




// Bonus Example

// let { 
//   social: { 
//         twitter: twitterHandle, 
//         facebook: facebookLink 
//       }, 
//       web: { 
//         blog 
//       } 
// } = person.links;

// console.log(twitterHandle, facebookLink, blog);