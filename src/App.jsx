import Box from "./components/Box"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

  return (
    <>
      <main className="h-screen">
        <header>
          <Header/>
        </header>

        <section>
          <Box/>
        </section>

        <footer className="bottom-[0] w-full h-10 absolute">
          <Footer/>
        </footer>
      </main>
    </>
  )
}

export default App
