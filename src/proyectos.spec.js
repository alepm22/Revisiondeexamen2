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

  it("encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
      let proyectos = [];
      proyectos.push("proyecto1");
      proyectos.push("proyecto2");
      proyectos.push("proyecto3");
      expect(buscarProyecto("proyecto2", proyectos)).toEqual("proyecto2");
  });

  it("encuentra varios proyectos cuando hay más de una coincidencia", () => {
      let proyectos = ["proyecto1", "proyecto2", "proyecto3", "otroProyecto2"];
      expect(buscarProyecto("proyecto", proyectos)).toEqual(["proyecto1", "proyecto2", "proyecto3"]);
  });

  it("encuentra proyectos cuyo nombre empieza con el criterio de búsqueda", () => {
      let proyectos = ["proyecto1", "proyecto2", "otroProyecto2"];
      expect(buscarProyecto("proyecto", proyectos)).toEqual(["proyecto1", "proyecto2"]);
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