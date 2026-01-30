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
  }, 2000);
});
