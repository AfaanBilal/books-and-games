/**
 * Books and Games
 *
 * A collection of books I've read and games I've played.
 *
 * @author Afaan Bilal https://afaan.dev
 * @link   https://afaan.dev/books-and-games
 */

import { Component } from "solid-js";
import { Game } from "../games";

const GameView: Component<{ game: Game }> = (props) => {
    return (
        <div class="p-4 lg:p-8 border rounded-xl border-slate-700 bg-slate-800">
            <div class="text-xl text-slate-300 text-center font-bold px-4">{props.game.name}</div>
        </div>
    );
};

export default GameView;
