import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import Footer from './components/Footer.jsx'
import mathIcon from './assets/math.svg'
import downloadIcon from './assets/download.svg'
import convertIcon from './assets/convert.svg'
import moreIcon from './assets/more.svg'

export default function App() {
  
  return (
    <>
      <Header />
      <main style={{marginTop: "150px"}}>
        <Section
        title={'Matemática'}

        tool={[
          'Calculadora de juros simples e composto',
          'Error occured in maintence',
          'Screwdriver',
          'Holdplacer',
          'Coisa'
        ]}

        description={[
          'Ideal para simular investimentos, financiamentos e comparações financeiras em segundos.',
          'Please refresh the page',
          'Um coiso de desparafusar',
          'Um holdplacer',
          'Alguma coisa'
          ]} 
          
          icon={[mathIcon]}

          section={'mathSection'}
        
          />

          <Section title={'Downloaders'}
        tool={[
          'Baixador de videos do YouTube'
        ]}

        description={[
          'Um baixador de videos do youtube (quem diria)'
          ]} 
          
          icon={[downloadIcon]}

          section={'downloadSection'}

          />

          <Section title={'Converores'}
        tool={[
          'Converter arquivo SVG para PNG'
        ]}

        description={[
          'Converte ai mn :)'
          ]} 

        section={'convertSection'}
          
          icon={[convertIcon]}
          />

          <Section title={'Diversos'}
        tool={[
          'Fazer algo diverso'
        ]}

        description={[
          'Diversidade'
          ]} 
          
          icon={[moreIcon]}

          section={'moreSection'}
          />
        </main>
        <Footer />
    </>
  )
}


