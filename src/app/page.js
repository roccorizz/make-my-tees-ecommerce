import Image from 'next/image'
import Reviews from './reviews/Reviews'
import ChooseBySneaker from './chooseBySneaker/ChooseBySneaker'
import FeaturedProducts from './featuredProducts/FeaturedProducts'
import ChooseByCategory from './chooseByCat/ChooseByCategory'
import PopularSneakers from './popularSneakers/PopularSneakers'
import HeroSection from './hero/HeroSection'
import HowItWorks from './howItWorks/HowItWorks'
import CustomizeSneaker from './customizeSneaker/CustomizeSneaker'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <HowItWorks />
      <CustomizeSneaker />
      <PopularSneakers />
      <ChooseByCategory />
      <ChooseBySneaker />
      <FeaturedProducts />
      <Reviews />
    </main>
  )
}
