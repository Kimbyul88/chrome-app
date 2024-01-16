const quotes = [
  {
    quote: "배우고 때때로 익히면 또한 기쁘지 아니한가?",
    author: "공자1",
  },
  {
    quote: "아침에 도(道)를 들으면 저녁에 죽어도 괜찮으니라.",
    author: "공자2",
  },
  {
    quote:
      "배울 때는 도달 할 수 없는 것 같이 하고, 배운 것은 잃어버릴까 두려워해야 하느니라.",
    author: "공자3",
  },
  {
    quote:
      "군자는 어떤 경우를 당하더라도 마음이 너그럽고 평탄하고 소인은 항상 근심에 차 있다.",
    author: "공자4",
  },
  {
    quote:
      "군자에게는 큰 일을 맡겨야 하는 것이다. 작은 일은 이것저것 맡겨도 어느 것이나 모두 되는 것은 아니다. 그러나 큰 일을 맡겨서 시킨다면 그 소임을 다할 것이다.",
    author: "공자5",
  },
  {
    quote:
      "그것을 아는 사람은 그것을 좋아하는 사람만은 못하다. 그것을 좋아하는 사람은 그것을 즐기는 사람만은 못하다. 그것이란 공자의 인도(仁道)를 말하는 것.",
    author: "공자6",
  },
  {
    quote:
      "그 사람의 과거에 어떤 잘못이 있어도 그것을 언제까지나 허물로 삼아서는 안 되는 것이다. 지나간 것을 가지고 책망을 하는 것은 너그러움이 아니다.",
    author: "공자7",
  },
  {
    quote: "너는 해보지도 않고 선을 긋고 단념하고 머물러 있는 것이다.",
    author: "공자8",
  },
  {
    quote:
      "매일 자기를 반성하여 자기의 부족한 점, 알지 못한 점을 발견하여 배우도록 힘쓴다. 이것이 호학(好學)하는 사람이다.",
    author: "공자9",
  },
  {
    quote:
      "먼 앞길, 넓게, 깊은 헤아림이 없으면 반드시 몸 가까운 일에 근심할 일이 생기는 법이다.",
    author: "공자10",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
