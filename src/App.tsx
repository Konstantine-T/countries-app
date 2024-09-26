import './App.css'
import Card from './components/Card/Card'
import CardContent from './components/Card/CardContent'
import CardHeader from './components/Card/CardHeader'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <Card>
        <CardHeader />
        <CardContent />
      </Card>
    </>
  )
}

export default App
