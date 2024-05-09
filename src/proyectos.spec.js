import buscarProyectoPor from "./proyectos.js";

describe("buscar proyecto por nombre", () => {
  it("Deberia retornar el mensaje no tiene proyectos si se trata de realizar una busqueda sobre una lista de proyectos vacia", () => {
    let proyectos=[]
    expect(buscarProyectoPor("ejercicio1",proyectos)).toEqual("No existen proyectos");
  });
  it("Deberia retornar el nombre del proyectos buscado si es que solo tenemos un proyecto", () => {
    let proyectos=["ejercicio1"]
    expect(buscarProyectoPor("ejercicio1",proyectos)).toEqual("ejercicio1");
  });
  it("Deberia retornar el nombre del proyectos buscado si es que tenemos mas de un proyecto en proyectos", () => {
    let proyectos=["ejercicio1","ejercicio2"]
    expect(buscarProyectoPor("ejercicio2",proyectos)).toEqual("ejercicio2");
  });
  
});