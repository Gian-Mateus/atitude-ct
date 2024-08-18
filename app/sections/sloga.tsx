import Image from 'next/image'

export default function Slogan() {
  return (
    <section className="w-full">
      <Image
        className="min-w-full"
        alt="Image com o slogan"
        src={
          '/modern-office-building-features-luxury-skyline-view-generated-by-ai 1.jpg'
        }
        width={1920}
        height={1080}
        quality={100}
      />
    </section>
  )
}
