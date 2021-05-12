import Image from 'next/image'
import UserProfile from "./UserProfile";

const App = ()=>{
    return(
        <div className="card">
            <div className="card__profile">
                <Image
                className="card__profile-img"
                src='/whil.png'
                alt="Picture of the author"
                    width={200}
                    height={200}
                />
                <h1 className="card__profile-name">Whil</h1>
            </div>
            <div className="card__descript">
                <UserProfile type={'Location'} data={'Mexico'}/>
                <UserProfile type={'Eats'} data={'Everything'}/>
                <UserProfile type={'Age'} data={19}/>
                <UserProfile type={'Likes'} data={'Coding'}/>
                <UserProfile type={'Red Social'} data={'GitHub'} link={'https://github.com/WhiLEx117'}/>
            </div>
        </div>
    )
}
export default App