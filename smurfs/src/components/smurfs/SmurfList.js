import React from 'react'
import Smurfs from './Smurfs'
import { useSelector } from 'react-redux'

const SmurfList = () => {
    const state = useSelector(state => state)
    return(
    <div>
        {state.smurfs.map(smurf => {
            return <Smurfs smurf={smurf} />
        })}
    </div>
    )
}
export default SmurfList