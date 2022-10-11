import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { values } from 'cypress/types/lodash';
import { shareReplay, switchMap } from 'rxjs';
import { Questions } from 'src/app/model/questions';
import { Score } from 'src/app/model/score';
import { CategoryService } from 'src/app/services/category.service';
import { QuestionService } from 'src/app/services/question.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  constructor(
    public category: CategoryService,
    public routing: RoutingService,
    private route: Router,
    private question: QuestionService,
    private router: ActivatedRoute
  ) {
    this.getQuestion$.subscribe(
      {
        next: (questions: Questions[])=>{
          console.log(questions)
          this.show$ = questions
        }
      }
    )
  }

  public getQuestion$ = this.router.paramMap.pipe(
    switchMap((params)=>
      this.question.getQuestion(params.get('id')).pipe(shareReplay(1))
    )
  )

  
  score: number = 0;
  currentQuiz: number = 0;
  answerSelected = false;
  show$: Questions[] = [];

  ngOnInit(): void {
    this.category.browse = '';
    this.routing.dynamic = 'help';
    this.routing.home = 'active';
    this.routing.category = '';
    this.routing.search = '';


  }


  ngDoCheck() {
    if (this.currentQuiz === this.show$.length && this.show$.length != 0) {
      this.route.navigate([`/help/suggestion/${this.career}/${this.career2}`]);
    }
  }

  scoreMap = new Map();

  onAnswer(option: boolean, careerpathId: number) {
    if (option && this.currentQuiz == 0) {
      this.scoreMap.set(careerpathId, 1);
      console.log(this.scoreMap);
      this.count++;
      this.score++;
      console.log(`this is first ${option}`);
    } else if (this.currentQuiz >= 1) {
      if (this.scoreMap.has(careerpathId)) {
        this.count++;
        if (option && this.count < 4) {
          this.score++;
          console.log(`this is second ${option}`);
          this.scoreMap.set(careerpathId, this.score);
        
        } else if (option && this.count > 3) {
          this.score++;
          console.log(`this is second but greater ${option}`);
          this.scoreMap.set(careerpathId, this.score);
        
          this.count = 0;
          this.score = 0;
        }
      } else {
        this.count = 0;
        this.score = 0;
        if (option) {
          this.count = this.count + 1;
          this.score = this.score + 1;
          this.scoreMap.set(careerpathId, this.score);
        }
      }
    }

    this.answerSelected = true;
    setTimeout(() => {
      this.currentQuiz++;
      this.answerSelected = false;
    }, 2000);
    this.calculate();
  }

  count: number = 1;

  career: number = 0;
  career2: number = 0;
  big: number = 0;
  big2: number = 0;
  calculate() {
    this.scoreMap.forEach((value, key) => {
      if (value > this.big) {
        this.big = value;
        this.career = key;
      } else if (value < this.big && value > this.big2) {
        this.big2 = value;
        this.career2 = key;
      }
    });

    console.log(
      `the lagest career is ${this.career} and score is ${this.big}, career number is: ${this.career2}, score is ${this.big2}`
    );
  }
}
