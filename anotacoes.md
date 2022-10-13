# Conceitos gerais sobre React

## props

São parâmetros ou argumentos passados para os componentes React, normalmente usados para injeção de dados dinâmicos.

As props são criadas manualmente, embora também exista a prop 'children' que permite ler o conteúdo entre as tags de abertura/fechamento de um componente.

`Usar o mesmo componente com dados completamentes diferentes`

/_ Acesso às props usando destructuring de objeto, Assim podemos chamar apenas as propriedades do objeto já criado _/

const Artigo = ({ titulo, subtitulo, curso, children }) => {
return (
<article>
<h3>{titulo}</h3>
<h4>{subtitulo}</h4>
<h5>Curso: {curso[1]}</h5>
{/_ Sempre que for o conteúdo entre as tags deve-se ser usado a tag (children). _/}
<p>{children}</p>
</article>
);
};
