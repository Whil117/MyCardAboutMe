import CounterApp from "./counterApp"



function app() {
    return(
        <CounterApp value={0} />
    )
}
export default app

// import GifSelector from './gifSelector';
// import { useState } from 'react';

// const gifs ={
//     cage: 'https://media4.giphy.com/media/12A3hKKsewxtGE/giphy.gif',
//     cats: 'https://media3.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif',
//     dogs: 'https://media3.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif',
//     explosion: 'https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif',
//     other: 'http://api.giphy.com/v1/gifs/random?api_key=su1qpGt1TYRRHZ8CszJd4zVJUJfAHR9Q',
// }

// const App = () => {
//   const [image, setImage] = useState(gifs);

//   return(
//       <>
//       <form>
//           <h1>Ivan</h1>
//           <div className="fields">
//             <GifSelector text="cat" onChange={() => setImage(gifs.cats)} />
//             <GifSelector text="Dogs" onChange={() => setImage(gifs.dogs)} />
//             <GifSelector text="Nicholas" onChange={() => setImage(gifs.cage)} />
//             <GifSelector text="Explosion" onChange={()=> setImage(gifs.explosion)}/>
//             <GifSelector text="Other" onChange={() => setImage(gifs.other)} />
//           </div>
//           {image && (<img src={image} alt="" />)}
//       </form>
//       </>
//   )
// }

// export default App