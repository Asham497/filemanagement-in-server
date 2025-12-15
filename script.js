function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const status = document.getElementById("status");

    if (fileInput.files.length === 0) {
        status.innerText = "Please select a file";
        return;
    }

    // Simulate file upload delay
    status.innerText = "Uploading...";
    setTimeout(() => {
        status.innerText = "File uploaded successfully!";
        fileInput.value = ""; // Clear file input
    }, 1000); // 1 second delay to simulate upload
}
