import { Botao } from "../Botao";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { CampoEntrada } from "../CampoEntrada";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import './formulario-de-evento.estilos.css'

export function FormularioDeEvento({ temas, aoSubmeter }) {

  //Recebe os dados do formulário para salvar
  function aoFormSubmetido(formData) {
    console.log(formData);
    const evento = {
      capa: formData.get('capaEvento'),
      tema: temas.find(tema => tema.nome === formData.get('temaEvento')),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }
    //chama a funcao passada por props para adicionar o evento criado no formulario
    aoSubmeter(evento);
  }

  return (
    <form className='form-evento' action={aoFormSubmetido} >
      <TituloFormulario>
        Preencha os dados do evento
      </TituloFormulario>
      <div className="campos">

        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Nome do evento:
          </Label>
          <CampoEntrada type='text'
            id='nomeEvento'
            placeholder='Summer dev hits'
            name='nomeEvento'
          />
        </CampoDeFormulario>


        <CampoDeFormulario>
          <Label htmlFor="capaEvento">
            Endereço da capa do evento:
          </Label>
          <CampoEntrada type='text'
            id='capaEvento'
            placeholder='https://...'
            name='capaEvento'
          />
        </CampoDeFormulario>



        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento:
          </Label>
          <CampoEntrada type='date' id='dataEvento' placeholder='20/07/2024' name='dataEvento' />
        </CampoDeFormulario>


        <CampoDeFormulario>
          <Label htmlFor="temaEvento">
            Tema do evento:
          </Label>
          <ListaSuspensa id='temaEvento' name='temaEvento' itens={temas.map(tema => tema.nome)} />
        </CampoDeFormulario>

      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>

    </form>
  )
}