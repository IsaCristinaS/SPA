 export class Router {
    routes = {}
    //objeto vazio
    
    add(routeName, page) {
        this.routes[routeName] = page
        //objeto routes com propriedade routeNames e valor pages
    }
    
    route(event) {
        event = event || window.event;
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)
        //coloca no histórico a cada event target href
        //é clicado e muda de página

        this.handle()
        //this. permite usar a handle() abaixo 
      }


    handle() {
        const { pathname } = window.location
        //desestruturar (destruction) - vai no window, pega o location e encontra o pathname
        //colocando dentro da constante com mesmo nome
        const route = this.routes[pathname] || this.routes[404]
     
        fetch(route)
        .then(data => data.text ())
        .then(html => {
          document.querySelector('#app').innerHTML = html
        })
      }

}

