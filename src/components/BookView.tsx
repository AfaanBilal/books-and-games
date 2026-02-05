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
        <div class="group relative w-44 flex flex-col gap-3 transition-transform hover:-translate-y-2 duration-300">
            <div class="relative aspect-[2/3] w-full rounded-xl overflow-hidden shadow-xl shadow-black/40 ring-1 ring-white/10 group-hover:ring-sky-500/50 group-hover:shadow-sky-900/20 transition-all">
                <img
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={props.book.cover}
                    alt={props.book.title}
                    loading="lazy"
                />
            </div>
            <div class="text-center px-1">
                <div class="text-sm font-medium text-slate-400 group-hover:text-sky-400 transition-colors line-clamp-2 leading-tight" title={props.book.title}>
                    {props.book.title}
                </div>
            </div>
        </div>
    );
};

export default BookView;
