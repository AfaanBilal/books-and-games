/**
 * Books and Games
 *
 * A collection of books I've read and games I've played.
 *
 * @author Afaan Bilal https://afaan.dev
 * @link   https://afaan.dev/books-and-games
 */

export type Book = {
    title: string;
    cover: string;
};

export type BookCollection = {
    id: string;
    name: string;
    books: Book[];
};

export const collections: BookCollection[] = [
    {
        id: "lotr",
        name: "The Lord of the Rings",
        books: [
            {
                title: "The Hobbit",
                cover: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
            },
            {
                title: "The Fellowship of the Ring",
                cover: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif",
            },
            {
                title: "The Two Towers",
                cover: "https://upload.wikimedia.org/wikipedia/en/a/a1/The_Two_Towers_cover.gif",
            },
            {
                title: "The Return of the King",
                cover: "https://upload.wikimedia.org/wikipedia/en/1/11/The_Return_of_the_King_cover.gif",
            },
        ],
    },
    {
        id: "harry-potter",
        name: "Harry Potter",
        books: [
            {
                title: "Harry Potter and the Philosopher's Stone",
                cover: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
            },
            {
                title: "Harry Potter and the Chamber of Secrets",
                cover: "https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg",
            },
            {
                title: "Harry Potter and the Prisoner of Azkaban",
                cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg",
            },
            {
                title: "Harry Potter and the Goblet of Fire",
                cover: "https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png",
            },
            {
                title: "Harry Potter and the Order of the Phoenix",
                cover: "https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg",
            },
            {
                title: "Harry Potter and the Half-Blood Prince",
                cover: "https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png",
            },
            {
                title: "Harry Potter and the Deathly Hallows",
                cover: "https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg",
            },
        ],
    },
    {
        id: "darkest-minds",
        name: "The Darkest Minds",
        books: [
            {
                title: "The Darkest Minds",
                cover: "https://images.squarespace-cdn.com/content/v1/57d478de414fb51a88afb5c3/1473548512438-D2IG4QV2YPPIOR7WG3KV/thedarkestminds_finalcomp-198x300.png?format=300w",
            },
            {
                title: "Never Fade",
                cover: "https://images.squarespace-cdn.com/content/v1/57d478de414fb51a88afb5c3/1473548998144-ZGH09IMT9LW0NWQQNP8B/NeverFade_final-198x300.jpg?format=300w",
            },
            {
                title: "In the After Light",
                cover: "https://images.squarespace-cdn.com/content/v1/57d478de414fb51a88afb5c3/1473549459741-MBJGXKOY283QYYYDXA48/intheafterlight-197x300.jpg?format=300w",
            },
        ],
    },
    {
        id: "hunger-games",
        name: "Hunger Games",
        books: [
            {
                title: "The Hunger Games",
                cover: "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg",
            },
            {
                title: "Catching Fire",
                cover: "https://upload.wikimedia.org/wikipedia/en/a/a2/Catching_Fire_%28Suzanne_Collins_novel_-_cover_art%29.jpg",
            },
            {
                title: "Mockingjay",
                cover: "https://upload.wikimedia.org/wikipedia/en/c/cc/Mockingjay.JPG",
            },
        ],
    },
    {
        id: "jack-ryan",
        name: "Jack Ryan",
        books: [
            {
                title: "Without Remorse",
                cover: "https://upload.wikimedia.org/wikipedia/en/5/50/Without_Remorse_cover.jpg",
            },
            {
                title: "Patriot Games",
                cover: "https://upload.wikimedia.org/wikipedia/en/4/44/PatriotGames.JPG",
            },
            {
                title: "Red Rabbit",
                cover: "https://upload.wikimedia.org/wikipedia/en/f/fb/Red_Rabbit_cover.jpg",
            },
            {
                title: "The Hunt for Red October",
                cover: "https://upload.wikimedia.org/wikipedia/en/c/c2/HuntForRedOctober.JPG",
            },
            {
                title: "The Cardinal of the Kremlin",
                cover: "https://upload.wikimedia.org/wikipedia/en/8/85/CardinalOfTheKremlin.JPG",
            },
            {
                title: "Clear and Present Danger",
                cover: "https://upload.wikimedia.org/wikipedia/en/c/c8/Clear_And_Present_Danger_cover.jpg",
            },
            {
                title: "The Sum of All Fears",
                cover: "https://upload.wikimedia.org/wikipedia/en/f/fa/Tom_Clancy_-_The_Sum_of_All_Fears_cover.jpg",
            },
            {
                title: "Debt of Honor",
                cover: "https://upload.wikimedia.org/wikipedia/en/3/38/DebtOfHonor.jpg",
            },
            {
                title: "Executive Orders",
                cover: "https://upload.wikimedia.org/wikipedia/en/f/f2/Executiveorders.jpg",
            },
            {
                title: "Rainbow Six",
                cover: "https://upload.wikimedia.org/wikipedia/en/8/80/TomClancy_RainbowSix.jpg",
            },
            {
                title: "The Bear and the Dragon",
                cover: "https://upload.wikimedia.org/wikipedia/en/8/80/TomClancy_TheBearAndTheDragon.jpg",
            },
            {
                title: "Threat Vector",
                cover: "https://upload.wikimedia.org/wikipedia/en/9/9c/Threat_vector.jpg",
            },
            {
                title: "Dead or Alive",
                cover: "https://upload.wikimedia.org/wikipedia/en/b/b7/Dead_Or_Alive_cover.jpg",
            },
            {
                title: "Locked On",
                cover: "https://upload.wikimedia.org/wikipedia/en/4/49/LockedOn.jpg",
            },
        ],
    },
    {
        id: "uncollected",
        name: "Uncollected",
        books: [
            {
                title: "The Alchemist",
                cover: "https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg",
            },
            {
                title: "Pride and Prejudice",
                cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/330px-PrideAndPrejudiceTitlePage.jpg",
            },
            {
                title: "Khuda aur Mohabbat",
                cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348574003i/16046385.jpg",
            },
            {
                title: "If I Stay",
                cover: "https://upload.wikimedia.org/wikipedia/en/b/b7/If_i_stay_book_cover.jpg",
            },
            {
                title: "The Perks of being a Wallflower",
                cover: "https://upload.wikimedia.org/wikipedia/en/6/69/Perksofbeingwallflower1.jpg",
            },
            {
                title: "The Old Man and The Sea",
                cover: "https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg",
            },
            {
                title: "To Kill a Mockingbird",
                cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/330px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
            },
            {
                title: "A Time to Kill",
                cover: "https://upload.wikimedia.org/wikipedia/en/d/de/A_Time_To_Kill_%28Grisham_novel%29_cover.jpg",
            },
            {
                title: "Fahrenheit 451",
                cover: "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg",
            },
            {
                title: "Never Let Me Go",
                cover: "https://upload.wikimedia.org/wikipedia/en/6/66/Never_Let_Me_Go_%28First-edition_cover%29.jpg",
            },
            {
                title: "Frankenstein",
                cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Frankenstein_1818_edition_title_page.jpg/330px-Frankenstein_1818_edition_title_page.jpg",
            },
            {
                title: "Ender's Game",
                cover: "https://upload.wikimedia.org/wikipedia/en/e/e4/Ender%27s_game_cover_ISBN_0312932081.jpg",
            },
            {
                title: "How much land does a man need?",
                cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Leo_Tolstoy_by_Nesterov.jpg/300px-Leo_Tolstoy_by_Nesterov.jpg",
            },
            {
                title: "Nightfall",
                cover: "https://upload.wikimedia.org/wikipedia/en/6/65/Nightfall_cover.jpg",
            },
        ],
    },
];
