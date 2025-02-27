// Mapping of categories to image filenames
const categoryImages = {
  Race: [
    "static/images/p1plots/google_gemma-2-2b-it_race.png",
    "static/images/p1plots/inceptionai_jais-family-1p3b-chat_race.png",
    "static/images/p1plots/meta-llama_Meta-Llama-3-8B-Instruct_race.png",
    "static/images/p1plots/OpenAI_gpt-3.5-turbo-0125_race.png",
    "static/images/p1plots/OpenAI_gpt-4o-2024-08-06_race.png",
    "static/images/p1plots/OpenAI_gpt-4o-mini-2024-07-18_race.png"
  ],
  Occupation: [
    "static/images/p1plots/google_gemma-2-2b-it_occupation.png",
    "static/images/p1plots/inceptionai_jais-family-1p3b-chat_occupation.png",
    "static/images/p1plots/meta-llama_Meta-Llama-3-8B-Instruct_occupation.png",
    "static/images/p1plots/OpenAI_gpt-3.5-turbo-0125_occupation.png",
    "static/images/p1plots/OpenAI_gpt-4o-2024-08-06_occupation.png",
    "static/images/p1plots/OpenAI_gpt-4o-mini-2024-07-18_occupation.png"
  ],
  LivingStatus: [
    "static/images/p1plots/google_gemma-2-2b-it_living_status.png",
    "static/images/p1plots/inceptionai_jais-family-1p3b-chat_living_status.png",
    "static/images/p1plots/meta-llama_Meta-Llama-3-8B-Instruct_living_status.png",
    "static/images/p1plots/OpenAI_gpt-3.5-turbo-0125_living_status.png",
    "static/images/p1plots/OpenAI_gpt-4o-2024-08-06_living_status.png",
    "static/images/p1plots/OpenAI_gpt-4o-mini-2024-07-18_living_status.png"
  ],
  Gender: [
    "static/images/p1plots/google_gemma-2-2b-it_gender.png",
    "static/images/p1plots/inceptionai_jais-family-1p3b-chat_gender.png",
    "static/images/p1plots/meta-llama_Meta-Llama-3-8B-Instruct_gender.png",
    "static/images/p1plots/OpenAI_gpt-3.5-turbo-0125_gender.png",
    "static/images/p1plots/OpenAI_gpt-4o-2024-08-06_gender.png",
    "static/images/p1plots/OpenAI_gpt-4o-mini-2024-07-18_gender.png"
  ]
};

// Grab sections
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

// Grab buttons
const toSection2Btn = document.getElementById("toSection2Btn");
const toSection3Btn = document.getElementById("toSection3Btn");
const newCategoryBtn = document.getElementById("newCategoryBtn");
const newPromptBtn = document.getElementById("newPromptBtn");

// Fade out function
function fadeOut(element, callback) {
  element.style.transition = "opacity 0.5s ease-in-out";
  element.style.opacity = 1;
  requestAnimationFrame(() => {
    element.style.opacity = 0;
  });
  setTimeout(() => {
    element.style.display = "none";
    if (callback) callback();
  }, 500);
}

// Fade in function
function fadeIn(element) {
  element.style.display = "block";
  element.style.transition = "opacity 0.5s ease-in-out";
  requestAnimationFrame(() => {
    element.style.opacity = 1;
  });
}

// Function to update images in section3 based on the selected category
function updateImages() {
  const selectElement = document.querySelector('#cats');
  const category = selectElement.value;
  console.log("Selected category:", category);
  const images = categoryImages[category];
  const imagesContainer = document.querySelector('.images-container');
  imagesContainer.innerHTML = ""; // clear previous images

  if (images && images.length > 0) {
    images.forEach((imgSrc, index) => {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = "Graph " + (index + 1);
      imagesContainer.appendChild(img);
    });
  } else {
    imagesContainer.textContent = "No images available for this category.";
  }
}

// Navigation button events
toSection2Btn.addEventListener("click", () => {
  console.log("toSection2Btn clicked");
  fadeOut(section1, () => {
    fadeIn(section2);
  });
});

toSection3Btn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent form submission if button is inside a form
  console.log("toSection3Btn clicked");
  updateImages(); // update images based on selection
  fadeOut(section2, () => {
    fadeIn(section3);
  });
});

newCategoryBtn.addEventListener('click', () => {
  console.log("newCategoryBtn clicked");
  fadeOut(section3, () => {
    fadeIn(section2);
  });
});

newPromptBtn.addEventListener('click', () => {
  console.log("newPromptBtn clicked");
  fadeOut(section3, () => {
    fadeIn(section1);
  });
});


  