export {rps, rpsls};

function rps(playerShot) {
    const rpsShots = ['rock', 'paper', 'scissors'];
    const opponentShot = rpsShots[Math.floor(Math.random() * 3)];
    var result = 'tie';

    if (playerShot == null || playerShot == undefined) {
        return {'player' : opponentShot};
    }

    playerShot = playerShot.toLowerCase();
    
    if (!rpsShots.includes(playerShot)) {
        console.error('Please choose rock, paper, or scissors.');
    }

    switch (playerShot) {
        case 'rock':
            if (opponentShot == 'scissors') {
                result = 'win';
            } else if (opponentShot == 'paper') {
                result = 'lose';
            }
        case 'paper':
            if (opponentShot == 'rock') {
                result = 'win';
            } else if (opponentShot == 'scissors') {
                result = 'lose';
            }
        case 'scissors':
            if (opponentShot == 'paper') {
                result = 'win';
            } else if (opponentShot == 'rock') {
                result = 'lose';
            }
    }

    return {'player': playerShot, 'opponent': opponentShot, 'result': result};
}

function rpsls(playerShot) {
    playerShot = playerShot.toLowerCase();
    const rpslsShots = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
    const opponentShot = rpslsShots[Math.floor(Math.random() * 5)];
    var result = 'tie';

    if (!rpslsShots.includes(playerShot)) {
        console.error('Please choose rock, paper, scissors, lizard, or Spock.');
    }

    if (playerShot == null) {
        return {'player' : opponentShot};
    }

    switch (playerShot) {
        case 'rock':
            if (opponentShot == 'lizard') {
                result = 'win';
            } else if (opponentShot == 'scissors') {
                result = 'win';
            } else if (opponentShot == 'paper') {
                result = 'lose';
            } else if (opponentShot == 'spock') {
                result = 'lose';
            }
        case 'paper':
            if (opponentShot == 'rock') {
                result = 'win';
            } else if (opponentShot == 'spock') {
                result = 'win';
            } else if (opponentShot == 'scissors') {
                result = 'lose';
            } else if (opponentShot == 'lizard') {
                result = 'lose';
            }
        case 'scissors':
            if (opponentShot == 'paper') {
                result = 'win';
            } else if (opponentShot == 'lizard') {
                result = 'win';
            } else if (opponentShot == 'spock') {
                result = 'lose';
            } else if (opponentShot == 'rock') {
                result = 'lose';
            }
        case 'lizard':
            if (opponentShot == 'spock') {
                result = 'win';
            } else if (opponentShot == 'paper') {
                result = 'win';
            } else if (opponentShot == 'rock') {
                result = 'lose';
            } else if (opponentShot == 'scissors') {
                result = 'lose';
            }
        case 'spock':
            if (opponentShot == 'scissors') {
                result = 'win';
            } else if (opponentShot == 'rock') {
                result = 'win';
            } else if (opponentShot == 'lizard') {
                result = 'lose';
            } else if (opponentShot == 'paper') {
                result = 'lose';
            }
    }

    if (opponentShot == 'spock') {
        opponentShot = 'Spock';
    }

    return {'player': playerShot, 'opponent': opponentShot, 'result': result};
}