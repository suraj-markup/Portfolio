import  { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "fixed", bottom: "40px", right: "40px", zIndex: 1000 }}>
     
      {!isOpen && (
        <button
          onClick={toggleChatbot}
         
        >
          <div className="bg-blue-500 text-white p-3 rounded-full w-12 h-12 md:w-16 md:h-16 shadow-lg flex justify-center items-center text-4xl">
            💭
          </div>
        </button>
      )}

      
      {isOpen && (
        <div style={{ position: "relative" }}>
          <button
            onClick={toggleChatbot}
            
            
          >
            <div className="absolute rounded-full w-8 h-8 flex justify-center items-center  top-9 right-3 text-2xl bg-gray-700 cursor-pointer p-3 text-white"> 
            X
            </div>
          </button>

          <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/30/08/20241230084541-YLJD4PAY.json" 
            width="350"
            height="500"
            style={{
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            title="Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
