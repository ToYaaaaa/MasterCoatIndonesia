// about us section
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
