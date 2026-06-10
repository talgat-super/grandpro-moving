'use client'
import { useEffect, useState } from 'react'

function TruckSVG() {
  return (
    <svg
      width="200"
      height="76"
      viewBox="0 0 200 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 6px 24px rgba(14,165,233,0.45))' }}
      aria-hidden="true"
    >
      {/* ── Cargo box ── */}
      <rect x="0" y="2" width="118" height="54" rx="4" fill="#0EA5E9" />
      {/* Top highlight strip */}
      <rect x="0" y="2" width="118" height="9" rx="4" fill="#38BDF8" />
      {/* Door divider */}
      <rect x="59" y="4" width="2" height="50" fill="#0369A1" opacity="0.55" />
      {/* Door handle */}
      <rect x="63" y="26" width="10" height="3" rx="1.5" fill="#0284C7" />
      {/* Brand label */}
      <rect x="6" y="16" width="50" height="18" rx="3" fill="rgba(255,255,255,0.1)" />
      <text x="11" y="29" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial,sans-serif">
        GrandPro
      </text>
      {/* Accent stripe bottom */}
      <rect x="0" y="50" width="118" height="6" rx="0" fill="#0284C7" opacity="0.6" />
      <rect x="0" y="50" width="118" height="6" rx="0"
        style={{ fill: 'url(#stripes)' }} opacity="0.3" />

      {/* ── Cab connector ── */}
      <rect x="116" y="24" width="8" height="32" fill="#0284C7" />

      {/* ── Cab body ── */}
      <rect x="122" y="14" width="64" height="42" rx="8" fill="#0369A1" />
      {/* Roof visor */}
      <rect x="124" y="8" width="48" height="10" rx="5" fill="#0284C7" />
      {/* Windshield */}
      <rect x="130" y="18" width="40" height="28" rx="5" fill="rgba(186,230,253,0.72)" />
      {/* Windshield glare */}
      <path d="M134 21 L131 41" stroke="rgba(255,255,255,0.28)" strokeWidth="3" strokeLinecap="round" />
      {/* Cab door handle */}
      <rect x="124" y="36" width="5" height="4" rx="2" fill="#0EA5E9" opacity="0.65" />

      {/* ── Front face ── */}
      <rect x="182" y="24" width="18" height="32" rx="5" fill="#0284C7" />
      {/* Headlight */}
      <rect x="183" y="15" width="12" height="9" rx="3" fill="#FDE047" />
      {/* Bumper */}
      <rect x="183" y="52" width="16" height="8" rx="3" fill="#1E3A5F" />
      {/* Grille lines */}
      <line x1="184" y1="30" x2="198" y2="30" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <line x1="184" y1="35" x2="198" y2="35" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      <line x1="184" y1="40" x2="198" y2="40" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

      {/* ── Rear wheel 1 ── */}
      <circle cx="28" cy="62" r="14" fill="#1E293B" />
      <circle cx="28" cy="62" r="9" fill="#2D3F55" />
      <g>
        <animateTransform attributeName="transform" type="rotate"
          from="0 28 62" to="360 28 62" dur="0.65s" repeatCount="indefinite" />
        <line x1="28" y1="53" x2="28" y2="57" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="67" x2="28" y2="71" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="62" x2="23" y2="62" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        <line x1="33" y1="62" x2="37" y2="62" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        <line x1="21" y1="55" x2="24" y2="58" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="66" x2="35" y2="69" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="35" y1="55" x2="32" y2="58" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="66" x2="21" y2="69" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <circle cx="28" cy="62" r="4" fill="#475569" />
      <circle cx="28" cy="62" r="1.5" fill="#94A3B8" />

      {/* ── Rear wheel 2 ── */}
      <circle cx="64" cy="62" r="14" fill="#1E293B" />
      <circle cx="64" cy="62" r="9" fill="#2D3F55" />
      <g>
        <animateTransform attributeName="transform" type="rotate"
          from="0 64 62" to="360 64 62" dur="0.65s" repeatCount="indefinite" />
        <line x1="64" y1="53" x2="64" y2="57" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        <line x1="64" y1="67" x2="64" y2="71" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        <line x1="55" y1="62" x2="59" y2="62" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        <line x1="69" y1="62" x2="73" y2="62" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        <line x1="57" y1="55" x2="60" y2="58" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="68" y1="66" x2="71" y2="69" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="71" y1="55" x2="68" y2="58" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="60" y1="66" x2="57" y2="69" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <circle cx="64" cy="62" r="4" fill="#475569" />
      <circle cx="64" cy="62" r="1.5" fill="#94A3B8" />

      {/* ── Front wheel ── */}
      <circle cx="162" cy="64" r="12" fill="#1E293B" />
      <circle cx="162" cy="64" r="7.5" fill="#2D3F55" />
      <g>
        <animateTransform attributeName="transform" type="rotate"
          from="0 162 64" to="360 162 64" dur="0.65s" repeatCount="indefinite" />
        <line x1="162" y1="56.5" x2="162" y2="59.5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="162" y1="68.5" x2="162" y2="71.5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="154.5" y1="64" x2="157.5" y2="64" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="166.5" y1="64" x2="169.5" y2="64" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="156.5" y1="57.5" x2="158.6" y2="59.6" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="165.4" y1="68.4" x2="167.5" y2="70.5" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="167.5" y1="57.5" x2="165.4" y2="59.6" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="158.6" y1="68.4" x2="156.5" y2="70.5" stroke="#5E7A94" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <circle cx="162" cy="64" r="3.5" fill="#475569" />
      <circle cx="162" cy="64" r="1.5" fill="#94A3B8" />
    </svg>
  )
}

export function Preloader() {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setHidden(true), 700)
          return 100
        }
        return Math.min(100, p + Math.random() * 18)
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  if (hidden) return null

  // progress=0 → left=-210px (off-screen), progress=100 → left=calc(80vw-200px)
  const truckLeft = `calc(${progress * 0.8}vw + ${progress * 0.1 - 210}px)`

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        background: '#050D1F',
        opacity: progress >= 100 ? 0 : 1,
        transition: 'opacity 0.65s ease',
        pointerEvents: progress >= 100 ? 'none' : 'all',
      }}
      aria-hidden="true"
    >
      {/* Subtle radial glow in center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(14,165,233,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Logo + percentage */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 select-none pointer-events-none">
        <div
          className="font-heading font-extrabold text-white tracking-tight"
          style={{ fontSize: '2.6rem' }}
        >
          Grand<span style={{ color: '#0EA5E9' }}>Pro</span>
          <span
            className="ml-3 font-normal"
            style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.18em' }}
          >
            MOVING
          </span>
        </div>
        <div
          style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.25)',
            fontVariantNumeric: 'tabular-nums',
            letterSpacing: '0.12em',
          }}
        >
          {Math.round(progress)}%
        </div>
      </div>

      {/* ── Road ── */}
      <div className="absolute left-0 right-0 bottom-0" style={{ height: '100px' }}>
        {/* Road surface */}
        <div
          className="absolute left-0 right-0 bottom-0"
          style={{
            height: '62px',
            background: 'rgba(255,255,255,0.025)',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        />

        {/* Center dashes */}
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: '30px',
            height: '2px',
            backgroundImage:
              'repeating-linear-gradient(90deg,rgba(255,255,255,0.18) 0,rgba(255,255,255,0.18) 28px,transparent 28px,transparent 56px)',
          }}
        />

        {/* Glowing progress trail */}
        <div
          className="absolute left-0"
          style={{
            bottom: '61px',
            width: `calc(${progress * 0.8}vw + ${progress * 0.1 - 10}px)`,
            height: '2px',
            background:
              'linear-gradient(90deg,transparent 0%,rgba(14,165,233,0.25) 40%,rgba(14,165,233,0.5) 100%)',
            transition: 'width 0.12s linear',
          }}
        />

        {/* Truck */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: truckLeft,
            transition: 'left 0.12s linear',
            willChange: 'left',
            animation: 'truck-bounce 0.45s ease-in-out infinite',
          }}
        >
          <TruckSVG />
        </div>
      </div>
    </div>
  )
}
