// ==UserScript==
// @name         Letterboxd Search: Bracket Buster
// @namespace    https://letterboxd.com/skuta
// @version      1.0
// @description  Strip parentheses from Letterboxd search URLs and reload corrected search automatically
// @author       Matt Skuta
// @match        https://letterboxd.com/search/*
// ==/UserScript==

(function() {
    'use strict';

    function cleanUrlPath(path) {
        const searchTerm = path.split('/search/')[1].split('/')[0];
        const decoded = decodeURIComponent(searchTerm.replace(/\+/g, ' '));
        const cleaned = decoded.replace(/\((.*?)\)/g, '$1').replace(/\s+/g, ' ').trim();

        if (decoded !== cleaned) {
            const newSearchTerm = encodeURIComponent(cleaned).replace(/%20/g, '+');
            const newUrl = `/search/${newSearchTerm}/`;
            window.location.href = newUrl;
        }
    }

    if (window.location.pathname.startsWith('/search/')) {
        cleanUrlPath(window.location.pathname);
    }
})();
