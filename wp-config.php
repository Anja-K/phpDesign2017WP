<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress2017');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'zC v39PHu fFv;1U:hPme_myfgv{yD!_7W9G-CH46P1FjMA)*Az7!by<1I}_T#5z');
define('SECURE_AUTH_KEY',  '90Z^RAeivLxC+&OI_/e]}%w:;`9~PBE-:3}NbBP]5%4?p<X?f{>FlmI6:WVO%@LV');
define('LOGGED_IN_KEY',    'Q~7r=:+>QwS-3g& *c5M;)}Z=?|gr`D=YP@txz:<~t9Aw&dV[^eE[4G4%z>vq(z:');
define('NONCE_KEY',        ')V(c}ih%^Aj?F;TtJ`iU }ujiL&W=<+N`ft hAY:rfbY^6&7C1q}`3l=L^JZW@uu');
define('AUTH_SALT',        'aBZzLX@_QAFVdv2TxA8s!R0&IEH-qmrRDg2Nf^(68>et5>N@2o&f4__Tj[L(_1~,');
define('SECURE_AUTH_SALT', 'v)[tWHYm~WSPbjw|;ZV}Ki*~iM0?`)&gqT&V(SRn,>/B?MCoEIOgwt%1f7!g6T;u');
define('LOGGED_IN_SALT',   'Y~HK jF,ZtB/z^XVF6X_+|70L^91HV(H5QCn}iz}Vjv=.>@4{-z-J4vjic,FnHO6');
define('NONCE_SALT',       'tGW*HnD5eduat%h*3Okr}qC^PlU_tl(NB>@*@HACYnJGh[9MPC1_{Q3%7s1ioZ![');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
