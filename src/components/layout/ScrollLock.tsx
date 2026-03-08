'use client'

import { useEffect } from 'react'

export function ScrollLock() {
    useEffect(() => {
        // Prevent default wheel behavior to stop mouse/trackpad scrolling.
        // { passive: false } is required to allow preventDefault on wheel events in modern browsers.
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault()
        }

        // We only want to block manual wheel scrolling. 
        // Keyboard navigation (up/down arrows, spacebar) and programmatic scrolling (menu clicks) will still function.
        window.addEventListener('wheel', handleWheel, { passive: false })

        return () => {
            window.removeEventListener('wheel', handleWheel)
        }
    }, [])

    return null // This is a logic-only component that doesn't render any UI
}
