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