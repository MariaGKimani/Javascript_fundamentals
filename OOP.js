// You are tasked with developing an inventory management system for an online bookstore. 
// The system should allow users to perform various operations related to book inventory management.
// Requirements:
// The system should have a database to store book information.

//  Each book should have attributes such as title, author, publication date, price, quantity in stock, etc.
class Book{
    constructor(title,author,publicationdate,price,Quantity){
        this.title = title
        this.author = author;
        this.publicationdate =publicationdate
        this.price = price
        this.Quantity = Quantity
    }
}
// Users should be able to add new books to the inventory by providing the necessary details.
class InventoryManagementSystem{
    constructor(){
        this.inventory =[]
    }
    add_newBook(book){
        this.inventory.push(book)
    }
    // Users should be able to search for books based on title, author, or publication date.
    searchBook(searchItem){
        const result = []
        for(const book of this.inventory){
            if(book.title.includes(searchItem)||book.author.includes(searchItem)||book.publicationdate.includes(searchItem)){
                result.push(book)
            }
        }
        return result
    }
    // Users should be able to update the information of existing books, such as changing the price or quantity in stock.
    updateBook(book,newprice,newQuantity){
        book.price = newprice
        book.Quantity = newQuantity
    }
    // Users should be able to remove books from the inventory.
    removeBooks(){
        const index = this.inventory.indexOf(Book)
        if(index !== -1){
            this.inventory.splice(index,1)
        }
    }
    // Users should be able to view the details of all books in the inventory.
    viewInventory(){
        for(let book of this.inventory){
            console.log('Title: ${book.title},Author: ${book.author},publicationorder: ${book.publicationorder}');
        }
    }

}
const book1 = new Book("Born a crime","Trevor Noah","2022-5-30",400.0,20)
const book2 = new Book("Trust","Hernan Diaz","2010-2-10",500,30)
const inventorySystem = new InventoryManagementSystem()
console.log(inventorySystem.add_newBook(book1));
console.log(inventorySystem.add_newBook(book1));

// The system should have proper error handling and validation to ensure data integrity.
// Implement appropriate data structures and algorithms for efficient book searching and management operations.
// Provide aHernan Diaz. user-friendly command-line or GUI interface for users to interact with the system.