"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function sendMessage() {
    if (inputText !== "" && !isLoading) {
      // ユーザーのメッセージを追加
      const userMessage: Message = {
        role: "user",
        content: inputText,
      };

      const newMessages = Array.from(messages);
      newMessages.push(userMessage);
      setMessages(newMessages);
      setInputText("");
      setIsLoading(true);

      // モックのLLMレスポンス（実際のAPIコールの代わり）
      setTimeout(() => {
        const mockResponses = [
          "こんにちは！どのようにお手伝いできますか？",
          "それは興味深い質問ですね。",
          "もう少し詳しく教えていただけますか？",
          "なるほど、理解しました。",
          "他に何かお手伝いできることはありますか？",
        ];

        const randomResponse =
          mockResponses[Math.floor(Math.random() * mockResponses.length)];

        const assistantMessage: Message = {
          role: "assistant",
          content: randomResponse,
        };

        const newerMessages = Array.from(newMessages);
        newerMessages.push(assistantMessage);
        setMessages(newerMessages);
        setIsLoading(false);
      }, 1000);
    }
  }

  const messageElements = [];
  for (let i = 0; i < messages.length; i += 1) {
    const message = messages[i];
    const isUser = message.role === "user";

    messageElements.push(
      <div
        key={i}
        className={`mb-4 flex ${isUser ? "justify-end" : "justify-start"}`}
      >
        <div
          className={`max-w-[70%] px-4 py-2 rounded ${
            isUser
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="w-[800px] mx-auto">
        <h1 className="text-3xl font-bold mb-6">チャットアプリ</h1>

        <div className="mb-6 h-[500px] border border-gray-300 rounded p-4 overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              メッセージを入力してチャットを始めましょう
            </p>
          ) : (
            <div>{messageElements}</div>
          )}

          {isLoading ? (
            <div className="mb-4 flex justify-start">
              <div className="max-w-[70%] px-4 py-2 rounded bg-gray-200 text-black">
                <span className="animate-pulse">...</span>
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            disabled={isLoading}
            className="flex-1 px-4 py-2 border border-gray-300 rounded"
            placeholder="メッセージを入力..."
          />
          <button
            onClick={sendMessage}
            disabled={isLoading}
            className={`px-6 py-2 rounded text-white ${
              isLoading ? "bg-gray-400" : "bg-blue-500"
            }`}
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
}
