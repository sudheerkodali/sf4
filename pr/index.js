function loadScreenshots() {
    const folderPath = "path/to/kodali sumanth-personal/pictures/screenshots/SF/SF4"; // Replace with the actual folder path

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/png";
    fileInput.multiple = true;

    fileInput.addEventListener("change", function () {
        const files = fileInput.files;
        const screenshotContainer = document.getElementById("screenshot-container");

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = function (event) {
                const screenshotURL = event.target.result;
                const screenshotName = file.name;

                const anchor = document.createElement("a");
                anchor.href = screenshotURL;
                anchor.download = screenshotName;
                anchor.innerHTML = screenshotName;

                screenshotContainer.appendChild(anchor);
            };

            reader.readAsDataURL(file);
        }
    });

    fileInput.click();
}

// Call the function to load the screenshots
loadScreenshots();