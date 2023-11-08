
console.log('Webpack is working!');

// fetch('https://jsonplaceholder.typicode.com/todos/a') // A
//   .then(res => {
//     // console.log(res)
//     if (res.ok) {
//       return res.json(); // B
//     } else {
//       throw new Error('something went wrong');
//     }
//   }, err => console.log('Line 12: ', err))
//   .then(data => {
//     console.log(data) // C
//   })
//   .catch(err => console.log('Line 16: ', err))

async function fetchDummyData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      throw new Error('something went wrong');
    }
  } catch(err) {
    console.log(err);
  }
}

fetchDummyData();