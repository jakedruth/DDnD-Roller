# Dungeons, Dice & Danger
## Dice Roller

### Overview
*Dungeons, Dice & Danger* is a roll-and-write game where you explore dungeons for treasure and fight monsters.

The main mechanic involves each player taking turns rolling 5 dice; four white dice and one black die. The player who rolled the dice is considered the "active" player while the others are "passive" players. When a player rolls the dice, **ALL** players must create 2 distinct pairs of dice. Each player then calculates the sum of their pairs, and uses both totals to cross off two rooms on their board. Passive players can only use the white dice (unless they use an finite ability), while the Active player may choose to use the black die when creating pairs. Additionally certian rooms can only be crossed off if the pair rolled are doubles, ignoring the sum entirely. 

While playing the game, it became hard to juggle *multiple* 2 sets of numbers without confusing which set I working with. There seemed to be just too many combinations of pairs, especially when you were the active player that had access to the black die, or a passive player that had to firgure out all the permutations **and** decide if it is worth using the finite ability. I wanted to solve this problem by building a tool.

### The Math

It became clear that when playing the game, an important part was figuring out what combinations can be made with just the white dice, as all players could just these dice. When there are 4 dice, there are 3 discrete combinations. If the dice are labeled A, B, C and D, the the possible combinations are:

`AB & CD, AC & BD, and AD & BC`

Now if you want to include the Black die, there is an additional 12 more possiblities for a total of 15. In each of the 3 combinations you can replace one of the 4 dice with the black die; 3 * 4 = 12.