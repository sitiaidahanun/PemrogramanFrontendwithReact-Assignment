function process_argv() {
    const { argv } = process;
    studentStatus(argv[2], argv[3]);
}

function studentStatus(name, studentId) {
    //kode fak
    const fakultas = {
        'FE': 'Fakultas Ekonomi',
        'FISIP': 'Fakultas Ilmu Sosial dan Politik',
        'FT': 'Fakultas Teknik',
        'FTIS': 'Fakultas Teknologi Informasi dan Sains',
    };

    //kode prodi
    const prodi = {
        '21': 'Ekonomi',
        '22': 'Manajemen',
        '23': 'Akuntansi',
        '31': 'Administrasi Publik',
        '32': 'Administrasi Bisnis',
        '33': 'Hubungan Internasional',
        '41': 'Teknik Sipil',
        '42': 'Arsitektur',
        '51': 'Matematika',
        '52': 'Fisika',
        '53': 'Informatika',
    };

    let kodeFakultas;
    if (studentId.startsWith('FISIP')) {
        kodeFakultas = studentId.substring(0, 5); // 5 karakter untuk FISIP
    } else if (studentId.startsWith('FTIS')) {
        kodeFakultas = studentId.substring(0, 4); // 4 karakter untuk FTIS
    } else {
        kodeFakultas = studentId.substring(0, 2); // 2 karakter untuk fakultas lainnya
    }
    
    const tahunTerdaftar = studentId.substring(kodeFakultas.length, kodeFakultas.length + 4); // 4 karakter setelah kode fakultas
    const kodeProdi = studentId.substring(kodeFakultas.length + 4, kodeFakultas.length + 6); // 2 karakter setelah tahun terdaftar
    
    // Mendapatkan nama fakultas dan program studi
    const fakultasName = fakultas[kodeFakultas];
    const prodiName = prodi[kodeProdi];

    // Validasi fakultas dan program studi
    if (!fakultasName) {
        return `Kode fakultas ${kodeFakultas} tidak ditemukan.`;
    }
    if (!prodiName) {
        return `Kode program studi ${kodeProdi} tidak ditemukan.`;
    }

    // Output
    return `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${prodiName} pada ${fakultasName} sejak tahun ${tahunTerdaftar}.`;
}

// Contoh pemanggilan fungsi
console.log(studentStatus("Siti Aida Hanun", "FE202321"));
console.log(studentStatus("Djarot Purnomo", "FISIP2011320091"));
console.log(studentStatus("Anshori Atmodiredjo", "FE2013220100"));

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = studentStatus;
