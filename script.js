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
    .then(response => {
        if (response.ok) {
            status.innerText = "File uploaded successfully!";
        } else {
            status.innerText = "Error uploading file";
        }
    })
    .catch(() => {
        status.innerText = "Error uploading file";
    });
}
