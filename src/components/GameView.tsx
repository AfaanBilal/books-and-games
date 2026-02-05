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
        <div class="group h-full flex items-center gap-5 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
            <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-slate-700/50 flex items-center justify-center group-hover:bg-gradient-to-br from-purple-600 to-blue-600 transition-all duration-300 shadow-inner">
                <span class="text-2xl opacity-70 group-hover:opacity-100 text-purple-400 group-hover:text-white transition-colors">🎮</span>
            </div>
            <div class="font-semibold text-slate-200 group-hover:text-white transition-colors leading-tight">
                {props.game.name}
            </div>
        </div>
    );
};

export default GameView;
