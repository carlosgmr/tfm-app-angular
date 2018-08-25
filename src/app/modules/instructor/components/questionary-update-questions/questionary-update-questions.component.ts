import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { QuestionaryService } from '../../../../shared/services/questionary.service';
import { QuestionModelService } from '../../../../shared/services/question-model.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-questionary-update-questions',
  templateUrl: './questionary-update-questions.component.html',
  styles: []
})
export class QuestionaryUpdateQuestionsComponent implements OnInit {
  title: string;
  id: string;
  models: Array<object>;
  loadModels: boolean;
  questions: Array<object>;

  private QUESTION_TYPE_YESNO = 1;
  private QUESTION_TYPE_TEST = 2;
  private MIN_ANSWERS = 2;
  private MAX_ANSWERS = 4;
  private MIN_QUESTIONS = 1;
  private MAX_QUESTIONS = 100;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private questionaryService: QuestionaryService,
    private questionModelService: QuestionModelService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Modificar preguntas y respuestas';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('questionary');

    this.loadModels = false;
    this.id = this.route.snapshot.paramMap.get('id');
    this.questions = [];
    this.questions.push(this.getEmptyQuestion());

    this.questionModelService.listing()
      .subscribe(response => {
        this.models = response;
        this.loadModels = true;
      });
  }

  onSubmit() {
    const data = {};
    this.questionaryService.addQuestions(this.id, data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro actualizado correctamente');
        this.router.navigate(['/instructor/questionary', response['id']]);
      });
  }

  private getEmptyQuestion(): object {
    return {
      minimized: false,
      statement: '',
      model: '',
      answers: [],
      correct: null
    };
  }

  private getEmptyAnswer(): object {
    return {
      statement: '',
      statementReadOnly: false
    };
  }

  addQuestion() {
    if (this.questions.length < this.MAX_QUESTIONS) {
      this.questions.push(this.getEmptyQuestion());
    } else {
      alert('Se ha alcanzado el nº máximo de preguntas: ' + this.MAX_QUESTIONS);
    }
  }

  deleteQuestion(index) {
    if (this.questions.length > this.MIN_QUESTIONS) {
      this.questions.splice(index, 1);
    } else {
      alert('Se ha alcanzado el nº mínimo de preguntas: ' + this.MIN_QUESTIONS);
    }
  }

  minimizeQuestion(index) {
    this.questions[index]['minimized'] = !this.questions[index]['minimized'];
  }

  addAnswer(index) {
    if (this.questions[index]['answers'].length < this.MAX_ANSWERS) {
      this.questions[index]['answers'].push(this.getEmptyAnswer());
    } else {
      alert('Se ha alcanzado el nº máximo de respuestas: ' + this.MAX_ANSWERS);
    }
  }

  removeAnswer(indexQuestion, indexAnswer) {
    if (this.questions[indexQuestion]['answers'].length > this.MIN_ANSWERS) {
      const correct = parseInt(this.questions[indexQuestion]['correct'], 10);

      if (correct === indexAnswer) {
        this.questions[indexQuestion]['correct'] = null;
      } else if (correct > indexAnswer) {
        this.questions[indexQuestion]['correct'] = (correct - 1) + '';
      }

      this.questions[indexQuestion]['answers'].splice(indexAnswer, 1);
    } else {
      alert('Se ha alcanzado el nº mínimo de respuestas: ' + this.MIN_ANSWERS);
    }
  }

  processQuestionModel(index, value) {
    const questionModel = parseInt(value, 10);
    this.questions[index]['answers'] = [];

    switch (questionModel) {
      case this.QUESTION_TYPE_YESNO:
        const yesAnswer = this.getEmptyAnswer();
        yesAnswer['statement'] = 'Sí';
        yesAnswer['statementReadOnly'] = true;
        const noAnswer = this.getEmptyAnswer();
        noAnswer['statement'] = 'No';
        noAnswer['statementReadOnly'] = true;

        this.questions[index]['answers'].push(yesAnswer, noAnswer);
      break;

      case this.QUESTION_TYPE_TEST:
        this.questions[index]['answers'].push(this.getEmptyAnswer(), this.getEmptyAnswer());
      break;
    }
  }

  saveQuestions() {
    const data = {questions: []};
    let answers, correct;

    for (let i = 0; i < this.questions.length; i++) {
      answers = [];
      correct = parseInt(this.questions[i]['correct'], 10);

      for (let j = 0; j < this.questions[i]['answers'].length; j++) {
        answers.push({
          statement: this.questions[i]['answers'][j]['statement'],
          correct: (correct === j ? 1 : 0)
        });
      }

      data.questions.push({
        statement: this.questions[i]['statement'],
        model: parseInt(this.questions[i]['model'], 10),
        sort: (i + 1),
        answers: answers
      });
    }

    this.questionaryService.addQuestions(this.id, data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro actualizado correctamente');
        this.router.navigate(['/instructor/questionary', this.id]);
      });
  }
}
