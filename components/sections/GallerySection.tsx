'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { X } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'

const PHOTOS = [
  {
    src: '/images/gallery/truck-loaded.jpg',
    alt: 'Фирменный грузовик GrandPro с коробками',
    span: 'lg:col-span-2',  // wide landscape — занимает 2 колонки
  },
  {
    src: '/images/gallery/boxes-room.jpg',
    alt: 'Упакованные коробки GrandPro в помещении',
    span: 'lg:col-span-1',
  },
  {
    src: '/images/gallery/team-packing.jpg',
    alt: 'Команда GrandPro упаковывает мебель',
    span: 'lg:col-span-1',
  },
  {
    src: '/images/gallery/worker-wrapping.jpg',
    alt: 'Работник GrandPro оборачивает тумбу',
    span: 'lg:col-span-1',
  },
] as const

export function GallerySection() {
  const t = useTranslations('gallery')
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-16 md:py-28" style={{ background: 'var(--bg-main)' }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        {/* Mosaic grid: top row — truck (2/3) + boxes (1/3), bottom row — 3 equal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${photo.span} ${
                i === 0 ? 'h-72 sm:h-80 lg:h-96' : 'h-64 sm:h-72'
              }`}
              onClick={() => setLightbox(photo.src)}
              style={{ border: '1px solid var(--color-border)' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: 'rgba(14,165,233,0.15)', backdropFilter: 'blur(2px)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(14,165,233,0.9)' }}
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M5 8a3 3 0 100 6 3 3 0 000-6zM1 8a7 7 0 1112.95 3.536l2.757 2.757a1 1 0 01-1.414 1.414l-2.757-2.757A7 7 0 011 8z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
            onClick={() => setLightbox(null)}
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>
          <div
            className="relative w-full max-w-4xl max-h-[85vh]"
            style={{ aspectRatio: '4/3' }}
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt="Фото GrandPro Moving"
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}
