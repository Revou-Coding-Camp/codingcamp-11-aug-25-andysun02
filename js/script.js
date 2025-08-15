// Ganti sapaan otomatis dengan nama user
document.addEventListener("DOMContentLoaded", () => {
    let userName = prompt("Masukkan nama Anda:");
    if(userName) {
        document.getElementById("welcome-text").textContent = `Hi ${userName}, Welcome To Website`;
    }
});

// Validasi Form & Tampilkan Data
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let birthdate = document.getElementById("birthdate").value;
    let genderElement = document.querySelector('input[name="gender"]:checked');
    let message = document.getElementById("message").value.trim();

    if (!name || !birthdate || !genderElement || !message) {
        alert("Harap isi semua field!");
        return;
    }

    let gender = genderElement.value;

    let result = `
        <p><strong>Current time:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;

    document.getElementById("form-result").innerHTML = result;
});
