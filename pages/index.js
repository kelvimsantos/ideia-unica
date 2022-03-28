import{useState} from 'react';

function Home()
{
    return<div>
    <h1>Home 3</h1>
            <Contador/>
            <div>MINHA PÁGINA</div>
            </div> 
}



function Contador() {
    const [contador,setContador] = useState(1);//1 representa que a primeiro indice do array servira de estado
    //contador será variavel que guarda o estado atual, set contador a função que soma essea variavel 

    //-------------------------------------------------------------------------
        function adicionarContador()//função que será chaada no evento do botão click
        {
            setContador(contador +1);//vai somar
        }



        //parte visual a ser retornada
         //exibe o valor da variavel 
         //toda vez que for clicado vai chamar a função de somar,que tem uma fuunção que soma a variavel de estado
        return(
            <div>
            <div>{contador}</div> 
           
            <button onClick={adicionarContador}> adicionar </button> 
            </div>
            )
}  
export default Home
