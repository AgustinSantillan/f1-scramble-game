# Pilotos Desordenados 🏎️ (F1 Scramble Game)

Este proyecto es una aplicación web de juego de palabras, desarrollada como parte de mi **capacitación autodidacta y profundización en React** y **TypeScript**. El proyecto se enfoca en la gestión de estado avanzada y la modularización de la **Lógica de la Aplicación**.

Forma parte del curso **“React: de cero a experto – Edición 2025”** de **Fernando Herrera (DevTalles)**.

![Estado](https://img.shields.io/badge/Estado-Finalizado-success)
![Tecnología Principal](https://img.shields.io/badge/Framework-React%20%26%20TS-blue)
![Estilo](https://img.shields.io/badge/Estilo-Tailwind%20CSS-06B6D4)

## 📝 Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características Principales](#características-principales)
- [Demostración (Demo)](#demostración-demo)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación Local](#instalación-local)
- [Uso y Ejecución](#uso-y-ejecución)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto y Autor](#contacto-y-autor)

---

## Descripción del Proyecto

**Pilotos Desordenados** es un juego donde el usuario debe adivinar el apellido de un piloto de F1 de la parrilla actual, a partir de sus letras desordenadas. El objetivo es maximizar la puntuación antes de alcanzar el límite de 3 errores.

El valor principal de este proyecto reside en la implementación de patrones de gestión de estado complejos y escalables en React, demostrando la separación efectiva de la **Funcionalidad del Proyecto** (la lógica del juego) de la interfaz de usuario:

* **Lógica de Juego Centralizada:** Toda la **lógica del juego** (manejo de puntos, errores, saltos, reseteo) está encapsulada en un **`scrambleWordsReducer`** y un estado global definido por **TypeScript**.
* **Hook Personalizado (`useScrambleGame`):** Se utilizó este Hook para desacoplar y hacer reusable la **Lógica de la Aplicación**, exponiendo únicamente las propiedades y métodos necesarios a los componentes principales.
* **Manejo de Side Effects:** Uso de `useEffect` para disparar efectos visuales (confetti) y para manejar la finalización de la partida.

### Características Principales

* **Gestión de Estado Reducer:** Uso del hook `useReducer` para una gestión del estado predecible, similar a Redux, ideal para **Lógica del Juego** compleja.
* **Contadores Rigurosos:** Seguimiento exacto de Puntos, Errores (máx. 3) y Saltos (máx. 3), con un *Game Over* claro al alcanzar el límite.
* **Diseño Interactivo:** Interfaz construida con componentes modulares estilizados con **Tailwind CSS** y **Shadcn/ui** para un look moderno y limpio.
* **Reactividad:** Los componentes (`GameStats`, `ScrambledLetters`, `GuessInput`) se actualizan de forma reactiva a los cambios de estado disparados por el `dispatch`.
* **Efectos de Éxito:** Integración con `canvas-confetti` para una experiencia de usuario gratificante en cada acierto.

## Demostración (Demo)

La aplicación está desplegada en Netlify. Puedes probarla en el siguiente enlace:

🔗 **Aplicación Desplegada:** [https://pilotos-desordenados.netlify.app/](https://pilotos-desordenados.netlify.app/) *(Enlace de ejemplo, se recomienda actualizar)*

## Tecnologías Utilizadas

* **React:** Biblioteca principal para la construcción de la interfaz de usuario.
* **TypeScript:** Añade tipado estático al proyecto, mejorando la robustez del código en la **Lógica del Reducer**.
* **Tailwind CSS:** Framework CSS utility-first para el estilizado rápido y responsivo.
* **Shadcn/ui:** Componentes de interfaz de usuario de alta calidad.
* **canvas-confetti:** Librería para efectos visuales.
* **Vite:** Herramienta de construcción para un entorno de desarrollo rápido.

## Instalación Local

Para clonar y ejecutar este proyecto localmente, sigue estos pasos:

### Prerrequisitos

* Node.js (LTS)
* npm (o Yarn/pnpm)

### Pasos Detallados

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd pilotos-desordenados
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configuración de Entorno:**
    Este proyecto no requiere variables de entorno ni secretos para su funcionamiento base.

## Uso y Ejecución

Para iniciar la aplicación en modo de desarrollo:

1.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación se abrirá en tu navegador, generalmente en `http://localhost:5173/`.

2.  **Ejemplos de Uso:**
    * **Adivinar:** Escribe el apellido del piloto en el campo de texto y presiona el botón "Enviar respuesta" o la tecla Enter.
    * **Saltar:** Haz clic en el botón "SALTAR" si no conoces el apellido (máx. 3 veces por partida).
    * **Reiniciar:** Al terminar, el botón "JUGAR DE NUEVO" recarga el estado inicial del `useReducer` para una nueva partida.
