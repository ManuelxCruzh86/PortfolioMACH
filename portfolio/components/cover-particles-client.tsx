"use client"

import dynamic from 'next/dynamic'

const VoidNebula = dynamic(() => import('./void-nebula'), {
  ssr: false,
  loading: () => (
    <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
      {/* placeholder vacío para mantener layout */}
    </div>
  ),
})

export default function CoverParticlesClient() {
  return <VoidNebula />
}
