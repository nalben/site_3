document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".reviews__stars");
  
    reviews.forEach(review => {
      let ratingText = review.querySelector("h6").textContent.trim().replace(',', '.');
      const rating = parseFloat(ratingText);
      const maxRating = 5;
      const percent = (rating / maxRating) * 100;
  
      const starsColor = review.querySelector(".stars__color");
      starsColor.style.width = `${percent}%`;
    });
  });
  