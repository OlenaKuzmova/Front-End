document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email');
    const subscriptionMessage = document.getElementById('subscription-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Зупиняє стандартну поведінку форми

        // Перевірка, чи поле електронної пошти не порожнє
        if (emailInput.value.trim() !== '') {
            // Відобразити повідомлення про успішну підписку
            subscriptionMessage.classList.remove('hidden');
            // Очистити поле введення
            emailInput.value = '';
        }
    });
});
