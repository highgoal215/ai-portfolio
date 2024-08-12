import TypeWriter from "./TypeWriter";

interface BriefInfoProps {
    name: string;
    role: string;
}

export default function BriefInfo({ name, role }: BriefInfoProps) {
    return (
        <div className="brief-info">
            <div className="brief-info-container">
                <p>Hi there, I am</p>
                <h1 className="name">{name}</h1>
                <div className="role">&gt; <TypeWriter text={role} /></div>
                <p className="comment-line">// Proficiency in JavaScript, TypeScript, React, Next.js, and Vue.</p>
                <p className="comment-line">// Want to know more?</p>
                <p className="comment-line">// Please check &#34;about-me&#34; or ask my &quot;AI Assistant&quot; directly.</p>
            </div>
        </div>
    );
}
