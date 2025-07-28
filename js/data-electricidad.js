



// Malla curricular de Ingeniería en Electricidad - FP-UNA
// Estructura adaptada para la app interactiva
export const materias = [
  {
    anio: "Primero",
    color: "#003366",
    semestres: [
      {
        numero: "Primer Semestre",
        materias: [
          { id: "algebra", nombre: "Álgebra", tipo: "basica", creditos: 5 },
          { id: "calculo1", nombre: "Cálculo I", tipo: "basica", creditos: 5 },
          { id: "dibujo", nombre: "Dibujo Técnico", tipo: "basica", creditos: 5 },
          { id: "geometria", nombre: "Geometría Analítica y Vectores", tipo: "basica", creditos: 5 },
          { id: "quimica", nombre: "Química", tipo: "basica", creditos: 5 },
          { id: "prevision", nombre: "Previsión y Seguridad en el Trabajo", tipo: "complementaria", creditos: 5 }
        ]
      },
      {
        numero: "Segundo Semestre",
        materias: [
          { id: "electrotecnia1", nombre: "Electrotecnia I", tipo: "ingenieria", creditos: 5, previas: ["algebra"] },
          { id: "calculo2", nombre: "Cálculo II", tipo: "basica", creditos: 5, previas: ["calculo1"] },
          { id: "fisica1", nombre: "Física I", tipo: "basica", creditos: 5, previas: ["geometria"] },
          { id: "fisica2", nombre: "Física II", tipo: "basica", creditos: 5, previas: ["prevision"] },
          { id: "diseno", nombre: "Diseño Asistido por Computadora", tipo: "ingenieria", creditos: 5, previas: ["dibujo"] },
          { id: "algoritmo", nombre: "Algoritmo", tipo: "ingenieria", creditos: 5, previas: ["quimica"] }
        ]
      }
    ]
  },
  {
    anio: "Segundo",
    color: "#003366",
    semestres: [
      {
        numero: "Tercer Semestre",
        materias: [
          { id: "electrotecnia2", nombre: "Electrotecnia II", tipo: "ingenieria", previas: ["electrotecnia1"] },
          { id: "calculo3", nombre: "Cálculo III", tipo: "basica", previas: ["calculo2"] },
          { id: "fisica3", nombre: "Física III", tipo: "basica", previas: ["fisica1"] },
          { id: "programacion", nombre: "Programación", tipo: "ingenieria", previas: ["algoritmo"] },
          { id: "circuitos1", nombre: "Circuitos Eléctricos I", tipo: "ingenieria", previas: ["calculo2", "electrotecnia1"] },
          { id: "resistencia", nombre: "Resistencia de Materiales", tipo: "ingenieria", previas: ["fisica2"] }
        ]
      },
      {
        numero: "Cuarto Semestre",
        materias: [
          { id: "probabilidad", nombre: "Probabilidad y Estadística", tipo: "basica", previas: ["calculo3"] },
          { id: "fisica4", nombre: "Física IV", tipo: "basica", previas: ["fisica3"] },
          { id: "calculo4", nombre: "Cálculo IV", tipo: "basica", previas: ["calculo3"] },
          { id: "circuitos2", nombre: "Circuitos Eléctricos II", tipo: "ingenieria", previas: ["circuitos1"] },
          { id: "electronica1", nombre: "Electrónica I", tipo: "ingenieria", previas: ["fisica4", "circuitos1"] }
        ]
      }
    ]
  },
  {
    anio: "Tercero",
    color: "#003366",
    semestres: [
      {
        numero: "Quinto Semestre",
        materias: [
          { id: "instalaciones1", nombre: "Instalaciones Eléctricas I", tipo: "aplicacion", previas: ["probabilidad", "circuitos2", "electronica1"] },
          { id: "fisica5", nombre: "Física V", tipo: "basica", previas: ["fisica4", "calculo4"] },
          { id: "calculo5", nombre: "Cálculo V", tipo: "basica", previas: ["calculo4"] },
          { id: "electronica2", nombre: "Electrónica II", tipo: "ingenieria", previas: ["electronica1", "circuitos2"] },
          { id: "conversion1", nombre: "Conversión de la Energía Eléctrica I", tipo: "aplicacion", previas: ["circuitos2", "electronica1"] }
        ]
      },
      {
        numero: "Sexto Semestre",
        materias: [
          { id: "instalaciones2", nombre: "Instalaciones Eléctricas II", tipo: "aplicacion", previas: ["instalaciones1"] },
          { id: "fisica6", nombre: "Física VI", tipo: "basica", previas: ["fisica5", "calculo5"] },
          { id: "calculo6", nombre: "Cálculo VI", tipo: "basica", previas: ["calculo5"] },
          { id: "sistemas_control1", nombre: "Sistemas de Control I", tipo: "aplicacion", previas: ["electronica2", "conversion1"] },
          { id: "electronica_potencia1", nombre: "Electrónica de Potencia I", tipo: "aplicacion", previas: ["electronica2", "conversion1"] },
          { id: "conversion2", nombre: "Conversión de la Energía Eléctrica II", tipo: "aplicacion", previas: ["conversion1"] }
        ]
      }
    ]
  },
  {
    anio: "Cuarto",
    color: "#003366",
    semestres: [
      {
        numero: "Séptimo Semestre",
        materias: [
          { id: "instalaciones3", nombre: "Instalaciones Eléctricas III", tipo: "aplicacion", previas: ["instalaciones2"] },
          { id: "fisica7", nombre: "Física VII", tipo: "basica", previas: ["fisica6", "calculo6"] },
          { id: "sistemas_control2", nombre: "Sistemas de Control II", tipo: "aplicacion", previas: ["sistemas_control1"] },
          { id: "electronica_potencia2", nombre: "Electrónica de Potencia II", tipo: "aplicacion", previas: ["electronica_potencia1"] },
          { id: "sistemas_digitales1", nombre: "Sistemas Digitales I", tipo: "aplicacion", previas: ["electronica2"] },
          { id: "automatizacion", nombre: "Automatización Industrial", tipo: "aplicacion", previas: ["instrumentacion"] },
          { id: "instrumentacion", nombre: "Instrumentación Industrial", tipo: "aplicacion", previas: ["electronica_potencia1"] },
          { id: "distribucion", nombre: "Distribución de la Energía Eléctrica", tipo: "aplicacion", previas: ["instalaciones3", "fisica7"] }
        ]
      },
      {
        numero: "Octavo Semestre",
        materias: [
          { id: "instalacion_industrial", nombre: "Instalación Eléctrica Industrial", tipo: "aplicacion", previas: ["instalaciones3"] },
          { id: "lineas_transmision", nombre: "Líneas de Transmisión", tipo: "aplicacion", previas: ["distribucion", "fisica7"] },
          { id: "sistemas_neumaticos", nombre: "Sistemas Neumáticos Industriales", tipo: "aplicacion", previas: ["automatizacion"] },
          { id: "sistemas_potencia1", nombre: "Sistemas de Potencia I", tipo: "aplicacion", previas: ["electronica_potencia2", "sistemas_digitales1"] },
          { id: "sistemas_digitales2", nombre: "Sistemas Digitales II", tipo: "aplicacion", previas: ["sistemas_digitales1"] },
          { id: "administracion", nombre: "Administración y Recursos Humanos", tipo: "complementaria", previas: ["automatizacion"] },
          { id: "normalizacion", nombre: "Normalización y Control Industrial", tipo: "complementaria", previas: ["instrumentacion"] }
        ]
      }
    ]
  },
  {
    anio: "Quinto",
    color: "#003366",
    semestres: [
      {
        numero: "Noveno Semestre",
        materias: [
          { id: "subestaciones", nombre: "Subestaciones", tipo: "aplicacion", previas: ["instalacion_industrial", "lineas_transmision"] },
          { id: "generacion", nombre: "Generación de Energía Eléctrica", tipo: "aplicacion", previas: ["lineas_transmision"] },
          { id: "mantenimiento", nombre: "Mantenimiento Industrial", tipo: "aplicacion", previas: ["sistemas_neumaticos"] },
          { id: "sistemas_potencia2", nombre: "Sistemas de Potencias II", tipo: "aplicacion", previas: ["sistemas_potencia1"] },
          { id: "proteccion", nombre: "Protección en Sistemas Eléctricos", tipo: "aplicacion", previas: ["sistemas_potencia1"] },
          { id: "proyecto", nombre: "Proyecto de Trabajo de Grado", tipo: "aplicacion", previas: ["mantenimiento", "generacion"] }
        ]
      },
      {
        numero: "Décimo Semestre",
        materias: [
          { id: "factibilidad", nombre: "Factibilidad de Sistemas Eléctricos", tipo: "aplicacion", previas: ["subestaciones"] },
          { id: "emprendedurismo", nombre: "Emprendedurismo", tipo: "complementaria", previas: ["administracion"] },
          { id: "medicion", nombre: "Medición de la Energía Eléctrica", tipo: "aplicacion", previas: ["sistemas_potencia2"] },
          { id: "economia", nombre: "Economía y Finanzas", tipo: "complementaria", previas: ["administracion"] },
          { id: "derecho", nombre: "Derecho", tipo: "complementaria", previas: ["normalizacion"] }
        ]
      }
    ]
  }
];

export function getTotalCreditos() {
  return getAllMaterias().length;
}

export function getAllMaterias() {
  const todasLasMaterias = [];
  materias.forEach(anio => {
    anio.semestres.forEach(semestre => {
      semestre.materias.forEach(materia => {
        todasLasMaterias.push({
          ...materia,
          anio: anio.anio,
          semestre: semestre.numero
        });
      });
    });
  });
  return todasLasMaterias;
}

export function getMateriaById(id) {
  return getAllMaterias().find(materia => materia.id === id) || null;
}

export const config = {
  STORAGE_KEY: "estadoMaterias_ingenieria_electricidad_fpuna",
  DATA_VERSION: "1.0.0",
  ANIMATION_DURATION: 300,
  COLORS: {
    basica: "#003366",           // Azul institucional
    ingenieria: "#FFD600",       // Amarillo institucional
    aplicacion: "#f5f6fa",       // Gris claro institucional
    complementaria: "#fff"        // Blanco
  }
};