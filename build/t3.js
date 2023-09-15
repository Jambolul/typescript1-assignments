// TODO: Implement the promptForBook function
function promptForBook() {
    // TODO: Prompt user for book details (title, author, publication year)
    const bookTitle = prompt("Enter the title of the book: ");
    const bookAuthor = prompt("Enter the author of the book: ");
    const bookPublicationYear = Number(prompt("Enter the publication year of the book: "));
    // TODO: Create an object of type 'Book' with the entered values
    if (bookTitle != null || bookAuthor != null || bookPublicationYear != null) {
        const book = {
            title: bookTitle ?? "Invalid title",
            author: bookAuthor ?? "Invalid author",
            publicationYear: bookPublicationYear ?? 0,
        };
        return book;
    }
}
;
// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();
// TODO: Display the details of the book object to the user
if (bookDetails != null) {
    console.log("Book Details:");
    console.log(`Title: ${bookDetails.title}`);
    console.log(`Author: ${bookDetails.author}`);
    console.log(`Publication Year: ${bookDetails.publicationYear}`);
}
export {};
