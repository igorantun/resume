// Easter Egg
var styles = {
    bold: 'color: purple; font-weight: bold;',
    normal: 'color: purple;'
};

console.log('%cOh, so you like playing with the console?%c Maybe you should try saying hi :)', styles.bold, styles.normal);
console.log('');

var hi = function(){};
var myself = function(){};
var languages = function(){};
var technologies = function(){};
var frameworks = function(){};
var projects = function(){};
var social = function(){};
var translations = function(){};

hi.toString = function() {
    console.log('%cHey! So, you found my little secret, huh? I knew you were smart.', styles.bold);
    console.log('%cHere are some things you can do here:', styles.bold);
    console.log('%c\t hi           %c\t Shows this list', styles.bold, styles.normal);
    console.log('%c\t myself       %c\t Shows my baisc info', styles.bold, styles.normal);
    console.log('%c\t languages    %c\t Shows the languages I use', styles.bold, styles.normal);
    console.log('%c\t technologies %c\t Shows the technologiesI have experience with', styles.bold, styles.normal);
    console.log('%c\t frameworks   %c\t Shows the frameworks I like to use', styles.bold, styles.normal);
    console.log('%c\t projects     %c\t Shows a list of some projects of mine', styles.bold, styles.normal);
    console.log('%c\t social       %c\t Shows some of my social contacts', styles.bold, styles.normal);
    console.log('%c\t translations %c\t Shows some projects I have helped translating', styles.bold, styles.normal);
    return '';
};

myself.toString = function() {
    console.log('%cMe, myself and I - The basics:', styles.bold);
    console.log('%c\t Name      %c\t Igor Antun', styles.bold, styles.normal);
    console.log('%c\t Age       %c\t 15 years old. Yes.', styles.bold, styles.normal);
    console.log('%c\t Country   %c\t Brazil', styles.bold, styles.normal);
    console.log('%c\t Languages %c\t Brazilian Portuguese and English', styles.bold, styles.normal);
    return '';
};

languages.toString = function() {
    console.log('%cOk, here are the languages I work with:', styles.bold);
    console.log('%c\t Javascript', styles.bold);
    console.log('%c\t Python', styles.bold);
    console.log('%c\t C++', styles.bold);
    return '';
};

technologies.toString = function() {
    console.log('%cWanted know what I use for development? There you go:', styles.bold);
    console.log('%c\t Linux', styles.bold);
    console.log('%c\t Git', styles.bold);
    console.log('%c\t Node.JS', styles.bold);
    console.log('%c\t Sublime Text', styles.bold);
    return '';
};

frameworks.toString = function() {
    console.log('%cSometimes I like to work with frameworks as well..', styles.bold);
    console.log('%c\t jQuery', styles.bold);
    console.log('%c\t Express', styles.bold);
    console.log('%c\t Electron (Atom-Shell)', styles.bold);
    console.log('%c\t NW.JS', styles.bold);
    return '';
};

projects.toString = function() {
    console.log('%cSome interesting and sometimes useless stuff I\'ve made or contributed to:', styles.bold);
    console.log('%c\t Node-Chat      %c\t https://github.com/IgorAntun/node-chat', styles.bold, styles.normal);
    console.log('%c\t Unsplashify    %c\t https://github.com/IgorAntun/unsplashify', styles.bold, styles.normal);
    console.log('%c\t Node-Slack-IRC %c\t https://github.com/IgorAntun/node-slack-irc', styles.bold, styles.normal);
    console.log('%c\t Agar.io Clone  %c\t https://github.com/huytd/agar.io-clone', styles.bold, styles.normal);
    return '';
};

social.toString = function() {
    console.log('%cYou can stalk me in the following places, if you may:', styles.bold);
    console.log('%c\t Email         %c\t igorantunc@hotmail.com', styles.bold, styles.normal);
    console.log('%c\t Facebook      %c\t https://facebook.com/igorantunc', styles.bold, styles.normal);
    console.log('%c\t Twitter       %c\t https://twitter.com/igorantun', styles.bold, styles.normal);
    console.log('%c\t GitHub        %c\t https://github.com/igorantun', styles.bold, styles.normal);
    console.log('%c\t StackOverflow %c\t https://stackoverflow.com/users/4677119/igor-antun', styles.bold, styles.normal);
    console.log('%c\t LinkedIn      %c\t https://br.LinkedIn.com/in/igorantun', styles.bold, styles.normal);
    return '';
};

translations.toString = function() {
    console.log('%cThese are some projects I have helped translating', styles.bold);
    console.log('%c\t plug.dj', styles.bold);
    console.log('%c\t PopcornTime', styles.bold);
    return '';
};


// Scroller
function updateScroll(){
    var element = document.body;
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        element.scrollTop = element.scrollHeight;
    }
}


// Typewriter
var str = document.getElementById('code').innerHTML;
var i = 0;
var isTag;
var text;

document.getElementById('code').style.display = 'block';
(function type() {
    updateScroll();
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

    setTimeout(type, 20);
}());


// Didn't understand shit
var understood = false;

function explainPlease() {
    if(understood === false) {
        document.getElementById('code').style.display = 'none';
        document.getElementById('dummy').style.display = 'block';
        document.getElementById('explain').innerHTML = 'Ok I think I got it';
        understood = true;
    } else {
        document.body.style.background = '#23241f';
        document.getElementById('code').style.display = 'block';
        document.getElementById('dummy').style.display = 'none';
        document.getElementById('explain').innerHTML = 'What the ****?';
        understood = false;
    }
}
