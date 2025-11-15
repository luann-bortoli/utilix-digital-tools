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
          'Calculadora de juros',
          'Placeholder',
          'Placeholder',
          'Placeholder',
          'Placeholder',
        ]}

        description={[
          'Ideal para simular investimentos, financiamentos e comparações financeiras em segundos.',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          ]} 
          
          icon={[mathIcon]}

          section={'mathSection'}

          link={["/calculadora-de-juros"]}
        
          />

          <Section title={'Downloaders'}
        tool={[
          'Baixador de videos do YouTube',
          'Placeholder',
          'Placeholder',
        ]}

        description={[
          'Um baixador de videos do youtube (quem diria)',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          ]} 
          
          icon={[downloadIcon]}

          section={'downloadSection'}

          link={["/calculadora-de-juros"]}

          />

          <Section title={'Conversores'}
        tool={[
          'Converter arquivo SVG para PNG',
          'Placeholder'
        ]}

        description={[
          'Converte ai mn :)',
          'Ideal para fazer o site parecer ter mais conteúdo'
          ]} 

        section={'convertSection'}
          
          icon={[convertIcon]}

          link={["/calculadora-de-juros"]}
          />

          <Section title={'Diversos'}
        tool={[
          'Contador de caracteres',
          'Gerador de senha segura',
          'Placeholder',
          'Placeholder',
          'Placeholder',
          'Placeholder',
        ]}

        description={[
          'Ferramenta rápida para checar comprimento e número de palavras de textos',
          'Proteja suas contas com senhas complexas geradas instantaneamente',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          'Ideal para fazer o site parecer ter mais conteúdo',
          ]} 
          
          icon={[moreIcon]}

          section={'moreSection'}

          link={['/contador-de-caracteres', '/gerador-de-senha']}
          />
      </main>
        <Footer />
    </>
  )
}


