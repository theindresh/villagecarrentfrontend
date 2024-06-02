import React from "react";


const HomeContent = () => {
  return (
    <div class="bg-home-bg text-home-primary-text p-6 mt-32">
    <h1 class="text-home-highlight">Welcome to My Dark Theme Landing Page</h1>
    <p class="text-home-secondary-text">This is a sample text with the secondary color.</p>
    <div class="bg-home-box-bg p-4 shadow-home-card">
      This is a card with custom shadow.
    </div>
    <a href="/" class="bg-home-linkbox-bg border-home-linkbox-border text-home-linkbox-text hover:bg-home-linkbox-hover-bg">
      Custom link box
    </a>
  </div>
  
  );
};

export default HomeContent;
