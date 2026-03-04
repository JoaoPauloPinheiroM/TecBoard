import { useState } from 'react'
import './App.css'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Tema } from './components/Tema'
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento'





function App() {


  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligencia artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }
  ]


  //crio um estado para armazenar os eventos criados no formulario, com um valor inical para o useState.
  //A primeira posicao é o valor do estado e a segunda posicao é a funcao para atualizar o estado
  const [eventos, setEventos] = useState(
    [
      {
        capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
        tema: temas[0],
        data: new Date(),
        titulo: 'Mulheres no front'
      }
    ]
  )

  function adicionarEvento(evento) {

    // Para atualizar o estado, é necessário criar um novo array com os eventos antigos 
    // e o novo evento, e passar esse novo array para a função de atualização do estado
    setEventos([...eventos, evento])
  }

  return (
    <main>

      {/* 04/03/2026 joao.mourao: Adiciona o header com a logo da empresa*/}
      <header>
        <img src="/logo.png" alt="Logo da empresa" />
      </header>

      <Banner/> {/* 04/03/2026 joao.mourao: banner da mulher com oculos*/}

      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />

      <section className='container'>
        { // 04/03/2026 joao.mourao: Cria as sessoes com o temas disponiveis
          temas.map(function (tema) {

            // 04/03/2026 joao.mourao: Verifica se o tema tem eventos, caso nao tenha, nao renderiza a sessao do tema
            if (!eventos.some((evento) => { return evento.tema.id === tema.id })) {
              return null
            }

            return (

              // 04/03/2026 joao.mourao: Renderiza a sessao do tema, passando o tema como props para o componente Tema, e renderiza os eventos do tema dentro da sessao
              <section key={tema.id}>
                <Tema tema={tema} />
                <div className='eventos'>
                  {
                    // 04/03/2026 joao.mourao: Renderiza os eventos do tema, filtrando os eventos pelo tema e mapeando os eventos para renderizar o componente CardEvento para cada evento
                    eventos
                      .filter((evento) => { return evento.tema.id === tema.id })
                      .map((evento, index) => {
                        return <CardEvento evento={evento} key={index} />
                      })
                  }
                </div>


              </section>
            )
          })}
      </section>

    </main>
  )
}

export default App
