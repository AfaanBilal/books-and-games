/**
 * Books and Games
 *
 * A collection of books I've read and games I've played.
 *
 * @author Afaan Bilal https://afaan.dev
 * @link   https://afaan.dev/books-and-games
 */

import { Component, For } from "solid-js";
import { Book } from "../books";
import BookView from "./BookView";

const BookCollection: Component<{ id: string; name: string; books: Book[] }> = (props) => {
    return (
        <div class="w-full bg-slate-800 px-6 pt-8 pb-16 border-b border-b-slate-600">
            <div class="text-center lg:text-left mb-6 pl-8 pb-4 text-2xl border-b border-b-slate-600">{props.name} <span class="ml-2 py-2 px-3 text-lg rounded-full bg-slate-700">{props.books.length}</span></div>
            <div class="w-full flex gap-4 flex-wrap justify-center lg:justify-start">
                <For each={props.books}>{b => <BookView book={b} />}</For>
            </div>
        </div>
    );
};

export default BookCollection;
