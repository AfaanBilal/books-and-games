/**
 * Books Read
 *
 * A collection of books I've read.
 *
 * @author Afaan Bilal https://afaan.dev
 * @link   https://afaan.dev/books-read
 */

import { Component, For } from "solid-js";
import { books, collections } from "./books";
import BookCollection from "./components/BookCollection";

const App: Component = () => {
    return (
        <div class="w-full flex flex-col gap-4 items-center font-mono">
            <div class="mt-8 text-5xl">Books Read</div>
            <div class="my-4 text-xl px-4 pb-4 border-b border-b-slate-700">A list of books I've read.</div>
            <For each={collections}>
                {c => <BookCollection id={c.id} name={c.name} books={books.filter(o => o.collectionId === c.id)} />}
            </For>
        </div>
    );
};

export default App;
