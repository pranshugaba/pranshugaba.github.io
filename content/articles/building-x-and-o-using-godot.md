---
title: "Building an X and O game using Godot"
subtitle: "Learn game development by making a game"
description: "If you want to learn game development but do not know where to start, then this guide is for you. Learn game development using the Godot game engine by making an X and O game."

# featuredImage: "avatar.png"
# previewOnly: false
# caption: false

authors: ["pranshu"]

tags: ["godot", "gamedev"]
category: gamedev

createdAt: 2021-06-23T19:30:00+05:30
updatedAt: 2021-06-23T19:30:00+05:30

showReadingTime: false
math: false
toc: true

draft: false
featured: false
---

## Introduction

Do you love playing video games? I sure do! I enjoy making games too, and it's highly likely that you would too.
Game development is an umbrella term for ranging from designing levels, mechanics to coding the logic to making art and music.
It has a little something for everyone. If you would like to learn how to make games, then this guide is a great place to start, if I do say so myself.

In this guide, we will make an X and O game using Godot.
This is a great first game to make as it is not too complex, and yet it touches
upon several important aspects of game development.

We will look at some of the most important programming paradigms in game development.
We will learn how to make games using Godot.

There are no prerequisites, except for basic computer skills, and critical thinking and the will to learn. Prior programming experience is helpful, but not necessary.
The goal of the guide is to get you comfortable with using Godot, and to learn how to make simple games.

By the end of this guide, you will be able to:

- Work out the gameplay loop
- Display images and text in a game
- Listen for mouseclicks in an area
- Keep track of the state of the game
- Emit and listen for signals
- Export games to desktop, mobile, and the web

### About Godot

We will use Godot to make our game. Godot is a game engine that handles
graphics, logic, sound, interface, and input. Some other popular game engines are
Unity and Unreal. I will describe some advantages that Godot has over them.

- Godot is free and open-source. Your code belongs to you. You own the games that you make, and any profit you make is yours to keep. This is not the case with most other game engines.

- Godot works on Windows, macOS, and Linux. In particular, Godot has first class support for
  Linux. Since I primarily use Linux, this is perfect for me.

- Godot is lightweight. Godot is only a 35 MB download, it starts up in seconds, and is very light on CPU and memory.

- Godot is a joy to use. The UI is simple and shows you only what you need to see, allowing you to focus on your work. It is also customisable: you can change the colour scheme and the fonts of the editor as you please.

You can download Godot for free from <NavExtLink
to="https://godotengine.org/download">Godot's website</NavExtLink>. We will write code in GDScript and not C#, so we do not need the Mono version. Select
your operating system, download the Standard version, and extract
and run!

<post-info-box type="quote" title="aside">
btw, I use arch.
If you use Arch Linux, installing Godot is even easier.
Just <code>pacman -S godot</code>.
</post-info-box>

This guide uses Godot 3.3.2, the latest stable version available at the time
of writing. Godot tries to maintain backward compatibility, so this guide should work for future versions of Godot 3 as well.

The complete code of the finished version of the game is available on my GitHub page.
If you face any issue, if something's not working, you can compare your code with it.
You can also play the final version game to see how it works at itch.io

Let's get started!

## Setting things up

### Planning the game

Before we start any work on a game in Godot, it is important to plan out how the game would look and behave like.
Having a concrete picture of the game in mind will help us when we work on the game in Godot.

Here are some helpful questions that we can ask:

- What is the genre/theme of the game?
- What is the name of the game?
- How many players will play the game?
- What are the objectives of the game?
- What device will it be played on?
- How does the user interact with the game?
- How does the user interface look like?
- What happens in a typical gameplay?
- How long does a gameplay session last?

This list is in no way exhaustive, but gets you a long way.
The answers to these questions will directly impact the decisions you take when you develop the game. For example,

- The theme of the game will affect the choice of your art, sound, and music.
- A multiplayer game would have different input systems and networking requirements compared to a single player game.
- Games developed for mobile will have a different interface compared to games developed for desktop.

<post-info-box type="note">
Of course, the answers to these questions are not fixed; they will most likely change as you work on the game. As you build the game and test it, it might happen that a feature you had planned for the game doesn't do well in practice.
<br/><br/>
You might come up with a better alternative.
It might be too complex to explain to the player.
It might not be as exciting as you thought it would be while planning.
It might be hard to implement because of some technical limitations.
Be open to making changes to these answers. 
But it is also important that we start somewhere.
</post-info-box>

Let's answer these questions for our X and O game.

- It is a puzzle game. It is bright and colourful.
- We will call it "X and O".
- It is played by two players.
- The objective of the player is place three of the same symbol in a row, column, or diagonal.
- It can be played on desktop.
- The player clicks on the squares to enter symbols.
- I have made a rough sketch how the interface would look like. This will be a simple game with just one scene. In more complex games, we might need more scenes.
  <BaseFigure src="/img/articles/x-and-o/sketch.png" :caption="false" alt="A rough sketch of how the interface would look like." :rounded="false" :shadow="false" ></BaseFigure>
  We have the game title, some instructions, the grid, and some labels to show whose turn it is to play.
- We will describe the gameplay loop using a flowchart. It will also tell us how long will a session last.

### The gameplay loop

We want to write down how the state of the game changes as the player plays the game.
We want to explicitly state how the game receives inputs, what decisions it takes, what changes it makes, and how all of these relate to each another.

"X and O" is a small and simple game, so its gameplay loop is simple too.

<BaseFigure src="/img/articles/x-and-o/gameloop.png" caption="The gameplay loop" :rounded="false" :shadow="false"></BaseFigure>

To summarise:

- When the game starts, we listen for clicks on the grid.
- When the player clicks on a cell, we show the appropriate symbol in that cell.
- We then compute if some one has won. If not, then we check if the game has drawn.
- If the game has ended (by a win or a draw), then we display the name winner and give an option to start a new game. Otherwise, we go back to listening for clicks.

Each round of the game lasts no more than a minute. Players may play multiple rounds in a session.

Now that we have a good picture of how the game would work, we are ready to start working in Godot.

### Project setup

Open Godot and create a new project. We will call it `x-and-o`. Make sure you create the project in an empty folder, preferably with the same name as the game. Godot will warn you if the folder is not empty.

IMAGE: New project creation

By default, when we start a new project, Godot starts in 3D mode. We are making a 2D game, so switch to 2D mode by clicking on "2D" at the top. The default shortcut to enter 2D mode is <kbd>Ctrl</kbd> + <kbd>F1</kbd>.

Screens come in variety of shapes and sizes. Some are square, some are tall, some are wide.
We want our game to render correctly on all screens.
Since this is our first game, we will keep it simple.
We will target a fixed resolution, so we do not have to worry about making the layout responsive.

To achieve this, open Project -> Project Settings -> General -> Display -> Window.

- Now, set `Width` to `1280` and `Height` to `720`. This sets the aspect ratio of the game to 16:9, the most common aspect ratio for screens.
- In the same section, scroll down to "Stretch", and set `Mode` to `2d` and `Aspect` to `keep`. Now, if the aspect ratio of the screen is not 16:9, then Godot will not distort the content. It will pad the content with black bars instead.

This way our game looks reasonably good on all screens with minimal effort. We will learn how to make a responsive layout another time.

By default, the background colour of the game is dark grey. You can change the background colour in Project Settings -> General -> Rendering -> Environment -> Default Clear Colour.
As mentioned before, I want the game to be bright and colourful.
I set it to `#eaeaea`, which is a bright white colour. Feel free to choose a colour that goes with your theme.

### Importing assets

Looking at the sketch interface, we see that we need to display some X's, some O's, and the grid on the screen.
We would to load the images for these in Godot.
We show some text in our game, and we will need to load a nice font for it.

I have made an assets folder that you can use to make the game. It contains `x.png`, `o.png`, `grid.png`, and `Inter-Regular.ttf`.
You can <NavExtLink to="/">download my assets</NavExtLink>, or you can make your own.

IMAGE: X O Grid

<post-info-box>
I made the png files for X, O, and the grid using <nav-ext-link to="https://inkscape.org/">Inkscape</nav-ext-link>. It is an excellent application for making vector art. It is free software, and I highly recommend it.
</post-info-box>

I have included the `Inter` font in the assets. I chose this font because it looks sharp even at low resolutions and it goes well with the "X" and "O" sprites that I have made. You can use any font that goes with your theme.

IMAGE: Inter font

<post-info-box>
You can get fonts on websites such as
<nav-ext-link to="https://fonts.google.com/">Google fonts</nav-ext-link> and <nav-ext-link to="https://www.dafont.com/theme.php?cat=501&l[]=10">dafont.com</nav-ext-link>. Make sure you have the rights to use the font you choose.
</post-info-box>

We need to add these assets to our project in Godot.
Make an `assets` folder in your game's root folder `x-and-o`, and move the sprites and the font in it.

IMAGE: Screenshot of FileSystem with assets added.

## Building the interface

We have imported all the resources that we need in Godot. We can now start building the user interface.

Whether we want to display an image, play a sound, or display some text in Godot, we do so by adding a node for it. A Godot game is made by composing together different kinds of nodes.

<post-info-box>
Read the <nav-ext-link to="https://docs.godotengine.org/en/stable/getting_started/step_by_step/scenes_and_nodes.html">Godot docs on Scenes and Nodes</nav-ext-link> to understand how they work.
</post-info-box>

We will add a root node that will hold all nodes in our game.
Click on `Create root node` -> `2D node` in the Scene tab. This will create a root node named `Node2D`. Rename it to `Game`.

IMAGE: Game node in Scene tab

Now that we have a root node, we can save the scene and run the game. Save the scene by pressing <kbd>Ctrl</kbd>+<kbd>S</kbd>.
Make a `scenes` folder in the root directory and save this scene in it as `Game.tscn`.

<post-info-box>
Scenes are saved with the <code>.tscn</code> file extension.
</post-info-box>

Run the game by clicking the play button (or press <kbd>F5</kbd>). The first time you run the game, Godot will ask you to set the main scene. The main scene is the scene that loads when you run the game. Select the `Game.tscn` scene we just saved.

Of course we haven't added anything to our scene yet, so we only see a blank screen when the game is run.
Close the window (or press <kbd>F8</kbd>) to stop the preview.

We look to our sketch to help us build the interface. We need a grid, some X's, some O's, and some text labels.

Let's start with the labels because they are simpler.

### Labels

We can display text in a game with a `Label` node. Select `Game` and click on the plus icon to add a child node. In the "Create New Node" dialog that appears, search for `Label`, and click on "Create".

A `Label` node appears as a child of `Game` in the scene tab. We do not see any change in our game because the label has no text. We can add/edit the text of the `Label` by editing the `Text` property in the inspector tab. This label will display the name of the game: "X and O". Change the text of the label to "X and O". Rename the name of this node to `GameName` because that's what it is.

The label is hard to read: it is small, and is white on a white background. We will fix this by using a custom font.

In the inspector tab, in `Custom Fonts`, enable the Font property. Click on Empty -> New DynamicFont. In the new options that appear, in Font -> Font Data, click on Empty -> Load and select your font file. We can adjust the font size in `Settings`. We would like the name of the game to be big, so I set the font size to `96`. We can also change the font colours in Custom Colours -> Font colours. Play with the parameters until you have happy with the appearance.

We have three more labels to show in our interface. Repeat this process three times to end up with a total of four labels.
I made three new `Label` nodes with names `WinCondition`, `PlayerTurn`, and `PlayerInstruction`. My game looks like this now.

IMAGE: Four labels

<post-info-box type="tip">
You can move around the Labels in Move mode. Click on the button (or press <kbd>W</kbd>).
Using GridSnap will make it easier to align the labels.
<br/>
<br/>
IMAGE: GridSnap icon in toolbar.
</post-info-box>

Our text looks good. Next, we will add the grid.

### The Grid

The grid is a bit more complex. In addition to showing the grid, we also need to listen for clicks and display an 'X' or 'O' in each of the nine cells.

Let's create an 2D node and name it `Grid`. We will store all nodes related to the grid as children of this node. This will make our `Game` scene more organised.

We can show images in Godot using the `Sprite` node.
Add a child node to `Grid` of type `Sprite`, and rename the node to `GridSprite`.
We do not see any change in our game because the sprite does not have a texture. Drag and drop `grid.png` from the FileSystem to the `Texture` property of the sprite.

We can see the grid in our game now, but it's too big for our screen. We need to scale it down. In `GridSprite`, in transform, set the Scale to `0.3` and `0.3`. The grid fits in the screen now.

IMAGE: Scale transform

We want to be able to detect clicks and display "X" and "O" symbols in each cell of the grid.
We can detect clicks in an area using the `Area2D` node. We will have nine `Area2D` nodes, one for each cell of the grid.

First, let's add one `Area2D` node as a child of `Grid`, and rename it to `GridCell`. Now we get
a warning telling us to add a `CollisionShape2D` as a child.
This is because we have an `Area2D` node, but we haven't defined its area. Add a `CollisionShape2D` as a child of `GridCell`.

The `CollisionShape2D` now shows a warning: it needs a shape. Our cells are squares, so we select New RectangleShape2D in the inspector tab. Resize and move the blue area so it covers one of the grid cell.
Using GridSnap will make it easier to fit the CollisionShape2D on the cell perfectly.

<post-info-box type="tip">
We do not want the <code>CollisionShape2</code> to move relative to the <code>GridCell</code>. Select <code>GridCell</code>, and "Make sure that children are not selectable." This is a potential for bugs, and doing this avoids that.
<br/>
<br/>
IMAGE: Children not selectable
</post-info-box>

DONE TILL HERE.

We want to show symbols in `GridCell`. Add a Sprite as a child of `GridCell`. Rename this node to `CellSymbol`. Choose the texture as `x.png`. If you are using my assets, you might need to scale to `0.3` and translate by `96` and `96` to make in the centre of the cell.

IMAGE: Sprite in cell

We have logic common to all GridCells.

We can save it as a scene and then create more instances of it. Right click it, and select "Save Branch as Scene" and save it as `GridCell.tscn` in the `scenes` folder. Click on the "Open in Editor" button.

IMAGE: Open in editor button.

Now we can focus on only the `GridCelll`. Any changes you make in this scene will be reflected in the `Game.tscn` scene as well.
Duplicate the node nine times, and place one in each grid. Make sure to arrange them in order, because we will refer to them later when we want to detect win conditions.

IMAGE: Nine GridCells

The texture set in the sprite in `GridCell` appears nine times in `Grid`. If you change the texture in the `GridCell` scene, then we will observe the same change in all nine cells in the `Game` scene.

Since we start the game with the empty grid, we don't want any of the X's and O's showing at the beginning. We will show them one by one, programmatically when the players play the game. For now, remove the texture from the `CellSymbol` sprite in `GridCell`.

We have added all the nodes needed to make the game, and while it looks pretty, the game is static and doesn't do much.
We will now add the code to make it dynamic and interactive.

## Implementing the logic

We control the behaviour of nodes using scripting. Godot officially supports 4 languages for scripts: GDScript, VisualScript, C#, and C++. You can read more about them in <NavExtLink to="https://docs.godotengine.org/en/stable/getting_started/step_by_step/scripting.html">Scripting docs</NavExtLink>

We will write our scripts in GDScript. Its syntax is similar to Python.
You can read the <NavExtLink to="https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/gdscript_basics.html">Godot Docs for GDScript </NavExtLink> for more information about GDScript.

Click on this button to attach a script to the `Game` node. The default options are fine, click "Create". This will create a file named `Game.gd`. This is where will write the logic for the game.
The contents of this script will look like this.

```gdscript [Game.gd]
extends Node2D

# Declare member variables here. Examples:
# var a: int = 2
# var b: String = "text"

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta: float):
	pass
```

This is the default script. The functions are empty as of now; they don't do anything.

You can <kbd>Ctrl</kbd>+Click on any inbuilt function to read its documentation. You can also search for help or open online docs directly from the script editor.

<post-info-box type="tip" title="See Also" >
If you find any Godot term unclear, refer to the <nav-ext-link to="https://docs.godotengine.org/en/stable/index.html">Godot docs</nav-ext-link>. It is an excellent resource.
</post-info-box>

IMAGE: Online Docs + Search Help

Let look at the gameplay loop again. It takes decisions base on the state of the game. We need a way to store the state of the game.

### Storing the state of the game

What information would we like to save in a state? Given the state, we must be able to uniquely determine the state of the game.

- `game_started`: Is a game in progress? If yes, then we need to listen for clicks and check for wins and draws. Otherwise, we need to show a "Start New Game" button.
- `turns_played`: How many turns have been played so far? This value will help us check whether all cells have been filled, in which case the game has ended.
- `player_turn`: We would like to store whose turn it is to play now. We will use this to determine if the next click should add an `X` or an `O`. We will also display this information to the players.
- `cells`: For each cell in the grid, we need to store whether it is empty, has an `X` or an `O`.

For each property, we will declare the variable and initialise it.
The function `_ready` is called when the `Game` node and all its children nodes have entered the scene tree and have become active. This is the perfect place to initialise our state variables. We will declare the variables outside `_ready` so we can access them in other functions.

#### `game_started`

This variable tells us if a game is in progress.
Once the scene is loaded, we are ready to play. We should begin listening for click and check for wins. We set `game_started` is `true` in `_ready`.

```gdscript [Game.gd]
var game_started

func _ready():
	game_started = true   # Game has started
```

#### `turns_played`

We keep track of the number of turns played in `turns_played`.
When the scene is loaded, no turn has been played so far, so we start `turns_played` with `0`.

```gdscript [Game.gd]
var turns_played

func _ready():
	...
	turns_played = 0   # No turns played yet
```

#### `player_turn`

The variable `player_turn` will store the name of the player whose turn it is to play. While we can give these players with any name we wish, let's call them player `1` and player `-1`.
This choice will make our work in the future easier.

Player `1` will play first and will place X's. Player `-1` will go second and will place O's.
Let's initialise `player_turn` in `_ready`.

```gdscript [Game.gd]
var player_turn

func _ready():
	...
	player_turn = 1  # Player with 'X' goes first
```

Once a player's turn ends, the other player get to play. At the end of each turn, the value of `player_turn` must change.
Let's write a function `change_player` function that changes the state of `player_turn`. Due to our choice of player names, this is function is a one-liner.

```gdscript [Game.gd]
func change_player():
	player_turn *= -1
```

Calling `change_player` switches the value of `player_turn` from `1` to `-1` and vice versa.

#### `cells`

We need to store the state of each cell in the grid.
We will store these in an array so we can access them easily.
The variable `cells` will be an array in which we store references to all `GridCell` nodes.
We will be able to read/edit properties of the nodes using these references.

We can get a reference to a node using the `get_node` method. To access a node, we pass the path of the node relative to the current node (the node that the script is attached to) to `get_node`.
Some examples:

- We can access the `Grid` node with `get_node("Grid")`.
- We can access the `GridCell2` node with `get_node("Grid/GridCell2")`.
- We can access the `CellSymbol` node of `GridCell3` with `get_node("Grid/GridCell3/CellSymbol")`.

For more details, you can read the reference page for <NavExtLink to="https://docs.godotengine.org/en/stable/classes/class_node.html#class-node-method-get-node">get_node</NavExtLink>.

Since accessing nodes is common pattern in Godot, there is a shorthand notation for it. We can write `$Grid/GridSprite` instead of `get_node("Grid/GridSprite")`. We will follow this shorter notation from now on.

<post-info-box type="tip" >
The Godot editor will help you autocomplete the name of the node as soon as you type the dollar symbol.
Make sure the node your script is attached to is active.
<br/>
<br/>
IMAGE: Dollar Autocomplete.
</post-info-box>

Once we have a reference to a node, we can manipulate it. Any changes that we can make in the Inspector tab, we can also make in our script. If you hover your mouse over any property in the inspector tab, you will see the name of the property that you can use in scripts.

IMAGE: Hover Property

For example, if you want to hide the `GridSprite` when the game starts, you can do the following:

```gdscript
func _ready():
	$Grid/GridSprite.visible = false
```

If you play the game, the grid lines will not be visible.
This is how we can control nodes from our scripts.
(Let's undo this so the grid is visible when you play the game.)

We now know how to access the `GridCell` nodes and store them in an array:

```gdscript
var cells

func _ready():
	...
	var cell1 = $Grid/GridCell1
	var cell2 = $Grid/GridCell2
	var cell3 = $Grid/GridCell3
	...
	var cell9 = $Grid/GridCell9

	cells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]
```

This is a lot of code, a lot of repetition. It is difficult to read or make any changes to this code.
TODO: Explain why we should DRY.

We can do better. We can make use of the <NavExtLink to="https://docs.godotengine.org/en/stable/classes/class_node.html?#class-node-method-get-children">get_children</NavExtLink> method. This method takes as an argument a reference to a node, and returns an array of references to the children of the node.

ALSO SEE get_child

Let's create a node of type `Node2D` in `Grid` and name it `GridCells`. Select all nine `GridCell` nodes and drag them on to `GridCells` to make them children of `GridCells`. Now, `$Grid/GridCells.get_children()` returns an array of references to the `GridCell` nodes.

We can delete the ten lines we added in `_ready` and add this one line in its place. The resulting code is much cleaner.

```gdscript [Game.gd]
func _ready():
	...
	cells = $Grid/GridCells.get_children():
```

We have references to each `GridCell` node, but we still need a way to save information in each node.
Attach a script to the `GridCell` scene.
Delete everything except the first line `extends Area2D`.

For each cell, we want to store if it is empty, or has an X or an O. Let's store this information in a variable named `value`.

Continuing our notation with the player names, a cell with an "X" has `value` equal to `1` and a cell with an "O" has `value` `-1`. Cells can also be empty. Empty cells have `value` `0`.

Let's declare `value` in `GridCell.gd`

```gdscript [GridCell.gd]
extends Area2D

var value
```

We can access this variable from the `Game.gd` script by accessing the node and then reading its `value` property. For example, `cells[0]` is a `GridCell` node. We can access its `value` variable by `cells[0].value`. For example, we can print its value.

```gdscript [Game.gd]
func _ready():
	...
	print(cells[0].value)
```

You will see `Null` in the output. This is because we declared it, but did not initialise it.

<post-info-box type="tip" >
<code>print</code> is very useful in debugging and understanding what is happening.
</post-info-box>

Since all cells are empty initially, we will initialise `value` of each `GridCell` with `0`.

```gdscript [Game.gd]
func _ready():
	...
	for cell in cells:
		cell.value = 0
```

If you print `cells[0].value` after the initialisation, you will see `0` and not `Null`.

### Listening for clicks using signals

We have initialised the state. Now we need a way to respond when cells are clicked.

We can have a function `play_turn` in `Game.gd` that makes the appropriate changes to the states when the player clicks a grid cell.

```gdscript [Game.gd]
func play_turn():
	print("play_turn called")
```

We will fill in this function later. First, we want to call this function when a player clicks a cell.
We could do the following.

PSEUdocode

```[GridCell.gd]
if cell is clicked:
	play_turn in Game.gd
```

This is fine for a small game, but it would get out of hand as the game becomes bigger.

```[GridCell.gd]
if cell is clicked:
	call method_a in A.gd
	call method_b in B.gd
	call method_c in C.gd
	call method_d in D.gd
```

This methods are not relevant to the `GridCell` node.

A better way of acheiving this is by using signals, also known as the observer pattern.
We can do the following.

```[GridCell.gd]
if cell is clicked:
	emit signal "cell was clicked"
```

Other nodes can listen for this signal.

```[A.gd]
Listen for signal "cell was clicked" from GridCell node.
If "cell was clicked" signal received, call method_a.
```

and so on for any other interested nodes.

The `GridCell` node remains clean.

We can do this with the help of signals!

Signals are very important in game development.

Nodes can emit signals when certain events occur. Nodes can subscribe to signals that they are interested in.

Different nodes in Godot have different signals defined in them. You can see the signals defined for any node by clicking on the Node tab next to the Inspector tab.

IMAGE: Signals of a sprite

A sprite node can emit a signal when its texture is changed, when its visibility changes, and so on.

We can also make our own custom signals.
Signals can also carry additional data.
For example, in our game, we can make a signal for the `GridCell` node say, `cell_clicked`. The cell emits this signal whenever it is clicked.

```gdscript [GridCell.gd]
signal "cell_clicked"

if cell is clicked:
	emit_signal("cell_clicked")
```

WARNING: This won't work because the syntax is improper.
We will fix this soon.

We will connect it in `Game.gd`. The `play_turn` function will be called when `Game` receives the `cell_clicked` signal.

```gdscript [Game.gd]
func _ready():
  ...
  # listen for clicks
  for cell in cells:
    cell.connect("cell_clicked", self, "play_turn")
```

The way to read this is when the `cell` node emits the `cell_clicked` signal, the `self` node (in this case the `Game` node) calls the `play_turn` method.

Whenever a `GridCell` node emits a `cell_clicked` signal, the `play_turn` method in `Game.gd` will be called.

NOTE Any node that is listening for a signal must have a script attached to it.

Now, let's fix the `if cell is clicked` in `GridCell.gd`. We will use an inbuilt signal for this.

Since `GridCell` is an `Area2D` node, it has an `input_event` signal inbuilt.

We can also connect signals using the GUI. Let's do that now. In the `GridCell` scene, in the `Node` tab, select `input_event` and click "Connect".

The `GridCell` node will emit the `input_event` when an `input_event` occurs.

READMORE in the docs `input_event`

The node that we connect to will listen for the signal. Let's select `GridCell` to receive the signal.

This will create a callback function `_on_GridCell_input_event`. Notice the signal icon in the margin.

```gdscript [GridCell.gd]
func _on_GridSquare_clicked(_viewport: Node, event: InputEvent, _shape_idx: int) -> void:
	pass
```

TRY `print(event)` to see when this signal is emitted.

The signal is emitted whenever the mouse moves over the Area or it clicks.

`_on_GridCell_input_event` is called for every such input_event. In this method, we will filter out the events when the grid is clicked and then emit the `cell_clicked` signal.

```gdscript [GridCell.gd]
extends Area2D

signal cell_clicked

func _ready() -> void:
	connect("input_event", self, "_on_GridSquare_clicked")

func _on_GridSquare_clicked(_viewport: Node, event: InputEvent, _shape_idx: int) -> void:
	if event is InputEventMouseButton and event.is_pressed():
		emit_signal("cell_clicked")
```

We have added underscores to unused variables to supress the Godot warnings.

In `Game.gd`, the `play_turn` method is called everytime we click a cell, but we don't know which cell is clicked.

We can add a bind argument in `connect`. Update `connect` to

```gdscript [Game.gd]
func _ready():
  ...
  # listen for clicks
  for cell in cells:
    cell.connect("cell_clicked", self, "play_turn", [cell])
```

If you run now, we get an error. `play_turn` needs an argument now.

```gdscript [Game.gd]
func play_turn(cell):
	print("play_turn called")
	print(cell.name, " was clicked")
```

Great! `Game.gd` now knows when a cell is clicked and which cell is clicked. We will now make appropriate changes to the game state.

```gdscript
Error connect(signal: String, target: Object, method: String, binds: Array = [  ], flags: int = 0)
```

Whenever it receives the signal, the function is called.

```gdscript
void emit_signal(signal: String, ...) vararg
```

Try adding `print(event)` in `_on_GridSquare_clicked` and look at the output. Any mouse motion and mouse click emits an `input_event` signal. We are only interested in a mouse click event.

We check if the event is of type click, in which case we emit the cell clicked signal. Note that we are sending an additional parameter: `self.name`. This way, when we receive the signal, we know which cell was clicked.

### Executing a turn of the game

Whenever a `GridCell` is clicked, the function `play_turn` is called. We will perform all our tasks in this function.
The signal lets `play_turn` know which cell was clicked.

If the game has not started, we do nothing.
If the cell that was clicked is not empty, we do nothing. Strictly speaking, we do not need this check since our signals are oneshot. However, this is safer as the oneshot does not always work if it is emitted in rapid succession.

So the cell that was clicked is non-empty, and we need to display a symbol in it. The symbol depends on `player_turn`.
We can show the symbol by setting the texture of the GridCell. We can set the texture of the square to the appropriate image.

```gdscript [Game.gd]
var player_turn_text = "Player %s's turn"
var player_instruction_text = "Place an %s"

var player_symbols = ["?", "X", "O"]  # Player 1 uses X, Player 2 uses O

func update_labels():
	$PlayerTurn.text = player_turn_text % (player_turn * (-0.5) + 1.5)
	$PlayerInstruction.text = player_instruction_text % player_symbols[player_turn]
```

```gdscript [Game.gd]
var x_symbol = preload("res://assets/x.png")
var o_symbol = preload("res://assets/o.png")

func play_turn(cell):
	if game_started:
		if cell.symbol == 0:
			var player_symbol
			if player_turn == 1:
				player_symbol = x_symbol
			else:
				player_symbol = o_symbol

			cell.get_node("symbol").texture = player_symbol
			cell.value = player_turn
			turns_played += 1

			if check_win():
				game_over()
				return

			if check_draw():
				game_over()
				return

			change_player()
			update_labels()
```

### Checking for wins and draws

A player wins when they get three of the same symbols in a row, column, or diagonal.
There are three rows, three columns, and two diagonals, so we need to check for three in a line in eight lines.

This is where choosing values `1` and `-1` comes in handy. To check if someone has won, we calculate the sum of values of each row, column, and diagonal. If any of them is 3 or -3, then we have a winner.

This function `check_win` checks if some one has won. It returns true if it has, and false if not.
It also updates the global variable `winner` with the value of the player who won.
If no one has won yet, then `winner` stores `0`.

```gdscript [Game.gd]
var winner

func _ready():
	...
	winner = 0
```

```gdscript [Game.gd]
func check_win():
	var row1 = cells[0].value + cells[1].value + cells[2].value
	var row2 = cells[3].value + cells[4].value + cells[5].value
	var row3 = cells[6].value + cells[7].value + cells[8].value

	var col1 = cells[0].value + cells[3].value + cells[6].value
	var col2 = cells[1].value + cells[4].value + cells[7].value
	var col3 = cells[2].value + cells[5].value + cells[8].value

	var diag1 = cells[0].value + cells[4].value + cells[8].value
	var diag2 = cells[2].value + cells[4].value + cells[6].value

	var lines = [row1, row2, row3, col1, col2, col3, diag1, diag2]

	for line in lines:
		if line >= 3:
			winner = 1
			return true
		elif line <= -3:
			winner = -1
			return true
		else:
			winner = 0
	winner = 0
	return false
```

Detecting if the game has drawn is easier.
If nine turns have been played and no one has won so far, then and only then it is a draw.
We have been updating `turns_played` in the function `play_turn`. We use this value to check if the grid has been filled completely.

```gdscript [Game.gd]
func check_draw():
	if turns_played >= 9:
		return true
	else:
		return false
```

```gdscript [Game.gd]
func play_turn(_node, cell):
  if game_started:
    if cell.value == 0:
      ...
      if check_win():
        game_over()
        return

      if check_draw():
        game_over()
        return
```

The game is over. We let the players know this. We stop listening for clicks, and start listening for the restart.

```gdscript [Game.gd]
var winner_text = "Player %s won!"
var drawn_text = "Game drawn."
var reset_text = "Press 'R' to reset."

func game_over():
	if winner == 0:
		$PlayerTurn.text = drawn_text
	else:
		$PlayerTurn.text = winner_text % (player_turn * (-0.5) + 1.5)
	$PlayerInstruction.text = reset_text

	for cell in cells:
		if cell.node.is_connected("cell_clicked", self, "play_turn"):
			cell.node.disconnect("cell_clicked", self, "play_turn")

	game_started = false
```

### Starting a new game

Once a game is over and we display the results, we would like the players to be able to play again without having to quit and restart. We need to set things up again for a new game.

A lot of the code that we require is already in `_ready`. We would like to execute all of those commands when the players click "Play again". We will extract all of those into a function `start_game` and call it. To reset the game, we simply call this function.

```gdscript [Game.gd]
func _ready():
	start_game()

func start_game():
	game_started = true
	player_turn = 1  # Player 1 starts the game
	update_labels()
	turns_played = 0
	winner = 0
	cells = []

	for i in range(1, 10):
		var cell = { "node": $Grid.get_child(i), "value": 0 }
		print(cell.node)
		cells.push_back(cell)

	# listen for clicks
	for cell in cells:
		cell.node.connect("cell_clicked", self, "play_turn", [cell], 4) # last paramater is oneshot signal
```

We listen for reset button pressed, in which case we call the `start_game` function.

```gdscript [Game.gd]
func _process(_delta: float) -> void:
	if !game_started:
		if Input.is_action_pressed("ui_reset"):
			print("Resetting game")
			start_game()
```

We forgot to remove symbols from the grid. We had started with an empty grid, so we did not have to care about this when we were using `_ready`. We can remove the symbols by setting the textures of the sprites to `null`. Add this to the end of `start_game`.

```gdscript [Game.gd]
func start_game():
	...
	# remove symbols from grid
	for cell in cells:
		cell.node.get_node("symbol").texture = null
```

It should work now. We are almost done!

## Finishing up

We can play the game in Godot. If you had to share it with others, we do not expect them to install Godot to play our game. This is not even possible on mobile. We need to export our game.

### Exporting the game

Click on Project -> Export...

We can now export to Windows, macOS, Linux, Android, iOS, and the Web.

### Further info

We can add a play again button.

Some new features that can be added:

- Improve UI
- Undo (This is hard)

Hurray! Make it on your own. Improve it, publish it. Make more games!

If you are feeling adventurous (or curious), you can visit <NavExtLink to="https://github.com/godotengine/godot">Godot's GitHub page</NavExtLink> and look at Godot's source code. You can see how it's made and how it works. If you face any issues, you can create an issue. If you can make some improvements, you can submit a pull request.

If you enjoyed this guide and found it useful, consider supporting my work on Ko-fi. I would love to write more guides on GameDev and your support will go a long way.
