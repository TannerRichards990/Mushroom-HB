// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    const name = friendInputEl.value;
    const newFriend = {
        name: name,
        satisfaction: 1,
    };

    if (newFriend.name === '') {
        newFriend.name = Math.floor(Math.random () * 3);
    }

    friendData.push(newFriend);
    friendInputEl.textContent = '';
    displayFriends();
});

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';

    // for each friend in state . . .
    for (let friend of friendData) {

        // use renderFriend to make a friendEl
        const friendEl = renderFriend(friend);

        // this is a clickable list, so . . .
        //     add an event listener to each friend
        
        friendEl.addEventListener('click', () => {
            if (mushroomCount <= 0){
                alert('No more mushrooms. Go forage some!');
            } else if (friend.satisfaction < 3 && mushroomCount > 0){
                friend.satisfaction++;
                mushroomCount--;
            }
    
            // if (friend.satisfaction < 3 && mushroomCount > 0) {
            //     friend.satisfaction++;
            //     mushroomCount--;

            displayFriends();
            displayMushrooms();
        });

        friendsEl.append(friendEl);
        
        
        
        
        
        //         and if the friend's satisfaction level is below 3 and you have mushrooms left
        //             increment the friends satisfaction and decrement your mushrooms
        //             then display your friends and mushrooms with the updated state

        // append the friendEl to the friends list in DOM
    }
}

function displayMushrooms() {
    mushroomsEl.textContent = '';

    for (let i = 0; i < mushroomCount; i++) {
        const mushroomCount = renderMushroom(mushroomsEl);

        mushroomsEl.append(mushroomCount);
        // for each mushroom in your mushroom state, render and append a mushroom
    }
}

displayFriends();
displayMushrooms();
