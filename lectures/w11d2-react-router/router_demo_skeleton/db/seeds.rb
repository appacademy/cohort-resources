guest = User.create!(
  username: 'Guest',
  password: 'starwars'
)

todo0 = Todo.create!(
  user: guest,
  title: 'Pass all the assessments',
  body: 'I am capable of crushing every assessment if I study enough',
  done: false
)

step01 = Step.create!(
  title: 'A01',
  body: 'study all the ruby things',
  todo_id: todo0.id,
  done: false
)
step02 = Step.create!(
  title: 'A02',
  body: 'play cards, with the power of code',
  todo_id: todo0.id,
  done: false
)
step03 = Step.create!(
  title: 'A03',
  body: 'make associations, SQLZoo',
  todo_id: todo0.id,
  done: false
)
step04 = Step.create!(
  title: 'A04',
  body: 'be my authentic self, but more prepared',
  todo_id: todo0.id,
  done: false
)
step05 = Step.create!(
  title: 'A05',
  body: 'I love javascript',
  todo_id: todo0.id,
  done: false
)
step06 = Step.create!(
  title: 'A06',
  body: 'I study all things for the mystery assessment',
  todo_id: todo0.id,
  done: false
)

todo1 = Todo.create!(
  user: guest,
  title: 'Get a job',
  body: 'I will become employed',
  done: false
)
step11 = Step.create!(
  title: 'Prepare job search materials',
  body: 'I will make beautiful and awe-inspiring portfolio pieces',
  todo_id: todo1.id,
  done: false
)
step12 = Step.create!(
  title: 'Apply to companies',
  body: 'Submit many many applications',
  todo_id: todo1.id,
  done: false
)
step13 = Step.create!(
  title: 'Do interviews',
  body: 'Impress companies with my depth and breadth of knowledge & shining personality',
  todo_id: todo1.id,
  done: false
)
step14 = Step.create!(
  title: 'Negotiate offers',
  body: 'So many companies want me, but who wants me the mostest?',
  todo_id: todo1.id,
  done: false
)
step15 = Step.create!(
  title: 'Begin employment',
  body: 'Impress and astound my new coworkers',
  todo_id: todo1.id,
  done: false
)
step16 = Step.create!(
  title: 'Spread the dev job love',
  body: 'refer all my AA friends to work at my company',
  todo_id: todo1.id,
  done: false
)

todo2 = Todo.create!(
  user: guest,
  title: 'Maintain personal hygiene',
  body: 'I want to be a sparkling human',
  done: false
)

step20 = Step.create!(
  title: 'Brush teeth',
  body: 'standard practice is twice per day',
  todo_id: todo2.id,
  done: false
)
step21 = Step.create!(
  title: 'Shower regularly',
  body: 'I will wash my body',
  todo_id: todo2.id,
  done: false
)
step22 = Step.create!(
  title: 'Laundry',
  body: 'I will sniff test my clothing, and try to wash the failing items',
  todo_id: todo2.id,
  done: false
)

todo3 = Todo.create!(
  user: guest,
  title: 'Exercise',
  body: 'I will exercise more than my typing fingers',
  done: false
)

todo4 = Todo.create!(
  user: guest,
  title: 'Contemplate the meaning of life',
  body: 'between homeworks and readings',
  done: false
)
step40 = Step.create!(
  title: 'Define \'life\'',
  body: 'What is life',
  todo_id: todo4.id,
  done: false
)
step41 = Step.create!(
  title: 'Define \'meaning\'',
  body: 'What is meaning',
  todo_id: todo4.id,
  done: false
)
step42 = Step.create!(
  title: 'Reach an epiphany',
  body: 'Realize the answer to all is \'App Academy\'',
  todo_id: todo4.id,
  done: false
)

todo5 = Todo.create!(
  user: guest,
  title: 'Learn how to make a variety of noodle dishes',
  body: 'noodles make me feel happy and loved',
  done: false
)

step50 = Step.create!(
  title: 'Source noodle ingredients',
  body: 'Find flour, water, salt? Other ingredients probably',
  todo_id: todo5.id,
  done: false
)
step51 = Step.create!(
  title: 'Source sauce ingredients',
  body: 'This will depend on the sauce type',
  todo_id: todo5.id,
  done: false
)
step52 = Step.create!(
  title: 'Obtain a sauce cooking vessel',
  body: 'ask about tiny cast iron sauce pans',
  todo_id: todo5.id,
  done: false
)

step53 = Step.create!(
  title: 'Prepare noodles',
  body: 'Create (or purchase) noodles and cook them',
  todo_id: todo5.id,
  done: false
)
step54 = Step.create!(
  title: 'Prepare sauce',
  body: 'Create appropriate sauce for noodle type and current emotions',
  todo_id: todo5.id,
  done: false
)
step55 = Step.create!(
  title: 'User testing',
  body: 'Consume noodles and sauce',
  todo_id: todo5.id,
  done: false
)
step56 = Step.create!(
  title: 'Iteration',
  body: 'Make more noodles but slightly differently',
  todo_id: todo5.id,
  done: false
)
