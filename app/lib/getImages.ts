export async function getImages() {
  const response = await fetch("https://picsum.photos/v2/list").then(
    (response) => response.json()
  );
  return response;
}
