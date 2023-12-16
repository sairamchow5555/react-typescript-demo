import React from 'react'
import { Greet } from '../Greet'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>
            <h2>
                {
                props.isLoggedIn ?
                `Welcome ${props.name}, you have ${props.messageCount} unread messages.`
                :
                `Welcome Guest`
                }
            </h2>
        </div>
    )
}
