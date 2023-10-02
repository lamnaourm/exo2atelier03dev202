import React, { Component } from 'react'

export default class Liste extends Component {

    render() {
        return (
            <div>
                <ul>
                    {
                    this.props.elements.map(e =>
                        <li key={e.id} className={e.completed && 'completed'}>{e.id} - {e.text}</li>)
                        }
                </ul>
            </div>
        )
    }

}

