const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(' Y');
console.log('  E');
console.log('   E');
console.log('    T');


});


// knock knock fbi..

var jokes = [
    { name: 'Hey fam! TargetedFox, you need to wait  to use that command again!' },

]

//choosing a random joke from the array

var knock = function() {
    var joke = jokes[Math.floor(Math.random() * jokes.length)]
    return formatJoke(joke)
}


function formatJoke(joke) {
    return [
        joke.name
    ].join('\n')
}
    

    client.on('message', (message) => {
        if (message.content.includes('Targetedfox')) {
            const msg = message.content.split(' ');


              message.channel.sendMessage(knock());
 
         
        }

    });    
//stonestan
var tonestans = [
    { name: 'Hey fam! stonestan, you need to wait  to use that command again!' },

]

//choosing a random joke from the array

var kick = function() {
    var tonestan = tonestans[Math.floor(Math.random() * tonestans.length)]
    return formatTonestan(tonestan)
}


function formatTonestan(tonestan) {
    return [
        tonestan.name
    ].join('\n')
}
    

    client.on('message', (message) => {
        if (message.content.includes('Stonestan')) {
            const msg = message.content.split(' ');


              message.channel.sendMessage(kick());
 
            
        }

    });    

//Robbin Olsson
var olssons = [
    { name: 'Hey fam! robbin olsson, you need to wait  to use that command again!' },

]

//choosing a random joke from the array

var dick = function() {
    var olsson = olssons[Math.floor(Math.random() * olssons.length)]
    return formatOlsson(olsson)
}


function formatOlsson(olsson) {
    return [
        olsson.name
    ].join('\n')
}
    

    client.on('message', (message) => {
        if (message.content.includes('Robbin Olsson')) {
            const msg = message.content.split(' ');


              message.channel.sendMessage(dick());
 
            
        }

    });    
//a cup of code

var brooks = [
    { name: 'Hey fam! aCupOfSaltTV, you need to wait  to use that command again!' },

]

//choosing a random joke from the array

var rock = function() {
    var brook = brooks[Math.floor(Math.random() * brooks.length)]
    return formatBrook(brook)
}


function formatBrook(brook) {
    return [
        brook.name
    ].join('\n')
}
    

    client.on('message', (message) => {
        if (message.content.includes('ACupOfSaltTV')) {
            const msg = message.content.split(' ');


              message.channel.sendMessage(rock());
 
         
        }

    });    
const token = process.env.TOKEN;
client.login('NDcwOTAzMDA0OTUwODIyOTMy.DjdEDg.RHanNvstTcTluH7AzE6IJx18ays');   

