function tellAStory (noun, adjective, verb) {
  debugger;
  console.log(`${noun} is ${adjective} and likes to ${verb}`);
}

function describeSomething (noun, ...adjectives) {
  debugger;
  let description = `${noun} is `;
  adjectives.forEach(adjective => {
    description += `${adjective} and `;
  })
  description += "that's all folks!"
  console.log(description);
}
