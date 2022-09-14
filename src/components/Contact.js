import React, { useContext } from 'react'
import { data, data1 } from '../App'


const Contact = () => {
    const role = useContext(data1)
    return (<>
        <div>get data using the useContext!</div>
        <h6>{`Stack of Development! Role ${role}`}</h6>
    </>

    )
}
export default Contact
