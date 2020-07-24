// // ES5 Constructor function
// function AACohort(name, numStudents) {
//     this.name = name;
//     this.numStudents = numStudents;
// }
// // instance method:
// AACohort.prototype.getJobs = function() {
//     console.log(`Yes, you all did it! ${this.numStudents} got jobs from the ${this.name} cohort!!!`);
// };

// //class method:
// AACohort.gloat = function(otherCohort) {
//     console.log(`We got HIGHER PAYING JOBS than students in ${otherCohort.name} did! yeet!`);
// };


// ES6
// Ruby - initialize, JS - constructor
class AACohort {

    constructor(name, numStudents) {
        this.name = name;
        this.numStudents = numStudents;
    }

    //instance function:
    getJobs() {
        console.log(`Yes, you all did it! ${this.numStudents} got jobs from the ${this.name} cohort!!!`);
    }

    //class function:
    static gloat(otherCohort) {
        console.log(`We got HIGHER PAYING JOBS than students in ${otherCohort.name} did! whoot!`);
    }
} 