#!/usr/bin/env node

//command line interface for rock-paper-scissors-lizard-Spock

import minimist from 'minimist';
import { rpsls } from '../lib/rpsls.js';

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    console.log(' Usage: node-rps [SHOT]', '\n', 'Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!', '\n\n', '  -h, --help      display this help message and exit', '\n', '  -r, --rules     display the rules and exit', '\n\n', 'Examples:', '\n', '  node-rps        Return JSON with single player RPS result.', '\n', '                  e.g. {"player":"rock"}', '\n', '  node-rps rock   Return JSON with results for RPS played against a simulated opponent.', '\n', '                  e.g {"player":"rock","opponent":"Spock","result":"lose"}');
} else if (args.r || args.rules) {
    console.log(' Rules for the Lizard-Spock Expansion of Rock Paper Scissors:', '\n\n', '  - Scissors CUTS Paper', '\n', '  - Paper COVERS Rock', '\n', '  - Rock SMOOSHES Lizard', '\n', '  - Lizard POISONS Spock', '\n', '  - Spock SMASHES Scissors', '\n', '  - Scissors DECAPITATES Lizard', '\n', '  - Lizard EATS Paper', '\n', '  - Paper DISPROVES Spock', '\n', '  - Spock VAPORIZES Rock', '\n', '  - Rock CRUSHES Scissors');
} else {
    let output = rpsls(args._[0]);

    if (output instanceof Error) {
        console.log(' Rules for the Lizard-Spock Expansion of Rock Paper Scissors:', '\n\n', '  - Scissors CUTS Paper', '\n', '  - Paper COVERS Rock', '\n', '  - Rock SMOOSHES Lizard', '\n', '  - Lizard POISONS Spock', '\n', '  - Spock SMASHES Scissors', '\n', '  - Scissors DECAPITATES Lizard', '\n', '  - Lizard EATS Paper', '\n', '  - Paper DISPROVES Spock', '\n', '  - Spock VAPORIZES Rock', '\n', '  - Rock CRUSHES Scissors');
    } else {
        console.log(output);
    }
}