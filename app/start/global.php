<?php
/**
 * App/Start/Global File.
 *
 * Calls to various global functions.
 *
 * @package   SecurityApplication
 * @author    Marie Hogebrandt <iam@mariehogebrandt.se>
 * @copyright 2013-2014 Marie Hogebrandt
 * @license   http://opensource.org/licenses/MIT MIT
 * @link      https://github.com/Melindrea/security-application
 */

/*
    Register The Laravel Class Loader
    --------------------------------------------------------------------------

     In addition to using Composer, you may use the Laravel class loader to
     load your controllers and models. This is useful for keeping all of
     your classes in the "global" namespace without Composer updating.

*/

ClassLoader::addDirectories(
    array(
        app_path() . '/commands',
        app_path() . '/controllers',
        app_path() . '/models',
        app_path() . '/database/seeds',
    )
);

/*
    Application Error Logger
    --------------------------------------------------------------------------

     Here we will configure the error logger setup for the application which
     is built on top of the wonderful Monolog library. By default we will
     build a rotating log file setup which creates a new file each day.

*/

$logFile = 'log-' . php_sapi_name() . '.txt';

Log::useDailyFiles(storage_path() . '/logs/' . $logFile, 0, Config::get('app.log_level'));

/*
    Testing logging of login
    // Log::info(
    //     'User login',
    //     array(
    //      'ip' => \Request::getClientIP(),
    //      'user' => 'Marie',
    //      'successful' => true,
    //      )
    // );
*/

/*
    Application Error Handler
    --------------------------------------------------------------------------

     Here you may handle any errors that occur in your application, including
     logging them or displaying custom views for specific errors. You may
     even register several error handlers to handle different types of
     exceptions. If nothing is returned, the default error view is
     shown, which includes a detailed stack trace during debug.

*/

App::error(
    function (\Exception $exception, $code) {
        Log::error($exception);
    }
);

/*
    Maintenance Mode Handler
    --------------------------------------------------------------------------

     The "down" Artisan command gives you the ability to put an application
     into maintenance mode. Here, you will define what is displayed back
     to the user if maintenace mode is in effect for this application.

*/

App::down(
    function () {
        return Response::make('Be right back!', 503);
    }
);

/*
    Require The Filters File
    --------------------------------------------------------------------------

     Next we will load the filters file for the application. This gives us
     a nice separate location to store our route and application filter
     definitions instead of putting them all in the main routes file.

*/

require app_path() . '/filters.php';

/*
    Require The Macros File
    --------------------------------------------------------------------------

     This is the file that keeps all the form/HTML macros

*/

require app_path() . '/macros.php';

/*
    Require The Validators File
    --------------------------------------------------------------------------

     This is the file that keeps all the validators (for now, unless I want
     something more advanced)

*/

require app_path() . '/validators.php';

/*
    Require The Event Listeners
    --------------------------------------------------------------------------

     This is the file that keeps all the validators (for now, unless I want
     something more advanced)

*/

// RequireDir(app_path().'/events');
require app_path() . '/events/auth.php';
require app_path() . '/events/user.php';
