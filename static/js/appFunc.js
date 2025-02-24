// appFunc.js

// Grab sections
const section1 = document.getElementById('section1');
const section2a = document.getElementById('section2a');
const section3 = document.getElementById('section3a');
// Grab buttons
const toSection2aBtn = document.getElementById('toSection2aBtn');
const toSection3aBtn = document.getElementById('toSection3aBtn');
const newCategoryBtn = document.getElementById('newCategoryBtn');
const newPromptBtn = document.getElementById('newPromptBtn');

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

// Navigation button events
toSection2aBtn.addEventListener('click', () => {
  fadeOut(section1, () => {
    fadeIn(section2a);
  });
});

toSection3aBtn.addEventListener('click', () => {
  fadeOut(section2a, () => {
    fadeIn(section3);
  });
});

newCategoryBtn.addEventListener('click', () => {
  fadeOut(section3, () => {
    fadeIn(section2a);
  });
});

newPromptBtn.addEventListener('click', () => {
  fadeOut(section3, () => {
    fadeIn(section1);
  });
});

// Mapping of categories to image filenames
const categoryImages = {
  Race: [
    "static/images/p1plots/google_gemma-2-2b-it_race.png",
    "static/images/p1plots/inceptionai_jais-family-1p3b-chat_race.png",
    "static/images/p1plots/meta-llama_Meta-Llama-3-8B-Instruct_race.png",
    "static/images/p1plots/OpenAI_gpt-3.5-turbo-0125_race.png",
    "static/images/p1plots/OpenAI_gpt-4o-2024-08-06_race.png"
  ],
  Occupation: [
    "static/images/p1plots/google_gemma-2-2b-it_occupation.png",
    "static/images/p1plots/inceptionai_jais-family-1p3b-chat_occupation.png",
    "static/images/p1plots/meta-llama_Meta-Llama-3-8B-Instruct_occupation.png",
    "static/images/p1plots/OpenAI_gpt-3.5-turbo-0125_occupation.png",
    "static/images/p1plots/OpenAI_gpt-4o-2024-08-06_occupation.png"
  ],
  LivingStatus: [
    "static/images/p1plots/google_gemma-2-2b-it_living_status.png",
    "static/images/p1plots/inceptionai_jais-family-1p3b-chat_living_status.png",
    "static/images/p1plots/meta-llama_Meta-Llama-3-8B-Instruct_living_status.png",
    "static/images/p1plots/OpenAI_gpt-3.5-turbo-0125_living_status.png",
    "static/images/p1plots/OpenAI_gpt-4o-2024-08-06_living_status.png"
  ],
  Gender: [
    "static/images/p1plots/google_gemma-2-2b-it_gender.png",
    "static/images/p1plots/inceptionai_jais-family-1p3b-chat_gender.png",
    "static/images/p1plots/meta-llama_Meta-Llama-3-8B-Instruct_gender.png",
    "static/images/p1plots/OpenAI_gpt-3.5-turbo-0125_gender.png",
    "static/images/p1plots/OpenAI_gpt-4o-2024-08-06_gender.png"
  ]
};

// Utility function: Fisher–Yates shuffle
function shuffleArray(array) {
  let arr = array.slice(); // create a copy so original order remains intact
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


