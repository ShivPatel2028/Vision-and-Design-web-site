import Image from 'next/image';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80', alt: 'Branding design', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80', alt: 'Digital design' },
  { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', alt: 'Interior design' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80', alt: 'Event management', span: 'col-span-2' },
  { src: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=600&q=80', alt: 'Fashion show' },
];

export default function GallerySection() {
  return (
    <section className="section-padding bg-[#F2F0ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Creative Gallery"
          title="Visual"
          titleHighlight="Storytelling"
          description="A glimpse into our creative world — where every frame tells a powerful story."
        />

        <AnimatedSection>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[600px]">
            {/* Large left */}
            <div className="row-span-2 rounded-2xl overflow-hidden img-zoom">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Top middle */}
            <div className="rounded-2xl overflow-hidden img-zoom">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Top right */}
            <div className="rounded-2xl overflow-hidden img-zoom">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom middle wide */}
            <div className="col-span-2 rounded-2xl overflow-hidden img-zoom">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                width={800}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
