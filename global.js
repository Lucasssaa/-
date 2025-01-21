document.addEventListener('DOMContentLoaded', function() {
    var uploadButton = document.getElementById('uploadButton');
    // Utiliser checkFolderSelection lorsque le bouton est cliqué
    uploadButton.addEventListener('click', checkFolderSelection);

    function checkFolderSelection() {
        var selectedFolder = document.getElementById('destination-folder').value;
        if (selectedFolder === "") {
            alert('Veuillez sélectionner un dossier.');
        } else {
            document.getElementById('inputGroupFile02').click(); // Ouvrir la fenêtre de sélection de fichier
        }
    }
});