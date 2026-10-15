import React from 'react'

export default function Icon({ name, size = 20, ...props }) {
  const paths = {
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    cart: <><path d="M3 3h2l3 12h11l3-9H6M9 19h.01M18 19h.01" /><circle cx="9" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></>,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    bag: <><path d="M5 8h14l1 13H4L5 8Z" /><path d="M8 9V6a4 4 0 0 1 8 0v3" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>
}

