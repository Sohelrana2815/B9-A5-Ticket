function scrollToSection() {
  const section = document.getElementById("showSection");
  section.scrollIntoView({ behavior: "smooth" });
}

let selectedButtons = [];

function changeColor(button) {
  const isSelected = button.classList.contains('bg-blue-500');

  if (!isSelected && selectedButtons.length >= 4) {
    alert('You can only select up to four buttons.');
    return;
  }

  button.classList.toggle('bg-[#1DD100]');
  if (!isSelected) {
    selectedButtons.push(button);
  } else {
    selectedButtons = selectedButtons.filter(btn => btn !== button);
  }
}
