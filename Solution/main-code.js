const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const preview = document.getElementById('preview');
const takePhotoBtn = document.getElementById('take-photo');
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');

let photos = []; // Array zum Speichern der Fotos und Daten

// Start camera stream automatisch
async function startCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
}

// Initialisiere Kamera
startCamera();

// Funktion zum Bild aufnehmen
takePhotoBtn.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const image = canvas.toDataURL('image/png');
    const timestamp = new Date();

    // Füge das Bild und das Datum zum Array hinzu
    photos.push({ image, timestamp });

    // Zeige das Bild als Vorschaubild in der Taskleiste
    preview.src = image;
    preview.style.display = 'block';
});
// Event Listener für das Schließen des Modals beim Klicken auf das "X"
document.getElementById('close-modal').addEventListener('click', () => {
    modalOverlay.style.display = 'none'; // Modal ausblenden
    chatSolution.style.display = 'none'; // Modal ausblenden
});

// Vorschau der Bilder und das Öffnen des Modals
preview.addEventListener('click', () => {
    modalContent.innerHTML = ''; // Alte Inhalte löschen

    // Zeige alle gespeicherten Bilder im Modal
    photos.forEach(photo => {
        const date = new Date(photo.timestamp);
        const dateString = date.toLocaleString();

        const photoItem = `
            <div class="image-item">
                <img src="${photo.image}" alt="Photo">
                <div class="date">${dateString}</div> <!-- Datum auf dem Bild -->
            </div>
        `;

        modalContent.innerHTML += photoItem;
    });

    modalOverlay.style.display = 'flex'; // Modal anzeigen
});

// Finde den Button und das Div mit der Klasse chat-solution
const discord = document.getElementById('discord-button');
const swit = document.getElementById('ob-wbid');

// Füge ein Event hinzu, das die Klasse 'open' beim Klick auf den Button toggelt
discord.addEventListener('click', () => {
    swit.style.display = 'block';
});

//---mover wb---

const box = document.getElementById('ob-wbid');

// Variablen für die Position
let offsetX, offsetY;

// Maus gedrückt - Start des Verschiebens
box.addEventListener('mousedown', (e) => {
    // Berechnung der Differenz zwischen der Mausposition und der Boxposition
    offsetX = e.clientX - box.getBoundingClientRect().left;
    offsetY = e.clientY - box.getBoundingClientRect().top;

    // Mousemove und Mouseup-Events hinzufügen
    document.addEventListener('mousemove', moveBox);
    document.addEventListener('mouseup', stopMoving);
});

// Funktion zum Bewegen der Box
function moveBox(e) {
    box.style.left = `${e.clientX - offsetX}px`;
    box.style.top = `${e.clientY - offsetY}px`;
}

// Stoppen des Verschiebens
function stopMoving() {
    document.removeEventListener('mousemove', moveBox);
    document.removeEventListener('mouseup', stopMoving);
}

// Rechtsklick zum Verstecken der Box
box.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Verhindert das Standard-Kontextmenü
    box.style.display = 'none'; // Versteckt die Box
});


//---move-wetter

const weatherBox = document.getElementById('wetter');

// Variablen für die Position
let offsetXValue, offsetYValue;

// Maus gedrückt - Start des Verschiebens
weatherBox.addEventListener('mousedown', (e) => {
    // Berechnung der Differenz zwischen der Mausposition und der Boxposition
    offsetXValue = e.clientX - weatherBox.getBoundingClientRect().left;
    offsetYValue = e.clientY - weatherBox.getBoundingClientRect().top;

    // Mousemove und Mouseup-Events hinzufügen
    document.addEventListener('mousemove', moveWeatherBox);
    document.addEventListener('mouseup', stopMovingWeatherBox);
});

// Funktion zum Bewegen der Box
function moveWeatherBox(e) {
    weatherBox.style.left = `${e.clientX - offsetXValue}px`;
    weatherBox.style.top = `${e.clientY - offsetYValue}px`;
}

// Stoppen des Verschiebens
function stopMovingWeatherBox() {
    document.removeEventListener('mousemove', moveWeatherBox);
    document.removeEventListener('mouseup', stopMovingWeatherBox);
}

// Rechtsklick zum Verstecken der Box
weatherBox.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Verhindert das Standard-Kontextmenü
    weatherBox.style.display = 'none'; // Versteckt die Box
});

//---verschibung-button-container---


//---verschibung-Chat---

const chatBox = document.getElementById('chatSolution');

// Variablen für die Position
let offsetXChat, offsetYChat;

// Maus gedrückt - Start des Verschiebens
chatBox.addEventListener('mousedown', (e) => {
    // Berechnung der Differenz zwischen der Mausposition und der Boxposition
    offsetXChat = e.clientX - chatBox.getBoundingClientRect().left;
    offsetYChat = e.clientY - chatBox.getBoundingClientRect().top;

    // Mousemove und Mouseup-Events hinzufügen
    document.addEventListener('mousemove', moveChatBox);
    document.addEventListener('mouseup', stopMovingChatBox);
});

// Funktion zum Bewegen der Box
function moveChatBox(e) {
    chatBox.style.left = `${e.clientX - offsetXChat}px`;
    chatBox.style.top = `${e.clientY - offsetYChat}px`;
}

// Stoppen des Verschiebens
function stopMovingChatBox() {
    document.removeEventListener('mousemove', moveChatBox);
    document.removeEventListener('mouseup', stopMovingChatBox);
}

// Rechtsklick zum Verstecken der Box
chatBox.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Verhindert das Standard-Kontextmenü
    chatBox.style.display = 'none'; // Versteckt die Box
});


//---verschiben-version---

const versionBox = document.getElementById('outer-solutionid');

// Variablen für die Position
let offsetXVersion, offsetYVersion;

// Maus gedrückt - Start des Verschiebens
versionBox.addEventListener('mousedown', (e) => {
    // Berechnung der Differenz zwischen der Mausposition und der Boxposition
    offsetXVersion = e.clientX - versionBox.getBoundingClientRect().left;
    offsetYVersion = e.clientY - versionBox.getBoundingClientRect().top;

    // Mousemove und Mouseup-Events hinzufügen
    document.addEventListener('mousemove', moveVersionBox);
    document.addEventListener('mouseup', stopMovingVersionBox);
});

// Funktion zum Bewegen der Box
function moveVersionBox(e) {
    versionBox.style.left = `${e.clientX - offsetXVersion}px`;
    versionBox.style.top = `${e.clientY - offsetYVersion}px`;
}

// Stoppen des Verschiebens
function stopMovingVersionBox() {
    document.removeEventListener('mousemove', moveVersionBox);
    document.removeEventListener('mouseup', stopMovingVersionBox);
}

// Rechtsklick zum Verstecken der Box
versionBox.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Verhindert das Standard-Kontextmenü
    versionBox.style.display = 'none'; // Versteckt die Box
});

//---verschiben-taskbar---

const taskBox = document.getElementById('button-containerid');

// Variablen für die Position
let offsetXTask, offsetYTask;

// Maus gedrückt - Start des Verschiebens
taskBox.addEventListener('mousedown', (e) => {
    // Berechnung der Differenz zwischen der Mausposition und der Boxposition
    offsetXTask = e.clientX - taskBox.getBoundingClientRect().left;
    offsetYTask = e.clientY - taskBox.getBoundingClientRect().top;

    // Mousemove und Mouseup-Events hinzufügen
    document.addEventListener('mousemove', moveTaskBox);
    document.addEventListener('mouseup', stopMovingTaskBox);
});

// Funktion zum Bewegen der Box
function moveTaskBox(e) {
    taskBox.style.left = `${e.clientX - offsetXTask}px`;
    taskBox.style.top = `${e.clientY - offsetYTask}px`;
}

// Stoppen des Verschiebens
function stopMovingTaskBox() {
    document.removeEventListener('mousemove', moveTaskBox);
    document.removeEventListener('mouseup', stopMovingTaskBox);
}

//---vergößern-button-container---

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const resizableDiv = document.getElementById("resizableDiv");
    const resizeHandle = document.createElement("div");
    resizeHandle.classList.add("resize-handle");
    resizableDiv.appendChild(resizeHandle);

    document.getElementById("button-containerid").addEventListener("contextmenu", (e) => {
        e.preventDefault(); // Verhindert das Standard-Kontextmenü
        resizableDiv.style.display = 'block'; // Zeige die resizable Box
    });

    let isResizing = false;

    resizeHandle.addEventListener("mousedown", (e) => {
        isResizing = true;
    });

    window.addEventListener("mouseup", () => {
        isResizing = false;
    });

    window.addEventListener("mousemove", (e) => {
        if (isResizing) {
            const rect = resizableDiv.getBoundingClientRect();
            const newWidth = e.clientX - rect.left;
            const newHeight = e.clientY - rect.top;

            resizableDiv.style.width = `${newWidth}px`;
            resizableDiv.style.height = `${newHeight}px`;
        }
    });
});




        // Finde den Button und das Div mit der Klasse chat-solution
const twitter = document.getElementById('twitter-button');
const wettera = document.getElementById('wetter');

// Füge ein Event hinzu, das die Klasse 'open' beim Klick auf den Button toggelt
twitter.addEventListener('click', () => {
    wettera.style.display = 'block';
});

const redit = document.getElementById('redit-button');
const chat = document.getElementById('chatSolution');

// Füge ein Event hinzu, das die Klasse 'open' beim Klick auf den Button toggelt
redit.addEventListener('click', () => {
    chat.style.display = 'block';
});

document.getElementById("closeBtn-chat").addEventListener("click", function() {
    var chatc = document.getElementById("chatSolution");
    chatc.style.display = "none";
});

const messenger = document.getElementById('messengerid-button');
const outer = document.getElementById('outer-solutionid');

// Füge ein Event hinzu, das die Klasse 'open' beim Klick auf den Button toggelt
messenger.addEventListener('click', () => {
    outer.style.display = 'block';
});

const ousolutionstickerter = document.getElementById('solution-stickerid');

// Füge ein Event hinzu, das die Klasse 'open' beim Klick auf den Button toggelt
messenger.addEventListener('click', () => {
    solutionsticker.style.display = 'block';
});

const solutionshop = document.getElementById('solution-shop');
const gallery = document.getElementById('gallery-containerid');

// Füge ein Event hinzu, das die Klasse 'open' beim Klick auf den Button toggelt
solutionshop.addEventListener('click', () => {
    gallery.style.display = 'block';
});


const search = document.getElementById('button-searchid');
const searchbar = document.getElementById('search-barid');

// Füge ein Event hinzu, das die Klasse 'open' beim Klick auf den Button toggelt
search.addEventListener('click', () => {
    searchbar.style.display = 'block';
});