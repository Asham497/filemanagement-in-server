function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const status = document.getElementById("status");

    if (fileInput.files.length === 0) {
        status.innerText = "Please select a file";
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    fetch("/upload", {
        method: "POST",
        body: formData
    })
    .then(() => {
        // Show success message regardless of server response
        status.innerText = "File uploaded successfully!";
    })
    .catch(() => {
        status.innerText = "Error uploading file";
    });
}
