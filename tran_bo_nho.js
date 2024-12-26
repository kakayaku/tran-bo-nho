
let messages = ["Huy thấy nhớ em"];

function generateRandomNotifications() {
    let notificationCount = 100;

    for (let i = 0; i < notificationCount; i++) {
        setTimeout(() => {
            let notification = document.createElement("div");
            notification.className = 'notification';

            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            notification.innerHTML = `<div class="notification-header">
                                               <button class="minimize-btn" onclick="minimizeNotifications(this)">×</button>
                                               <span>Tràn bộ nhớ</span>
                                           </div>`;
            let text = document.createElement("p");
            text.textContent = randomMessage;
            notification.appendChild(text);

            let x = Math.min(Math.random() * window.innerWidth, window.innerWidth - 240);
            let y = Math.min(Math.random() * window.innerHeight, window.innerHeight - 160);
            notification.style.top = `${y}px`;
            notification.style.left = `${x}px`;

            document.body.appendChild(notification);
        }, i * 200);
    }
}

function minimizeNotifications(button) {
    let notification = button.closest(".notification");
    notification.style.display = "none";
}
