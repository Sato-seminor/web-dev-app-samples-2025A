"use client";

import { useState } from "react";

export default function Page() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState("");

  function calculateBmi() {
    const heightInMeters = Number(height) / 100;
    const weightInKg = Number(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setCategory("痩せ型");
      } else if (calculatedBmi < 25) {
        setCategory("標準");
      } else if (calculatedBmi < 30) {
        setCategory("肥満（1度）");
      } else if (calculatedBmi < 35) {
        setCategory("肥満（2度）");
      } else {
        setCategory("肥満（3度）");
      }
    }
  }

  return (
    <div className="p-8">
      <div className="w-[600px] mx-auto">
        <h1 className="text-3xl font-bold mb-6">BMI 計算アプリ</h1>

        <div className="mb-6">
          <div className="mb-4">
            <label className="block mb-2 font-bold">身長 (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="例: 170"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-bold">体重 (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="例: 60"
            />
          </div>

          <button
            onClick={calculateBmi}
            className="w-full px-6 py-2 bg-blue-500 text-white rounded"
          >
            計算する
          </button>
        </div>

        <div>
          {bmi > 0 ? (
            <div className="p-6 bg-gray-100 rounded">
              <p className="text-2xl font-bold mb-2">
                BMI: {bmi.toFixed(1)}
              </p>
              <p className="text-xl">判定: {category}</p>
            </div>
          ) : (
            <p className="py-8 text-gray-500">身長と体重を入力して計算ボタンを押してください</p>
          )}
        </div>
      </div>
    </div>
  );
}
