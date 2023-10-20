# MERN Project

---

## Why MERN Project?


+ MERN stack is trending up!
+ A creative project in a popular tech stack that gets across personality & strengths, and supports job-seeking goals.

---

## What is MERN?

![photo](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/MERN/MERN-Intro/MERN.png)

---

### **M**ongoDB
+ NoSQL database
### **E**xpress
+ web application framework for Node
### **R**eact
+ frontend Javascript library
### **N**ode
+ a JavaScript runtime environment


---

## MongoDB

MongoDB stores data using a document data structure
+ **Documents** are JSON-like objects with key-value pairs
+ Documents with similar data are stored within collections
+ To compare it to a relational database, a document is similar to a row while a collection is similar to a table. 

---

## NoSQL

### NoSQL databases === non-relational databases
- MongoDB is non-relational
- PostgreSQL is relational

---

## MongoDB User Document

```
    {
        _id: ObjectId("5d8d5b50a5b9d4a3c402f571"),
        username: "i_love_walking",
        email: "walker@walkingisgreat.com",
        password_digest: "Ke&63h1z$mK9jd37n",
        age: 28,
        address: {
            city: "Generic City Name",
            street: "Somewhere Lane",
            zipcode: 1
        },
        posts: [
            ObjectId("4a1h3m42a5b9d4i9dc405l721"),
            ObjectId("b9x2m45a5b7h7e3ml403a091"),
            ObjectId("1k3b5f87x5s6c7i2mp814g524")
        ]
    }
```

---

## Embedding

### Storing sub-documents within a document
- provides better read performance
- ability to retrieve related data with a single database query
- makes it possible to update related data in single operation

### When to use embedded data model?
- one-to-one relationships
- one-to-many relationships

---

## Referencing

### Storing array of related object ids
- benefits of embedding are lost when we use referencing

### When to use referencing data model?
- Many-to-Many relationships
- Modeling large hierarchical data sets


---

## What is Express?

### A web application framework for Node that provides us with tools to:

 1. Write handlers to respond to different HTTP verb requests at different URL paths
 2. Combine with view rendering engines to generate responses by passing data to templates
 3. Set common web application settings like which port to use
 4. Add middleware at any point within the request handling pipeline

---

## What is Node.js?

### A JavaScript runtime environment or an environment where you can run application code
  + JS was originally designed only to be used in browsers
  + Node allows us to utilize JS code outside of the browser to build applications
  + In context of the MERN stack, you will be using Node to configure your app's server

### Benefit of Node
  + enables us to take advantage of JavaScript's asynchronicity

---

## Axios

### Axios is a promise based HTTP client that can be used in both the browser and a Node environment
  + can use Axios library to make XMLHttpRequests from the browser or HTTP requests from your Node Environment

### You will mainly be utilizing Axios to make your frontend AJAX calls instead of fetch.
  + reference Axios Documentation during the project

---

## Working in groups

### Benefits of pair or group work

+ Split tasks among those with different strengths
+ More creativity and allows you to tackle larger projects
+ Keep each other on track (Notion, etc.)
+ Practice cooperative git workflow

---

## Roles

### Clearly defined roles and responsibilities to ensure everyone is contributing effectively and work is not being duplicated

---

## Example of Team Roles

1. **Team Lead** - Typically the originator of the idea. 
2. **Backend Lead** - Focused on data management and the api end-points of the app.
3. **Frontend Lead** - Focused on the UI and UX of the app.
4. **Frontend/Backend Asst.** - Based on the needs of the app, splits work with the corresponding lead.

---

## Requirements

1. Must be a creative/original idea
2. Must be written using the MERN stack (NO EXCEPTIONS)
4. Must have User Auth + 4 features 
  - at least one feature must have full CRUD functionality
3. Bonus: Use of libraries and APIs

---

## What can it look like?

+ https://boozy1.herokuapp.com/#/
+ https://parrot.herokuapp.com/
+ https://grubglobe.herokuapp.com/
+ https://smooth.onrender.com/

---

## Be realistic about how many technologies, APIs, etc!

---

## Keys to success

+ Start early/Intensive Planning
+ Great Teamwork
+ Creativity

---

## Project Supervisors

### Even more hands-off!
- @2023-07-17-sf Slack channel 
  - post your problem, what you've tried, and a code snippet 

---

## MERN Project Logistics and Due Dates


### Pre Proposal due on Friday W14D5 by 2:30pm
+ General Idea (core functionalities/features)
+ Backup Ideas
+ Team member roles

### MERN TWITTER due Monday W15D1
+ Please complete the code along this weekend: readings and videos 
  * Slack the final repo/Heroku link to your circle leader
  * Failure to submit your MERN Twitter project will result in a job search strike

---

## More Logistics and Due Dates

### Final Proposal due on Monday W15D1


### MERN Presentations on Friday W15D5
+ Same format as previous presentations

### MERN Projects due Monday W16D1
