import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizPipe } from '../../pipes/quiz.pipe';

@Component({
  selector: 'app-pipe-network',
  templateUrl: './pipe-network.component.html',
  styleUrls: ['./pipe-network.component.css'],
})
export class PipeNetworkComponent {
  chosenPath = '';
  catwalkScenarioComplete = false;
  catwalkQuizProgress = 0;
  quizAnswer = '';

  constructor(private route: ActivatedRoute, private quizPipe: QuizPipe) {
    this.route.params.subscribe((params) => {
      this.chosenPath = params['path'];
      this.handleScenario();
    });
  }

  onAnswerChange(event: Event): void {
    this.quizAnswer = (event.target as HTMLInputElement).value;
  }

  handleScenario() {
    switch (this.chosenPath) {
      case 'catwalk':
        this.handleCatwalkScenario();
        break;
      case 'pipes':
        // Implement pipes scenario (if needed)
        break;
      default:
        // Handle default scenario or error
        this.showError('Invalid path');
        break;
    }
  }

  handleCatwalkScenario() {
    if (!this.catwalkScenarioComplete) {
      this.catwalkQuizProgress = 0;
      this.quizAnswer = '';
      this.getQuizMessage(this.catwalkQuizProgress); // Display initial question
    } else {
      this.showCompletionMessage();
    }
  }

  handleQuizAnswer() {
    switch (this.catwalkQuizProgress) {
      case 1:
        if (this.quizAnswer.toLowerCase() === 'whisperfall') {
          this.handleCorrectAnswer();
        } else {
          this.showIncorrectAnswerMessage();
        }
        break;
      case 2:
        if (this.quizAnswer === '7') {
          this.handleQuizCompletion();
        } else {
          this.showIncorrectAnswerMessage();
        }
        break;
      default:
        this.showError('Invalid quiz progress');
        break;
    }
  }
  getQuizMessage(progress: number): string {
    if (progress === 0) {
      return 'Welcome to the Catwalk Quiz! Answer the following questions to proceed.';
    } else if (progress === 1) {
      return 'Question 1: What is the capital of the Whispering Mountains?';
    } else if (progress === 2) {
      return 'Question 2: How many peaks are there in the Whispering Mountains?';
    } else if (progress === 3) {
      return 'Congratulations! You have successfully completed the Catwalk Quiz.';
    } else {
      return 'Invalid quiz progress.';
    }
  }

  private showError(message: string) {
    alert('Error: ' + message); // Example implementation for error message display
  }

  private showCompletionMessage() {
    alert('Kai has successfully navigated the catwalk challenge!'); // Example implementation for completion message
  }

  private showIncorrectAnswerMessage() {
    alert('Incorrect answer. Please try again.'); // Example implementation for incorrect answer message
  }

  private handleCorrectAnswer() {
    this.quizAnswer = ''; // Clear input field
    this.catwalkQuizProgress++; // Advance to the next question
    this.getQuizMessage(this.catwalkQuizProgress); // Display the next question
  }

  private handleQuizCompletion() {
    this.catwalkScenarioComplete = true; // Mark scenario as complete
    this.showCompletionMessage(); // Display completion message
  }
}
