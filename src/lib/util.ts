export function nameOfPuzzle(puzzle: string) {
	switch (puzzle) {
		case 'A':
			return 'Raft';
		case 'B':
			return 'Inflatable';
		case 'C':
			return 'Kayak';
		case 'D':
			return 'Gondola';
		case 'E':
			return 'Faering';
		case 'F':
			return 'Canoe';
		case 'G':
			return 'Frigate';
		case 'H':
			return 'Yacht';
		case 'I':
			return 'Cruise';
		case 'J':
			return 'Auxiliary';
		default:
			return 'none';
	}
}
