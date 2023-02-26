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
        <div class="w-full bg-slate-800 p-6">
            <div class="mb-6 pl-8 pb-4 text-2xl border-b border-b-slate-600">{props.name}</div>
            <div class="w-full flex gap-4 flex-wrap">
                <For each={props.books}>{b => <BookView book={b} />}</For>
            </div>
        </div>
    );
};

export default BookCollection;
