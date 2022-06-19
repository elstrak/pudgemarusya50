class Quiz {
  currentQuestionId = 1;
  rightAnswers = 0;
  questions = {
    1: {
      question: "VisualStudio - кроссплатформенная IDE?",
      rightAnswer: "Да",
    },
    2: {
      question: "Лучшая ОС для работы в сфере информационной безпасности - Windows?",
      rightAnswer: "Нет",
    },
    3: {
      question: "Assembler это больно?",
      rightAnswer: "Да",
    },
    4: {
      question:
        "С# разрабатывался с 1998 года?",
      rightAnswer: "Да",
    },
    5: {
      question: "Python поддерживает ООП?",
      rightAnswer: "Да",
    },
    6: {
      question: "ВКонтакте был написан на PHP?",
      rightAnswer: "Да",
    },
    7: {
      question: "JS это Java?",
      rightAnswer: "Нет",
    },
    8: {
      question: "Алгоритмы Дейкстры находит самый длинный путь от одной вершины до другой?",
      rightAnswer: "Нет",
    },
  };
  recomendation = -1;
  topics = [
    "Web",
    "Computer Vision",
    "GameDev",
    "Мобильная разработка",
    "Back end",
    "Маруся",
    "Анализ данных",
    "VK Mini Apps",
  ];
  images = [
    457239020, 57239021, 457239022, 457239023, 457239024, 457239025, 457239026,
    457239027,
  ];

  constructor() {}

  nextQuestion() {
    return this.questions[this.currentQuestionId].question;
  }

  getRecomendations() {
    if (this.rightAnswers === 0) {
      this.recomendation = -1;
      return "Рекомендуем Вам подтянуть свои навыки, прежде чем учавствовать в вездекоде";
    }
    this.recomendation = Math.round(Math.random() * (this.topics.length - 1));
    return `Рекомендуем Вам тему ${this.topics[this.recomendation]}`;
  }

  getSound() {
    if (this.rightAnswers === 8) {
      return "<speaker audio_vk_id=2000512006_456239021>";
    } else if (this.rightAnswers === 0) {
      return `<speaker audio=marusia-sounds/game-loss-${Math.round(Math.random() * 2 + 1)}>`;
    } else {
      return `<speaker audio=marusia-sounds/game-win-${Math.round(Math.random() * 2 + 1)}>`;
    }
  }

  getImage() {
    return this.recomendation >= 0
      ? {
          type: "BigImage",
          image_id: this.images[this.recomendation],
        }
      : {};
  }

  destroy() {
    this.sessionId = "";
    this.currentQuestionId = 1;
    this.rightAnswers = 0;
    this.recomendation = -1;
  }
}

module.exports = { Quiz };
