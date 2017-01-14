var target_index = 0,
    target = "",
    guess_input = "",
    guess_count = 0;
colors = ["red", "cyan", "blue", "darkblue", "lightblue", "purple", "yellow", "lime", "magenta", "white", "green", "olive"];
colors.sort();
// sort colors alphabetically
finished = false;

function start_game()
{
    target_index = Math.floor(Math.random() * colors.length);
    // create a random number between 0 and number of colors
    target = colors[target_index];
    // get name of random color
    alert("Picked color: " + target);
    // show which color was chosen
    do
    {
        guess_input = prompt("I am thinking of one of these colors: \n\n" + colors + "\n\n Which one am I thinking about?");
        console.log("Your input: " + guess_input);
        // debug line
        guess_input.toString().toLowerCase();
        // convert input to String, lower case like colors array
        guess_count++;
        console.log("Input in lowercase: " + guess_input);
        // debug line
        check_color();
    } while (!finished);
}

function set_bg_color()
{
    myBody = document.getElementsByTagName("body")[0];
    myBody.style.background = target;
    // target is color chosen by the program
}

function check_color()
{
    var guess_index = colors.indexOf(guess_input);
    // local variable for getting the index of guess/input color in the colors array
    switch (true)
    {
        case !isNaN(guess_input):
            alert("I don't recognize this color. \n\nPlease try again!")
            break;

        case guess_index == target_index:
            alert("You are correct! The color was " + target + "! \n\nNumber of guesses you made: " + guess_count);
            finished=true;
            set_bg_color();
            break;

        case guess_index < target_index:
            alert("Nope! But you were close! \n\n Hint: color you chose is alphabetically lower than mine. \n\nTry again!")
            break;

        case guess_index > target_index:
            alert("Nope! But you were close! \n\n Hint: color you chose is alphabetically higher than mine. \n\nTry again!")
            break;
    }
}
