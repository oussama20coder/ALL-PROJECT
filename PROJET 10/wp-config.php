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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'site-ecommerce' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'gVD@TwI]wkLV{{Ip|ZoyW>EU5Q+!rL;*x%N34{p?g7C6h3a!Q+c@{p!=?U~~n3Cp' );
define( 'SECURE_AUTH_KEY',  'SO)gyYsKwp,}7Br~{kA*qTMalfD QQQV#)i*UR2A~JH{J^OH$/u#.PkaW CH6~4>' );
define( 'LOGGED_IN_KEY',    '0M;A[<`J<OqBe:p><8:F@3$8]A`<n%U+dHG76tLq[-3<cCX-5W6,SPLQ,(w,C%lw' );
define( 'NONCE_KEY',        '|xqQ&.1d3<h96d(L3Wfhp?iH?jHHaSBhhb$-r(5L_X=UV<tXZ7aqNY}M<f&edyz/' );
define( 'AUTH_SALT',        'LG&z&-MT y6nBuw2jL<P^r|AM9.FT0x^/X@C5s{5o:{b!F;}G}BSve-BgE2Y|L>*' );
define( 'SECURE_AUTH_SALT', 'JJJz{xY~1ic9{-2;4VtgW/pz(+nWO}O!l(`vY7A/+SPk`k=0T^[{vRhN,B&X/W7l' );
define( 'LOGGED_IN_SALT',   '*l4s 2aA4A~3K<MSkJ5320:|-Pf}Q/s;bK#uongKCYpzMru^-KnR|VhHHw#%Gs)?' );
define( 'NONCE_SALT',       'R&6:r]Gu4e_sEI|kNoXU5_(9~ wJ]GV)xR7tM#q{WH<3!~cWE}LBNrB.5nCUq`cm' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
