import Image from 'next/image'
import authorImage from '@/public/images/authors/afif.jpeg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Halo, Saya Afif.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Saya adalah seorang DevOps Engineer dan BackEnd Developer serta siswa
          aktif di SMK Negeri 8 Semarang, jurusan Pengembangan Perangkat Lunak
          dan Gim. Saya mampu membangun RESTful API menggunakan Laravel,
          membangun fullstack web menggunakan Next.js dan juga dapat
          mengoperasikan AWS untuk kebutuhan site deployment dan Cloud
          Computing. Dengan kemampuan komunikasi yang baik, saya mampu bekerja
          sama dalam tim dengan baik.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Afif Ihsan Maulana'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
