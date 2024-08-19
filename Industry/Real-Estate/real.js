document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isVisible = answer.style.display === 'block';

            // Hide all answers
            document.querySelectorAll('.answer').forEach(a => a.style.display = 'none');

            // Toggle the clicked answer
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});