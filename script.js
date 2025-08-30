let likes = 0;
const callCost = 20;
let copy = 0;

const copyHistory = document.getElementById("copy-count");
const clearHistoryBtn = document.getElementById("clear-btn");
const callHistoryList = document.getElementById("call-history-section");
const coinBalanceEl = document.getElementById('coin-balance');
const likesCountEl = document.getElementById('likes-count');

// Function for handle call
function makeCall(serviceName, serviceNum) {
    const newcoins = coinBalanceEl.innerText.trim();
    let coinint = parseInt(newcoins);

    // Check if the user has enough coins to make the call
    if (coinint >= callCost) {
        const nameText = serviceName;
        const numText = serviceNum;

        // Deduct the cost from the coin balance
        coinint -= callCost;
        coinBalanceEl.innerText = coinint;

        // Show alert with service details
        window.alert(`Calling ${nameText} at ${numText}`);

        // Create and append new call history item
        const newCallItem = document.createElement('div');
        newCallItem.className = 'bg-[#FAFAFA] rounded-lg flex items-center justify-between p-5 mt-2';

        const now = new Date();
        const time = now.toTimeString().split(' ')[0]; // Format as HH:MM:SS
        newCallItem.innerHTML = `
            <div>
                <h1 class="text-xl font-bold">${nameText}</h1>
                <p>${numText}</p>
            </div>
            <div class="text-lg">
                <p>${time}</p>
            </div>
        `;
        callHistoryList.appendChild(newCallItem);
    } else {
        window.alert("Insufficient Coins", "Sorry, you don't have enough coins to make this call. Each call costs 20 coins.");
    }
}

// Function for handle copy
function makeCopy(serviceNum){
    navigator.clipboard.writeText(serviceNum); // Copy actual number
    copy++;
    copyHistory.innerText = copy;
    window.alert(`Copied: ${serviceNum}`);
}

// Funtion for handle likes
function countLike(){
    const newlike = likesCountEl.innerText.trim();
    let likeInt = parseInt(newlike);
    likeInt = likes + 1;
    likesCountEl.textContent = likeInt;
}

// National Emergency handlers
const nationalcallButtons = document.getElementById('national-call-btn');
const nationalcopyButtons = document.getElementById('national-copy-btn');
const nationalHeart = document.getElementById("national-heart");
nationalcallButtons.addEventListener('click', () => {

    const name = document.getElementById('national-name').innerText;
    const number = document.getElementById('national-num').innerText;

    // Call the function with parameters
    makeCall(name, number);

});

nationalcopyButtons.addEventListener('click', () => {
    const number = document.getElementById('national-num').innerText;

    makeCopy(number);
})

nationalHeart.addEventListener('click', () => {
    countLike();    
})

// Police helpline handlers
const policecallButtons = document.getElementById('police-call-btn');
const policecopyButtons = document.getElementById('police-copy-btn');
const policeHeart = document.getElementById("police-heart");

policecallButtons.addEventListener('click', () => {

    const name = document.getElementById('police-service-name').innerText;
    const number = document.getElementById('police-service-num').innerText;

    // Call the function with parameters
    makeCall(name, number);

});

policecopyButtons.addEventListener('click', () => {
    const number = document.getElementById('police-service-num').innerText;
    makeCopy(number);
})

policeHeart.addEventListener('click', () => {
    countLike();    
})



// Fire handlers
const firecallButtons = document.getElementById('fire-call-btn');
const firecopyButtons = document.getElementById('fire-copy-btn');
const fireHeart = document.getElementById("fire-heart");

firecallButtons.addEventListener('click', () => {

    const name = document.getElementById('fire-service-name').innerText;
    const number = document.getElementById('fire-service-num').innerText;

    // Call the function with parameters
    makeCall(name, number);

});

firecopyButtons.addEventListener('click', () => {
    const number = document.getElementById('fire-service-num').innerText;
    makeCopy(number);
})

fireHeart.addEventListener('click', () => {
    countLike();    
})


//health Service handler
const healthcallButtons = document.getElementById('health-call-btn');
const healthcopyButtons = document.getElementById('health-copy-btn');
const healthHeart = document.getElementById("health-heart");

healthcallButtons.addEventListener('click', () => {

    const name = document.getElementById('health-service-name').innerText;
    const number = document.getElementById('health-service-num').innerText;

    // Call the function with parameters
    makeCall(name, number);

});

healthcopyButtons.addEventListener('click', () => {
    const number = document.getElementById('health-service-num').innerText; 
    makeCopy(number);
})

healthHeart.addEventListener('click', () => {
    countLike();    
})

// travel handler
const travelcallButtons = document.getElementById('travel-call-btn');
const travelcopyButtons = document.getElementById('travel-copy-btn');
const travelHeart = document.getElementById("travel-heart");

travelcallButtons.addEventListener('click', () => {

    const name = document.getElementById('travel-service-name').innerText;
    const number = document.getElementById('travel-service-num').innerText;

    // Call the function with parameters
    makeCall(name, number);

});

travelcopyButtons.addEventListener('click', () => {
    const number = document.getElementById('travel-service-num').innerText;
    makeCopy(number);
})

travelHeart.addEventListener('click', () => {
    countLike();    
})

//ngo handler
const ngocallButtons = document.getElementById('ngo-call-btn');
const ngocopyButtons = document.getElementById('ngo-copy-btn');
const ngoHeart = document.getElementById("ngo-heart");

ngocallButtons.addEventListener('click', () => {

    const name = document.getElementById('ngo-service-name').innerText;
    const number = document.getElementById('ngo-service-num').innerText;

    // Call the function with parameters
    makeCall(name, number);

});

ngocopyButtons.addEventListener('click', () => {
    const number = document.getElementById('ngo-service-num').innerText;
    makeCopy(number);
})

ngoHeart.addEventListener('click', () => {
    countLike();    
})


// clear button 
clearHistoryBtn.addEventListener('click', () => {
    callHistoryList.innerHTML = '';
});
