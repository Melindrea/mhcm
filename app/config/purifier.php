<?php

/*
 * This file is part of HTMLPurifier Bundle.
 * (c) 2012 Maxime Dizerens
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

return array(
    'settings' => array(
        'default' => array(
            "HTML.SafeIframe" => true,
            'AutoFormat.AutoParagraph' => false,
            'AutoFormat.Linkify' => false,
            "HTML.TidyLevel" => 'none',
            "HTML.Doctype" => 'HTML 4.01 Transitional',
            "URI.SafeIframeRegexp" => "%^(http://|https://|//)(www.youtube.com/embed/|player.vimeo.com/video/)%",
            "HTML.AllowedElements" => array(
                'a',
                'abbr',
                'blockquote',
                'br',
                'caption',
                'cite',
                'code',
                'dd',
                'del',
                'dfn',
                'div',
                'dl',
                'dt',
                'em',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'img',
                'ins',
                'kbd',
                'li',
                'ol',
                'p',
                'pre',
                'span',
                'strong',
                'sub',
                'sup',
                'table',
                'tbody',
                'td',
                'tfoot',
                'th',
                'thead',
                'tr',
                'tt',
                'ul',
                'var'
            ),
            "HTML.AllowedAttributes" => array('href', 'class', 'width', 'height', 'alt', 'src'),
        ),
    ),
);
