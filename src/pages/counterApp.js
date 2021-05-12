// import PropTypes from 'prop-types'

// const CounterApp = ({value}) => {
//     return(
//         <>
//             <h1>counterApp</h1>
//             <p>{value}</p>
//         </>
//     )
// }
// CounterApp.prototTypes = {
//     value: PropTypes.number.isRequired
// }

// export default CounterApp

import PropTypes from 'prop-types'


const CounterApp = ({value}) => {

    const click = (e) =>{
        console.log(e)
    }

    return (
        <div>
            <h1>MyApp</h1>
            <p className="count">{value}</p>
            <button onClick={click} className="btnSum">+1</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp
