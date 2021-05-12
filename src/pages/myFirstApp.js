import Head from 'next/head'

import PropTypes from 'prop-types'


const FirstApp = ({saludo}) =>{
    return   (
        <>
            <Head>
                <title>Hola</title>
            </Head>
            <>
            <h1>{saludo}</h1>
            {/* <h1>{JSON.stringify( saludo, null, 3)}</h1> */}
            <p>Hola Whil</p>
            </>
        </>
    )
}

FirstApp.prototTypes ={
    saludo: PropTypes.string.isRequired
}

export default FirstApp