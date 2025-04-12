# TemplateBot

TemplateBot es un proyecto de código libre diseñado para servir como base para la creación de bots en Discord. Este proyecto incluye funcionalidades básicas como comandos de barra (slash commands), manejo de eventos, y un sistema de registro de logs. **Nota:** Este proyecto está en desarrollo y el código puede estar desordenado o incompleto. ¡Gracias por tu paciencia mientras lo mejoro con el tiempo!

## Características

- **Comandos de barra (slash commands):** Incluye ejemplos como `/ping` y `/avatar`.
- **Manejo de eventos:** Ejemplo de eventos como `guildMemberAdd` y `interactionCreate`.
- **Sistema de logs:** Registra información y errores en archivos separados.
- **Configuración modular:** Uso de archivos de configuración para variables y cliente de Discord.
- **Soporte para `.env`:** Manejo de credenciales sensibles como el token de Discord y el Client ID.

## Requisitos

- Node.js 16.9.0 o superior.
- Una aplicación de Discord configurada en el [Portal de Desarrolladores de Discord](https://discord.com/developers/applications).
- Un token de bot válido y un Client ID.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd templateBot

src/
├── [app.js](http://_vscodecontentref_/0)                 # Archivo principal del bot
├── commands/              # Comandos de barra
│   ├── [avatar.command.js](http://_vscodecontentref_/1)  # Comando para mostrar avatares
│   └── [ping.command.js](http://_vscodecontentref_/2)    # Comando para mostrar el ping
├── config/                # Configuración del bot
│   ├── [Client.config.js](http://_vscodecontentref_/3)   # Configuración del cliente de Discord
│   ├── [deploy-commands.js](http://_vscodecontentref_/4) # Registro de comandos en Discord
│   └── [variables.config.js](http://_vscodecontentref_/5) # Variables de entorno
├── events/                # Eventos del bot
│   ├── [interaction.event.js](http://_vscodecontentref_/6) # Manejo de interacciones
│   └── [joinPlayer.event.js](http://_vscodecontentref_/7)  # Evento de bienvenida
├── utils/                 # Utilidades
│   ├── [logger.util.js](http://_vscodecontentref_/8)     # Sistema de logs
│   └── [readFolders.util.js](http://_vscodecontentref_/9) # Carga dinámica de comandos
└── .env                   # Variables de entorno (no incluido en el repositorio)