import React, { useState } from 'react';

const defaultPrompt = `Por favor, analiza la documentación proporcionada y genera un documento técnico detallado que incluya:
1. Descripción y contexto del proyecto
2. Análisis técnico
3. Conclusiones`;

export default function Home() {
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [result, setResult] = useState('');

  const generateResearch = () => {
    const simulatedResult = `# Análisis Técnico Generado

## 1. Descripción
### Contexto
Se ha realizado un análisis basado en el prompt proporcionado:
${prompt}

### Objetivos
- Generar un documento técnico estructurado
- Proporcionar recomendaciones claras
- Establecer próximos pasos

## 2. Análisis
### Hallazgos Principales
1. El sistema requiere una arquitectura modular
2. Se identifican áreas de mejora en la documentación
3. La integración entre componentes es adecuada

### Recomendaciones
- Implementar pruebas automatizadas
- Mejorar la documentación técnica
- Establecer estándares de código

## 3. Conclusiones
### Puntos Clave
- El proyecto tiene una base sólida
- Se requieren mejoras incrementales
- La escalabilidad está bien considerada

### Siguientes Pasos
1. Implementar las recomendaciones propuestas
2. Revisar la documentación
3. Planificar las mejoras`;

    setResult(simulatedResult);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6 bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Generador de Research Técnico</h1>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            Prompt de Análisis
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-32 p-2 border rounded-md"
            placeholder="Describe el análisis técnico que necesitas..."
          />
        </div>

        <button
          onClick={generateResearch}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Generar Research
        </button>
      </div>

      {result && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Resultado del Análisis</h2>
          <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-md overflow-x-auto">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}
