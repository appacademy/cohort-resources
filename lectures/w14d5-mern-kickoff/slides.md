# MERN Project

---

## What is MERN?

![photo](https://aa-ch-lecture-assets.s3.us-west-1.amazonaws.com/MERN/MERN-Intro/MERN.png)

---
## Why MERN?

The MERN stack is a popular stack for building web applications. The benefits of using this stack include:

**Full-stack JavaScript**: The MERN stack uses JavaScript for both the front-end and back-end of the application, making it easy for developers to work with a single language throughout the entire development process.

**Popular and well-documented technologies**: Each of the technologies in the MERN stack are widely used and have strong communities and extensive documentation available, making it easier to find solutions to any problems that may arise.

---

**Scalability**: Node.js, the technology used for the back-end of the application in the MERN stack, is designed to handle a large number of concurrent connections, making it well-suited for building scalable applications.

**Flexibility**: The MERN stack allows developers to choose the right tool for the job, as each technology in the stack is a standalone library that can be used separately or in combination with other technologies.

**Popularity**: MERN stack is popular in industry, so it is easy to find experienced developers and resources to help with development and maintenance of the project.

---

## [MongoDB](https://www.mongodb.com/docs/)

MongoDB stores data using a document data structure
+ NoSQL database
+ **Documents** are JSON-like objects with key-value pairs
+ Documents with similar data are stored within **collections**

---

### [Mongoose](https://mongoosejs.com/docs/)

Library that provides a powerful API for interacting with MongoDB databases

+ Schemas
	+ define the fields and data types that the documents in a collection will have
  + used to validate data when it is inserted or updated in the database
  + specify default values, required fields, and other constraints
+ Other
	+ middleware
  + virtual properties
  + custom methods

---

### MongoDB User Document

```
	{
    	_id: "5f9d8a1b2c5c9f8e7a1f5b6c", 
    	name: "Apple iPhone 12",
    	category: "Electronics",
    	price: 799.99,
    	inventory: 150,
    	tags: ["smartphone", "apple", "ios"],
    	ratings: [
        	{
            	user: "jdoe",
            	rating: 4.5,
            	review: "Great phone, love the camera!"
        	},
        	{
            	user: "jsmith",
            	rating: 4,
            	review: "Good phone, but a little expensive."
        	}
    	]
	}
```

---


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

### Embedding

+ provides better read performance
+ ability to retrieve related data with a single database query
+ makes it possible to update related data in single operation

When to use embedding?
+ one-to-one relationships
+ one-to-many relationships

---

### Referencing

+ benefits of embedding are lost when we use referencing

When to use referencing?
+ many-to-many relationships
+ large hierarchical data sets

---

## [Express](https://expressjs.com/en/api.html)

A web application framework for Node that provides us with backend tools to:

 + Specify routes that respond to incoming requests based on the verb and path
 + Combine with view rendering engines to generate responses
 + Set common web application settings
 + Add middleware

---

## [Node.js](https://nodejs.org/en/docs/)

A JavaScript runtime environment

  + JS was originally designed only to be used in browsers
  + Node allows us to utilize JS code outside of the browser to build applications
  + In context of the MERN stack, you will be using Node to configure Express

---

## [Axios](https://axios-http.com/docs/intro)

A promise-based HTTP client that can be used in both the browser and Node

Will be generally used to:
	
  + make AJAX requests from the browser
  + make HTTP requests from Node

---

## Group Project

Comes with several benefits:

+ Split tasks among those with different strengths
+ More creativity and allows you to tackle larger projects
+ Keep each other on track (Notion, etc.)
+ Opportunity to practice git workflow

---

### Roles

It is important to cearly define roles and responsibilities in order to ensure all team members are contributing effectively and that work isn't being duplicated

Examples include:

+ **Team Lead** - Typically the originator of the idea
+ **Backend Lead** - Focused on data management and api end-points
+ **Frontend Lead** - Focused on UI and UX 
+ **Flex** - Fills in gaps as needed, following direction of the Team Lead

---

## Requirements

1. Must utilize the MERN stack
1. Cannot be a clone
1. Must have at least 4 full features in addition to user CRUD/authentication
	- at least 2 features must have full CRUD functionality
1. Should utilize third-party libraries or APIs

---

## Examples

+ https://here-now-825.herokuapp.com/
+ https://dot-catch.onrender.com/
+ https://nyght-40rn.onrender.com/
+ https://choose-your-news.onrender.com/
+ https://gamebuddy-app.herokuapp.com/

---

## Be realistic about how many technologies, APIs, etc!

---

## Keys to Success

+ Creativity
	+ a clear vision is more important than a truly original idea
  + think about what will make your app different
+ Planning
	+ set realistic goals and expectations
  + be as thorough and detailed as possible
  + don't procrastinate!
+ Teamwork
	+ define clear roles
  + schedule a standup meeting twice daily

---

## Logistics and Due Dates

**Initial Proposal**
+ due today (Friday W14D5) by 3:30pm
+ submit via [this](https://forms.gle/nJe38QdRG57Si76B9) Google Form
+ should consist of:
	+ general description and core features
  + team members and roles
  + backup ideas
  
**Final Proposal**
+ due Tuesday W15D2 by 9:00am
+ see expectations [here](https://open.appacademy.io/learn/ch---oct-2022-sf-cohort/mern-stack-curriculum/mern-project-proposal)

---

**MERN Twitter**
+ due Tuesday W15D2 by 9:00am
+ send links to your github and live site to your Circle Leader

**Presentations**
+ will take place Friday W15D5
+ same format as previous presentations
+ note that projects don't need to be "done"

**MERN Project**
+ due Monday W16D1 by 9am
+ fill out one [scorecard](https://docs.google.com/spreadsheets/d/1SMIfI4xVeuXA8OlK68bqlicUcPQFDdPBIbtDcoGtbNE/edit#gid=1764138542) per group and send a link to an instructor

---
