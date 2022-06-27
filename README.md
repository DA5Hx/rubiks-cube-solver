# Rubiks-cube-solver

The solver will be based on Korf's Algorithm to solve the rubik's cube. Korf's ALgorithm finds a optimal 
solution for every cube scramble in 20 or fewer moves using IDA* search which uses Pattern Datatbases as 
huerestics to prune the branches that leads to an unoptimal solution. 

## Link

https://da5hx.github.io/rubiks-cube-solver/

## Current update

Added Corner pattern Datatabase which is one of the four databases used in the algorithm to 
store number of moves required to reach every possible corner scramble from a solved state.
