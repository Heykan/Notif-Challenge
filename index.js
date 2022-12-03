const mark_read = document.getElementById('mark-read');
const unreads = document.querySelectorAll('.unread');
const notif_title = document.getElementById('notif-title');

notif_title.innerHTML += `<span id="nb-notif">${unreads.length}</span>`;

let count = unreads.length;

for (const unread of unreads) {
    console.log(unread)
    unread.addEventListener('click', () => {
        let nb_notif = document.getElementById('nb-notif');
        if(unread.classList.contains('unread'))
            count--;       
        unread.classList.remove('unread');

        if (count > 0)
            nb_notif.innerText = count;
        else
        if (nb_notif !== null)
            nb_notif.remove();
    });
}

mark_read.addEventListener('click', () => {
    let nb_notif = document.getElementById('nb-notif');
    if (nb_notif !== null)
        nb_notif.remove();
    unreads.forEach(unread => {
        unread.classList.remove('unread');
    });
});