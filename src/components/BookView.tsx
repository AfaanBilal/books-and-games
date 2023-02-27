/**
 * Books and Games
 *
 * A collection of books I've read and games I've played.
 *
 * @author Afaan Bilal https://afaan.dev
 * @link   https://afaan.dev/books-and-games
 */

import { Component } from "solid-js";
import { Book } from "../books";

const BookView: Component<{ book: Book }> = (props) => {
    return (
        <div class="min-w-[250px] max-w-[250px] py-6 flex flex-col items-center justify-between gap-4 border rounded-xl border-slate-700 bg-slate-900">
            <div><img class="h-[250px]" src={props.book.cover} alt={props.book.title} /></div>
            <div class="text-lg text-slate-300 text-center font-bold px-4">{props.book.title}</div>
        </div>
    );
};

export default BookView;
