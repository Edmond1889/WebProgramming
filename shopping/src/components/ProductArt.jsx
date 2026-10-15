import React from 'react'

export default function ProductArt({ type }) {
  return <svg className="product-art" viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <ellipse cx="160" cy="185" rx="112" ry="12" fill="#174F4B" opacity=".08" />
    {type === 'keyboard' && <g transform="rotate(-10 160 110)">
      <rect x="32" y="72" width="256" height="110" rx="13" fill="#1E8C86" />
      <rect x="32" y="64" width="256" height="110" rx="13" fill="#FFF8E7" stroke="#215B56" strokeWidth="2" />
      {[0, 1, 2, 3].map(row => Array.from({ length: row === 3 ? 5 : 12 }, (_, col) => <rect key={`${row}-${col}`} x={44 + col * (row === 3 ? 45 : 20)} y={77 + row * 22} width={row === 3 && col === 2 ? 78 : row === 3 ? 35 : 15} height="16" rx="3" fill={row === 0 && col === 0 ? '#EF6C4A' : row === 3 ? '#2BA8A2' : '#DFEAE4'} stroke="#B3CEC6" strokeWidth=".7" />))}
    </g>}
    {type === 'mouse' && <g transform="rotate(16 160 110)">
      <path d="M164 14c-8 17 10 21 0 36" stroke="#D2A78B" strokeWidth="3" />
      <path d="M108 100c0-36 21-55 52-55s52 19 52 55v36c0 34-20 54-52 54s-52-20-52-54v-36Z" fill="#D45233" />
      <path d="M108 93c0-36 21-55 52-55s52 19 52 55v36c0 34-20 54-52 54s-52-20-52-54V93Z" fill="#FFF8E7" stroke="#BB785D" strokeWidth="2" />
      <path d="M160 39v62m-51 0h102" stroke="#DDC6AB" strokeWidth="2" />
      <rect x="154" y="62" width="12" height="26" rx="6" fill="#EF6C4A" />
      <path d="M122 116v20c0 16 7 27 18 31" stroke="white" strokeWidth="5" strokeLinecap="round" />
    </g>}
    {type === 'monitor' && <g>
      <path d="M147 150h26v35h-26z" fill="#B4CDC3" /><path d="M125 184h70l12 8h-94l12-8Z" fill="#215B56" />
      <rect x="43" y="30" width="234" height="134" rx="9" fill="#215B56" />
      <rect x="50" y="37" width="220" height="115" rx="4" fill="#B9E2D6" />
      <circle cx="210" cy="69" r="22" fill="#FFD23F" /><path d="m50 129 65-58 75 81H50v-23Z" fill="#2BA8A2" /><path d="m115 152 68-63 87 54v9H115Z" fill="#1E8C86" /><path d="m50 149 67-35 49 38H50v-3Z" fill="#76C6AE" />
      <circle cx="160" cy="158" r="2" fill="#FFD23F" />
    </g>}
  </svg>
}

