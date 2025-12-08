"use client";

import { useState } from "react";

type Card = {
  front: string;
  back: string;
};

export default function Page() {
  const cards: Card[] = [
    { front: "apple", back: "りんご" },
    { front: "book", back: "本" },
    { front: "computer", back: "コンピュータ" },
    { front: "dog", back: "犬" },
    { front: "elephant", back: "象" },
    { front: "friend", back: "友達" },
    { front: "guitar", back: "ギター" },
    { front: "house", back: "家" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  function nextCard() {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  }

  function previousCard() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  }

  function resetCards() {
    setCurrentIndex(0);
    setIsFlipped(false);
  }

  const currentCard = cards[currentIndex];

  const cardListElements = [];
  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    cardListElements.push(
      <div
        key={i}
        className={`p-2 rounded text-sm ${
          i === currentIndex
            ? "bg-blue-200 border-2 border-blue-500"
            : "bg-white"
        }`}
      >
        {card.front} - {card.back}
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="w-[700px] mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">単語帳アプリ</h1>

        <div className="mb-6">
          <p className="text-center text-gray-600 mb-2">
            カード {currentIndex + 1} / {cards.length}
          </p>

          <div
            onClick={flipCard}
            className="h-[300px] flex items-center justify-center bg-blue-500 text-white rounded cursor-pointer mb-4 hover:bg-blue-600 transition-colors"
          >
            <p className="text-4xl font-bold">
              {isFlipped ? currentCard.back : currentCard.front}
            </p>
          </div>

          <p className="text-center text-sm text-gray-500 mb-6">
            ⬆️ カードをクリックして表裏を切り替え
          </p>

          <div className="flex gap-2 mb-4">
            <button
              onClick={previousCard}
              disabled={currentIndex === 0}
              className={`flex-1 px-6 py-2 rounded ${
                currentIndex === 0
                  ? "bg-gray-300 text-gray-500"
                  : "bg-gray-500 text-white"
              }`}
            >
              ← 前のカード
            </button>
            <button
              onClick={nextCard}
              disabled={currentIndex === cards.length - 1}
              className={`flex-1 px-6 py-2 rounded ${
                currentIndex === cards.length - 1
                  ? "bg-gray-300 text-gray-500"
                  : "bg-gray-500 text-white"
              }`}
            >
              次のカード →
            </button>
          </div>

          {currentIndex === cards.length - 1 ? (
            <button
              onClick={resetCards}
              className="w-full px-6 py-2 bg-green-500 text-white rounded"
            >
              最初に戻る
            </button>
          ) : null}
        </div>

        <div className="p-4 bg-gray-100 rounded">
          <h2 className="font-bold mb-2">単語リスト</h2>
          <div className="grid grid-cols-2 gap-2">
            {cardListElements}
          </div>
        </div>
      </div>
    </div>
  );
}
