
# TemplateBot

TemplateBot es un proyecto de código libre diseñado para servir como base para la creación de bots en Discord. Este proyecto incluye funcionalidades avanzadas como comandos de barra (slash commands), manejo de eventos, integración con servicios externos, y un sistema de registro de logs. **Nota:** Este proyecto está en desarrollo y el código puede estar desordenado o incompleto. ¡Gracias por tu paciencia mientras lo mejoro con el tiempo!

## Características

- **Comandos de barra (slash commands):** Incluye ejemplos como `/ping`, `/avatar`, `/chat` (integración con IA), y comandos de moderación como `/ban`, `/kick`, y `/say`.
- **Manejo de eventos:** Ejemplo de eventos como `guildMemberAdd` (mensaje de bienvenida) y `interactionCreate` (manejo de interacciones).
- **Integración con IA:** Uso de la API de Mistral para generar respuestas inteligentes en el comando `/chat`.
- **Sistema de logs:** Registra información y errores en archivos separados utilizando Winston.
- **Configuración modular:** Uso de archivos de configuración para variables, cliente de Discord, y conexión a la base de datos.
- **Soporte para `.env`:** Manejo de credenciales sensibles como el token de Discord, Client ID, y claves de API.
- **Base de datos:** Integración con MySQL utilizando Sequelize para almacenar configuraciones del servidor.
- **Carga dinámica de comandos:** Los comandos se cargan automáticamente desde las carpetas correspondientes.

## Requisitos

- Node.js 16.9.0 o superior.
- Una aplicación de Discord configurada en el [Portal de Desarrolladores de Discord](https://discord.com/developers/applications).
- Un token de bot válido y un Client ID.
- Una base de datos MySQL configurada.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd templateBot
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   - Crea un archivo `.env` basado en el archivo `.env.example` y completa los valores necesarios:
     ```env
     DISCORD_TOKEN='<your_token>'
     CLIENT_ID='<your-client-id>'
     DB_NAME='TemplateBOT'
     DB_USER='root'
     DB_PASS=''
     DB_HOST='localhost'
     KEY_MISTRAL='<your-mistral-api-key>'
     ```

4. Registra los comandos en Discord:
   ```bash
   npm run newCommands
   ```

5. Inicia el bot:
   - Modo producción:
     ```bash
     npm start
     ```
   - Modo desarrollo (con reinicio automático):
     ```bash
     npm run dev
     ```

## Estructura del Proyecto

```bash
src/
├── app.js                 # Archivo principal del bot
├── commands/              # Comandos de barra
│   ├── avatar.command.js  # Comando para mostrar avatares
│   ├── ping.command.js    # Comando para mostrar el ping
│   ├── ia/                # Comandos relacionados con IA
│   │   └── Ia.command.js  # Comando para interactuar con la IA
│   └── moderator/         # Comandos de moderación
│       ├── ban.command.js # Comando para banear usuarios
│       ├── kick.command.js # Comando para expulsar usuarios
│       └── say.command.js # Comando para enviar mensajes a canales
├── config/                # Configuración del bot
│   ├── Client.config.js   # Configuración del cliente de Discord
│   ├── deploy-commands.js # Registro de comandos en Discord
│   ├── mistral.config.js  # Configuración de la API de Mistral
│   ├── sequelize.config.js # Configuración de Sequelize
│   ├── syncDB.config.js   # Sincronización de la base de datos
│   └── variables.config.js # Variables de entorno
├── events/                # Eventos del bot
│   ├── interaction.event.js # Manejo de interacciones
│   └── joinPlayer.event.js  # Evento de bienvenida
├── repositories/          # Repositorios para la base de datos
│   └── config.repository.js # Repositorio de configuración
├── services/              # Servicios externos
│   ├── bd.service.js      # Servicio para la base de datos
│   └── chatIA.service.js  # Servicio para la integración con IA
├── utils/                 # Utilidades
│   ├── logger.util.js     # Sistema de logs
│   └── readFolders.util.js # Carga dinámica de comandos
└── .env                   # Variables de entorno (no incluido en el repositorio)
```

## Comandos Disponibles

### Comandos Generales
- `/ping`: Muestra el ping del bot.
- `/avatar`: Muestra tu avatar o el de otro usuario.

### Comandos de Moderación
- `/ban`: Banea a un usuario del servidor.
- `/kick`: Expulsa a un usuario del servidor.
- `/say`: Envía un mensaje a un canal específico.

### Comandos de IA
- `/chat`: Interactúa con la IA utilizando la API de Mistral.

## Logs

Los logs se almacenan en la carpeta logs:
- `info.log`: Información general.
- `error.log`: Errores del bot.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un problema o tienes una idea para mejorar el proyecto, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.
