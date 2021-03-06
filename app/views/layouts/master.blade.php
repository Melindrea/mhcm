<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="{{ App::getLocale() }}"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="{{ App::getLocale() }}"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="{{ App::getLocale() }}"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="{{ App::getLocale() }}"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>{{ Site::title() }}</title>
        {{ HTML::meta() }}
        <meta name="viewport" content="width=device-width">
        <link href="//fonts.googleapis.com/css?family=Libre+Baskerville:400,700,400italic|Quattrocento+Sans:700,700italic" rel="stylesheet">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.2/css/font-awesome.min.css" rel="stylesheet">
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        @section('head-css')
        {{ HTML::asset('header-css') }}
        @show

        @section('analytics')
        {{ HTML::ga('UA-XXXXXX-X') }}
        @show

        @section('head-js')
        {{ HTML::asset('header-js') }}
        @show
    </head>
        <body class="{{ HTML::bodyClasses() }}">
        {{ HTML::alert() }}

        <header role="banner">
        @section('header')
        {{ HTML::menu('main') }}
        @show
        </header>

        <div role="document"{{ HTML::documentClasses() }}>
            {{ $submenu = HTML::menu('submenu') }}
            @if ($submenu)
            {{ $submenu }}
            @endif
            <main role="main" id="content"><!-- role explicit for older browsers -->
            @yield('content')
            </main>
        </div>
        <footer>
        @section('footer')
        @show
        </footer>
        {{ HTML::asset('footer-js') }}
        {{ HTML::cookies() }}
    </body>
</html>
