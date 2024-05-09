function buscarProyectoPor(nombre, proyectos){
  const STRINGVACIO=""
  const TAMANIOPROYECTOS=proyectos.length
  let iteradorProyectos
  let proyectosBuscados=[]
  if(TAMANIOPROYECTOS==0)
    {
      return "No existen proyectos"
    }
  for (iteradorProyectos=0;iteradorProyectos<TAMANIOPROYECTOS;iteradorProyectos++){
    let proyectoBuscado=proyectos[iteradorProyectos]
    if (proyectoBuscado.startsWith(nombre))
      {
        proyectosBuscados.push(proyectos[iteradorProyectos])
      }
  }
  if (proyectosBuscados.length==0)
    {
      return STRINGVACIO
    }
  return proyectosBuscados.join(",")
}
export default buscarProyectoPor;