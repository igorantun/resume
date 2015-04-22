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



// Functions
var str = document.getElementById('code').innerHTML;
var i = 0;
var isTag;
var text;

document.getElementById('code').innerHTML = '';

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