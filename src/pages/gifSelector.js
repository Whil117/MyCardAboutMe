const GifSelector = ({text, onChange}) =>{
    return(
        <>
        <label>
            <input type="radio" name="tipo" onChange={onChange}/>
            {text}
        </label>
        </>
    )
}
export default GifSelector