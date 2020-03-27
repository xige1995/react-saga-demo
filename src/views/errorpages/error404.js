import React from 'react'

export default class Error404 extends React.Component{
    render(){
        return(
            <div style={{
                textAlign: 'center',
                height: '60vh',
                verticalAlign: 'middle',
                lineHeight: '60vh',
                fontSize: '20px',
                fontWeight: 500,
            }}
            >
                404 Not Found!
            </div>
        )
    }
}