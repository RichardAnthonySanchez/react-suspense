export async function getComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await response.json();
  return comments;
}
