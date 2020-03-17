const tempStore = {
  threads: [
    {
      id: '1',
      author: "Bob",
      name: 'First Thread',
      OP: 'some content for the first post of the thread'
    },
    {
      id: '2',
      author: 'JRR Tolkien',
      name: 'Second Thread',
      OP: 'some text for the first post'
    },
    {
      id: '3',
      author: 'some author',
      name: 'How to use a blender',
      OP: 'Put stuff in it and turn it on!'
    }
  ],
  replies: [
    {
      threadId: '1',
      id: '1',
      author: 'Suicide Billy',
      content: 'lets augur this plane right into the mountain',
    },
    {
      threadId: '1',
      id: '2',
      author: 'Phil',
      content: 'today is laundry day',
    },
    {
      threadId: '1',
      id: '3',
      author: 'Batman',
      content: 'I left my burrito in the microwave for too long',
    },
    {
      threadId: '2',
      id: '4',
      author: 'Bozo the Clown',
      content: 'I wax my nose!',
    },
    {
      threadId: '2',
      id: '5',
      author: 'Zoomy',
      content: 'I ran into a wall and died',
    },
    {
      threadId: '3',
      id: '6',
      author: 'Yesterday',
      content: 'was better, in retrospect',
    },
    {
      threadId: '3',
      id: '7',
      author: 'Breakfast',
      content: 'Im great with pancakes!',
    },
  ]
}

export default tempStore;