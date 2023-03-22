let states = document.getElementById('states');
states.onchange = function() {
    //States index is printed as a string and the states selected number is shown 
    //console.log('states index: ' + states.selectedIndex);
    //States index is printed as a string and the United States of America is printed out
    //console.log('states index: ' + states.options[states.selectedIndex].text);
    //img/ is printed as a string, the state value is printed, and @2x.jpg is printed as a string.
    //console.log('img/' + states.value + '@2x.jpg');

    document.getElementById('postcard').style.backgroundImage = 'url(img/' + states.value + '@2x.jpg)'; 
//The id postcard is having its style changed, specifically the background image. img/ is printed as a string, the state value is printed, and @2x.jpg is printed as a string.
    document.getElementById('greeting').innerHTML = 'Greetings from ';
    //The id greetings html is changed to Greetings from
    document.getElementById('state-heading').innerHTML = states.options[states.selectedIndex].text;
    //The id state-headings html is changed to the state that is selected
}