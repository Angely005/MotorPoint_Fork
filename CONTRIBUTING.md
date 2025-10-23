
# Contribuir a MotorPoint

¡Gracias por interesarte en contribuir al proyecto **MotorPoint**!  
Aquí tienes una guía rápida para hacerlo de forma efectiva y coherente con nuestro flujo de trabajo.

## Guía rápida

1. Haz un **fork** de este repositorio.  
2. Crea un **branch** en tu fork para tu contribución, siguiendo la convención:  
   `feature/<descripción-corta>` o `fix/<descripción-corta>`.  
3. Asegúrate de que tu código pasa las pruebas locales y no genera errores.  
4. Envía un **Pull Request (PR)** hacia la rama `develop`.  
5. Rellena el formulario de PR con la plantilla provista (sección de Cambios, Contexto, Capturas si aplica).  
6. Espera la revisión de al menos otro colaborador. Realiza los cambios necesarios si te lo solicitan.  
7. Una vez aprobado, tu PR será mergeado y aparecerá en el próximo **CHANGELOG**.  

## Estilo de commits

- Usa la convención:  
  ```text
  tipo: descripción breve
  ```

Donde `tipo` puede ser:

* `feat`: nueva funcionalidad
* `fix`: corrección de bug
* `docs`: cambios en la documentación
* `chore`: tareas auxiliares, infraestructura, limpieza
* `refactor`: cambios de código que no añaden funcionalidad ni corrigen bugs

Ejemplo:

```text
feat: add Login component
fix: actualizar README.md para agregar el flujo de trabajo en git
docs: agregar plantillas para solicitudes de funcionalidad y tareas generales
```

## Plantillas de Issues y Pull Requests

Hemos añadido plantillas para reportes de bugs, solicitudes de funcionalidad y PRs con secciones estándar para mantener la consistencia. Por favor, úsalas al crear nuevos issues o PRs.

## Normas de código y pruebas

* Sigue la guía de estilo del proyecto (por ejemplo: indentación, nomenclatura, documentación interna).
* Incluye pruebas unitarias o de integración cuando aplicable.
* Asegúrate de que tu cambio no rompe funcionalidades existentes.
* Actualiza la documentación correspondiente si tu cambio lo requiere.

## Evaluación de Pull Requests

Cuando revises un PR, considera lo siguiente:

* ¿El cambio está correctamente descrito y justificado?
* ¿Los tests pasan y no se han introducido errores nuevos?
* ¿Se ha actualizado el `CHANGELOG.md` si es necesario, o tu cambio será documentado en la próxima versión?
* ¿Se han respetado las convenciones de estilo y commit?

## Gracias

Gracias por ayudar a que MotorPoint sea mejor. ¡Tu aporte hace la diferencia! 🚀

