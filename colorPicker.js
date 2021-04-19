// Array of predefined hex's
const hexArray = ['#34568B', '#FF6F61','#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1']

// Selecting button and links
const button = document.querySelector('button')
const toggle = document.querySelectorAll('.toggle')

 // Event listener for the Button
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('hexRand')) {
        //Creates a random hex code and converts it to a string
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        //Selects all the elements with .bg class and loops
        document.querySelectorAll('.bg').forEach(element => {
            // Sets each elements background color to the random hex code
            element.style.backgroundColor = `#${randomColor}`
            // Updates the h1's text with the color code 
            document.querySelector('h1').innerHTML = `#${randomColor}`
        });
    } else if (event.target.classList.contains('hexList')) {
        // Picks a random item from the array
        let hexCode = Math.floor(Math.random() * hexArray.length)
        // Selects all the elements with .bg class
        document.querySelectorAll('.bg').forEach(element => {
            // Sets all the backgrounds to the color of the array item
            const hexDisplay = hexArray[hexCode]
            element.style.backgroundColor = hexDisplay
            //Sets the h1 text as the hex code
            document.querySelector('h1').innerHTML = hexDisplay
        });
    }
})

//Loops through the links and adds an event listener
toggle.forEach(element => {
    element.addEventListener('click', function() {
        // Select each link ID...
        const hexList = document.querySelector('#hexList')
        const hexRand = document.querySelector('#hexRand')
        //If the selected link id == hexList   
        if (this.id == 'hexList') {
            // Toggle background color of link
            hexList.classList.toggle('selected')
            // Remove background color of oposite link
            hexRand.classList.remove('selected')
            // Adds the hexList class to the button used to select option...
            button.classList.toggle('hexList')
            // removes opposite class from the button 
            button.classList.remove('hexRand')
        } else if (this.id == 'hexRand') {
            // Toggle background color of link
            hexRand.classList.toggle('selected')
            // Remove background color of oposite link
            hexList.classList.remove('selected')
            // Adds the hexRand class to the button used to select option...
            button.classList.toggle('hexRand')
            // removes opposite class from the button
            button.classList.remove('hexList')
        }
    }); 
});
