"use client";

import { useState } from "react";

export default function Page() {
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  function drawOmikuji() {
    const results = [
      { fortune: "大吉", message: "最高の運勢です！素晴らしい一日になるでしょう。" },
      { fortune: "中吉", message: "良い運勢です。前向きに過ごしましょう。" },
      { fortune: "小吉", message: "まずまずの運勢です。堅実に過ごしましょう。" },
      { fortune: "吉", message: "穏やかな運勢です。落ち着いて過ごしましょう。" },
      { fortune: "末吉", message: "控えめな運勢です。慎重に行動しましょう。" },
      { fortune: "凶", message: "注意が必要な日です。無理をせず慎重に。" },
    ];

    const randomIndex = Math.floor(Math.random() * results.length);
    const selectedResult = results[randomIndex];

    setResult(selectedResult.fortune);
    setMessage(selectedResult.message);
  }

  function reset() {
    setResult("");
    setMessage("");
  }

  return (
    <div className="p-8">
      <div className="w-[600px] mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">おみくじアプリ</h1>

        <div className="mb-6 text-center">
          {result === "" ? (
            <div>
              <p className="text-gray-500 mb-6 py-8">
                おみくじを引いて今日の運勢を占いましょう
              </p>
              <button
                onClick={drawOmikuji}
                className="px-8 py-3 bg-red-500 text-white rounded text-xl font-bold"
              >
                おみくじを引く
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6 p-8 bg-yellow-100 rounded border-4 border-yellow-500">
                <p className="text-6xl font-bold mb-4">{result}</p>
                <p className="text-xl">{message}</p>
              </div>
              <button
                onClick={reset}
                className="px-6 py-2 bg-gray-500 text-white rounded"
              >
                もう一度引く
              </button>
            </div>
          )}
        </div>

        <div className="mt-12 p-4 bg-gray-100 rounded">
          <h2 className="font-bold mb-2">おみくじの種類</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 大吉 - 最高の運勢</li>
            <li>• 中吉 - 良い運勢</li>
            <li>• 小吉 - まずまずの運勢</li>
            <li>• 吉 - 穏やかな運勢</li>
            <li>• 末吉 - 控えめな運勢</li>
            <li>• 凶 - 注意が必要な運勢</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
