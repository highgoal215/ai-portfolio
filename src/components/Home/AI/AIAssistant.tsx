import { useState, useRef, useEffect } from 'react';
import GptText from './GptText';
import UserText from './UserText';
import GptTyping from './GptTyping';
// import { defaultPrompts } from '../../prompts';
import "../../../../css/aiassistant.css";

interface Message {
    type: 'user' | 'system';
    content: string;
}

const fetchUrl: string = "your worker url"

export default function AIAssistant() {
    const [input, setInput] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [messageQueue, setMessageQueue] = useState<Message[]>([])
    const bottomRef = useRef<HTMLDivElement | null>(null);

    async function getAIResponse(userText: string) {
        setMessageQueue(prev => [...prev, { type: "user", content: userText }]);
        setIsTyping(true);

        const postBody = messageQueue.length > 1 ? JSON.stringify([{ role: 'user', content: userText }]) : JSON.stringify([{
            role: 'system',
            content: 'defaultPrompts'
        }, {
            role: 'user',
            content: userText
        }]);

        try {
            const response = await fetch(fetchUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: postBody
            });
            const data = await response.json();
            setMessageQueue(prev => [...prev, { type: "system", content: data.content }]);
            setIsTyping(false);
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error('An unknow error occurred.')
            }
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        getAIResponse(input);
        setInput('');
    }

    function processText(text: string) {
        const lines = text.split('\n');
        return lines.map((line, index) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);

            return (
                <div key={index}>
                    {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i}>{part.slice(2, -2)}</strong>;
                        }
                        return <span key={i}>{part}</span>;
                    })}
                </div>
            );
        });
    }

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messageQueue]);

    return (
        <div className='assistant-container'>
            <div className="ai-assistant">
                <div>
                    <GptText isDefault={true} handleSelectQuestion={getAIResponse} />
                    {messageQueue.map((message, index) =>
                        message.type === 'system'
                            ? <GptText key={index} response={processText(message.content)} isDefault={false} />
                            : <UserText key={index} text={processText(message.content)} />
                    )}
                    <div ref={bottomRef} />
                </div>
                {isTyping ? 
                    <GptTyping /> : 
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question here..."
                        />
                        <button type="submit">Ask</button>
                    </form>
                }
            </div>
        </div>
    );
}
