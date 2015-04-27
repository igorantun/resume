// Variables
var myself = {
    name: 'Igor Antun',
    age: 15,
    country: 'Brazil',
    languages: ['pt-BR', 'en-US']
};

var languages = [
    'Javascript',
    'Python',
    'C++'
];

var frameworks = [
    'jQuery',
    'Express',
    'Atom-Shell (Eletron)',
    'NW.JS'
];

var projects = {
    'node-chat': 'https://github.com/IgorAntun/node-chat',
    'unsplashify': 'https://github.com/IgorAntun/unsplashify',
    'node-slack-irc': 'https://github.com/IgorAntun/node-slack-irc'
};

var social = {
    'email': 'igorantunc@hotmail.com',
    'facebook': 'https://facebook.com/igorantunc',
    'twitter': 'https://twitter.com/igorantun',
    'github': 'https://github.com/igorantun',
    'stackoverflow': 'https://stackoverflow.com/users/4677119/igor-antun'
};

var translator = [
    'plug.dj',
    'PopcornTime'
];



// Typewriter
var str = document.getElementById('code').innerHTML;
var i = 0;
var isTag;
var text;

document.getElementById('code').style.display = 'block';
(function type() {
    text = str.slice(0, ++i);

    if(text === str)
        return document.getElementById('code').innerHTML += '<span id="cursor">|</span>';

    document.getElementById('code').innerHTML = text;

    var char = text.slice(-1);

    if(char === '<')
        isTag = true;

    if(char === '>')
        isTag = false;

    if(isTag)
        return type();


    hljs.highlightBlock(document.getElementById('code'));

    if(text.length !== str.length -1)
        document.getElementById('code').innerHTML += '|';

    setTimeout(type, 25);
}());


// Didn't understand shit
var understood = false;

function explainPlease() {
    if(understood === false) {
        //document.body.style.background = 'white';
        document.getElementById('code').style.display = 'none';
        document.getElementById('dummy').style.display = 'block';
        document.getElementById('explain').innerHTML = 'Ok I think I got it';
        understood = true;
    } else {
        document.body.style.background = '#23241f';
        document.getElementById('code').style.display = 'block';
        document.getElementById('dummy').style.display = 'none';
        document.getElementById('explain').innerHTML = 'I didn\'t understand sh*t';
        understood = false;
    }
}