
# Promise.prototype.all (advanced)
```js
    const promise1 = fetch('https://localhost:3000/users/1');
    const promise2 = fetch('https://localhost:3000/users/3');
    const promise3 = fetch('https://localhost:3000/users/23');

    Promise.all([promise1, promise2, promise3])
    .then(responses => {
        const data = responses.map(response => response.json());
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

Note: 
    + Parallel Processing: If you have several independent network requests or asynchronous tasks that can be executed concurrently, you can use Promise.all to start them simultaneously. This can improve efficiency by minimizing the overall execution time.
    +Data Aggregation: When you need to gather data from multiple sources or APIs, such as fetching data from multiple endpoints, you can use Promise.all to handle all the requests in parallel. Once all the promises are resolved, you can aggregate and process the data collectively.
    +Synchronization: In cases where you have a set of asynchronous operations that need to be coordinated and synchronized, Promise.all ensures that you wait until all the promises are settled (either resolved or rejected) before proceeding with subsequent logic.
