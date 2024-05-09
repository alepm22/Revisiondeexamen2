describe("Buscar", () => {
  it("no encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => { 
      let proyectos = [];
      expect(buscarProyecto("ejerciciol", proyectos)).toEqual("");
  });

  it("encuentra un proyecto cuando el mismo existe en una lista de 1 proyecto", () => {
      let proyectos = [];
      proyectos.push("miUnicoProyecto");
      expect(buscarProyecto("miUnicoProyecto", proyectos)).toEqual("miUnicoProyecto");
  });

 
});

function buscarProyecto(nombre, proyectos) {
  if (proyectos.length === 0) {
      return "";
  }

  let resultados = [];

  for (const proyecto of proyectos) {
      if (proyecto === nombre) {
          resultados.push(proyecto);
      } else if (proyecto.startsWith(nombre)) {
          resultados.push(proyecto);
      }
  }

  if (resultados.length === 0) {
      return "";
  } else if (resultados.length === 1) {
      return resultados[0];
  } else {
      return resultados;
  }
}