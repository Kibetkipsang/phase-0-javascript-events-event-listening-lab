// const input = document.getElementById('button');
// function clickAlert(){
//     alert('Hey that tickles')
// }
// input.addEventListener('click', clickAlert)

function addingEventListener(){
    const input = document.getElementById('button');
    input.addEventListener('click', () => alert ('Hey that tickles'))
}