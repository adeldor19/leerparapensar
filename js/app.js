const books=[
  {id:"libro-01",number:"01",title:"1984",author:"George Orwell",description:"Una lectura para pensar sobre vigilancia, información, lenguaje, memoria, poder y libertad.",status:"En lectura"},
  {id:"libro-02",number:"02",title:"Próxima lectura",author:"",description:"La segunda obra del club se incorporará cuando llegue su momento.",status:"Próximamente"},
  {id:"libro-03",number:"03",title:"Próxima lectura",author:"",description:"Una nueva obra para seguir leyendo, pensando y compartiendo.",status:"Próximamente"}
];
const container=document.querySelector("#books");
container.innerHTML=books.map(book=>`
  <article class="card">
    <small>LIBRO ${book.number} · ${book.status}</small>
    <h3>${book.title}</h3>
    ${book.author ? `<p class="author">${book.author}</p>` : ""}
    <p>${book.description}</p>
    <a class="button" href="libros/${book.id}.html">Abrir lectura →</a>
  </article>
`).join("");