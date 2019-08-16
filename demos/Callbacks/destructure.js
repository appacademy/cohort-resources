const person =  {
    firstname: "Sally",
    lastname: "Parsons",
    country: "USA",
    city: "NYC",
    links: {
        social: {
            twitter: "@sally",
            facebook: "www.facebook.com/sally"
        },
        web: {
            blog: "www.sallyparsons.com"
        }
    }
}; 
let { 
    social: { 
        twitter: twitterHandle, facebook: fbLink 
        }, 
    web: { 
        blog 
        } 
    } = person.links;

console.log(twitterHandle + " " + fbLink + " " + blog);

// NOOO VARRRRRR
// No code golf :-(


// ES 5
// let first = person.firstname;
// let last = person.lastname;
// console.log(first + " " + last);

// ES 6
// let { firstname, lastname } = person;
// console.log(firstname + " " + lastname);
