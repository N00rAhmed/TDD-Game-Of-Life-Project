import{cellStatus} from './verifier'

describe('gameOfLife', ()=>{
    it('a live cell with fewer than two live neighbours then return false', () =>{
        // cellStatus inputs should be (liveCell, noOfNeighbouringCells), return true for alive, false for dead
        const result = cellStatus(true, 1);
        expect(result).toBe(false);
    });
    it('a live cell with more than three live neighbours then return false', () =>{
        // returns false as the cell would die by overcrowding in this scenario
        const result = cellStatus(true, 4);
        expect(result).toBe(false);
    });
    it('Any live cell with two or three live neighbours lives on to the next generation return as true.', () =>{
        // returns true as the cell lives on to the next generation
        const result = cellStatus(true, 3);
        expect(result).toBe(true);
    });
    it('a dead cell with exactly three live neighbours will become a live cell', () =>{
        // cellStatus inputs should be (liveCell, noOfNeighbouringCells), return true for alive, false for dead
        const result = cellStatus(false, 3);
        expect(result).toBe(true);
    });

})

