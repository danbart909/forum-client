export const findThread = (threads, threadId) =>
  threads.find(threads => threads.id == threadId)