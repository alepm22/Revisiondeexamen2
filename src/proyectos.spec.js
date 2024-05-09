import buscarProyectoPor from "./proyectos.js";

describe("buscar proyecto por nombre", () => {
  it("Deberia retornar el mensaje no tiene proyectos si se trata de realizar una busqueda sobre una lista de proyectos vacia", () => {
    let proyectos=[]
    expect(buscarProyectoPor("proyecto1",proyectos)).toEqual("No existen proyectos");
  });
  it("Deberia retornar el nombre del proyectos buscado si es que solo tenemos un proyecto", () => {
    let proyectos=["proyecto1"]
    expect(buscarProyectoPor("proyecto1",proyectos)).toEqual("proyecto1");
  });
  ("Deberia retornar el nombre del proyectos buscado si es que tenemos mas de un proyecto en proyectos", () => {
    let proyectos=["proyecto1","proyecto2"]
    expect(buscarProyectoPor("proyecto2",proyectos)).toEqual("proyecto2");
  });
  it("Deberia retornar los nombres de los proyectos que coincidan con la busqueda", () => {
    let proyectos=["proyecto1","proyecto2","proyecto2"]
    expect(buscarProyectoPor("proyecto2",proyectos)).toEqual("proyecto2,proyecto2");
  });
});