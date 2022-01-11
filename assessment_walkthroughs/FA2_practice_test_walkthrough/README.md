## Assessment 2b - ConnectTacToe

### Summary

In this assessment you will build a variation of Connect Four called
`ConnectTacToe`. In classic [Connect Four][connect-four-wiki] is a game where
two players of different color tokens take turns dropping their tokens into an
up-right board. Tokens will fall to the bottom of the board or sit on top of
another token, due to gravity.

**The version of the game that you will be building will allow for a board of
any dimensions, as long as both dimensions are not less than 4. This version of
the game, ConnectTacToe, will only count a winner if they have a streak of their
tokens horizontally or vertically so that it completely fills the row or column
(not simply four). Diagonal streaks are not considered.**

### Tip

We will represent the board programmatically with a 2D array. This means that
the subarray at index 2 of the outer array would correspond to the third
"column" from the left in the "real-world" game. In other words, this
"real-world" visualization of the board:

```
    b
    y
y   y
y b b     y
- - - - - - -
```

will be represented programmatically as:

```
[
    ['y', 'y'],
    ['b'],
    ['b', 'y', 'y', 'b'],
    [],
    [],
    ['y'],
    []
]
```

Note how the axis of the game is "flipped." For clarity, we will refer to each
inner subarray as a `stack` during the project. This means that gameplay will
always add a token to the top of a `stack`.

### Usage

1. `cd` into the project root directory
2. `bundle install` to install dependencies
3. `bundle exec rspec` to run all tests

### Objective

Your objective is to pass all 35 test specs provided by writing code in the
`/lib` files. You can view the test cases in `/spec`.

```bash
/assessment_2b
├── Gemfile
├── README.md
├── lib
│   ├── board.rb
│   ├── connect_tac_toe.rb
│   ├── play_connect_tac_toe.rb
│   └── player.rb
└── spec
    ├── board_spec.rb
    ├── connect_tac_toe_spec.rb
    └── player_spec.rb
```

Note that their may be some initial code provided in some of the `/lib` files.
Once you pass all specs, you can run `ruby lib/play_connect_tac_toe.rb` to play
your final product. We recommend that you implement the code in the following
order: `Board`, `Player`, `ConnectTacToe`.

[connect-four-wiki]: https://en.wikipedia.org/wiki/Connect_Four
