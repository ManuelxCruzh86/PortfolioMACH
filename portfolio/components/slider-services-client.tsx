"use client"

import dynamic from 'next/dynamic'

const SliderServices = dynamic(() => import('@/components/slider-services'), {
  ssr: false,
  loading: () => (
    <div className="h-[280px] md:h-[340px] w-[270px] md:w-[550px] flex items-center justify-center">
      Cargando...
    </div>
  ),
})

export default function SliderServicesClient() {
  return <SliderServices />
}
