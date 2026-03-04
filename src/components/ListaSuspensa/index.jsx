import './lista-suspensa.estilos.css'

export function ListaSuspensa({ itens, ...rest}) {
    return (
        // o que sobrou foi para o rest.                    defino um valor padrao para o select
        <select {...rest} className='lista-suspensa-form' defaultValue=''>
            // o valor padrao  é vazio
            <option value="" disabled>Selecione uma opção</option>
            //faço um map  e converto cada item em uma opção para selecionar.
            {itens.map((item, index) => (
                <option key={index} value={item}>
                    {item}
                </option>
            ))}
        </select>
    )
}