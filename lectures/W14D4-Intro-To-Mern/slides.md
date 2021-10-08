
# MERN Project

---

## Why MERN Project?


+ MERN stack is trending up!
+ A creative project in a popular tech stack that gets across personality & strengths, and supports job-seeking goals.

---

## What is MERN?

![photo](https://user-images.githubusercontent.com/51456702/85962116-c10d5a00-b963-11ea-830d-31def48e5e85.png)

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

## NoSQL

### NoSQL databases === non-relational databases
- MongoDB is non-relational
- PostgreSQL is relational
- [NoSQL vs SQL](https://www.mongodb.com/nosql-explained/nosql-vs-sql)

Note: 
- NoSQL Advantage: 
  - Queries in NoSQL databases can be faster than SQL databases. Why? Data in SQL databases is typically normalized, so queries for a single object or entity require you to join data from multiple tables. As your tables grow in size, the joins can become expensive. However, data in NoSQL databases is typically stored in a way that is optimized for queries. The rule of thumb when you use MongoDB is Data is that is accessed together should be stored together. Queries typically do not require joins, so the queries are very fast.
  - Horizontal scaling: need more space, just add more storage (cheep)
  - Flexable Schema: easy to change database
  - Easy for developers: most NoSQL DBs map their data strucutres to populare languages. So, you can store your data in the same way you will use your data on in your application.
- NoSQL Disadvantage: 
  - they don’t support ACID (atomicity, consistency, isolation, durability) transactions across multiple documents. With appropriate schema design, single record atomicity is acceptable for lots of applications. However, there are still many applications that require ACID across multiple records.
  - Since data models in NoSQL databases are typically optimized for queries and not for reducing data duplication, NoSQL databases can be larger than SQL databases. Storage is currently so cheap that most consider this a minor drawback, and some NoSQL databases also support compression to reduce the storage footprint.

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

### You will mainly be utilizing Axios to make your frontend AJAX calls instead of jQuery's `$.ajax` method
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
5. **Flex** - Bounces between the other roles at the instruction of the Team Lead to help fill gaps.

---

## Requirements

1. Must be a creative/original idea
2. Must be written using the MERN stack (NO EXCEPTIONS)
3. Bonus: Use of libraries, React hooks 

---

## What can it look like?

+ http://shake-it-up-aa.herokuapp.com/#/
+ https://highpaw.herokuapp.com/#/ (Mobile Optimized)
+ https://covid415.herokuapp.com/#/
+ https://bl00m.herokuapp.com/#/landing (Mobile Optimized)

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
- Use your questions-queue Slack channel 
  - post your problem, what you've tried, and a code snippet 

---

## MERN Project Logistics

### Pre Proposal due on Friday W14D5
+ General Idea (core functionalities/features)
+ Backup Ideas
+ Team member roles

---

### MERN TWITTER due Monday W15D1
+ Please complete the code along this weekend: readings and videos 
  * It may take longer than you anticipate.
  * Slack the final repo/Heroku link to your circle leader

---

### Final Proposal due on Monday W15D1
+ [what the heck is this](https://open.appacademy.io/learn/swe-in-person/mern-stack-curriculum/mern-project-proposal)

### MERN Projects due Monday W16D1
+ [Scorecard](https://docs.google.com/spreadsheets/d/1V4mqQDSSB33wqS0dYkMvAx4eeOXNCgKvH42CiFuePj8/edit)
  * One scorecard per group
