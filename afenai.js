const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");


let userMessage;
let currentSessionId = null;

const API_KEY = "AIzaSyCZbaOpKEF9r1DOaB2**********Fly0lU"; // Get your Gemini API key from 

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing"
        ? `<span class="material-symbols-outlined">person</span><p>${message}</p>` 
        : `<span>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="31px" height="32px" viewBox="10 -30 1500 1400" preserveAspectRatio="xMidYMid meet">
            <g>
              <path d="M194 1347.5 c-24 -6.4 -46.9 -21.6 -65.4 -43.3 -44.9 -53 -55.7 -72 -61.1 -107.2 -5.1
           -33.2 4.4 -72 25.8 -105.2 23.3 -36 66.1 -72.9 115.9 -99.9 48.2 -26.1 119.7 -50 193.9 -64.9
           15.7 -3.1 17.5 -3.7 18.7 -6.4 2.8 -6.3 25.9 -91.5 35.6 -131.6 0.8 -3.6 3.6 -15 6.1 -25.5 9.9
           -40.4 26.8 -116.8 32.1 -144 1.3 -7.1 3.3 -16.8 4.4 -21.5 1.1 -4.7 2.9 -13.7 4 -20 1.1 -6.3
           2.7 -14.6 3.6 -18.4 1.2 -5.7 1.3 -7.1 0.2 -8.1 -0.9 -0.9 -10.5 -1.4 -34.3 -1.9 -47.4 -1 -127.8
           -3.6 -157.5 -5.1 -85.6 -4.5 -117.9 -6.8 -121.2 -8.6 -2.3 -1.3 -5.2 -4.5 -15.6 -17.2 -21.5 -26.6
           -23.2 -28.8 -23.2 -31.5 0 -3.1 8.9 -12.1 17.7 -18 l5.3 -3.5 13.3 0.7 c7.2 0.4 22 1.3 32.7 2.1
           57.1 4.2 149.6 8.1 216 9.2 69.9 1.2 79.7 1.1 81.4 -0.7 1.4 -1.5 2.6 -8.1 15.1 -82 16.4 -97.5 28.2
           -177.4 38.5 -262 1.4 -11.3 2.8 -18.6 3.9 -20.5 3 -5.2 20.2 -18.5 23.9 -18.5 2.6 0 5.4 2.9 19.1
           19.8 22.3 27.5 22.1 27.3 22.1 30.9 0 4.1 -5.2 45.4 -10.5 83.3 -1.4 9.6 -3.1 22.5 -4 28.5 -1.8
           13.9 -6.9 48.3 -10 68.5 -1.4 8.5 -3.2 20.2 -4.1 26 -2.5 16.2 -11.9 73.1 -16 97 -2.1 11.8 -3.8
           23.3 -3.8 25.5 l-0.1 4 37 -0.1 c32 -0.2 64.9 -1.1 103 -2.9 57.4 -2.8 81 -4.2 118 -7 57.1 -4.3
           127.5 -11.9 168 -18.1 31.9 -4.9 34.5 -5.4 36 -7.8 0.8 -1.2 4 -10 7.1 -19.6 8.3 -25.9 9.6 -29.8
           16.7 -50 38.8 -110.4 78.8 -186.3 121.5 -230.5 20.3 -20.9 45.5 -40.3 64.2 -49.3 28.6 -13.7 56.2
           -15.7 83.6 -6.1 23.3 8.1 41.1 21.6 62.2 46.8 38.8 46.5 46.4 59.1 54 89.1 2.4 9.7 2.7 12.1 2.7
           31 0 20 -0.1 20.8 -3.3 33.2 -12.1 46.7 -38.5 82.5 -90.2 122 -9.9 7.5 -30.1 21.1 -38 25.5 -43.4 24 
           -75.4 36.7 -142.5 56.2 -9.2 2.6 -33 8.2 -58.5 13.7 -15.5 3.3 -20.9 4.8 -22.1 6.3 -1.3 1.6 -10.7
           33.2 -17.4 58.6 -24.3 91.5 -46.9 189.5 -64.4 278.5 -1.2 5.8 -3.1 15.2 -4.3 20.9 -1.5 7.4 -1.9 10.8
           -1.1 12 0.9 1.4 5.3 1.7 38.9 2.3 53 0.9 158.5 4.7 188.9 6.8 24.2 1.7 59.2 4 69.5 4.6 14.6 0.9
           14.5 0.8 26.1 15.2 5.6 7 12.8 15.6 15.9 19.2 13.7 15.7 13.9 17.2 4.8 25.2 -3.5 2.9 -8.8 7.1 -12
           9.2 l-5.6 3.8 -27.9 -2.1 c-15.3 -1.1 -36.3 -2.5 -46.8 -3.1 -10.4 -0.5 -27.1 -1.4 -37 -2 -19.1 -1
           -48.8 -2.3 -90.5 -4 -37.4 -1.4 -136.2 -2.3 -137.8 -1.2 -2.1 1.4 -3.7 10 -15.1 77.7 -14.6 86.4 -25.3
           157.8 -34 225.5 -2.8 21.7 -5.8 44.6 -6.6 50.7 -0.8 6.2 -1.9 12.2 -2.5 13.2 -1.1 2.1 -14.1 13 -19.3
           16.1 -1.8 1.1 -4.1 2 -5.2 2 -2.5 0 -7.8 -5.3 -17.2 -17.1 -3.7 -4.7 -10.2 -12.8 -14.4 -18 -4.2 -5.2
           -8.2 -10.4 -8.8 -11.7 -1.4 -2.6 -1.1 -5.7 4.3 -47.2 10.9 -83.3 23 -163 38.6 -255 3.7 -21.8 5.5 -34.9
           4.9 -35.5 -1.2 -1.2 -69.9 -0.8 -96.9 0.5 -10.7 0.5 -31 1.4 -45 2 -14 0.6 -32.9 1.5 -42 2 -9.1 0.5
           -24.8 1.4 -35 2 -42.8 2.5 -94.1 7.1 -140 12.5 -34.4 4 -44.7 5.3 -59 7.4 -43.8 6.4 -42.4 6.1 -44.4
           9.9 -0.7 1.5 -2.8 7.2 -4.5 12.7 -19.9 64.6 -44.8 128.6 -69.2 178.4 -32.4 66 -62.7 105.7 -104.9 137.7
           -17.7 13.4 -31.1 20.8 -48.5 26.4 -9.6 3.2 -10.8 3.3 -28.5 3.7 -17.2 0.3 -19.2 0.1 -28 -2.2z m33.5
           -72 c17.5 -5 31.9 -13.7 44.8 -26.9 35.7 -36.7 72.4 -103.9 106.2 -194.6 8.9 -23.6 16.6 -47 15.9
           -48.1 -0.9 -1.5 -4 -0.9 -24.5 4.4 -67.3 17.4 -121.8 39.5 -159.9 64.9 -39.1 26.1 -65.4 63.4 -74.1
           105.1 -4.1 19.6 -2.8 46.1 3.1 63.6 3.9 11.8 6.2 15.4 12 19.3 10.4 7 25.2 12.9 36.8 14.8 10.2 1.6
           29.6 0.4 39.7 -2.5z m291 -367.9 c5.5 -0.8 18.3 -2.4 28.5 -3.6 10.2 -1.1 23.9 -2.7 30.5 -3.5 36.5
           -4.4 130.7 -11.6 176.5 -13.5 94.1 -3.9 99.7 -4.1 151.6 -4.9 35.4 -0.5 46.6 -1 47.7 -2 1.8 -1.4 1.8
           -1.6 11.1 -48.6 16.6 -83.4 25.5 -124.5 43.5 -200.5 3.3 -14.2 15.7 -62.9 22.6 -89 2.5 -9.6 4.3 -18.1
           4 -18.8 -0.6 -1.6 -1.2 -1.6 -25 1.7 -23.9 3.4 -56.4 6.9 -92 10.1 -18.1 1.6 -38.2 3.4 -44.5 4 -32.8 3 
           -142.4 8.3 -200.5 9.6 -14.8 0.3 -28.3 0.7 -30 0.9 -1.6 0.1 -15.3 0.3 -30.2 0.4 -25.2 0.1 -27.4 0.2 
           -29.2 2 -1.2 1.2 -2.5 5.7 -4 13.7 -8.7 47.1 -28.3 140.1 -40.6 193.4 -11.8 51 -33.7 138.1 -36.6 145.7 
           -1.3 3.4 0.5 5.6 4 4.9 1.4 -0.3 7.1 -1.2 12.6 -2z m640.6 -484.6 c29.2 -7 69.6 -19.7 98.1 -31.1 13.5 
           -5.3 46.8 -21.6 57.7 -28.1 44.5 -26.6 74.2 -63.8 85 -106.3 7 -27.6 4.6 -61 -5.9 -81.5 -3.6 -7 -13.3 
           -13.3 -29 -18.8 -12.7 -4.4 -20.9 -5.6 -35.1 -4.9 -31.4 1.4 -55 15.4 -81.3 48.3 -7.3 9.1 -22 30.9 -28.6 
           42.4 -2.4 4.1 -6 10.4 -8.1 14 -5.3 9.1 -24.5 48.7 -31.7 65.5 -13.4 31.5 -36.3 92.2 -37.9 100.8 -0.5 
           2.4 -0.2 2.7 2 2.7 1.4 0 8 -1.3 14.8 -3z" stroke="#fff" stroke-width="30" fill="#fff"></path>
              </g>
            </svg>
          </span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
};

const formatResponseText = (text) => {
    // Split text into paragraphs
    let formattedText = text.split("\n").map(paragraph => {
        paragraph = paragraph.replace(/^([^:]+):/, '<strong>$1:</strong>');

        // URL --> clickable link
        paragraph = paragraph.replace(
            /(?:\/\/[^\s]+)/g,
            '<a href="$1" target="_blank" style="color: blue; text-decoration: underline;">$1</a>'
        );

        paragraph = paragraph.replace(
                /\*\*(.*?)\*\*/g,
                '<strong>$1</strong>'
            );

        return `<p>${paragraph}</p>`;
    }).join("");

    return formattedText;
};

const generateResponse = (incomingChatLi, callback) => {
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: userMessage }] }] }),
    };

    fetch(API_URL, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            const aiResponse = data.candidates[0].content.parts[0].text;
            messageElement.innerHTML = aiResponse;

            // Pass the AI response to the callback
            if (callback) callback(aiResponse);
        })
        .catch(() => {
            messageElement.textContent = "Uh oh! Something went wrong. Please try again.";
        });
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = "";

    setTimeout(async () => {
        const incomingChatLi = createChatLi("Lemme think...", "incoming");
        chatbox.appendChild(incomingChatLi);

        // Generate response
        generateResponse(incomingChatLi, async (aiResponse) => {
            // Save chat to backend
            await saveChatToBackend(userMessage, aiResponse);
        });
    }, 500);
};

// Toggle Chatbot Visibility
chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
});

// Add event listener to the send button
sendChatBtn.addEventListener("click", handleChat);

// Save Chat to Backend
async function saveChatToBackend(userMessage, aiResponse) {
    try {
        await fetch("http://localhost:5000/save-chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_message: userMessage,
                ai_response: aiResponse,
                session_id: currentSessionId,
            }),
        });
    } catch (error) {
        console.error("Error saving chat to backend:", error);
    }
}

// Load Chat Sessions in Sidebar
async function loadChatSessions() {
    try {
        const response = await fetch("http://localhost:5000/get-sessions");
        const sessions = await response.json();
        const chatSessionsList = document.getElementById("chat-sessions");
        chatSessionsList.innerHTML = ""; // Clear existing sessions

        sessions.forEach((session, index) => {
            const sessionItem = document.createElement("li");
            sessionItem.textContent = `Session ${session.session_id}`;
            sessionItem.classList.add("session-item");
            sessionItem.addEventListener("click", () => loadChatHistory(session.session_id));
            chatSessionsList.appendChild(sessionItem);

            // Automatically load the first session
            if (index === 0) loadChatHistory(session.session_id);
        });
    } catch (error) {
        console.error("Error loading sessions:", error);
    }
}

// Create a New Chat Session
document.getElementById("new-chat").addEventListener("click", () => {
    // Generate a unique session ID
    currentSessionId = Date.now(); // Use a timestamp as a unique ID

    // Add the new session to the sidebar
    const chatSessionsList = document.getElementById("chat-sessions");
    const sessionItem = document.createElement("li");
    sessionItem.textContent = `Session ${currentSessionId}`;
    sessionItem.classList.add("session-item");
    sessionItem.addEventListener("click", () => loadChatHistory(currentSessionId));

    chatSessionsList.appendChild(sessionItem);

    // Clear the chatbox for a fresh conversation
    chatbox.innerHTML = "";
    console.log(`Started new session: ${currentSessionId}`);
});

// Load Chat History for a Session
async function loadChatHistory(sessionId) {
    try {
        const response = await fetch(`http://localhost:5000/get-chats/${sessionId}`);
        const chats = await response.json();
        chatbox.innerHTML = ""; // Clear chatbox

        chats.forEach((chat) => {
            chatbox.appendChild(createChatLi(chat.user_message, "outgoing"));
            chatbox.appendChild(createChatLi(chat.ai_response, "incoming"));
        });

        currentSessionId = sessionId; // Update the current session

        // Highlight the active session in the sidebar
        const allSessions = document.querySelectorAll(".session-item");
        allSessions.forEach((session) => session.classList.remove("active-session"));
        const activeSession = [...allSessions].find(
            (session) => session.textContent === `Session ${sessionId}`
        );
        if (activeSession) activeSession.classList.add("active-session");

        console.log(`Loaded session: ${sessionId}`);
    } catch (error) {
        console.error("Error loading chat history:", error);
    }
}

// Highlight Active Session Style
document.addEventListener("DOMContentLoaded", () => {
    loadChatSessions();
});