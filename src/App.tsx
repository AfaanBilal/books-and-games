/**
 * Books and Games
 *
 * A collection of books I've read and games I've played.
 *
 * @author Afaan Bilal https://afaan.dev
 * @link   https://afaan.dev/books-and-games
 */

import { Component, For } from "solid-js";
import { collections } from "./books";
import BookCollection from "./components/BookCollection";

const App: Component = () => {
    return (
        <div class="w-full flex items-center font-mono pt-8">
            <div class="w-1/2">
                <div class="pl-8 text-5xl">Books Read</div>
                <div class="pl-8 my-4 text-xl pb-4 border-b border-b-slate-700">A list of books I've read</div>
                <For each={collections}>{c => <BookCollection {...c} />}</For>
            </div>

            <div class="w-1/2">
                <div class="pl-8 text-5xl">Games Played</div>
                <div class="pl-8 my-4 text-xl pb-4 border-b border-b-slate-700">A list of games I've played</div>
                <For each={collections}>{c => <BookCollection {...c} />}</For>
            </div>
        </div>
    );
};

export default App;
