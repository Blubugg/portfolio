import user_image from './user-image.png';
import github_dark from "./github-dark.png";
import github_light from "./github-light.png";
import linkedin_dark from "./linkedin-dark.png";
import linkedin_light from "./linkedin-light.png";
import instagram_dark from "./instagram-dark.png";
import instagram_light from "./instagram-light.png";
import reactjs from "./tools/reactjs.png";
import nextjs from "./tools/nextjs.png";
import tailwind from "./tools/tailwind.png";
import javascript from "./tools/javascript.png";
import typescript from "./tools/typescript.png";
import laravel from "./tools/laravel.png";
import php from "./tools/php.png";
import css3 from "./tools/css3.png";
import html5 from "./tools/html5.png";
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import { desc } from 'motion/react-client';

export const assets = {
    user_image,
    github_dark,
    github_light,
    linkedin_dark,
    linkedin_light,
    instagram_dark,
    instagram_light,
    reactjs,
    nextjs,
    tailwind,
    javascript,
    typescript,
    laravel,
    php,
    css3,
    html5,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Fullstack Developer',
        description: 'Developed a room scheduling website for a government institution that enables users to efficiently book, manage, and monitor room availability. As a Fullstack Developer, I was responsible for designing the database, building the backend logic, and implementing a responsive user interface using Tailwind CSS. The system streamlined the room booking process and minimized schedule conflicts between users.',
        description_id: 'Mengembangkan situs web penjadwalan ruangan untuk lembaga pemerintahan yang memungkinkan pengguna memesan, mengelola, dan memantau ketersediaan ruangan dengan efisien. Sebagai Fullstack Developer, saya bertanggung jawab dalam perancangan basis data, pembuatan logika backend, serta implementasi antarmuka pengguna responsif menggunakan Tailwind CSS. Sistem ini membantu mempercepat proses pemesanan ruangan dan meminimalkan bentrokan jadwal antar pengguna.',
        bgImage: '/work-1.png',
        tools: ['PHP', 'Laravel', 'Tailwind CSS'],
        link: 'https://github.com/Blubugg/penjadwalan-ruangan'
    },
    {
        title: 'Frontend Developer',
        description: 'Developed a web-based flight booking system with a focus on creating an interactive and user-friendly interface. As a Frontend Developer, I implemented the UI using Tailwind CSS, ensuring all pages were responsive, intuitive, and consistent across the booking flow from flight search to payment confirmation.',
        description_id: 'Mengembangkan sistem pemesanan tiket penerbangan berbasis web dengan fokus pada antarmuka yang interaktif dan ramah pengguna. Sebagai Frontend Developer, saya mengimplementasikan antarmuka menggunakan Tailwind CSS, memastikan setiap halaman responsif, intuitif, dan konsisten dari pencarian penerbangan hingga konfirmasi pembayaran.',
        bgImage: '/work-2.png',
        tools: ['PHP', 'Laravel', 'Tailwind CSS'],
        link: 'https://github.com/nazaludinnr/t-plane'
    },
    {
        title: 'UI/UX Design',
        description: 'Designed the mobile interface for a mental health application called Teman Bicara, focusing on visual comfort and smooth user navigation. As a UI Designer, I created interactive prototypes in Figma, designed calming visual elements, and ensured that each component supports the app’s goal of promoting mental well-being through daily reflection and digital counseling features.',
        description_id: 'Merancang antarmuka mobile untuk aplikasi kesehatan mental bernama Teman Bicara dengan fokus pada kenyamanan visual dan kemudahan navigasi pengguna. Sebagai UI Designer, saya membuat prototipe interaktif di Figma, mendesain elemen visual yang menenangkan, dan memastikan setiap komponen mendukung tujuan aplikasi dalam meningkatkan kesejahteraan mental melalui refleksi harian dan fitur konseling digital.',
        bgImage: '/work-3.png',
        tools: ['Figma'],
        link: 'https://www.figma.com/design/wxlYuyhoxZ6jRfZkdMyuzS/RPL?node-id=0-1&t=LVn7xldxw2MFGJrS-1'
    },
];

export const toolsData = [
    assets.reactjs, assets.nextjs, assets.laravel, assets.typescript, assets.javascript, assets.php, assets.html5, assets.css3, assets.tailwind
];

export const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/Blubugg",
    icon: assets.github_light,
    icon_dark: assets.github_dark,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/valentinobanyu/",
    icon: assets.linkedin_light,
    icon_dark: assets.linkedin_dark,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/valent_nyubir/",
    icon: assets.instagram_light,
    icon_dark: assets.instagram_dark,
  },
];

export const navText = {
  en: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
  id: { home: "Beranda", about: "Tentang", projects: "Proyek", contact: "Kontak" },
};

export const headerText = {
  en: {
    hi: "Hi! I'm Valentino Banyu Biru",
    role: "UI/UX Designer and Frontend Web Developer.",
    desc: "I am a Fresh Graduate in Information Technology from Universitas Negeri Yogyakarta with a strong interest in UI/UX design and front-end web development.",
    contact: "Get In Touch",
    download: "Download CV",
  },
  id: {
    hi: "Halo! Saya Valentino Banyu Biru",
    role: "UI/UX Designer dan Frontend Web Developer.",
    desc: "Saya adalah lulusan baru dari Program Studi Teknologi Informasi Universitas Negeri Yogyakarta dengan minat yang kuat di bidang desain UI/UX dan pengembangan web front-end.",
    contact: "Hubungi Saya",
    download: "Unduh CV",
  },
};

export const aboutText = {
  en: {
    intro: "Introduction",
    about: "About Me",
    desc: `Hello! I’m a Fresh Graduate in Information Technology from Universitas Negeri Yogyakarta with a GPA of 3.6. Experienced as a Fullstack Web Developer through an internship at a government institution, focusing on a room scheduling system built with Laravel and Tailwind CSS. Passionate about technology and problem-solving, skilled in various programming languages, and adept at collaborating within a team. Committed to building user-centered digital solutions and currently seeking opportunities as a Frontend Web Developer.`,
  },
  id: {
    intro: "Profil Singkat",
    about: "Tentang Saya",
    desc: `Halo! Saya adalah lulusan baru Program Studi Teknologi Informasi dari Universitas Negeri Yogyakarta dengan IPK 3.6. Berpengalaman sebagai Fullstack Web Developer melalui magang di instansi pemerintahan, mengerjakan sistem penjadwalan ruangan menggunakan Laravel dan Tailwind CSS. Memiliki ketertarikan besar pada teknologi dan pemecahan masalah, mahir dalam berbagai bahasa pemrograman, serta terbiasa bekerja dalam tim. Berkomitmen untuk menciptakan solusi digital yang berpusat pada pengguna dan saat ini sedang mencari peluang sebagai Frontend Web Developer.`,
  },
};

export const projectsText = {
  en: {
    titleSmall: "My Portfolio",
    titleBig: "My Latest Projects",
    view: "View",
  },
  id: {
    titleSmall: "Portofolio Saya",
    titleBig: "Proyek Terbaru Saya",
    view: "Lihat",
  },
}

export const contactText = {
  en: {
    titleSmall: "Connect with me",
    titleBig: "Get in touch",
    desc: "I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    messagePlaceholder: "Enter your message",
    submit: "Submit now",
    sending: "Sending...",
    success: "Form Submitted Successfully",
  },
  id: {
    titleSmall: "Hubungi saya",
    titleBig: "Mari terhubung",
    desc: "Saya senang mendengar dari Anda! Jika Anda memiliki pertanyaan, komentar, atau masukan, silakan isi formulir di bawah ini.",
    namePlaceholder: "Masukkan nama Anda",
    emailPlaceholder: "Masukkan email Anda",
    messagePlaceholder: "Tulis pesan Anda di sini",
    submit: "Kirim sekarang",
    sending: "Mengirim...",
    success: "Formulir Berhasil Dikirim",
  },
}