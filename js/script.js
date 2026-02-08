// tentang kami section
const buttondescription = document.getElementById("buttondescription");
const bottomdescription = document.getElementById("bottom");

// menampilkan seluruh keterangan ketika di klik
buttondescription.addEventListener("click", () => {
  // kasih class active jika belum ada dan hapus jika sudah ada
  bottomdescription.classList.toggle("active");
  // ganti tulisan di button
  buttondescription.textContent = bottomdescription.classList.contains("active")
    ? "Read Less"
    : "Read More";
});

// project section
const track = document.querySelector(".project .track");
const slides = Array.from(document.querySelectorAll(".project .slide"));
const prevBtn = document.querySelector(".project-arrow.prev");
const nextBtn = document.querySelector(".project-arrow.next");

let currentIndex = 0;
const totalSlides = slides.length;

function updateSlide() {
  const offset = 100 * currentIndex;
  track.style.transform = `translateX(-${offset}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}, 5000);

// layanan section
const listlayanan = document.getElementById("list-layanan");

const layanan = {
  MEMBRANE: {
    title: "MEMBRANE BAKAR",
    items: [
      {
        img: "image/membrane1.png",
        name: "Waterproofing Membrane Bakar",
        text: "Waterproofing Membrane Bakar adalah metode pelapisan anti-air menggunakan membran khusus yang dipanaskan dan dilekatkan pada permukaan bangunan.Teknik ini menghasilkan lapisan pelindung yang kuat dan kedap air untuk mencegah rembesan dan kelembapan.",
      },
    ],
  },
  INJEKSI: {
    title: "Injeksi",
    items: [
      {
        img: "image/injeksi1.png",
        name: "Injeksi Grouting",
        text: "Injeksi Grouting adalah metode perbaikan dengan menyuntikkan material grouting ke dalam retakan atau rongga beton.Teknik ini memperkuat struktur, mengisi celah, dan mencegah kerusakan lebih lanjut.",
      },
      {
        img: "image/injeksi2.png",
        name: "Injeksi Epoxy",
        text: "Injeksi Epoxy adalah metode perbaikan beton dengan menyuntikkan epoxy berdaya rekat tinggi ke dalam retakan.Teknik ini mengembalikan kekuatan struktur, mencegah air dan korosi, serta memperpanjang umur bangunan.",
      },
      {
        img: "image/injeksi3.png",
        name: "Injeksi PU Polyurethane",
        text: "Injeksi Epoxy adalah metode perbaikan beton dengan Polyurethane (PU) Injection Foam adalah metode penyuntikan resin poliuretan ke retakan beton yang mengembang menjadi busa kedap air. Efektif menghentikan kebocoran serta memperkuat struktur pada area basah maupun kering.",
      },
    ],
  },
  EPOXY: {
    title: "Epoxy",
    items: [
      {
        img: "image/epoxy1.png",
        name: "Epoxy Lantai, Epoxy Silica/Anti Slip",
        text: "Epoxy Lantai adalah pelapis berbahan resin epoksi yang menghasilkan permukaan keras, mulus, dan tahan lama. Cocok untuk area industri, komersial, hingga rumah, dengan pilihan self-leveling dan multilayer.",
      },
    ],
  },
  COATING: {
    title: "Waterproofing Coating Dinding",
    items: [
      {
        img: "image/coating1.png",
        name: "Waterproofing Coating Dinding",
        text: "Waterproofing Coating Dinding adalah pelapisan cair untuk menciptakan lapisan kedap air pada permukaan dinding. Berfungsi mencegah rembesan dan melindungi bangunan dari kerusakan akibat air.",
      },
    ],
  },
};

let openCategory = null;

function showProducts(category) {
  if (openCategory === category) {
    listlayanan.style.display = "none";
    openCategory = null;
    return;
  }

  openCategory = category;
  listlayanan.style.display = "block";

  const itemsHTML = layanan[category].items
    .map(
      (item) => `
        <div class="product-card">
          <img src="${item.img}">
          <h4>${item.name}</h4>
          <p>${item.text}</p>
        </div>
      `,
    )
    .join("");

  listlayanan.innerHTML = `
    <h2>${layanan[category].title}</h2>
    <div class="product-items">${itemsHTML}</div>

  `;
}

// loader saat dibuka
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
    document.body.classList.remove("loading");
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, 1000);
});
