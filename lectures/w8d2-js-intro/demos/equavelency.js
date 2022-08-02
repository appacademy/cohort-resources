// 0 == 0 // true

// [] == [] // false

// 0 == [] // true

// 0 == '0' // true

// [] == '0' // false

// [] === 0 // false

// '0' === [] // false

// All other values are truthy, including "0" (zero in quotes), "false" (false in quotes), empty functions, empty arrays ([]), and empty objects ({}).

// Objects are all truthy.
// You should only use the == forms when you know the value is a boolean (and even then many programmers consider it poor style)
//can test truthiness with !!