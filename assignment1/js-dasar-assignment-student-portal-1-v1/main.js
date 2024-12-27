function krsApplication(name, programId, gpa) {
    // Mengonversi GPA dari string ke float
    gpa = parseFloat(gpa);
    
    // Mendefinisikan prodi berdasarkan programId
    const programNames = {
        "ACC": "Akuntansi",
        "HIN": "Hubungan Internasional",
        "IAB": "Ilmu Administrasi Bisnis",
        "IAP": "Ilmu Administrasi Publik",
        "MJN": "Manajemen",
        "TKM": "Teknik Kimia"
    };

    // Validasi GPA
    if (gpa > 4 || gpa < 0) {
        return "Invalid gpa number"; // Kembalikan pesan jika GPA tidak valid
    }

    let totalSks;
    let message;

    // Menentukan jumlah SKS berdasarkan GPA
    if (gpa >= 3) {
        totalSks = 24;
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${totalSks} SKS untuk semester depan.`;
    } else {
        if (gpa >= 2.5) {
            totalSks = 21;
        } else if (gpa >= 2) {
            totalSks = 18;
        } else if (gpa >= 1.5) {
            totalSks = 15;
        } else {
            totalSks = 12;
        }
        message = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${programNames[programId]} dan hanya dapat mengambil SKS sebanyak ${totalSks} SKS untuk semester depan.`;
    }

    return message; // Kembalikan pesan sebagai output dari fungsi
}

// Fungsi untuk memproses input dari terminal
function process_argv() {
    const args = process.argv.slice(2);
    if (args.length !== 3) {
        console.error("Usage: node main.js \"name\" \"programId\" \"gpa\"");
        return;
    }
    const [name, programId, gpa] = args;
    console.log(krsApplication(name, programId, gpa)); // Tampilkan output di terminal
}

// Memanggil fungsi process_argv untuk menjalankan program
process_argv();

module.exports = krsApplication;
