import buscarProyectoPor from "./proyectos.js";

describe("buscar proyecto por nombre", () => {
  it("Deberia retornar el mensaje no tiene proyectos si se trata de realizar una busqueda sobre una lista de proyectos vacia", () => {
    let proyectos=[]
    expect(buscarProyectoPor("proy1",proyectos)).toEqual("No existen proyectos");
  });
  it("Deberia retornar el nombre del proyectos buscado si es que solo tenemos un proyecto", () => {
    let proyectos=["proy1"]
    expect(buscarProyectoPor("proy1",proyectos)).toEqual("proy1");
  });
});