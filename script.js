document.addEventListener('DOMContentLoaded', (event) => {
    const storageRange = document.querySelector("#storageRange");

    function updateGradient() {
        const value = storageRange.value;
        const max = storageRange.max;
        const progress = (value / max) * 100;

        storageRange.style.background = `linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) ${progress}%, transparent ${progress}%)`;
    }

    storageRange.addEventListener("input", updateGradient);

    updateGradient();
});
