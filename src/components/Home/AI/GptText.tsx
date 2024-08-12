import GPTAvatarImg from "../../../../public/assistant.svg";

interface GptTextProps {
    response?: React.ReactNode;
    isDefault: boolean;
    handleSelectQuestion?: (question: string) => void;
}

export default function GptText({ response, isDefault, handleSelectQuestion }: GptTextProps) {
    return (
        <div className="GPT-text-box">
            <img src={GPTAvatarImg} alt="GPT Avatar" />
            <div className='name-text-group'>
                <p className='title'>Qingjie's AI Assistant</p>
                {isDefault ? 
                    <div className='text-content'>
                        <p>Nice to have you here. Tell me what you want to know about [Your Name].</p>
                        <p className='text-content-hint'>// Hint: you can ask questions like:</p>
                        <div className='example-questions'>
                            <p onClick={(e) => handleSelectQuestion?.(e.currentTarget.textContent || '')}>Tell me something fun about [Your Name]</p>
                            <p onClick={(e) => handleSelectQuestion?.(e.currentTarget.textContent || '')}>Tell me [Your Name]&#39;s skills</p>
                            <p onClick={(e) => handleSelectQuestion?.(e.currentTarget.textContent || '')}>[Your Name]&#39;s strengths</p>
                        </div>
                    </div> :
                    <div className='text-content'>
                        {response}
                    </div>
                }
            </div>
        </div>
    );
}
