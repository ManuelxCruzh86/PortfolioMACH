"use client"

import dynamic from 'next/dynamic'

const CoverParticlesDynamic = dynamic(() => import('./cover-particles'), {
  ssr: false,
  loading: () => (
    <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
      {/* placeholder vacío para mantener layout */}
    </div>
  ),
})

export default function CoverParticlesClient() {
  return <CoverParticlesDynamic />
}
