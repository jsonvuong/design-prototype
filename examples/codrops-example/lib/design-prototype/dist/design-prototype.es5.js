'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * design-prototype
 * Jason Vuong
 * jsonvuong@gmail.com
 * https://github.com/jsonvuong/design-prototype
 */

var DesignPrototypeCtrl = function DesignPrototypeCtrl(DesignPrototypeDataService) {
    _classCallCheck(this, DesignPrototypeCtrl);

    this.selectPrototypeLayout = DesignPrototypeDataService.selectLayout.bind(DesignPrototypeDataService);
    this.prototypes = DesignPrototypeDataService.prototypes;
    this.selectStyle = DesignPrototypeDataService.selectStyle.bind(DesignPrototypeDataService);
};

DesignPrototypeCtrl.$inject = ['DesignPrototypeDataService'];

var designPrototype = function () {
    function designPrototype() {
        _classCallCheck(this, designPrototype);

        this.restrict = 'E';
        this.transclude = true;
        this.controllerAs = 'vm';
        this.controller = 'DesignPrototypeCtrl';
        this.template = '<div class="design-prototype-cp">\n                            <span class="design-prototype-cp__menu-icon"></span>\n                            <div class="design-prototype-cp__list-container">\n                                <div class="design-prototype-cp__title-container">\n                                    <h2 class="design-prototype-cp__title">Prototype Control Panel</h2>\n                                </div>\n                                <div class="design-prototype-cp__options-container">\n                                    <div class="design-prototype-cp__options">\n                                        <button class="design-prototype__btn" ng-click="toggleGrayscale()" ng-class="{\'is-selected\':isGrayscaleActive}">Grayscale</button>\n                                        <button class="design-prototype__btn" ng-click="toggleGrayImages()" ng-class="{\'is-selected\':isGrayImagesActive}">Gray Images</button>\n                                    </div>\n                                    <div class="design-prototype-cp__groups" ng-repeat="prototype in vm.prototypes">\n                                        <span class="design-prototype-cp__list-title">{{prototype.groupName}}</span>\n                                        <ul class="design-prototype-cp__layouts">\n                                            <li class="design-prototype-cp__layouts-item" ng-class="{\'is-selected\':layout.selected}" ng-repeat="layout in prototype.layouts" ng-click="vm.selectPrototypeLayout(layout.layoutName, prototype.groupName);">\n                                                <span class="design-prototype__checkbox" ng-class="{\'is-selected\':layout.selected}" ></span> {{layout.layoutName}}\n                                                <ul ng-if="layout.styleClasses.length" class="design-layouts__sublist">\n                                                    <li ng-repeat="styleClass in layout.styleClasses"\n                                                        class="design-layouts__sublist-item"\n                                                        ng-class="{\'is-selected\':styleClass.selected}"\n                                                        ng-click="vm.selectStyle(styleClass, layout)"\n                                                        >{{styleClass.className}}\n                                                    </li>\n                                                </ul>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                            </div><ng-transclude></ng-transclude>\n                            ';
    }

    _createClass(designPrototype, [{
        key: 'link',
        value: function link(scope, el, attr) {
            scope.toggleGrayscale = function () {
                scope.isGrayscaleActive = !scope.isGrayscaleActive;
                angular.element(document.querySelectorAll("[prototype-toggle-grayscale]")).toggleClass('prototype-grayscale', scope.isGrayscaleActive);
            };
            scope.toggleGrayImages = function () {
                scope.isGrayImagesActive = !scope.isGrayImagesActive;
                angular.element(document).find('img').toggleClass('prototype-gray-image', scope.isGrayImagesActive);
            };
        }
    }], [{
        key: 'factory',
        value: function factory() {
            return new designPrototype();
        }
    }]);

    return designPrototype;
}();

var DesignLayoutsCtrl = function () {
    function DesignLayoutsCtrl(DesignPrototypeDataService) {
        _classCallCheck(this, DesignLayoutsCtrl);

        this.layouts = [];
        this.DesignPrototypeDataService = DesignPrototypeDataService;

        DesignPrototypeDataService.addPrototype(this.groupName, this.layouts);

        this.prototypes = DesignPrototypeDataService.prototypes;
        this.selectStyle = DesignPrototypeDataService.selectStyle;
    }

    _createClass(DesignLayoutsCtrl, [{
        key: 'addLayout',
        value: function addLayout(layout) {
            this.layouts.push(layout);
        }
    }, {
        key: 'selectLayout',
        value: function selectLayout(layoutName) {
            this.DesignPrototypeDataService.selectLayout(layoutName, this.groupName);
        }
    }, {
        key: 'getPrototype',
        value: function getPrototype() {
            return this.DesignPrototypeDataService.getPrototype(this.groupName);
        }
    }]);

    return DesignLayoutsCtrl;
}();

DesignLayoutsCtrl.$inject = ['DesignPrototypeDataService'];

var designLayouts = function () {
    function designLayouts(DesignPrototypeDataService) {
        _classCallCheck(this, designLayouts);

        this.DesignPrototypeDataService = DesignPrototypeDataService;
        this.restrict = 'E';
        this.scope = {};
        this.bindToController = { groupName: '@', defaultLayout: '@' };
        this.require = '^designPrototype';
        this.transclude = true;
        this.controller = 'DesignLayoutsCtrl';
        this.controllerAs = 'vm';
        this.template = '<div class="design-layouts">\n                            <div class="design-layouts__menu">\n                                <span class="design-layouts__menu-icon"></span>\n                                <ul class="design-layouts__list">\n                                    <li class="design-layouts__list-title">{{vm.getPrototype().groupName}}</li>\n                                    <li class="design-layouts__item" ng-class="{\'is-selected\':layout.selected}" ng-repeat="layout in vm.getPrototype().layouts" ng-click="vm.selectLayout(layout.layoutName);">\n                                        <span class="design-prototype__checkbox" ng-class="{\'is-selected\':layout.selected}" ></span>{{layout.layoutName}}\n                                        <ul ng-if="layout.styleClasses.length" class="design-layouts__sublist">\n                                            <li ng-repeat="styleClass in layout.styleClasses"\n                                                class="design-layouts__sublist-item"\n                                                ng-class="{\'is-selected\':styleClass.selected}"\n                                                ng-click="vm.selectStyle(styleClass, layout)"\n                                                >{{styleClass.className}}</li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class="design-layouts_content" ng-transclude></div>\n                        </div>';
    }

    _createClass(designLayouts, [{
        key: 'link',
        value: function link(scope, el, attr) {
            var defaultLayout = attr.defaultLayout;
            this.DesignPrototypeDataService.selectLayout(defaultLayout, attr.groupName);
        }
    }], [{
        key: 'factory',
        value: function factory(DesignPrototypeDataService) {
            return new designLayouts(DesignPrototypeDataService);
        }
    }]);

    return designLayouts;
}();

designLayouts.$inject = ['DesignPrototypeDataService'];

var designLayout = function () {
    function designLayout(DesignPrototypeDataService) {
        _classCallCheck(this, designLayout);

        this.DesignPrototypeDataService = DesignPrototypeDataService;
        this.restrict = 'E';
        this.scope = { layoutName: '@', layoutToggleClasses: '=' };
        this.require = '^designLayouts';
        this.transclude = true;
        this.template = '<div ng-class="getSelectedClass(layout.styleClasses)" ng-if="layout.selected" ng-transclude></div>';
    }

    _createClass(designLayout, [{
        key: 'link',
        value: function link(scope, el, attr, $DesignLayoutsCtrl) {
            var layoutToggleClasses = scope.layoutToggleClasses || [];
            var _DesignPrototypeDataService = this.DesignPrototypeDataService;

            $DesignLayoutsCtrl.addLayout({
                layoutName: scope.layoutName,
                selected: false,
                styleClasses: layoutToggleClasses.map(function (_styleClass) {
                    return { className: _styleClass, selected: false };
                })
            });
            scope.getSelectedClass = _DesignPrototypeDataService.getSelectedClass;
            scope.prototypes = _DesignPrototypeDataService.prototypes;
            scope.$on('PROTOTYPE:CHANGE', function () {
                scope.layout = _DesignPrototypeDataService.getLayout(scope.layoutName, $DesignLayoutsCtrl.groupName);
            });
        }
    }], [{
        key: 'factory',
        value: function factory(DesignPrototypeDataService) {
            return new designLayout(DesignPrototypeDataService);
        }
    }]);

    return designLayout;
}();

designLayout.$inject = ['DesignPrototypeDataService'];

var DesignPrototypeDataService = function () {
    function DesignPrototypeDataService($rootScope) {
        _classCallCheck(this, DesignPrototypeDataService);

        this.$rootScope = $rootScope;
        this.prototypes = [];
    }

    _createClass(DesignPrototypeDataService, [{
        key: 'addPrototype',
        value: function addPrototype(groupName, layouts) {
            var group = this.prototypes.find(function (prototype) {
                return prototype.groupName == groupName;
            });
            if (group) {
                group.layouts = layouts;
            } else {
                this.prototypes.push({ groupName: groupName, layouts: layouts });
            }
        }
    }, {
        key: 'getPrototype',
        value: function getPrototype(groupName) {
            return this.prototypes.find(function (prototype) {
                return prototype.groupName == groupName;
            });
        }
    }, {
        key: 'selectLayout',
        value: function selectLayout(layoutName, groupName) {
            var selectedLayoutGroup = this.prototypes.find(function (prototype) {
                return prototype.groupName == groupName;
            });
            var selectedLayout = selectedLayoutGroup.layouts.find(function (layout) {
                return layout.layoutName == layoutName;
            });
            selectedLayoutGroup.layouts.forEach(function (layout) {
                return layout.selected = false;
            });

            // If no default layout is specificed, select the first
            if (selectedLayout) {
                selectedLayout.selected = true;
            } else {
                selectedLayoutGroup.layouts[0].selected = true;
            }

            this.$rootScope.$broadcast("PROTOTYPE:CHANGE", this.prototypes);
        }
    }, {
        key: 'getLayout',
        value: function getLayout(layoutName, groupName) {
            return this.prototypes.find(function (prototype) {
                return prototype.groupName == groupName;
            }).layouts.find(function (layout) {
                    return layout.layoutName == layoutName;
                });
        }
    }, {
        key: 'selectStyle',
        value: function selectStyle(styleClass, layout) {
            var isSelected = styleClass.selected;

            layout.styleClasses.forEach(function (_styleClass) {
                return _styleClass.selected = false;
            });

            if (!isSelected) {
                styleClass.selected = true;
            }
        }
    }, {
        key: 'getSelectedClass',
        value: function getSelectedClass(styleClasses) {
            var selectedStyle = styleClasses.find(function (_styleClass) {
                return _styleClass.selected;
            });

            if (selectedStyle) {
                return selectedStyle.className;
            }
        }
    }]);

    return DesignPrototypeDataService;
}();

DesignPrototypeDataService.$inject = ['$rootScope'];

angular.module('design-prototype', []).directive('designLayouts', designLayouts.factory).directive('designLayout', designLayout.factory).directive('designPrototype', designPrototype.factory).controller('DesignPrototypeCtrl', DesignPrototypeCtrl).controller('DesignLayoutsCtrl', DesignLayoutsCtrl).service('DesignPrototypeDataService', DesignPrototypeDataService);
//# sourceMappingURL=design-prototype.es5.js.map
