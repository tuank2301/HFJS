var view = {
  displayMessage: function (msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  },
};

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipSunk: 0,
  ships: [
    { locations: ["0", "0", "0"], hits: ["", "", ""] },
    { locations: ["0", "0", "0"], hits: ["", "", ""] },
    { locations: ["0", "0", "0"], hits: ["", "", ""] },
  ],
  fire: function (guess) {
    for (let i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!");
        if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You missed!");
    return false;
  },
  isSunk: function (ship) {
    for (let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },
  generateShipLocations: function () {
    var locations;
    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },
  generateShip: function () {
    var direction = Math.floor(Math.random() * 2);
    var row, col;
    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    } else {
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }
    var newShipLocations = [];
    for (let i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + "" + (col + i));
      } else {
        newShipLocations.push(row + 1 + "" + col);
      }
    }
    return newShipLocations;
  },
  collision: function (locations) {
    for (let i = 0; i < this.numShips; i++) {
      var ship = model.ships[i];
      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) <= 0) {
          return true;
        }
      }
    }
    return false;
  },
};

function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  if (guess === null || guess.length !== 2) {
    alert("Oops, please enter a letter and a number on the board.");
  } else {
    var firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var col = guess.charAt(1);
    if (isNaN(row) || isNaN(col)) {
      alert("Oops, that isn't on the board.");
    } else if (
      row < 0 ||
      row >= model.boardSize ||
      col < 0 ||
      col >= model.boardSize
    ) {
      alert("Oops, that's off the board!");
    } else {
      return row + col;
    }
  }
  return null;
}

var controller = {
  guesses: 0,
  processGuess: function (guess) {
    var location = parseGuess(guess);
    if (location) {
      this.guesses++;
      var hit = model.fire(location);
      if (hit && model.shipSunk === model.numShips) {
        view.displayMessage(
          `You sank all my battleships, in ${this.guesses} guesses`
        );
      }
    }
  },
};

function init() {
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;
  model.generateShipLocations();
}

function handleFireButton() {
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = "";
}

function handleKeyPress(e) {
  var fireButton = document.getElementById("fireButton");
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

window.onload = init;

const BattleshipGame = () => {
  return (
    <div className='backgroundship'>
      <div className='battleship-board'>
        <div id='messageArea'>Let start the game!</div>
        <table className='ship'>
          <tr>
            <td id='00'></td>
            <td id='01'></td>
            <td id='02'></td>
            <td id='03'></td>
            <td id='04'></td>
            <td id='05'></td>
            <td id='06'></td>
          </tr>
          <tr>
            <td id='10'></td>
            <td id='11'></td>
            <td id='12'></td>
            <td id='13'></td>
            <td id='14'></td>
            <td id='15'></td>
            <td id='16'></td>
          </tr>
          <tr>
            <td id='20'></td>
            <td id='21'></td>
            <td id='22'></td>
            <td id='23'></td>
            <td id='24'></td>
            <td id='25'></td>
            <td id='26'></td>
          </tr>
          <tr>
            <td id='30'></td>
            <td id='31'></td>
            <td id='32'></td>
            <td id='33'></td>
            <td id='34'></td>
            <td id='35'></td>
            <td id='36'></td>
          </tr>
          <tr>
            <td id='40'></td>
            <td id='41'></td>
            <td id='42'></td>
            <td id='43'></td>
            <td id='44'></td>
            <td id='45'></td>
            <td id='46'></td>
          </tr>
          <tr>
            <td id='50'></td>
            <td id='51'></td>
            <td id='52'></td>
            <td id='53'></td>
            <td id='54'></td>
            <td id='55'></td>
            <td id='56'></td>
          </tr>
          <tr>
            <td id='60'></td>
            <td id='61'></td>
            <td id='62'></td>
            <td id='63'></td>
            <td id='64'></td>
            <td id='65'></td>
            <td id='66'></td>
          </tr>
        </table>
        <form className='ship'>
          <input type='text' id='guessInput' placeholder='A0' />
          <input type='button' id='fireButton' value='Fire!' />
        </form>
      </div>
    </div>
  );
};

export default BattleshipGame;
