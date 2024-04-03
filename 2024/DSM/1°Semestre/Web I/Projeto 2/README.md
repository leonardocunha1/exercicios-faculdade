# 🐙 Descrição do Projeto

Este projeto trata-se do Trabalho 3: Mini-Pi - Criando um site HTML5 e CSS3 da matéria Desenvolvimento Web I.

> [!NOTE]
> [Link do site online e funcionando](https://leonardocunha1.github.io/exercicios-faculdade/2024/DSM/1%C2%B0Semestre/Web%20I/Projeto%202/)

> [!IMPORTANT]
> Código fonte do projeto
> ```
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <title>Document</title>
>     <link rel="stylesheet" href="style.css" />
>   </head>
>   <body>
>     <section class="header">
>       <h1>CURIOSIDADES DE TECNOLOGIA</h1>
>       <p>
>         Tudo aquilo que você sempre quis saber sobre o mundo Tech, em um único
>         lugar
>       </p>
>     </section>
>     <nav>
>       <ul class="header-menu">
>         <li><a href="">Home</a></li>
>         <li><a href="">Curiosidade</a></li>
>         <li><a href="">Contato</a></li>
>       </ul>
>     </nav>
>     <section class="content">
>       <div class="container">
>         <h1 class="title">História do Mascote do Android</h1>
>         <p class="text">
>           Provavelmente você sabe que o sistema operacional
>           <span>Android</span>, mantido pelo <span>Google</span> é um dos mais
>           utilizados para dispositivos móveis em todo o mundo. Mas tavez você
>           não saiba que o seu simpático mascote tem um nome e uma história muito
>           curiosa? Pois acompanhe esse artigo para aprender muita coisa sobre
>           esse robozinho.
>         </p>
> 
>         <h2>A primeira versão</h2>
>         <p>
>           A primeira tentativa de criar um mascote surgiu em 2007 e veio de um
>           desenvolvedor chamado
>           <a
>             class="first-version-a"
>             href="https://danmorrill.org"
>             target="_blank"
>             >Dan Morrill</a
>           >. Ele conta que abriu o
>           <a
>             class="first-version-a"
>             href="https://inkscape.org/pt-br/"
>             target="_blank"
>             >Inkscape</a
>           >
>           (software livre para vetorização de imagens) e criou sua própria
>           versão de robô. O objetivo era apenas personificar o sistema apenas
>           para a a sua equipe, não existia nenhuma solicitação da empresa para a
>           criação de um mascote.
>         </p>
>         <img
>           src="Screenshot_1.png"
>           alt=""
>           srcset=""
>           class="first-version-img"
>         />
>         <p class="first-version-last-p">
>           Essa primeira versão bizarra até foi batizada em homenagem ao seu
>           criador: seriam os <span>Dandroids</span>.
>         </p>
> 
>         <h2>Surge um novo mascote</h2>
>         <p class="new-mascote-p">
>           A ideia de ter um mascote foi amadurecendo e a missão foi passada para
>           uma profissional da área. A ilustradora Russa
>           <a
>             class="first-version-a"
>             href="https://www.irinablok.com/"
>             target="_blank"
>             >Irina Blok</a
>           >, também funcionária do Google, ficou com a missão de representar o
>           pequeno robô de uma maneira mais agradável.
>         </p>
>         <img class="new-mascote-img" src="Screenshot_2.png" alt="" srcset="" />
>         <p>
>           A ideia principal da Irina era representar tudo graficamente com
>           poucos traços e de forma mais chapada. O desenho também deveria gerar
>           identificação rápida com quem o olha. Surgiu então o
>           <span>Bugdroid</span>, o novo mascote do Android.
>         </p>
>         <img
>           class="new-mascote-android"
>           src="Screenshot_3.png"
>           alt=""
>           srcset=""
>         />
>         <p class="new-mascote-p">
>           A principal inspiração para os traços do novo Bugdroid veio daqueles
>           bonequinhos que ilustram portas de banheiro para indicar o gênero de
>           cada porta. Conta a lenda que a artista estava criando em sua mesa no
>           escritório do Google e olhou para o lado dos banheiros e a
>           identificação foi imediata: simples, limpo, objetivo.
>         </p>
>         <div class="area-video">
>           <iframe
>             width="560"
>             height="315"
>             src="https://www.youtube.com/embed/l2UDgpLz20M"
>             title="YouTube video player"
>             frameborder="0"
>             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
>             allowfullscreen
>           ></iframe>
>         </div>
> 
>         <h3>Quer aprender mais?</h3>
>         <div class="learn-more">
>           <p class="learn-more-p">
>             Outro assunto curioso em relação ao Android é que cada versão sempre
>             foi nomeada em homenagem a um doce, em ordem alfabética a partir da
>             versão 1.5 até a 9.0.
>           </p>
>           <ul>
>             <li>1.5 - Cupcake</li>
>             <li>1.6 - Donut</li>
>             <li>3.0 - Eclair</li>
>             <li>2.2 - Froyo</li>
>             <li>2.3 - Gingerbread</li>
>             <li>3.0 - Honeycomb</li>
>             <li>4.0 - Ice Cream Sandwich</li>
>             <li>4.1 - Jelly Bean</li>
>             <li>4.4 - KitKat</li>
>             <li>5.0 - Lolipop</li>
>             <li>6.0 - Marshmallow</li>
>             <li>7.0 - Nougat</li>
>             <li>8.0 - Oreo</li>
>             <li>9.0 - Pie</li>
>           </ul>
>           <p class="learn-more-p">
>             Infelizmente, o Android Q não existiu, pois o Google resolveu pôr
>             fim a essa divertida prática e começou a usar numerações, o que deu
>             origem ao Android 10.
>           </p>
>           <p class="learn-more-p">
>             Acesse aqui o site
>             <a
>               class="first-version-a"
>               href="https://www.android.com/intl/en_uk/history/"
>               target="_blank"
>               >Android History</a
>             >
>             para conhecer a sequência das versões "adocicadas" e o que cada uma
>             trouxe para o sistema Android.
>           </p>
>         </div>
> 
>         <p class="final">
>           Então é isso! Espero que você tenha gostado do nosso artigo com essa
>           curiosidade sobre o sistema <span>Android</span> e seu simpático
>           mascote.
>         </p>
>       </div>
>     </section>
>     <footer>
>         <p>Site criado para fins de estudos</p>
>     </footer>
>   </body>
> </html>
> ```

<details>

<summary>Imagens Utilizadas 📷</summary>

### You can add a header

1. Primeira versão bizarra do mascote do Android
<img src="https://raw.githubusercontent.com/leonardocunha1/exercicios-faculdade/main/2024/DSM/1%C2%B0Semestre/Web%20I/Projeto%202/Screenshot_1.png" width="350px" />
<br>
2. Ilustradora Irina Blok
<br>
<img src="https://raw.githubusercontent.com/leonardocunha1/exercicios-faculdade/main/2024/DSM/1%C2%B0Semestre/Web%20I/Projeto%202/Screenshot_2.png" width="350px" />
<br>
3. Bugdroid
<br>
<img src="https://raw.githubusercontent.com/leonardocunha1/exercicios-faculdade/main/2024/DSM/1%C2%B0Semestre/Web%20I/Projeto%202/Screenshot_3.png" width="100px" />


</details>


