const BannedBooksApi = "https://bannedbooks.herokuapp.com"

export const allBooks = () =>
  fetch(`${BannedBooksApi}/book`).then(response => response.json()).then(data => data.books)


