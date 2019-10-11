const person = {
    firstName: 'Sally', 
    lastName: 'Parsons', 
    country: 'United States', 
    city: 'New York',
    links: {
        social: {
            twitter: '@sally', 
            facebook: 'www.facebook.com/sallyparsons'
        }, 
        web: {
            blog: 'www.sallyparsons.com'
        }
    }
};

let {
    social: { 
        twitter: twitterHandle, 
        facebook: facebookLink
    }, 
    web: {
        blog
    }
} = person.links; 
console.log(twitterHandle, facebookLink, blog); 

// grabbing twitter and facebook links 
// let { twitter: twitterHandle, facebook: facebookLink } = person.links.social; 
// console.log(twitterHandle, facebookLink); 




// ES5
// let first = person.firstName; 
// let last = person.lastName; 
// console.log(first, last); 

// ES6
// let { firstName: first, lastName: last } = person; 
// console.log(first, last); 
