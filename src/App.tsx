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
import GameView from "./components/GameView";
import { games } from "./games";

const App: Component = () => {
    return (
        <div class="text-white font-mono py-8">
            <div class="w-full flex">
                <div class="w-1/2">
                    <div class="text-center text-5xl">Books Read</div>
                    <div class="text-center my-4 text-xl pb-4 border-b border-b-slate-700">
                        A list of books I've read
                        <span class="ml-2 p-2 text-lg rounded-full bg-slate-700">{collections.map(c => c.books).reduce((a, b) => a + b.length, 0)}</span>
                    </div>
                    <For each={collections}>{c => <BookCollection {...c} />}</For>
                </div>
                <div class="w-1/2">
                    <div class="text-center text-5xl">Games Played</div>
                    <div class="text-center my-4 text-xl pb-4 border-b border-b-slate-700">
                        A list of games I've played
                        <span class="ml-2 p-2 text-lg rounded-full bg-slate-700">{games.length}</span>
                    </div>
                    <div class="w-full px-8 grid grid-cols-2 gap-x-16 gap-y-4">
                        <For each={games}>{g => <GameView game={g} />}</For>
                    </div>
                </div>
            </div>
            <div class="text-center p-8">&copy; <a href="https://afaan.dev" target="_blank" rel="noopener" class="text-cyan-600">Afaan Bilal</a></div>
        </div>
    );
};

export default App;
