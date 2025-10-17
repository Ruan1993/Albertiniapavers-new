// --- Data Store for Product Modal ---
const productsData = [
  {
    name: "Bevel Pavers",
    description:
      "Our signature bevel pavers are designed for ease of installation and maximum interlock, making them ideal for high-traffic areas. They feature a bevelled edge for a traditional, clean look and excellent stability.",
    image:
      "https://huggingface.co/spaces/UnTam3d/neon-pavers-of-tomorrow/resolve/main/images/BOND-PAVER_GREY-SMALL_grande.png",
    fallbackImage:
      "https://placehold.co/800x400/050505/39FF14?text=Bevel+Pavers",
    specs: [
      "Dimensions: 200mm x 100mm",
      "Thickness Options: 60mm",
      "Application: Driveways, Walkways, Patios, Industrial",
      "Color Options: Charcoal, Grey, Tan",
    ],
  },
  {
    name: "Cement Bricks",
    description:
      "High-density, structurally sound cement bricks offering superior load-bearing capacity and consistency for robust construction projects. Essential for reliable foundations and walls.",
    image:
      "https://huggingface.co/spaces/UnTam3d/neon-pavers-of-tomorrow/resolve/main/images/Cement brick.png",
    fallbackImage:
      "https://placehold.co/800x400/050505/39FF14?text=Cement+Bricks",
    specs: [
      "Standard Size: 220mm x 70mm x 113mm",
      "Material: High-strength cement mix",
      "Application: Foundations, Walling (structural and non-structural)",
      "Durability: Excellent weather and wear resistance",
    ],
  },
  {
    name: "Interlocking Pavers",
    description:
      "The ultimate solution for industrial and heavy-duty applications. The unique interlocking shape provides exceptional lateral stability, preventing shifting and rutting under heavy loads.",
    image:
      "https://huggingface.co/spaces/UnTam3d/neon-pavers-of-tomorrow/resolve/main/images/Interlocking Pavers.png",
    fallbackImage:
      "https://placehold.co/800x400/050505/39FF14?text=Interlocking+Pavers",
    specs: [
      "Thickness: 60mm (Standard)",
      "Shape: 'S'shape for maximum interlock",
      "Application: Parkings, Industrial Parks, Driveways, etc.",
      "Color Options: Charcoal, Grey, Tan",
      "Strength: Designed for extreme load resistance",
    ],
  },
  {
    name: "Retaining Blocks (D-Shape)",
    description:
      "Durable and easy-to-install retaining blocks perfect for building garden tiers, stabilizing slopes, and creating landscape borders. Offers both structural integrity and aesthetic appeal.",
    image:
      "https://huggingface.co/spaces/UnTam3d/neon-pavers-of-tomorrow/resolve/main/images/Retaining blocks.png",
    fallbackImage:
      "https://placehold.co/800x400/050505/39FF14?text=Retaining+Blocks",
    specs: [
      "Shape: D-Shape/Cornerstone design",
      "Application: Garden retaining walls, Slope stabilization, Planters",
      "Stacking: Capable of building high, vertical walls",
      "Material: Weather-resistant concrete",
    ],
  },
  {
    name: "Building Blocks",
    description:
      "Cost-effective and large-format building blocks that speed up construction time without compromising on strength. Ideal for boundary walls and internal partitioning.",
    image:
      "https://huggingface.co/spaces/UnTam3d/neon-pavers-of-tomorrow/resolve/main/images/Building block.png",
    fallbackImage:
      "https://placehold.co/800x400/050505/39FF14?text=Building+Blocks",
    specs: [
      "Sizes: Jumbo",
      "Application: Boundary walls, Garages, Outbuildings",
      "Quantity: Fewer blocks needed per m² compared to bricks",
      "Insulation: Provides good thermal mass and sound dampening",
    ],
  },
];

// --- Utility Functions ---

/**
 * Initializes all Feather icons on the page.
 */
function initFeatherIcons() {
  feather.replace();
}

/**
 * Toggles the mobile navigation menu visibility.
 */
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
  const button = document.getElementById("mobileMenuButton");
  const icon = button.querySelector("i");
  if (menu.classList.contains("hidden")) {
    icon.setAttribute("data-feather", "menu");
  } else {
    icon.setAttribute("data-feather", "x");
  }
  initFeatherIcons(); // Re-render icons after change
}

/**
 * Toggles the open/closed state of an accordion item.
 * @param {HTMLElement} button - The button element that was clicked.
 */
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("i");

  content.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
}

/**
 * Updates the active state of navigation links based on scroll position.
 */
function updateActiveNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(
    ".nav-link, .mobile-nav-link"
  );
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // Offset for sticky nav
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}

// --- Home Slider Logic ---
let currentSlide = 0;
const slider = document.getElementById("slider");
const slides = slider ? slider.children : [];
const totalSlides = slides.length;

/**
 * Moves the main image slider to a specific index.
 * @param {number} index - The index of the slide to move to.
 */
function moveToSlide(index) {
  if (slider) {
    currentSlide = (index + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }
}

/**
 * Sets up event listeners for the main image slider controls.
 */
function setupHomeSlider() {
  document
    .getElementById("prevBtn")
    ?.addEventListener("click", () => moveToSlide(currentSlide - 1));
  document
    .getElementById("nextBtn")
    ?.addEventListener("click", () => moveToSlide(currentSlide + 1));
  // Auto-slide functionality
  setInterval(() => moveToSlide(currentSlide + 1), 6000); // Change slide every 6 seconds
}

// --- Product Slider Logic ---
let currentProductSlide = 0;
const productSliderEl = document.getElementById("productSlider");
const productSlides = productSliderEl ? productSliderEl.children : [];
const totalProductSlides = productSlides.length;
const productDots = document.querySelectorAll(
  "#productDotsContainer .product-dot"
);

/**
 * Moves the product slider to a specific index and updates the dots.
 * @param {number} index - The index of the slide to move to.
 */
function moveToProductSlide(index) {
  if (productSliderEl) {
    currentProductSlide =
      (index + totalProductSlides) % totalProductSlides;
    const offset = -currentProductSlide * 100;
    productSliderEl.style.transform = `translateX(${offset}%)`;

    productDots.forEach((dot) => {
      dot.classList.remove("bg-neon-green");
      dot.classList.add("bg-neon-green/30");
    });
    productDots[currentProductSlide]?.classList.add("bg-neon-green");
    productDots[currentProductSlide]?.classList.remove(
      "bg-neon-green/30"
    );
  }
}

/**
 * Sets up event listeners for the product slider controls and dots.
 */
function setupProductSlider() {
  document
    .getElementById("productPrevBtn")
    ?.addEventListener("click", () =>
      moveToProductSlide(currentProductSlide - 1)
    );
  document
    .getElementById("productNextBtn")
    ?.addEventListener("click", () =>
      moveToProductSlide(currentProductSlide + 1)
    );

  productDots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideIndex = parseInt(e.target.getAttribute("data-slide"));
      moveToProductSlide(slideIndex);
    });
  });

  // Initialize the first dot as active
  if (productDots.length > 0) moveToProductSlide(0);
}

// --- Product Modal Logic ---
const modal = document.getElementById("productModal");

/**
 * Opens the product detail modal with data for a specific product ID.
 * @param {number} productId - The index of the product in the productsData array.
 */
function openProductModal(productId) {
  const product = productsData[productId];
  if (!product) return;

  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalImage").src = product.image;
  // Fallback for image loading errors
  document.getElementById("modalImage").onerror = function () {
    this.onerror = null;
    this.src = product.fallbackImage;
  };
  document.getElementById("modalDescription").textContent =
    product.description;

  const specsList = document.getElementById("modalSpecs");
  specsList.innerHTML = "";
  product.specs.forEach((spec) => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });

  // Show the modal with transition
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    document.body.style.overflow = "hidden"; // Prevent scrolling background
  }, 10);
}

/**
 * Closes the product detail modal.
 */
function closeProductModal() {
  modal.classList.add("opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // Restore scrolling
  }, 300);
}

/**
 * Sets up click listeners for all product slides to open the modal.
 */
function setupProductModalListeners() {
  document.querySelectorAll(".product-slide").forEach((slide) => {
    slide.addEventListener("click", () => {
      const productId = parseInt(slide.getAttribute("data-product-id"));
      openProductModal(productId);
    });
  });
}

// --- Contact Form Logic ---
function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        messageBox.textContent =
          "Thank you! Your inquiry has been successfully sent. We will contact you shortly.";
        messageBox.className =
          "mt-4 p-4 text-center rounded-lg font-bold bg-green-900/50 text-shock-green border border-shock-green/50";
        messageBox.classList.remove("hidden");
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      messageBox.textContent =
        "Oops! There was a problem submitting your form. Please try again later.";
      messageBox.className =
        "mt-4 p-4 text-center rounded-lg font-bold bg-red-900/50 text-red-400 border border-red-400/50";
      messageBox.classList.remove("hidden");
    } finally {
      setTimeout(() => {
        messageBox.classList.add("hidden");
      }, 8000);
    }
  });
}
// --- Project Slider Logic ---
let currentProjectSlide = 0;
const projectSliderEl = document.getElementById("projectSliderEl");
const projectSlides = projectSliderEl ? projectSliderEl.children : [];
const totalProjectSlides = projectSlides.length;
const projectDots = document.querySelectorAll(
  "#projectDotsContainer .project-dot"
);

/**
 * Moves the project slider to a specific index and updates the dots.
 * @param {number} index - The index of the slide to move to.
 */
function moveToProjectSlide(index) {
  if (projectSliderEl) {
    currentProjectSlide =
      (index + totalProjectSlides) % totalProjectSlides;
    const offset = -currentProjectSlide * 100;
    projectSliderEl.style.transform = `translateX(${offset}%)`;

    projectDots.forEach((dot) => {
      dot.classList.remove("bg-neon-green");
      dot.classList.add("bg-neon-green/30");
    });
    projectDots[currentProjectSlide]?.classList.add("bg-neon-green");
    projectDots[currentProjectSlide]?.classList.remove(
      "bg-neon-green/30"
    );
  }
}

/**
 * Sets up event listeners for the project slider controls and dots.
 */
function setupProjectSlider() {
  document
    .getElementById("projectPrevBtn")
    ?.addEventListener("click", () =>
      moveToProjectSlide(currentProjectSlide - 1)
    );
  document
    .getElementById("projectNextBtn")
    ?.addEventListener("click", () =>
      moveToProjectSlide(currentProjectSlide + 1)
    );

  projectDots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideIndex = parseInt(e.target.getAttribute("data-slide"));
      moveToProjectSlide(slideIndex);
    });
  });

  // Initialize the first dot as active
  if (projectDots.length > 0) moveToProjectSlide(0);
}
// Back to Top Button Logic
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
  updateActiveNav(); // Keep existing scroll handler
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.classList.remove("opacity-0", "invisible");
    backToTopBtn.classList.add("opacity-100", "visible");
  } else {
    backToTopBtn.classList.remove("opacity-100", "visible");
    backToTopBtn.classList.add("opacity-0", "invisible");
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// --- Main Initialization ---
window.onload = function () {
  document.getElementById("currentYear").textContent =
    new Date().getFullYear();

  // 1. Initialize Feather Icons
  initFeatherIcons();

  // 2. Initialize Lozad.js (Lazy Loader) for images
  const observer = lozad(".lozad");
  observer.observe();

  // 3. Setup Event Listeners
  document
    .getElementById("mobileMenuButton")
    ?.addEventListener("click", toggleMobileMenu);
  window.addEventListener("scroll", updateActiveNav);
  setupHomeSlider();
  setupProductSlider();
  setupProjectSlider();
  setupProductModalListeners();
  setupContactForm();
  // 4. Close mobile menu on link click
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", toggleMobileMenu);
  });

  // Initial check for active nav link on page load
  updateActiveNav();
};