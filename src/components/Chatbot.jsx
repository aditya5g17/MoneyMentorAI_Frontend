import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css'; 

const Chatbot = ({ forceOpen = false, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  // when `forceOpen` is true we show the chat popup (used when host controls visibility)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hey there 👋 \nHow can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  

  const chatBodyRef = useRef(null);


  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isOpen, isThinking]);

 
  const isMentalHealthQuery = (msg) => {
    const allowedKeywords = ["money","stock","SIP","finance","investment","savings","budgeting","inflation","deflation","interest rates","economic growth","personal finance","financial literacy","capital market","stock market","bond market","mutual funds","exchange-traded funds","portfolio management","risk management","asset allocation","wealth creation","financial planning","credit score","debt management","retirement planning","emergency fund","compound interest","market trends","bull market","bear market","market volatility","diversification","blue-chip stocks","dividend investing","value investing","growth investing","day trading","swing trading","long-term investing","short-term trading","cryptocurrency","digital assets","bitcoin","ethereum","blockchain","financial independence","passive income","active income","side hustle","net worth","cash flow","income statement","balance sheet","profit and loss","economic indicators","GDP","unemployment rate","consumer spending","government bonds","corporate bonds","treasury bills","real estate investing","rental income","equity","leverage","hedging","derivatives","futures","options","call option","put option","market psychology","investor sentiment","financial analysis","fundamental analysis","technical analysis","chart patterns","price action","price","candlestick patterns","trendline","support and resistance","breakout","market correction","bubble","recession","economic cycle","monetary policy","fiscal policy","central bank","Federal Reserve","liquidity","market cap","IPO","initial public offering","shareholder value","earnings report","revenue growth","price-to-earnings ratio","dividend yield","return on investment","annual return","market capitalization","financial stability","credit risk","market risk","systematic risk","unsystematic risk","hedge fund","index fund","robo-advisor","brokerage account","financial advisor","wealth management","behavioral finance","economic forecast","inflation hedge","gold investing","forex trading","currency exchange","global economy","market liquidity","fintech","online banking","digital payments","UPI","mobile wallet","asset management","private equity","venture capital","angel investing","market sentiment","economic stimulus","inflation rate","consumer confidence","income tax","capital gains tax","dividend tax","financial regulations","market surveillance","insider trading","blue economy","green investing","sustainable finance","ESG investing","climate finance","financial markets","Wall Street","Nasdaq","New York Stock Exchange","Dow Jones","S&P 500","Nifty 50","Sensex","market depth","liquidity ratio","cash reserves","public sector banks","private sector banks","credit card","loan interest","mortgage","home loan","auto loan","student loan","financial security","insurance","life insurance","health insurance","market cycle","buy and hold","sell-off","market panic","wealth preservation","supply and demand","economic reforms","banking sector","stockbrokers","market participants","regulatory authority","SEBI","corporate governance","economic stability","financial crisis","bankruptcy","margin trading","stop-loss order","limit order","market analysis","capital structure","dividend payout","earnings call","free cash flow","debt-to-equity ratio","stock valuation","asset bubble","financial bubbles","market inefficiency","efficient market hypothesis","financial reporting","global markets","international trade","foreign investment","economic diversification","macroeconomics","microeconomics","financial ecosystems","money supply","velocity of money","currency circulation","market expectations","business cycles","economic slowdown","fiscal deficit","trade deficit","commodity market","oil prices","gold prices","silver prices","hello","hi","hey","greetings","salutations","good morning","good afternoon","good evening","welcome","howdy","namaste","bonjour","hola","ciao","hallo","salaam","shalom","nice to meet you","pleased to meet you","good day","warm regards","kind regards","best regards","respectfully","dear","dearest","hi there","hello there","hey there","long time no see","how have you been","hope you're well","hope you're doing fine","great to see you","good to see you","happy to see you","warm welcome","friendly greetings","cheers","good wishes","sending regards","with regards","greetings and respect","cordial greetings","sincere greetings","hello friend","hi friend","hey friend","welcome back","welcome aboard","pleasant greetings","sunny greetings","joyful greetings","peaceful greetings","warm hello","lovely to meet you","happy morning","happy evening","happy afternoon","greeting of the day","wishing you well","hope you’re great","hope everything’s good","delighted to meet you","honored to meet you","kind greetings","smiling greetings","warmest regards"];
   
    const lowerMsg = msg.toLowerCase();
    return allowedKeywords.some(keyword => lowerMsg.includes(keyword));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

  
    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsThinking(true);

    if (!isMentalHealthQuery(userMsg)) {
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'bot', text: "❌ I can only answer questions related to finance and stock related" }]);
            setIsThinking(false);
        }, 500);
        return;
    }

    // API Call
  //   try {
  //       const API_KEY = "AIzaSyC9HemCJFJ_bt1yae_nFiBHghhD7fGOJIE"; 
  //       const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
        
  //       const apiResponse = await fetch(API_URL, {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //               contents: [{ parts: [{ text: userMsg }] }]
  //           })
  //       });
        
  //       const data = await apiResponse.json();
  //       const botResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();

  //       setMessages(prev => [...prev, { role: 'bot', text: botResponseText }]);
  //   } catch (error) {
  //       setMessages(prev => [...prev, { role: 'bot', text: "Oops! Something went wrong." }]);
  //   } finally {
  //       setIsThinking(false);
  //   }
  // };

  const effectiveOpen = forceOpen ? true : isOpen;

  return (

<div className={`chatbot-container ${effectiveOpen ? 'show-chatbot' : ''} ${forceOpen ? 'embedded-chat' : ''}`}>
    
      {/* internal toggle: hidden when host forces open */}
      {!forceOpen && (
        <button id="chatbot-toggler" onClick={toggleChatbot}>
          <span className="material-symbols-rounded">mode_comment</span>
          <span className="material-symbols-rounded">close</span>
        </button>
      )}

      {/* Chatbot Popup */}
      <div className="chatbot-popup">
        <div className="chatbot-header">
          <div className="header-info">
             {/* Insert your Logo SVG here or keep it simple */}
             <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"></path></svg>
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button id="closing" className="material-symbols-rounded" onClick={() => {
            if (forceOpen && onClose) return onClose();
            return setIsOpen(false);
          }}>close</button>
        </div>

        <div className="chat-body" ref={chatBodyRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role === 'bot' ? 'bot-message' : 'user-message'}`}>
               {/* Show Bot Icon only for bot messages */}
               {msg.role === 'bot' && (
                 <svg className="bot-avatar" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 1024 1024"><path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9z" fill="#213853"/></svg>
               )}
               <div className="message-text">{msg.text}</div>
            </div>
          ))}

          {isThinking && (
             <div className="message bot-message thinking">
                <div className="message-text">
                    <div className="thinking-dots">
                        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                    </div>
                </div>
             </div>
          )}
        </div>

        <div className="chat-footer">
          <form onSubmit={handleSendMessage} className="chat-form">
            <textarea 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Message..." 
              className="message-input" 
              required
            ></textarea>
            <div className="chat-controls">
                <button type="submit" id="send" className="material-symbols-rounded">send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;