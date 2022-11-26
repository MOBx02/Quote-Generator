// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '“When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.”'
    ,
    person: ' Ansel Adams '
}, {
    quote: '“You dont make a photograph just with a camera. You bring to the act of photography all the pictures you have seen, the books you have read, the music you have heard, the people you have loved.”'
    ,
    person: 'Ansel Adams'
}, {
    quote: '“ When you photograph people in color, you photograph their clothes. But when you photograph people in Black and white, you photograph their souls!” '
    ,
    person: 'Ted Grant '
}, {
    quote: '“A picture is a secret about a secret, the more it tells you the less you know.”'
    ,
    person: 'Diane Arbus '
}, {
    quote: '“Taking pictures is savoring life intensely, every hundredth of a second.” '
    ,
    person: ' Marc Riboud '
}, {
    quote: '“You dont take a photograph, you make it.” '
    ,
    person: ' Ansel Adams '
}, {
    quote: '“The camera is an instrument that teaches people how to see without a camera.” '
    ,
    person: 'Dorothea Lange '
}, {
    quote: '“To photograph people is to violate them, by seeing them as they never see themselves, by having knowledge of them that they can never have; it turns people into objects that can be symbolically possessed. Just as a camera is a sublimation of the gun, to photograph someone is a subliminal murder - a soft murder, appropriate to a sad, frightened time.” '
    ,
    person: 'Susan Sontag'
}, {
    quote: '“Your first 10,000 photographs are your worst.” '
    ,
    person: ' Henri Cartier'
}, ]



btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);


    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})