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
        <div class="w-full group">
            <div class="flex items-center gap-4 mb-8 pl-2 border-l-4 border-sky-500/50 transition-colors group-hover:border-sky-500">
                <h3 class="text-2xl font-semibold text-slate-200">{props.name}</h3>
                <span class="px-3 py-1 rounded-full bg-slate-800/50 text-slate-400 text-sm font-medium border border-slate-700/50 backdrop-blur-sm">
                    {props.books.length}
                </span>
            </div>
            <div class="flex flex-wrap gap-8 justify-center sm:justify-start">
                <For each={props.books}>{b => <BookView book={b} />}</For>
            </div>
        </div>
    );
};

export default BookCollection;
