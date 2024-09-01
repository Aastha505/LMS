import React from 'react'

const Settings = ({color}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0714 18.0699C15.0152 21.1263 10.4898 21.7867 6.78642 20.074C6.23971 19.8539 5.79148 19.676 5.36537 19.676C4.17849 19.683 2.70117 20.8339 1.93336 20.067C1.16555 19.2991 2.31726 17.8206 2.31726 16.6266C2.31726 16.2004 2.14642 15.7602 1.92632 15.2124C0.212831 11.5096 0.874109 6.98269 3.93026 3.92721C7.8316 0.0244319 14.17 0.0244322 18.0714 3.9262C21.9797 7.83501 21.9727 14.1681 18.0714 18.0699Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.9398 11.413H14.9488" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.9301 11.413H10.9391" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.92128 11.413H6.93028" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default Settings