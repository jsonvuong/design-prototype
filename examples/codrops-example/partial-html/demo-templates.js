angular.module('demo.templates', ['partial-html/button-1.html', 'partial-html/button-2.html', 'partial-html/button-3.html', 'partial-html/form-layout-1.html', 'partial-html/form-layout-2.html', 'partial-html/layout_1.html', 'partial-html/layout_2.html', 'partial-html/menu-1.html', 'partial-html/menu-2.html', 'partial-html/index.html']);

angular.module("partial-html/button-1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partial-html/button-1.html",
      "<button class=\"button button--winona button--border-thin button--text-thick button--inverted\" data-text=\"Publish\"><span>Submit</span></button>");
}]);

angular.module("partial-html/button-2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partial-html/button-2.html",
      "<button class=\"button button--moema button--inverted button--text-thick button--size-s\">Submit</button>");
}]);

angular.module("partial-html/button-3.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partial-html/button-3.html",
      "<button class=\"button button--wapasha button--round-l button--text-thick button--inverted\">Submit</button>");
}]);

angular.module("partial-html/form-layout-1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partial-html/form-layout-1.html",
      "<span class=\"input input--ruri\">\n" +
      "    <input class=\"input__field input__field--ruri\" type=\"text\" id=\"input-26\" />\n" +
      "    <label class=\"input__label input__label--ruri\" for=\"input-26\">\n" +
      "        <span class=\"input__label-content input__label-content--ruri\">Username</span>\n" +
      "    </label>\n" +
      "</span>\n" +
      "<span class=\"input input--ruri\">\n" +
      "    <input class=\"input__field input__field--ruri\" type=\"text\" id=\"input-27\" />\n" +
      "    <label class=\"input__label input__label--ruri\" for=\"input-27\">\n" +
      "        <span class=\"input__label-content input__label-content--ruri\">Website</span>\n" +
      "    </label>\n" +
      "</span>\n" +
      "<span class=\"input input--ruri\">\n" +
      "    <input class=\"input__field input__field--ruri\" type=\"text\" id=\"input-28\" />\n" +
      "    <label class=\"input__label input__label--ruri\" for=\"input-28\">\n" +
      "        <span class=\"input__label-content input__label-content--ruri\">Invitation Code</span>\n" +
      "    </label>\n" +
      "</span>");
}]);

angular.module("partial-html/form-layout-2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partial-html/form-layout-2.html",
      "<div class=\"set-1\">\n" +
      "    <span class=\"input input--jiro\">\n" +
      "        <input class=\"input__field input__field--jiro\" type=\"text\" id=\"input-10\" />\n" +
      "        <label class=\"input__label input__label--jiro\" for=\"input-10\">\n" +
      "            <span class=\"input__label-content input__label-content--jiro\">Cat's Name</span>\n" +
      "        </label>\n" +
      "    </span>\n" +
      "    <span class=\"input input--jiro\">\n" +
      "        <input class=\"input__field input__field--jiro\" type=\"text\" id=\"input-11\" />\n" +
      "        <label class=\"input__label input__label--jiro\" for=\"input-11\">\n" +
      "            <span class=\"input__label-content input__label-content--jiro\">Dog's Name</span>\n" +
      "        </label>\n" +
      "    </span>\n" +
      "    <span class=\"input input--jiro\">\n" +
      "        <input class=\"input__field input__field--jiro\" type=\"text\" id=\"input-12\" />\n" +
      "        <label class=\"input__label input__label--jiro\" for=\"input-12\">\n" +
      "            <span class=\"input__label-content input__label-content--jiro\">Hamster's Name</span>\n" +
      "        </label>\n" +
      "    </span>\n" +
      "</div>");
}]);

angular.module("partial-html/layout_1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partial-html/layout_1.html",
      "layout 1");
}]);

angular.module("partial-html/layout_2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partial-html/layout_2.html",
      "layout 2");
}]);

angular.module("partial-html/menu-1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partial-html/menu-1.html",
      "<section class=\"section section--menu\" id=\"Titania\">\n" +
      "    <nav nav-ui class=\"menu menu--titania\">\n" +
      "        <ul class=\"menu__list\">\n" +
      "            <li class=\"menu__item menu__item--current\"><a href=\"#\" class=\"menu__link\">Home</a></li>\n" +
      "            <li class=\"menu__item\"><a href=\"#\" class=\"menu__link\">Portfolio</a></li>\n" +
      "            <li class=\"menu__item\"><a href=\"#\" class=\"menu__link\">Blog</a></li>\n" +
      "            <li class=\"menu__item\"><a href=\"#\" class=\"menu__link\">Shop</a></li>\n" +
      "            <li class=\"menu__item\"><a href=\"#\" class=\"menu__link\">Contact</a></li>\n" +
      "            <li class=\"menu__lines\"></li>\n" +
      "        </ul>\n" +
      "    </nav>\n" +
      "</section>");
}]);

angular.module("partial-html/menu-2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partial-html/menu-2.html",
      "<section class=\"section section--menu\" id=\"Ferdinand\">\n" +
      "    <nav nav-ui class=\"menu menu--ferdinand\">\n" +
      "        <ul class=\"menu__list\">\n" +
      "            <li class=\"menu__item menu__item--current\"><a href=\"#\" class=\"menu__link\">Home</a></li>\n" +
      "            <li class=\"menu__item\"><a href=\"#\" class=\"menu__link\">Who we are</a></li>\n" +
      "            <li class=\"menu__item\"><a href=\"#\" class=\"menu__link\">What we offer</a></li>\n" +
      "            <li class=\"menu__item\"><a href=\"#\" class=\"menu__link\">Our news</a></li>\n" +
      "            <li class=\"menu__item\"><a href=\"#\" class=\"menu__link\">Contact us</a></li>\n" +
      "        </ul>\n" +
      "    </nav>\n" +
      "</section>");
}]);

angular.module("partial-html/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partial-html/index.html",
      "<!DOCTYPE html>\n" +
      "<html lang=\"en\" class=\"no-js\">\n" +
      "<head>\n" +
      "    <meta charset=\"UTF-8\" />\n" +
      "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
      "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
      "    <title>Design Prototype Demo</title>\n" +
      "    <link rel=\"stylesheet\" href=\"lib/design-prototype/dist/design-prototype.css\">\n" +
      "    <link rel=\"stylesheet\" href=\"style/demo.css\">\n" +
      "    </head>\n" +
      "    <body ng-app=\"demo\">\n" +
      "        <design-prototype>\n" +
      "            <div class=\"container\" prototype-toggle-grayscale>\n" +
      "                <div>\n" +
      "                    <design-layouts group-name=\"Menu\" >\n" +
      "                        <design-layout layout-name=\"Menu Layout 1\">\n" +
      "                            <div ng-include=\"'partial-html/menu-1.html'\"></div>\n" +
      "                        </design-layout>\n" +
      "                        <design-layout layout-name=\"Menu Layout 2\">\n" +
      "                            <div ng-include=\"'partial-html/menu-2.html'\"></div>\n" +
      "                        </design-layout>\n" +
      "                    </design-layouts>\n" +
      "                </div>\n" +
      "                <div class=\"form-wrapper\">\n" +
      "                    <section class=\"content bgcolor-4\">\n" +
      "                        <img class=\"content__image\" src=\"img/jsonvuong-img.jpg\"/>\n" +
      "                        <design-layouts group-name=\"Input Boxes\" >\n" +
      "                            <design-layout layout-name=\"Input Style 1\">\n" +
      "                                <div ng-include=\"'partial-html/form-layout-1.html'\"></div>\n" +
      "                            </design-layout>\n" +
      "                            <design-layout layout-name=\"Input Style 2\">\n" +
      "                                <div ng-include=\"'partial-html/form-layout-2.html'\"></div>\n" +
      "                            </design-layout>\n" +
      "                        </design-layouts>\n" +
      "                    <div>\n" +
      "                        <design-layouts group-name=\"Submit Buttons\" >\n" +
      "                            <design-layout class=\"full-width\" layout-name=\"Submit 1\" layout-toggle-classes=\"['full-width', 'half-width']\">\n" +
      "                                <div ng-include=\"'partial-html/button-1.html'\"></div>\n" +
      "                            </design-layout>\n" +
      "                            <design-layout class=\"full-width\" layout-name=\"Submit 2\" layout-toggle-classes=\"['full-width', 'half-width']\">\n" +
      "                                <div ng-include=\"'partial-html/button-2.html'\"></div>\n" +
      "                            </design-layout>\n" +
      "                            <design-layout class=\"full-width\" layout-name=\"Submit 3\" layout-toggle-classes=\"['full-width', 'half-width']\">\n" +
      "                                <div ng-include=\"'partial-html/button-3.html'\"></div>\n" +
      "                            </design-layout>\n" +
      "                        </design-layouts>\n" +
      "                    </div>\n" +
      "                </section>\n" +
      "            </div>\n" +
      "        </div><!-- /container -->\n" +
      "    </design-prototype>\n" +
      "        <script type=\"text/javascript\" src=\"lib/angular/angular.js\"></script>\n" +
      "        <script type=\"text/javascript\" src=\"lib/design-prototype/dist/design-prototype.es5.js\"></script>\n" +
      "        <script type=\"text/javascript\" src=\"partial-html/demo-templates.js\"></script>\n" +
      "        <script type=\"text/javascript\" src=\"demo.js\"></script>\n" +
      "    </body>\n" +
      "</html>");
}]);
