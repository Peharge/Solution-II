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

    // Führe die Batch-Datei aus
    fetch('/run-python')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data); // Ausgabe der Batch-Datei
            alert(data); // Zeigt die Ausgabe in einem Popup
        })
        .catch(error => console.error('Error:', error));
});

// Event Listener für das Schließen des Modals beim Klicken auf das "X"
document.getElementById('close-modal').addEventListener('click', () => {
    modalOverlay.style.display = 'none'; // Modal ausblenden
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