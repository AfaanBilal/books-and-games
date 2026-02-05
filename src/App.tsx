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
        <div class="min-h-screen text-slate-200">
            <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header class="text-center mb-16 animate-fade-in-down">
                    <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 pb-2">
                        Books & Games
                    </h1>
                    <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
                        A curated collection of the stories I've lived through pages and pixels.
                    </p>
                    <div class="mt-8 flex justify-center gap-6">
                        <div class="px-6 py-2 rounded-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm transition-transform hover:scale-105">
                            <span class="text-sky-400 font-bold text-xl mr-2">{collections.map(c => c.books).reduce((a, b) => a + b.length, 0)}</span>
                            <span class="text-slate-300">Books</span>
                        </div>
                        <div class="px-6 py-2 rounded-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm transition-transform hover:scale-105">
                            <span class="text-purple-400 font-bold text-xl mr-2">{games.length}</span>
                            <span class="text-slate-300">Games</span>
                        </div>
                    </div>
                </header>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-16">
                    <section>
                        <h2 class="text-3xl font-bold mb-10 flex items-center gap-3 text-slate-100 border-b border-slate-800 pb-4">
                            <span class="text-2xl">📚</span> Library
                        </h2>
                        <div class="space-y-12">
                            <For each={collections}>{c => <BookCollection {...c} />}</For>
                        </div>
                    </section>

                    <section>
                        <h2 class="text-3xl font-bold mb-10 flex items-center gap-3 text-slate-100 border-b border-slate-800 pb-4">
                            <span class="text-2xl">🎮</span> Games
                        </h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <For each={games}>{g => <GameView game={g} />}</For>
                        </div>
                    </section>
                </div>

                <footer class="mt-24 text-center text-slate-500 py-8 border-t border-slate-800/50">
                    <p>&copy; {new Date().getFullYear()} <a href="https://afaan.dev" target="_blank" rel="noopener" class="text-sky-400 hover:text-sky-300 transition-colors font-medium">Afaan Bilal</a>. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;
