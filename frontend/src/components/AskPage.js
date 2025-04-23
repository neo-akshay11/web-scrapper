import React, { useState } from "react";
import axios from "axios";
import "/Users/akshay/Desktop/internship project copy/frontend/src/styles.css"
const AskPage = () => {
  const [url, setUrl] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("userToken");

    if (!token) {
      alert("Please log in to ask a question!");
      return;
    }

    try {
      const res = await axios.post(
        "https://your-backend-url.onrender.com/api/ask",  // Directly using the URL here
        { url, question },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setResponse(res.data);
    } catch (err) {
      console.error("Error fetching response:", err);
      setResponse({ error: "Failed to get a response. Please try again." });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Ask a Question About a Webpage
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="url" className="block text-gray-700 font-medium mb-2">
              URL:
            </label>
            <input
              type="text"
              id="url"
              name="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="question" className="block text-gray-700 font-medium mb-2">
              Question:
            </label>
            <input
              type="text"
              id="question"
              name="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What is this page about?"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Ask
          </button>
        </form>

        {response && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Response:</h2>
            {response.error ? (
              <p className="text-red-600">{response.error}</p>
            ) : (
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
                {JSON.stringify(response, null, 2)}
              </pre>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AskPage;