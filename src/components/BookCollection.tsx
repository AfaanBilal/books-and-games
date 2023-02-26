/**
 * Books Read
 *
 * A collection of books I've read.
 *
 * @author Afaan Bilal https://afaan.dev
 * @link   https://afaan.dev/books-read
 */

import { Component, For } from "solid-js";
import { Book } from "../books";
import BookView from "./BookView";

const BookCollection: Component<{ id: string; name: string; books: Book[] }> = (props) => {
    return (
        <div class="w-full bg-slate-800 p-6">
            <div class="text-2xl mb-6 border-b border-b-slate-600 pl-8 pb-4">{props.name}</div>
            <div class="w-full flex gap-4">
                <For each={props.books}>
                    {b => <BookView book={b} />}
                </For>
            </div>
        </div>
    );
};

export default BookCollection;
