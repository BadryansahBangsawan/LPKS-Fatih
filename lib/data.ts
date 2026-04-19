export interface Program {
	id: string;
	slug: string;
	title: string;
	category: string;
	level: string;
	duration: string;
	durationWeeks: number;
	price: number;
	description: string;
	shortDesc: string;
	image: string;
	popular: boolean;
	featured: boolean;
	modules: { title: string; topics: string[] }[];
	skills: string[];
	instructorId: string;
	schedule: string;
	method: "offline" | "online" | "hybrid";
	certificate: string;
	jobOpportunities: string[];
}

export interface Instructor {
	id: string;
	name: string;
	role: string;
	specialization: string;
	experience: string;
	certifications: string[];
	bio: string;
	programIds: string[];
}

export interface Testimonial {
	id: string;
	name: string;
	program: string;
	company: string;
	role: string;
	quote: string;
	year: number;
}

export interface BlogPost {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	date: string;
	readTime: string;
	image: string;
}

export interface JobListing {
	id: string;
	company: string;
	role: string;
	location: string;
	type: string;
	programRequired: string;
	postedDate: string;
	logo: string;
}

// ─── PROGRAMS ────────────────────────────────────────────────────────────────

export const programs: Program[] = [
	{
		id: "p1",
		slug: "teknik-sepeda-motor",
		title: "Teknik Sepeda Motor",
		category: "Otomotif",
		level: "Pemula",
		duration: "3 Bulan",
		durationWeeks: 12,
		price: 3500000,
		description:
			"Program pelatihan teknik sepeda motor komprehensif yang mencakup sistem mesin, kelistrikan, dan perawatan kendaraan roda dua. Peserta akan belajar langsung di bengkel dengan peralatan industri terkini, dipandu instruktur bersertifikat nasional.",
		shortDesc: "Kuasai teknik mekanik sepeda motor dari dasar hingga level profesional.",
		image: "/Operation and project/1.png",
		popular: true,
		featured: true,
		modules: [
			{
				title: "Dasar Mesin Sepeda Motor",
				topics: ["Komponen mesin 4-tak", "Sistem pembakaran", "Karburator & fuel injection"],
			},
			{
				title: "Sistem Kelistrikan",
				topics: ["Wiring diagram", "Sistem pengisian", "Sistem starter"],
			},
			{
				title: "Perawatan & Servis",
				topics: ["Tune-up berkala", "Ganti oli & filter", "Balancing ban"],
			},
			{
				title: "Diagnosa & Perbaikan",
				topics: ["Diagnosa kerusakan", "Overhoul mesin", "Perbaikan transmisi"],
			},
		],
		skills: [
			"Servis & tune-up motor",
			"Perbaikan sistem FI",
			"Diagnosa kelistrikan",
			"Overhoul mesin",
			"Bongkar pasang transmisi",
		],
		instructorId: "i1",
		schedule: "Senin–Jumat, 08.00–15.00 WIB",
		method: "offline",
		certificate: "Sertifikat Kompetensi BNSP Skema Teknik Sepeda Motor",
		jobOpportunities: ["Mekanik di dealer resmi", "Teknisi bengkel umum", "Wirausaha bengkel sendiri"],
	},
	{
		id: "p2",
		slug: "teknik-mekanik-mobil",
		title: "Teknik Mekanik Mobil",
		category: "Otomotif",
		level: "Menengah",
		duration: "4 Bulan",
		durationWeeks: 16,
		price: 5000000,
		description:
			"Pelatihan teknik otomotif roda empat mencakup mesin bensin & diesel, sistem transmisi, AC mobil, dan teknologi EFI modern. Sesuai standar Kemenaker dan siap bekerja di dealer resmi maupun bengkel independen.",
		shortDesc: "Jadilah mekanik mobil profesional siap kerja di industri otomotif.",
		image: "/Operation and project/2.png",
		popular: true,
		featured: true,
		modules: [
			{
				title: "Dasar Otomotif",
				topics: ["Teori mesin 4-tak & 2-tak", "Sistem bahan bakar", "Sistem pendingin"],
			},
			{
				title: "Mesin & Transmisi",
				topics: ["Overhoul mesin bensin", "Transmisi manual & otomatis", "Sistem kopling"],
			},
			{
				title: "Kelistrikan & AC Mobil",
				topics: ["Sistem kelistrikan ECU", "Diagnosa OBD2", "Perawatan & servis AC"],
			},
			{
				title: "Praktik Lapangan",
				topics: ["Servis berkala", "Tune-up komprehensif", "Magang di bengkel mitra"],
			},
		],
		skills: [
			"Overhoul mesin bensin/diesel",
			"Servis transmisi otomatis",
			"Diagnosa EFI & OBD2",
			"Servis AC mobil",
			"Perawatan sistem rem",
		],
		instructorId: "i2",
		schedule: "Senin–Sabtu, 08.00–15.00 WIB",
		method: "offline",
		certificate: "Sertifikat Kompetensi BNSP Skema Teknisi Otomotif",
		jobOpportunities: ["Mekanik dealer resmi", "Teknisi bengkel authorized", "Instruktur otomotif"],
	},
	{
		id: "p3",
		slug: "instalasi-listrik",
		title: "Instalasi Listrik Rumah & Gedung",
		category: "Kelistrikan",
		level: "Pemula",
		duration: "2 Bulan",
		durationWeeks: 8,
		price: 2500000,
		description:
			"Program instalasi listrik sesuai standar PLN dan PUIL 2011. Peserta mempelajari wiring rumah, panel listrik, grounding, dan keselamatan kerja. Cocok untuk teknisi listrik lapangan maupun wirausaha instalatir.",
		shortDesc: "Kuasai instalasi listrik rumah dan gedung sesuai standar PLN.",
		image: "/Sustainability/1.png",
		popular: false,
		featured: false,
		modules: [
			{
				title: "Dasar Kelistrikan",
				topics: ["Teori listrik AC/DC", "Komponen instalasi", "Standar PUIL 2011"],
			},
			{
				title: "Instalasi Rumah Tinggal",
				topics: ["Wiring 1 fasa", "Panel MCB", "Pemasangan stop kontak & saklar"],
			},
			{
				title: "Instalasi Gedung",
				topics: ["Instalasi 3 fasa", "Panel distribusi", "Grounding & lightning rod"],
			},
		],
		skills: [
			"Instalasi listrik rumah 1 fasa",
			"Pemasangan panel MCB",
			"Instalasi 3 fasa",
			"Grounding & proteksi",
			"Membaca diagram listrik",
		],
		instructorId: "i3",
		schedule: "Senin–Jumat, 08.00–14.00 WIB",
		method: "offline",
		certificate: "Sertifikat Kompetensi BNSP + SLO (Sertifikat Laik Operasi)",
		jobOpportunities: ["Teknisi listrik PLN", "Instalatir bersertifikat", "Kontraktor listrik"],
	},
	{
		id: "p4",
		slug: "it-support-networking",
		title: "IT Support & Networking",
		category: "Teknologi Informasi",
		level: "Pemula",
		duration: "3 Bulan",
		durationWeeks: 12,
		price: 4000000,
		description:
			"Pelatihan IT Support mencakup troubleshooting hardware, instalasi OS, jaringan komputer (LAN/WAN), dan keamanan siber dasar. Sesuai kurikulum CompTIA A+ dan Cisco CCNA Foundation.",
		shortDesc: "Menjadi IT Support profesional yang siap kerja di perusahaan manapun.",
		image: "/News and blog section/1.png",
		popular: true,
		featured: true,
		modules: [
			{
				title: "Hardware & OS",
				topics: ["Komponen PC & laptop", "Instalasi Windows & Linux", "Troubleshooting hardware"],
			},
			{
				title: "Jaringan Komputer",
				topics: ["TCP/IP dasar", "Konfigurasi router & switch", "LAN/WAN setup"],
			},
			{
				title: "Keamanan Jaringan",
				topics: ["Firewall & VPN", "Backup & recovery", "Keamanan siber dasar"],
			},
			{
				title: "Cloud & Helpdesk",
				topics: ["Dasar cloud computing", "Ticketing system", "Komunikasi pengguna"],
			},
		],
		skills: [
			"Troubleshooting hardware/software",
			"Konfigurasi jaringan LAN",
			"Setup server Windows",
			"Keamanan siber dasar",
			"Cloud service management",
		],
		instructorId: "i4",
		schedule: "Senin–Jumat, 08.00–16.00 WIB",
		method: "hybrid",
		certificate: "Sertifikat Kompetensi BNSP + Cisco Networking Basics",
		jobOpportunities: ["IT Support perusahaan", "Network technician", "Helpdesk officer"],
	},
	{
		id: "p5",
		slug: "las-smaw",
		title: "Las SMAW (Elektroda Terbungkus)",
		category: "Pengelasan",
		level: "Pemula",
		duration: "2 Bulan",
		durationWeeks: 8,
		price: 3000000,
		description:
			"Pelatihan pengelasan SMAW (Shielded Metal Arc Welding) sesuai standar AWS dan ASME. Peserta berlatih langsung dengan mesin las industri pada berbagai posisi pengelasan. Sertifikat BNSP diakui industri.",
		shortDesc: "Jadilah welder bersertifikat yang dicari industri manufaktur dan konstruksi.",
		image: "/Sustainability/2.png",
		popular: false,
		featured: false,
		modules: [
			{
				title: "Dasar Pengelasan",
				topics: ["Keselamatan kerja las", "Mesin & elektroda SMAW", "Metalurgi dasar"],
			},
			{
				title: "Teknik Pengelasan",
				topics: ["Sambungan butt & fillet", "Posisi 1G, 2G, 3G", "Kontrol distorsi"],
			},
			{
				title: "Inspeksi & Quality",
				topics: ["Visual inspection", "WPS & PQR", "Dokumentasi pengelasan"],
			},
		],
		skills: [
			"Las SMAW posisi 1G–4G",
			"Membaca drawing & WPS",
			"Inspeksi visual sambungan",
			"K3 pengelasan",
			"Las struktural & pipa",
		],
		instructorId: "i5",
		schedule: "Senin–Sabtu, 07.00–13.00 WIB",
		method: "offline",
		certificate: "Sertifikat Juru Las BNSP Tingkat I",
		jobOpportunities: ["Welder industri migas", "Fabrikasi baja", "Konstruksi kapal"],
	},
	{
		id: "p6",
		slug: "tata-busana",
		title: "Tata Busana & Fashion Design",
		category: "Tata Busana",
		level: "Pemula",
		duration: "4 Bulan",
		durationWeeks: 16,
		price: 3500000,
		description:
			"Program tata busana komprehensif mulai dari menggambar desain, pembuatan pola, menjahit, hingga produksi garmen. Diajarkan oleh desainer berpengalaman dengan jaringan ke industri fashion lokal.",
		shortDesc: "Wujudkan kreativitas menjadi karir di industri fashion dan garmen.",
		image: "/Sustainability/3.png",
		popular: false,
		featured: false,
		modules: [
			{
				title: "Desain & Pola",
				topics: ["Gambar mode dasar", "Analisis bentuk tubuh", "Pembuatan pola dasar"],
			},
			{
				title: "Teknik Menjahit",
				topics: ["Penggunaan mesin jahit", "Teknik jahit tangan", "Finishing & obras"],
			},
			{
				title: "Produksi Garmen",
				topics: ["Marker & grading", "Quality control", "Standar industri garmen"],
			},
			{
				title: "Wirausaha Fashion",
				topics: ["Branding produk lokal", "Pemasaran digital", "Manajemen usaha kecil"],
			},
		],
		skills: [
			"Pembuatan pola manual & CAD",
			"Menjahit aneka model busana",
			"Desain fashion ilustrasi",
			"Quality control garmen",
			"Digital marketing produk fashion",
		],
		instructorId: "i6",
		schedule: "Senin–Jumat, 08.00–15.00 WIB",
		method: "offline",
		certificate: "Sertifikat Kompetensi BNSP Skema Menjahit Busana",
		jobOpportunities: ["Desainer fashion lokal", "QC garmen pabrik", "Wirausaha butik"],
	},
];

// ─── INSTRUCTORS ─────────────────────────────────────────────────────────────

export const instructors: Instructor[] = [
	{
		id: "i1",
		name: "Bpk. Hendra Kusuma",
		role: "Instruktur Senior",
		specialization: "Teknik Sepeda Motor",
		experience: "14 Tahun",
		certifications: ["Asesor BNSP", "Sertifikat Kompetensi Honda AHM", "Master Technician Yamaha"],
		bio: "Mantan mekanik senior di PT Astra Honda selama 8 tahun sebelum berdedikasi penuh sebagai instruktur. Telah melatih lebih dari 400 peserta yang kini tersebar di berbagai dealer dan bengkel seluruh Indonesia.",
		programIds: ["p1"],
	},
	{
		id: "i2",
		name: "Bpk. Ridwan Santoso",
		role: "Instruktur Senior",
		specialization: "Teknik Otomotif Mobil",
		experience: "12 Tahun",
		certifications: ["Asesor BNSP", "Sertifikat Toyota Technical Education", "Master Technician Mitsubishi"],
		bio: "Berpengalaman sebagai kepala mekanik di bengkel authorized Toyota selama satu dekade. Ahli dalam diagnosa EFI modern dan teknologi kendaraan listrik.",
		programIds: ["p2"],
	},
	{
		id: "i3",
		name: "Bpk. Agus Pramono",
		role: "Instruktur",
		specialization: "Instalasi Listrik",
		experience: "10 Tahun",
		certifications: ["Asesor BNSP Kelistrikan", "SLO PLN", "Sertifikat PUIL 2011"],
		bio: "Insinyur listrik berpengalaman dengan rekam jejak di proyek infrastruktur PLN. Spesialis instalasi gedung komersial dan panel distribusi industri.",
		programIds: ["p3"],
	},
	{
		id: "i4",
		name: "Ibu Dian Permata",
		role: "Instruktur",
		specialization: "IT & Networking",
		experience: "8 Tahun",
		certifications: ["CompTIA A+", "Cisco CCNA", "Microsoft Certified: Azure Fundamentals"],
		bio: "Mantan network engineer di perusahaan telekomunikasi nasional. Berpengalaman dalam implementasi jaringan enterprise dan cloud infrastructure.",
		programIds: ["p4"],
	},
	{
		id: "i5",
		name: "Bpk. Slamet Widodo",
		role: "Instruktur Senior",
		specialization: "Pengelasan SMAW/MIG",
		experience: "16 Tahun",
		certifications: ["AWS Certified Welder", "Juru Las BNSP Level III", "CSWIP 3.1 Inspector"],
		bio: "Welder profesional dengan pengalaman di industri migas dan fabrikasi baja offshore. Terbiasa melatih sesuai standar internasional AWS D1.1 dan ASME.",
		programIds: ["p5"],
	},
	{
		id: "i6",
		name: "Ibu Sari Wulandari",
		role: "Instruktur",
		specialization: "Tata Busana & Fashion",
		experience: "9 Tahun",
		certifications: ["Asesor BNSP Tata Busana", "Sertifikat ESMOD Indonesia", "Fashion Design LSPR"],
		bio: "Desainer fashion aktif dengan brand lokal sendiri. Mengajar dengan pendekatan industri nyata — dari desain konsep hingga produksi massal untuk pasar lokal dan ekspor.",
		programIds: ["p6"],
	},
];

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
	{
		id: "t1",
		name: "Rizal Maulana",
		program: "Teknik Sepeda Motor",
		company: "Dealer Honda Resmi",
		role: "Kepala Mekanik",
		quote:
			"Hanya dalam 3 bulan, saya mendapat ilmu yang setara 2 tahun di SMK. Sekarang sudah jadi kepala mekanik di dealer Honda. Instrukturnya sabar dan pengalaman di industri nyata.",
		year: 2024,
	},
	{
		id: "t2",
		name: "Fitri Handayani",
		program: "IT Support & Networking",
		company: "PT Telkom Indonesia",
		role: "Network Technician",
		quote:
			"Saya lulusan SMA yang tidak tahu apapun soal IT. Setelah 3 bulan di LPKS, langsung dapat kerja di Telkom. Materinya praktis, langsung aplikatif untuk dunia kerja.",
		year: 2024,
	},
	{
		id: "t3",
		name: "Bagas Setiawan",
		program: "Teknik Mekanik Mobil",
		company: "Bengkel Toyota Authorized",
		role: "Senior Technician",
		quote:
			"Fasilitas bengkel latih-nya luar biasa. Mesin yang dipakai latihan sama persis dengan yang ada di bengkel sesungguhnya. Gaji pertama saya lebih dari UMR karena sertifikat BNSP yang saya miliki.",
		year: 2023,
	},
	{
		id: "t4",
		name: "Dewi Astuti",
		program: "Tata Busana & Fashion Design",
		company: "Studio Busana Sendiri",
		role: "Pemilik Usaha",
		quote:
			"Awalnya cuma hobi menjahit. Setelah ikut pelatihan, saya buka butik sendiri. Sekarang sudah punya 3 karyawan dan melayani pesanan dari seluruh kota.",
		year: 2024,
	},
	{
		id: "t5",
		name: "Ahmad Fauzi",
		program: "Las SMAW",
		company: "PT Pertamina Hulu Energi",
		role: "Welder Industri",
		quote:
			"Berkat sertifikat las BNSP dari LPKS, saya bisa melamar ke perusahaan migas. Gajinya jauh di atas rata-rata. Pelatihan di sini benar-benar membuka jalan karir.",
		year: 2023,
	},
	{
		id: "t6",
		name: "Eko Prasetyo",
		program: "Instalasi Listrik",
		company: "CV Jaya Elektrik",
		role: "Kontraktor Instalatir",
		quote:
			"Sekarang saya punya usaha instalasi listrik sendiri. Dalam sebulan bisa menangani 4–6 proyek rumahan. Modal ilmu dari LPKS, modal alat dari tabungan sendiri.",
		year: 2024,
	},
];

// ─── BLOG POSTS ──────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
	{
		id: "b1",
		slug: "tips-sukses-mekanik-motor",
		title: "5 Tips Menjadi Mekanik Motor yang Dicari Dealer Resmi",
		excerpt: "Tidak cukup hanya bisa servis. Pelajari apa saja yang benar-benar dilihat HRD dealer Honda dan Yamaha saat rekrutmen.",
		category: "Karir Otomotif",
		date: "12 April 2025",
		readTime: "5 menit",
		image: "/Operation and project/1.png",
	},
	{
		id: "b2",
		slug: "gaji-it-support-indonesia",
		title: "Berapa Gaji IT Support di Indonesia Tahun 2025?",
		excerpt: "Data terbaru kisaran gaji IT Support fresh graduate hingga senior di berbagai kota besar Indonesia.",
		category: "Info Karir",
		date: "5 April 2025",
		readTime: "4 menit",
		image: "/News and blog section/1.png",
	},
	{
		id: "b3",
		slug: "sertifikat-bnsp-keuntungan",
		title: "Mengapa Sertifikat BNSP Lebih Berharga dari Ijazah SMK?",
		excerpt: "Di dunia kerja, kompetensi yang dibuktikan lebih bernilai. Inilah mengapa sertifikat BNSP menjadi syarat rekrutmen banyak perusahaan nasional.",
		category: "Pendidikan Vokasi",
		date: "28 Maret 2025",
		readTime: "6 menit",
		image: "/Operation and project/2.png",
	},
	{
		id: "b4",
		slug: "peluang-karir-welder",
		title: "Peluang Karir Welder di Industri Migas & Konstruksi 2025",
		excerpt: "Demand welder bersertifikat terus meningkat seiring proyek infrastruktur nasional. Ini kesempatan emas yang belum banyak disadari.",
		category: "Peluang Kerja",
		date: "20 Maret 2025",
		readTime: "5 menit",
		image: "/Sustainability/1.png",
	},
];

// ─── JOB LISTINGS ────────────────────────────────────────────────────────────

export const jobListings: JobListing[] = [
	{
		id: "j1",
		company: "PT Astra Honda Motor",
		role: "Mekanik Dealer Honda",
		location: "Yogyakarta, Jawa Tengah",
		type: "Full-time",
		programRequired: "Teknik Sepeda Motor",
		postedDate: "10 April 2025",
		logo: "/Logo.png",
	},
	{
		id: "j2",
		company: "PT Telkom Indonesia",
		role: "Network Field Technician",
		location: "DIY & Sekitarnya",
		type: "Full-time",
		programRequired: "IT Support & Networking",
		postedDate: "8 April 2025",
		logo: "/Logo.png",
	},
	{
		id: "j3",
		company: "PT Pertamina Hulu Energi",
		role: "Welder SMAW – Proyek Migas",
		location: "Kalimantan Timur",
		type: "Project-based",
		programRequired: "Las SMAW",
		postedDate: "5 April 2025",
		logo: "/Logo.png",
	},
	{
		id: "j4",
		company: "CV Maju Jaya Konstruksi",
		role: "Teknisi Listrik Lapangan",
		location: "Yogyakarta",
		type: "Full-time",
		programRequired: "Instalasi Listrik",
		postedDate: "3 April 2025",
		logo: "/Logo.png",
	},
	{
		id: "j5",
		company: "Bengkel Toyota Nasmoco",
		role: "Junior Automotive Technician",
		location: "Solo, Jawa Tengah",
		type: "Full-time",
		programRequired: "Teknik Mekanik Mobil",
		postedDate: "1 April 2025",
		logo: "/Logo.png",
	},
];

// ─── PARTNERS ────────────────────────────────────────────────────────────────

export const partners = [
	"PT Astra Honda Motor",
	"PT Toyota Astra Motor",
	"PT Telkom Indonesia",
	"PT Pertamina",
	"Nasmoco Group",
	"PT PLN (Persero)",
	"CV Maju Konstruksi",
	"PT Indofood",
];

// ─── STATS ───────────────────────────────────────────────────────────────────

export const stats = [
	{ value: 1200, suffix: "+", label: "Alumni Terlatih" },
	{ value: 87, suffix: "%", label: "Tingkat Penempatan Kerja" },
	{ value: 45, suffix: "+", label: "Mitra Perusahaan" },
	{ value: 12, suffix: "", label: "Program Aktif" },
];
