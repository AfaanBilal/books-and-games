/**
 * Books Read
 *
 * A collection of books I've read.
 *
 * @author Afaan Bilal https://afaan.dev
 * @link   https://afaan.dev/books-read
 */

export type BookCollection = {
    id: string;
    name: string;
};

export type Book = {
    id: string;
    title: string;
    cover: string;
    collectionId: string;
};

export const collections: BookCollection[] = [
    {
        id: "harry-potter",
        name: "Harry Potter",
    },
    {
        id: "hunger-games",
        name: "Hunger Games",
    },
];

export const books: Book[] = [
    {
        id: "harry-potter-1",
        title: "Harry Potter and the Philosopher's Stone",
        cover: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
        collectionId: collections[0].id,
    },
    {
        id: "harry-potter-2",
        title: "Harry Potter and the Chamber of Secrets",
        cover: "https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg",
        collectionId: collections[0].id,
    },
    {
        id: "harry-potter-3",
        title: "Harry Potter and the Prisoner of Azkaban",
        cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
        collectionId: collections[0].id,
    },

    {
        id: "hunger-games-1",
        title: "The Hunger Games",
        cover: "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg",
        collectionId: collections[1].id,
    },
    {
        id: "hunger-games-2",
        title: "Catching Fire",
        cover: "https://upload.wikimedia.org/wikipedia/en/a/a2/Catching_Fire_%28Suzanne_Collins_novel_-_cover_art%29.jpg",
        collectionId: collections[1].id,
    },
    {
        id: "hunger-games-3",
        title: "Mockingjay",
        cover: "https://upload.wikimedia.org/wikipedia/en/c/cc/Mockingjay.JPG",
        collectionId: collections[1].id,
    },
];
