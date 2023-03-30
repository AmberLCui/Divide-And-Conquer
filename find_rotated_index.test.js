const findRoatatedIndex = require("./find_rotated_index")

describe("#findRotatedIndex", function () {
    it("returns the correct index", function () {
        expect(findRoatatedIndex([3, 4, 1, 2], 4)).toBe(1)
        expect(findRoatatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2)
        expect(findRoatatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6)
        expect(findRoatatedIndex([37, 44, 66, 102, 10, 22], 14)).toBe(-1)
        expect(findRoatatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1)
    })
})