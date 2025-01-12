class SandwichGame {
    constructor() {
        this.questions = [];
        this.currentQuestion = 0;
        this.answers = [];
    }

    init() {
        // Initialize game
        this.loadQuestions();
        this.renderQuestion();
    }

    loadQuestions() {
        // TODO: Add questions about sandwich preferences
        this.questions = [
            {
                question: "What's your preferred bread type?",
                options: ["Sourdough", "Whole Wheat", "Rye", "White"]
            }
            // More questions to be added
        ];
    }

    renderQuestion() {
        // TODO: Implement question rendering
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new SandwichGame();
    game.init();
});