
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into public-facing code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GJS_DEBUG_TOPICS: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_dependencies_pensador_api: string;
	export const LANGUAGE: string;
	export const USER: string;
	export const npm_package_dependencies__sveltejs_adapter_node: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_user_agent: string;
	export const npm_config_bin_links: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_config_init_version: string;
	export const SHLVL: string;
	export const OLDPWD: string;
	export const HOME: string;
	export const LESS: string;
	export const npm_package_devDependencies_sass: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const npm_package_devDependencies__sveltejs_adapter_netlify: string;
	export const DESKTOP_SESSION: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const TERMINAL_EMULATOR: string;
	export const ZSH: string;
	export const LSCOLORS: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_package_engines_node: string;
	export const npm_config_init_license: string;
	export const GTK_MODULES: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const PAGER: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_config_version_tag_prefix: string;
	export const MANAGERPID: string;
	export const npm_package_scripts_check: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const SYSTEMD_EXEC_PID: string;
	export const npm_config_engine_strict: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const npm_package_description: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_readmeFilename: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_scripts_dev: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const JOURNAL_STREAM: string;
	export const _: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_private: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const USERNAME: string;
	export const TERM: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const npm_package_devDependencies_eslint_plugin_svelte3: string;
	export const npm_config_ignore_scripts: string;
	export const PATH: string;
	export const NODE: string;
	export const INVOCATION_ID: string;
	export const __INTELLIJ_COMMAND_HISTFILE__: string;
	export const SESSION_MANAGER: string;
	export const npm_package_name: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_RUNTIME_DIR: string;
	export const DISPLAY: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LANG: string;
	export const DESKTOP_STARTUP_ID: string;
	export const npm_package_devDependencies_eslint: string;
	export const XAUTHORITY: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SSH_AGENT_LAUNCHER: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_version_git_message: string;
	export const SHELL: string;
	export const npm_lifecycle_event: string;
	export const npm_package_version: string;
	export const GDMSESSION: string;
	export const QT_ACCESSIBILITY: string;
	export const npm_config_argv: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_git_sign: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const npm_package_dependencies__vitejs_plugin_basic_ssl: string;
	export const npm_config_strict_ssl: string;
	export const QT_IM_MODULE: string;
	export const npm_package_dependencies_firebase: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_devDependencies_axios: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_config_save_prefix: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_scripts_preview: string;
	export const INIT_CWD: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into public-facing code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GJS_DEBUG_TOPICS: string;
		TERM_SESSION_ID: string;
		npm_package_dependencies_pensador_api: string;
		LANGUAGE: string;
		USER: string;
		npm_package_dependencies__sveltejs_adapter_node: string;
		npm_config_version_commit_hooks: string;
		npm_config_user_agent: string;
		npm_config_bin_links: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		npm_package_devDependencies_vite: string;
		npm_config_init_version: string;
		SHLVL: string;
		OLDPWD: string;
		HOME: string;
		LESS: string;
		npm_package_devDependencies_sass: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		npm_package_devDependencies__sveltejs_adapter_netlify: string;
		DESKTOP_SESSION: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		TERMINAL_EMULATOR: string;
		ZSH: string;
		LSCOLORS: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_package_engines_node: string;
		npm_config_init_license: string;
		GTK_MODULES: string;
		GNOME_SHELL_SESSION_MODE: string;
		PAGER: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_svelte_check: string;
		npm_config_version_tag_prefix: string;
		MANAGERPID: string;
		npm_package_scripts_check: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		SYSTEMD_EXEC_PID: string;
		npm_config_engine_strict: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		npm_package_description: string;
		npm_package_devDependencies_typescript: string;
		npm_package_readmeFilename: string;
		WAYLAND_DISPLAY: string;
		npm_package_devDependencies_prettier: string;
		npm_package_scripts_dev: string;
		LOGNAME: string;
		npm_package_type: string;
		JOURNAL_STREAM: string;
		_: string;
		npm_package_scripts_check_watch: string;
		npm_package_private: string;
		XDG_SESSION_CLASS: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		USERNAME: string;
		TERM: string;
		GNOME_DESKTOP_SESSION_ID: string;
		npm_package_devDependencies_eslint_plugin_svelte3: string;
		npm_config_ignore_scripts: string;
		PATH: string;
		NODE: string;
		INVOCATION_ID: string;
		__INTELLIJ_COMMAND_HISTFILE__: string;
		SESSION_MANAGER: string;
		npm_package_name: string;
		GNOME_SETUP_DISPLAY: string;
		XDG_MENU_PREFIX: string;
		XDG_RUNTIME_DIR: string;
		DISPLAY: string;
		XDG_CURRENT_DESKTOP: string;
		LANG: string;
		DESKTOP_STARTUP_ID: string;
		npm_package_devDependencies_eslint: string;
		XAUTHORITY: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SSH_AGENT_LAUNCHER: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_version_git_message: string;
		SHELL: string;
		npm_lifecycle_event: string;
		npm_package_version: string;
		GDMSESSION: string;
		QT_ACCESSIBILITY: string;
		npm_config_argv: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_build: string;
		npm_config_version_git_tag: string;
		npm_config_version_git_sign: string;
		GJS_DEBUG_OUTPUT: string;
		npm_package_dependencies__vitejs_plugin_basic_ssl: string;
		npm_config_strict_ssl: string;
		QT_IM_MODULE: string;
		npm_package_dependencies_firebase: string;
		npm_package_scripts_format: string;
		PWD: string;
		npm_execpath: string;
		XDG_DATA_DIRS: string;
		npm_package_devDependencies_axios: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_config_save_prefix: string;
		npm_config_ignore_optional: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_scripts_preview: string;
		INIT_CWD: string;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: string]: string | undefined;
	}
}
