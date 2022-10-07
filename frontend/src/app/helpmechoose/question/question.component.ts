import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/model/questions';
import { Score } from 'src/app/model/score';
import { CategoryService } from 'src/app/services/category.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  constructor(
    public category: CategoryService,
    public routing: RoutingService
  ) {}

  show$: Questions[] = [
    {
      id: 1,
      question: 'which picture do you choose?',
      answer: [
        { option: 'nice', correct: true, image: '' },
        { option: 'not good', correct: false, image: '' },
        { option: 'bad', correct: false, image: '' },
        { option: 'nonsense', correct: false, image: '' },
      ],
      type: 3,
      image:
        'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      careerpathId: 1,
      categoryId: 1,
    },
    {
      id: 1,
      question: 'what do you choose?',
      answer: [
        {
          option: 'a',
          correct: false,
          image:
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        },
        {
          option: 'b',
          correct: true,
          image:
            'https://thumbs.dreamstime.com/b/alone-sunset-man-near-cherry-tree-87689017.jpg',
        },
        {
          option: 'c',
          correct: false,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VY6_afhq42uhghEZmPs1rHOSxnVANVCVq6JfTF3p4e4Rm82eUuDtj1IWuPvUVuS0u0A&usqp=CAU',
        },
      ],
      type: 2,
      image: '',
      careerpathId: 1,
      categoryId: 1,
    },
    {
      id: 1,
      question: 'what do you choose?',
      answer: [
        {
          option: 'a',
          correct: false,
          image:
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        },
        {
          option: 'b',
          correct: true,
          image:
            'https://thumbs.dreamstime.com/b/alone-sunset-man-near-cherry-tree-87689017.jpg',
        },
        {
          option: 'c',
          correct: false,
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VY6_afhq42uhghEZmPs1rHOSxnVANVCVq6JfTF3p4e4Rm82eUuDtj1IWuPvUVuS0u0A&usqp=CAU',
        },
      ],
      type: 2,
      image: '',
      careerpathId: 1,
      categoryId: 1,
    },
    {
      id: 1,
      question: 'what do you want?',
      answer: [
        { option: 'Yes', correct: true, image: '' },
        { option: 'No', correct: false, image: '' },
      ],
      type: 1,
      image:
        'https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI=',
      careerpathId: 2,
      categoryId: 1,
    },
    {
      id: 1,
      question: 'what do you want?',
      answer: [
        { option: 'Yes', correct: false, image: '' },
        { option: 'No', correct: true, image: '' },
      ],
      type: 1,
      image:
        'https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-20.jpg',
      careerpathId: 2,
      categoryId: 1,
    },
    {
      id: 1,
      question: 'what do you want?',
      answer: [
        { option: 'Yes', correct: false, image: '' },
        { option: 'No', correct: true, image: '' },
      ],
      type: 1,
      image:
        'https://s4.reutersmedia.net/resources/r/?m=02&d=20211029&t=2&i=1579603325&w=&fh=545&fw=810&ll=&pl=&sq=&r=2021-10-29T223613Z_42247_MRPRC2SFQ97INDQ_RTRMADP_0_EGYPT-HERITAGE-MODERN-ART',
      careerpathId: 2,
      categoryId: 1,
    },
    {
      id: 1,
      question: 'what do you want?',
      answer: [
        { option: 'Yes', correct: false, image: '' },
        { option: 'No', correct: true, image: '' },
      ],
      type: 1,
      image:
        'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      careerpathId: 3,
      categoryId: 1,
    },
    {
      id: 1,
      question: 'what do you want?',
      answer: [
        { option: 'Yes', correct: false, image: '' },
        { option: 'No', correct: true, image: '' },
      ],
      type: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYVqkt5GU65m9NP_-JhL6scOz49qL-ff9h6D1Lbh45cM-gbJJuF1whVqw9DRSFezyrS6Y&usqp=CAU',
      careerpathId: 3,
      categoryId: 1,
    },
    {
      id: 1,
      question: 'what do you want?',
      answer: [
        { option: 'Yes', correct: false, image: '' },
        { option: 'No', correct: true, image: '' },
      ],
      type: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQBMJJw3CsZbJ1rfbddHde2qbPjq8gmWT_S8058muJ6qkCyq4mtgmWODALqExozWQ79w&usqp=CAU',
      careerpathId: 3,
      categoryId: 1,
    },
  ];

  scores: Score[] = [];
  score: number = 0;
  currentQuiz: number = 0;
  answerSelected = false;

  ngOnInit(): void {
    this.category.browse = '';
    this.routing.dynamic = 'help';
  }

  answer(correct: boolean) {
    console.log(correct);
  }

  getQuizzes() {
    return this.show$;
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
          console.log(this.scoreMap);
        } else if (option && this.count > 3) {
          this.score++;
          console.log(`this is second but greater ${option}`);
          this.scoreMap.set(careerpathId, this.score);
          console.log(this.scoreMap);
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
          console.log(this.scoreMap);

          console.log(`this is third  ${option}`);
        }
        // else if (option && this.count > 2) {

        //   this.scoreMap.set(careerpathId, this.count + 1);
        //   console.log(this.scoreMap);

        //   console.log(`this is third but greater ${option}`);
        //   this.count = 0;
        // }
      }
      // if (key == careerpathId) {
      //   if (option) {
      //     this.scoreMap.set(careerpathId, parseInt(value)+1);
      //     console.log(this.scoreMap);
      //   }
      // } else {
      //   value=0
      //   console.log(this.scoreMap.has(careerpathId))
      //   // this.scoreMap.set(careerpathId, value);
      //   console.log(this.scoreMap);
      // }
    }

    this.answerSelected = true;
    setTimeout(() => {
      this.currentQuiz++;
      this.answerSelected = false;
    }, 2000);
    this.calculate();
  }

  count: number = 1;

  career: number = 0
  career2: number = 0
  big: number = 0
  big2: number = 0
  calculate() {

    this.scoreMap.forEach((value, key) => {
      if(value > this.big){
        this.big = value
        this.career = key
      }else if(value < this.big && value > this.big2){
        this.big2 = value;
        this.career2 = key
      }

    });

    console.log(`the lagest career is ${this.career} and score is ${this.big}, career number is: ${this.career2}, score is ${this.big2}`)
  }
}
