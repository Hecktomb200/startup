const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';


	const getPlayerName = () => {
		return localStorage.getItem('userName') ?? 'Mystery player';
	  };

	  function configureWebSocket() {
		const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
		this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
		this.socket.onopen = (event) => {
		  this.displayMsg('system', 'game', 'connected');
		};
		this.socket.onclose = (event) => {
		  this.displayMsg('system', 'game', 'disconnected');
		};
		this.socket.onmessage = async (event) => {
		  const msg = JSON.parse(await event.data.text());
		  if (msg.type === GameEndEvent) {
			this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
		  } else if (msg.type === GameStartEvent) {
			this.displayMsg('player', msg.from, `started a new game`);
		  }
		};
	  }
	
	  function displayMsg(cls, from, msg) {
		const chatText = document.querySelector('#player-messages');
		chatText.innerHTML =
		  `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
	  }
	
	  function broadcastEvent(from, type, value) {
		const event = {
		  from: from,
		  type: type,
		  value: value,
		};
		this.socket.send(JSON.stringify(event));
	  }

function startGame() {
	this.broadcastEvent(this.getPlayerName(), GameStartEvent, {});
};

const board = [
	null,
	0,
	null,
	1,
	null,
	2,
	null,
	3,
	4,
	null,
	5,
	null,
	6,
	null,
	7,
	null,
	null,
	8,
	null,
	9,
	null,
	10,
	null,
	11,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	12,
	null,
	13,
	null,
	14,
	null,
	15,
	null,
	null,
	16,
	null,
	17,
	null,
	18,
	null,
	19,
	20,
	null,
	21,
	null,
	22,
	null,
	23,
	null
];

let findPiece = (pieceId) => {
	let parsed = parseInt(pieceId);
	return board.indexOf(parsed);
};

const cells = document.querySelectorAll(".boardSquare"),
	gameOverText = document.querySelector(".game-over");
let redsPieces = document.querySelectorAll("p");
let blacksPieces = document.querySelectorAll("span");

let turn = true;
let redScore = 12;
let blackScore = 12;
let playerPieces;

let selectedPiece = {
	pieceId: -1,
	indexOfBoardPiece: -1,
	isKing: false,
	seventhSpace: false,
	ninthSpace: false,
	fourteenthSpace: false,
	eighteenthSpace: false,
	minusSeventhSpace: false,
	minusNinthSpace: false,
	minusFourteenthSpace: false,
	minusEighteenthSpace: false
};

const givePiecesEventListeners = () => {
	if (turn) {
		for (let i = 0; i < redsPieces.length; i++) {
			redsPieces[i].addEventListener("click", getPlayerPieces);
		}
	} else {
		for (let i = 0; i < blacksPieces.length; i++) {
			blacksPieces[i].addEventListener("click", getPlayerPieces);
		}
	}
};

const getPlayerPieces = () => {
	if (turn) {
		playerPieces = redsPieces;
	} else {
		playerPieces = blacksPieces;
	}
	removeCellOnClick();
	resetBorders();
};

const removeCellOnClick = () => {
	for (let i = 0; i < cells.length; i++) {
		cells[i].removeAttribute("onclick");
	}
};
const resetBorders = () => {
	for (let i = 0; i < playerPieces.length; i++) {
		playerPieces[i].style.border = "none";
	}
	resetSelectedPieceProperties();
	getSelectedPiece();
};

const resetSelectedPieceProperties = () => {
	selectedPiece.pieceId = -1;
	selectedPiece.pieceId = -1;
	selectedPiece.isKing = false;
	selectedPiece.seventhSpace = false;
	selectedPiece.ninthSpace = false;
	selectedPiece.fourteenthSpace = false;
	selectedPiece.eighteenthSpace = false;
	selectedPiece.minusSeventhSpace = false;
	selectedPiece.minusNinthSpace = false;
	selectedPiece.minusFourteenthSpace = false;
	selectedPiece.minusEighteenthSpace = false;
};

const getSelectedPiece = () => {
	selectedPiece.pieceId = parseInt(event.target.id);
	selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId);
	isPieceKing();
};

const isPieceKing = () => {
	if (
		document.getElementById(selectedPiece.pieceId).classList.contains("king")
	) {
		selectedPiece.isKing = true;
	} else {
		selectedPiece.isKing = false;
	}
	getAvailableSpaces();
};

const getAvailableSpaces = () => {
	if (
		board[selectedPiece.indexOfBoardPiece + 7] === null &&
		cells[selectedPiece.indexOfBoardPiece + 7].classList.contains(
			"noPieceHere"
		) !== true
	) {
		selectedPiece.seventhSpace = true;
	}
	if (
		board[selectedPiece.indexOfBoardPiece + 9] === null &&
		cells[selectedPiece.indexOfBoardPiece + 9].classList.contains(
			"noPieceHere"
		) !== true
	) {
		selectedPiece.ninthSpace = true;
	}
	if (
		board[selectedPiece.indexOfBoardPiece - 7] === null &&
		cells[selectedPiece.indexOfBoardPiece - 7].classList.contains(
			"noPieceHere"
		) !== true
	) {
		selectedPiece.minusSeventhSpace = true;
	}
	if (
		board[selectedPiece.indexOfBoardPiece - 9] === null &&
		cells[selectedPiece.indexOfBoardPiece - 9].classList.contains(
			"noPieceHere"
		) !== true
	) {
		selectedPiece.minusNinthSpace = true;
	}
	checkAvailableJumpSpaces();
};

const checkAvailableJumpSpaces = () => {
	if (turn) {
		if (
			board[selectedPiece.indexOfBoardPiece + 14] === null &&
			cells[selectedPiece.indexOfBoardPiece + 14].classList.contains(
				"noPieceHere"
			) !== true &&
			board[selectedPiece.indexOfBoardPiece + 7] >= 12
		) {
			selectedPiece.fourteenthSpace = true;
		}
		if (
			board[selectedPiece.indexOfBoardPiece + 18] === null &&
			cells[selectedPiece.indexOfBoardPiece + 18].classList.contains(
				"noPieceHere"
			) !== true &&
			board[selectedPiece.indexOfBoardPiece + 9] >= 12
		) {
			selectedPiece.eighteenthSpace = true;
		}
		if (
			board[selectedPiece.indexOfBoardPiece - 14] === null &&
			cells[selectedPiece.indexOfBoardPiece - 14].classList.contains(
				"noPieceHere"
			) !== true &&
			board[selectedPiece.indexOfBoardPiece - 7] >= 12
		) {
			selectedPiece.minusFourteenthSpace = true;
		}
		if (
			board[selectedPiece.indexOfBoardPiece - 18] === null &&
			cells[selectedPiece.indexOfBoardPiece - 18].classList.contains(
				"noPieceHere"
			) !== true &&
			board[selectedPiece.indexOfBoardPiece - 9] >= 12
		) {
			selectedPiece.minusEighteenthSpace = true;
		}
	} else {
		if (
			board[selectedPiece.indexOfBoardPiece + 14] === null &&
			cells[selectedPiece.indexOfBoardPiece + 14].classList.contains(
				"noPieceHere"
			) !== true &&
			board[selectedPiece.indexOfBoardPiece + 7] < 12 &&
			board[selectedPiece.indexOfBoardPiece + 7] !== null
		) {
			selectedPiece.fourteenthSpace = true;
		}
		if (
			board[selectedPiece.indexOfBoardPiece + 18] === null &&
			cells[selectedPiece.indexOfBoardPiece + 18].classList.contains(
				"noPieceHere"
			) !== true &&
			board[selectedPiece.indexOfBoardPiece + 9] < 12 &&
			board[selectedPiece.indexOfBoardPiece + 9] !== null
		) {
			selectedPiece.eighteenthSpace = true;
		}
		if (
			board[selectedPiece.indexOfBoardPiece - 14] === null &&
			cells[selectedPiece.indexOfBoardPiece - 14].classList.contains(
				"noPieceHere"
			) !== true &&
			board[selectedPiece.indexOfBoardPiece - 7] < 12 &&
			board[selectedPiece.indexOfBoardPiece - 7] !== null
		) {
			selectedPiece.minusFourteenthSpace = true;
		}
		if (
			board[selectedPiece.indexOfBoardPiece - 18] === null &&
			cells[selectedPiece.indexOfBoardPiece - 18].classList.contains(
				"noPieceHere"
			) !== true &&
			board[selectedPiece.indexOfBoardPiece - 9] < 12 &&
			board[selectedPiece.indexOfBoardPiece - 9] !== null
		) {
			selectedPiece.minusEighteenthSpace = true;
		}
	}
	checkPieceConditions();
};

const checkPieceConditions = () => {
	if (selectedPiece.isKing) {
		givePieceBorder();
	} else {
		if (turn) {
			selectedPiece.minusSeventhSpace = false;
			selectedPiece.minusNinthSpace = false;
			selectedPiece.minusFourteenthSpace = false;
			selectedPiece.minusEighteenthSpace = false;
		} else {
			selectedPiece.seventhSpace = false;
			selectedPiece.ninthSpace = false;
			selectedPiece.fourteenthSpace = false;
			selectedPiece.eighteenthSpace = false;
		}
		givePieceBorder();
	}
};

const givePieceBorder = () => {
	if (
		selectedPiece.seventhSpace ||
		selectedPiece.ninthSpace ||
		selectedPiece.fourteenthSpace ||
		selectedPiece.eighteenthSpace ||
		selectedPiece.minusSeventhSpace ||
		selectedPiece.minusNinthSpace ||
		selectedPiece.minusFourteenthSpace ||
		selectedPiece.minusEighteenthSpace
	) {
		document.getElementById(selectedPiece.pieceId).style.border =
			"2px solid white";
		giveCellsClick();
	} else {
		return;
	}
};

const giveCellsClick = () => {
	if (selectedPiece.seventhSpace) {
		cells[selectedPiece.indexOfBoardPiece + 7].setAttribute(
			"onclick",
			"makeMove(7)"
		);
	}
	if (selectedPiece.ninthSpace) {
		cells[selectedPiece.indexOfBoardPiece + 9].setAttribute(
			"onclick",
			"makeMove(9)"
		);
	}
	if (selectedPiece.fourteenthSpace) {
		cells[selectedPiece.indexOfBoardPiece + 14].setAttribute(
			"onclick",
			"makeMove(14)"
		);
	}
	if (selectedPiece.eighteenthSpace) {
		cells[selectedPiece.indexOfBoardPiece + 18].setAttribute(
			"onclick",
			"makeMove(18)"
		);
	}
	if (selectedPiece.minusSeventhSpace) {
		cells[selectedPiece.indexOfBoardPiece - 7].setAttribute(
			"onclick",
			"makeMove(-7)"
		);
	}
	if (selectedPiece.minusNinthSpace) {
		cells[selectedPiece.indexOfBoardPiece - 9].setAttribute(
			"onclick",
			"makeMove(-9)"
		);
	}
	if (selectedPiece.minusFourteenthSpace) {
		cells[selectedPiece.indexOfBoardPiece - 14].setAttribute(
			"onclick",
			"makeMove(-14)"
		);
	}
	if (selectedPiece.minusEighteenthSpace) {
		cells[selectedPiece.indexOfBoardPiece - 18].setAttribute(
			"onclick",
			"makeMove(-18)"
		);
	}
};

const makeMove = (number) => {
	document.getElementById(selectedPiece.pieceId).remove();
	cells[selectedPiece.indexOfBoardPiece].innerHTML = "";
	if (turn) {
		if (selectedPiece.isKing) {
			cells[
				selectedPiece.indexOfBoardPiece + number
			].innerHTML = `<p class="red-piece king" id="${selectedPiece.pieceId}"></p>`;
			redsPieces = document.querySelectorAll("p");
		} else {
			cells[
				selectedPiece.indexOfBoardPiece + number
			].innerHTML = `<p class="red-piece" id="${selectedPiece.pieceId}"></p>`;
			redsPieces = document.querySelectorAll("p");
		}
	} else {
		if (selectedPiece.isKing) {
			cells[
				selectedPiece.indexOfBoardPiece + number
			].innerHTML = `<span class="black-piece king" id="${selectedPiece.pieceId}"></span>`;
			blacksPieces = document.querySelectorAll("span");
		} else {
			cells[
				selectedPiece.indexOfBoardPiece + number
			].innerHTML = `<span class="black-piece" id="${selectedPiece.pieceId}"></span>`;
			blacksPieces = document.querySelectorAll("span");
		}
	}

	let indexOfPiece = selectedPiece.indexOfBoardPiece;
	if (number === 14 || number === -14 || number === 18 || number === -18) {
		changeData(indexOfPiece, indexOfPiece + number, indexOfPiece + number / 2);
	} else {
		changeData(indexOfPiece, indexOfPiece + number);
	}
};

const changeData = (indexOfBoardPiece, modifiedIndex, removePiece) => {
	board[indexOfBoardPiece] = null;
	board[modifiedIndex] = parseInt(selectedPiece.pieceId);
	if (turn && selectedPiece.pieceId < 12 && modifiedIndex >= 57) {
		document.getElementById(selectedPiece.pieceId).classList.add("king");
	}
	if (turn === false && selectedPiece.pieceId >= 12 && modifiedIndex <= 7) {
		document.getElementById(selectedPiece.pieceId).classList.add("king");
	}
	if (removePiece) {
		board[removePiece] = null;
		if (turn && selectedPiece.pieceId < 12) {
			cells[removePiece].innerHTML = "";
			blackScore--;
		}
		if (turn === false && selectedPiece.pieceId >= 12) {
			cells[removePiece].innerHTML = "";
			redScore--;
		}
	}
	resetSelectedPieceProperties();
	removeCellOnClick();
	removeEventListeners();
};

const removeEventListeners = () => {
	if (turn) {
		for (let i = 0; i < redsPieces.length; i++) {
			redsPieces[i].removeEventListener("click", getPlayerPieces);
		}
	} else {
		for (let i = 0; i < blacksPieces.length; i++) {
			blacksPieces[i].removeEventListener("click", getPlayerPieces);
		}
	}
	checkForWinner();
};
const checkForWinner = (score) => {
	if (blackScore === 0) {
		gameOverText.innerHTML =
			'<p>GAME OVER! <br><span style="color: red">RED</span> WINS!</p>';
		document.querySelector(".overlay").style.visibility = "visible";
		const userName = getPlayerName();
		this.broadcastEvent(userName, GameEndEvent, newScore);
		document.querySelector(".reload").addEventListener("click", () => {
			window.location.reload(true);
            /* const userName = localStorage.getItem('userName') ?? 'Mystery player';
            let scores = [];
            const scoresText = localStorage.getItem('scores');
            if (scoresText) {
                scores = JSON.parse(scoresText);
            }
            const date = new Date().toLocaleDateString();
            const score = 'loss';
            const newScore = { name: userName, score: score, date: date};
            scores.push(newScore);
            localStorage.setItem('scores', JSON.stringify(scores)); */
		});
	} else if (redScore === 0) {
		document.querySelector(".overlay").style.visibility = "visible";
		gameOverText.innerHTML =
			'<p>GAME OVER! <br><span style="color: black">BLACK</span> WINS!</p>';
		const userName = getPlayerName();
		this.broadcastEvent(userName, GameEndEvent, newScore);
		document.querySelector(".reload").addEventListener("click", () => {
			window.location.reload(true);
            /* localStorage.getItem('userName') ?? 'Mystery player';
            let scores = [];
            const scoresText = localStorage.getItem('scores');
            if (scoresText) {
                scores = JSON.parse(scoresText);
            }
            const date = new Date().toLocaleDateString();
            const score = 'win';
            const newScore = { name: userName, score: score, date: date};
            scores.push(newScore);
            localStorage.setItem('scores', JSON.stringify(scores)); */
		});
	}

	changeTurns();
};

const changeTurns = () => {
	if (turn) {
		turn = false;
		document.querySelector(".turn").textContent = "black turn";
	} else {
		document.querySelector(".turn").textContent = "red turn";
		turn = true;
	}
	givePiecesEventListeners();
};

givePiecesEventListeners();

