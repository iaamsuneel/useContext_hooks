import React, { useContext } from 'react'
import { data } from '../App'

const Search = () => {
    debugger
    const responseDataApi = useContext(data)
    console.log("responseDataApi", responseDataApi)
    return (<>
        {responseDataApi?.data?.map((item, index) => {
            { console.log(item) }

            return <div key={index} className="card text-center">
                <div className="card-header">
                    User Details
                </div>
                <div className="card-body">
                    <h3 className="card-title">Company: {item.company.bs}</h3>
                    <p className="card-text">Description:{item.company.catchPhrase}</p>
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-primary">Name:-{item.name}</li>
                        <li class="list-group-item list-group-item-secondary">UserName:-{item.username}</li>
                        <li class="list-group-item list-group-item-success">Email:-{item.email}</li>
                        <li class="list-group-item list-group-item-danger">WebSite:-{item.website}</li>
                    </ul>

                </div>
            </div>
        })}
    </>
    )
}
export default Search