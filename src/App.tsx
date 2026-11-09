import { Benefits } from './sections/Benefits'
import { Brew } from './sections/Brew'
import { CartDrawer } from './sections/CartDrawer'
import { Collection } from './sections/Collection'
import { Cta } from './sections/Cta'
import { Faq } from './sections/Faq'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Nav } from './sections/Nav'
import { Ritual } from './sections/Ritual'
import { Story } from './sections/Story'
import { Testimonials } from './sections/Testimonials'
import { LocaleProvider } from './lib/i18n'
import { StoreProvider } from './lib/store'
import { ThemeProvider } from './lib/theme'

// The page is a stack of independent sections. Copy, prices and products live
// in src/content.ts (Indonesian) and src/content.en.ts (English); the cart and
// WhatsApp checkout live in src/lib/store.tsx.
export function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <StoreProvider>
          <Nav />
          <main>
            <Hero />
            <Collection />
            <Story />
            <Ritual />
            <Benefits />
            <Brew />
            <Testimonials />
            <Faq />
            <Cta />
          </main>
          <Footer />
          <CartDrawer />
        </StoreProvider>
      </LocaleProvider>
    </ThemeProvider>
  )
}
