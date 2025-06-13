(function () {
  const container = document.createElement("div");
  container.className = "raffle-container";

  container.innerHTML = `
    <h3 class="raffle-title">🎟️ Raffle Ticket</h3>
    <div class="raffle-form">
      <input type="text" placeholder="Your Name" class="raffle-input" />
      <input type="email" placeholder="Email" class="raffle-input" />
      <input type="number" value="1" min="1" class="raffle-input" />
      <button id="buyBtn" class="raffle-button">Buy Now</button>
    </div>
    <div id="confirmation" class="raffle-confirmation" style="display:none;">
      ✅ Payment Successful! Ticket booked.
      <br /><br />
      <button id="buyAgainBtn" class="raffle-button">Buy Again</button>
    </div>
  `;

  document.currentScript.parentNode.insertBefore(
    container,
    document.currentScript
  );

  const buyBtn = container.querySelector("#buyBtn");
  const confirmation = container.querySelector("#confirmation");
  const form = container.querySelector(".raffle-form");

  buyBtn.onclick = () => {
    form.style.display = "none";
    confirmation.style.display = "block";
    confirmation.scrollIntoView({ behavior: "smooth" });
  };

  confirmation.querySelector("#buyAgainBtn").onclick = () => {
    // Reset form
    form.querySelectorAll("input").forEach((input) => {
      if (input.type !== "number") input.value = "";
      else input.value = "1";
    });
    form.style.display = "block";
    confirmation.style.display = "none";
  };
})();
