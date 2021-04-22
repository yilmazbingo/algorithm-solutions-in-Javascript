- Create a function that solves for any 9 X 9 sudoku puzzle given.
- Each of the digits 1-9 must occur in each row. No duplicate
- Each of digits 1-9 must occur exactly once in each column.
- Each of the digits 1-9 must occur exactly once in each of the 9 3 X 3 sub-boxes of the grid.

## Learning the Backtracking Algorithm

If you need to solve the all the solutions or if you need to solve all the valid solutions or even solve for one valid solution, these are all different things that tell you that backtracking could be a possible option for you.

In order to solve the problem, we need to generate all of the possible solutions that could exist. However some of those solutions, if not most of them are going to be invalid. If that is the case i do not want to waste any resources generating those solutions. So I backtrack to find a better solution.

- Backtracking is a brute force solution.
- It is a recursive based solution.
