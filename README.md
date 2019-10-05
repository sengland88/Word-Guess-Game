# Word-Guess-Game

I started on defining my array of tv show, then created my variables. 

I knew that I would need the following
    - wins
    - losses
    - an answer
    - remaining guess
    - letter guesses
    - start value (this one came much later in the process)

The first thing I knew I needed to capture was the user's keypress. I wrote the code for that. Then, i compared the user guess to the word, using includes.

if it did, it was pushed to the dashes. 

if not, it was pushed to letters guessed and also counted down on the remaining guesses.

i created a wordcheck function that compared all of the user guesses to the word. if it did match, it triggered the youwon function and then the restart. 

if remaining guesses reached zero, it triggered you lost and then the restarts


