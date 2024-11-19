import Box from "./components/pribadi/Box"
import Footer from "./components/pribadi/Footer"
import Header from "./components/pribadi/Header"
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"

function App() {

  return (
    <>
      <main className="h-screen">
        <header className="h-[6vh] border-b-4">
          <Header/>
        </header>

        <section className="h-[88vh]">
          <Button variant="default" size="lg">Button</Button>
          <Box/>
        </section>

        <footer className="h-[6vh] border-t-4 flex items-center justify-between font-bold px-10">
          <Footer/>
        </footer>
      </main>
    </>
  )
}

export default App
