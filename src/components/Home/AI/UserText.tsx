
import UserAvatarImg from "../../../../public/user.svg"

export default function GptText({text}: {text: React.ReactNode}) {

    return (
        <div className="user-text-box">
            <img src={UserAvatarImg} />
            <div className='name-text-group'>
                <p className='title'>You</p>
                <div className='text-content'>
                    {text}
                </div>
            </div>
        </div>
    )
}