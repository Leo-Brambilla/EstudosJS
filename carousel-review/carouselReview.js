const reviews = [
    { text: "Ótimo produto!", author: "João Silva", image: "../assets/img/man.jpg" },
    { text: "Produto chegou exatamente como esperado, entrega rápida e eficiente, vendedor atencioso e educado", author: "Maria Santos", image: "../assets/img/woman.jpg" },
    { text: "Produto de ótima qualidade!", author: "Pedro Oliveira", image: "../assets/img/man2.jpg" },
    { text: "Recomendo a todos!", author: "Ana Carvalho", image: "../assets/img/woman2.jpg" },
    { text: "Ótimo atendimento!", author: "Lucas Costa", image: "../assets/img/man3.jpg" }
    ];
  
  const showReview = function(review) {
    const reviewText = document.querySelector("#review-text");
    const reviewAuthor = document.querySelector("#review-author");
    const reviewImage = document.querySelector("#review-image");
    
    reviewText.textContent = review.text;
    reviewAuthor.textContent = review.author;
    reviewImage.setAttribute("src", review.image);
  };
  
  const getRandomReview = function() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    return reviews[randomIndex];
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.querySelector("#next-button");
    
    nextButton.addEventListener("click", function() {
      showReview(getRandomReview());
    });
    
    showReview(getRandomReview());
  });
