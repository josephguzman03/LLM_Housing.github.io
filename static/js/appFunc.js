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

const categoryImagespt2 = {
  Race: [
    "static/images/p2plots/google_gemma-2-2b-it_race.png",
    "static/images/p2plots/meta-llama_Llama-3.2-3B-Instruct_race.png",
    "static/images/p2plots/meta-llama_Meta-Llama-3-8B-Instruct_race.png",
    "static/images/p2plots/microsoft_Phi-3-mini-4k-instruct_race.png",
    "static/images/p2plots/OpenAI_gpt-3.5-turbo-0125_race.png",
    "static/images/p2plots/OpenAI_gpt-4o-2024-08-06_race.png",
    "static/images/p2plots/OpenAI_gpt-4o-mini-2024-07-18_race.png"
  ],
  Gender: [
    "static/images/p2plots/google_gemma-2-2b-it_gender.png",
    "static/images/p2plots/meta-llama_Llama-3.2-3B-Instruct_gender.png",
    "static/images/p2plots/meta-llama_Meta-Llama-3-8B-Instruct_gender.png",
    "static/images/p2plots/microsoft_Phi-3-mini-4k-instruct_gender.png",
    "static/images/p2plots/OpenAI_gpt-3.5-turbo-0125_gender.png",
    "static/images/p2plots/OpenAI_gpt-4o-2024-08-06_gender.png",
    "static/images/p2plots/OpenAI_gpt-4o-mini-2024-07-18_gender.png"
  ],
  CreditScore: [
    "static/images/p2plots/google_gemma-2-2b-it_credit_scores.png",
    "static/images/p2plots/meta-llama_Llama-3.2-3B-Instruct_credit_scores.png",
    "static/images/p2plots/meta-llama_Meta-Llama-3-8B-Instruct_credit_scores.png",
    "static/images/p2plots/microsoft_Phi-3-mini-4k-instruct_credit_scores.png",
    "static/images/p2plots/OpenAI_gpt-3.5-turbo-0125_credit_scores.png",
    "static/images/p2plots/OpenAI_gpt-4o-2024-08-06_credit_scores.png",
    "static/images/p2plots/OpenAI_gpt-4o-mini-2024-07-18_credit_scores.png"
  ],
  EvictionStatus: [
    "static/images/p2plots/google_gemma-2-2b-it_eviction.png",
    "static/images/p2plots/meta-llama_Llama-3.2-3B-Instruct_eviction.png",
    "static/images/p2plots/meta-llama_Meta-Llama-3-8B-Instruct_eviction.png",
    "static/images/p2plots/microsoft_Phi-3-mini-4k-instruct_eviction.png",
    "static/images/p2plots/OpenAI_gpt-3.5-turbo-0125_eviction.png",
    "static/images/p2plots/OpenAI_gpt-4o-2024-08-06_eviction.png",
    "static/images/p2plots/OpenAI_gpt-4o-mini-2024-07-18_eviction.png"
  ]
};



// Grab sections
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");

// Grab buttons
const toSection2Btn = document.getElementById("toSection2Btn");
const toSection3Btn = document.getElementById("toSection3Btn");
const toSection4Btn = document.getElementById("toSection4Btn");
const toSection5Btn = document.getElementById("toSection5Btn");
const newCategoryBtn = document.getElementById("newCategoryBtn");
const newPromptBtn = document.getElementById("newPromptBtn");
const newCategoryBtn5 = document.getElementById("newCategoryBtn5");
const newPromptBtn5 = document.getElementById("newPromptBtn5");

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

// Function to update images in section3 based on the selected category
function updateImagesSection5() {
  const selectElement = document.querySelector('#dogs');
  const category = selectElement.value;
  console.log("Selected category:", category);
  const images = categoryImagespt2[category];
  // Use section5 element to search for its images container
  const imagesContainer = section5.querySelector('.images-container');
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

toSection4Btn.addEventListener("click", () => {
  console.log("toSection4Btn clicked");
  fadeOut(section1, () => {
    fadeIn(section4);
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

toSection5Btn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent form submission if button is inside a form
  console.log("toSection5Btn clicked");
  updateImagesSection5(); // update images based on selection
  fadeOut(section4, () => {
    fadeIn(section5);
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


newCategoryBtn5.addEventListener('click', () => {
  console.log("newCategoryBtn5 clicked");
  fadeOut(section5, () => {
    fadeIn(section4);
  });
});

newPromptBtn5.addEventListener('click', () => {
  console.log("newPromptBtn5 clicked");
  fadeOut(section5, () => {
    fadeIn(section1);
  });
});
  