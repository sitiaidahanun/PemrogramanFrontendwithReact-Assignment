function process_argv() {
    const { argv } = process;
    const result = studentData(argv[2], argv[3]);

    return result;
}

function studentData(name, studentId) {
    let facultyList = [
        ["Fakultas Ekonomi", "Ekonomi"],
        ["Fakultas Ekonomi", "Manajemen"],
        ["Fakultas Ekonomi", "Akuntansi"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
        ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
        ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
        ["Fakultas Teknik", "Teknik Sipil"],
        ["Fakultas Teknik", "Arsitektur"],
        ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
        ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
        ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
    ];

    let programCode = studentId.slice(4, 6);
    let prody, faculty;

    switch (programCode) {
        case "21": [faculty, prody] = ["Fakultas Ekonomi", "Ekonomi"]; break;
        case "22": [faculty, prody] = ["Fakultas Ekonomi", "Manajemen"]; break;
        case "23": [faculty, prody] = ["Fakultas Ekonomi", "Akuntansi"]; break;
        case "31": [faculty, prody] = ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"]; break;
        case "32": [faculty, prody] = ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"]; break;
        case "33": [faculty, prody] = ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"]; break;
        case "41": [faculty, prody] = ["Fakultas Teknik", "Teknik Sipil"]; break;
        case "42": [faculty, prody] = ["Fakultas Teknik", "Arsitektur"]; break;
        case "51": [faculty, prody] = ["Fakultas Teknologi Informasi dan Sains", "Matematika"]; break;
        case "52": [faculty, prody] = ["Fakultas Teknologi Informasi dan Sains", "Fisika"]; break;
        case "53": [faculty, prody] = ["Fakultas Teknologi Informasi dan Sains", "Informatika"]; break;
        default:
            return "Invalid Student's ID";
    }

        // nama dosen pembimbing
        let thesisLecturer = getLecturer(prody);

        return {
            id: studentId,
            name: name,
            prody: prody,
            faculty: faculty,
            thesisLecturer: thesisLecturer
        };
}


function getLecturer(prody) {
    const lecturerList = [
        ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
        ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
        ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
        ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
        ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
        ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
        ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
        ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
        ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
        ["Liem Chin, SSi., MSi.", "Fisika"],
        ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
    ];

    // mencari dosen pembimbing berdasarkan program studi
    for (let lecturer of lecturerList) {
        if (lecturer[1] === prody) {
            return lecturer[0];
        }
    }
    return null;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentData,
    getLecturer,
};
