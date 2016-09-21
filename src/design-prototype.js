/**
 * design-prototype
 * Jason Vuong
 * jsonvuong@gmail.com
 * https://github.com/jsonvuong/design-prototype
 */

class DesignPrototypeCtrl {
    constructor(DesignPrototypeDataService) {
        this.selectPrototypeLayout = DesignPrototypeDataService.selectLayout.bind(DesignPrototypeDataService);
        this.prototypes = DesignPrototypeDataService.prototypes;
        this.selectStyle = DesignPrototypeDataService.selectStyle.bind(DesignPrototypeDataService);
    }
}
DesignPrototypeCtrl.$inject = ['DesignPrototypeDataService'];

class designPrototype {
    constructor(){
        this.restrict = 'E';
        this.transclude = true;
        this.controllerAs = 'vm';
        this.controller = 'DesignPrototypeCtrl';
        this.template = `<div class="design-prototype-cp">
                            <span class="design-prototype-cp__menu-icon"></span>
                            <div class="design-prototype-cp__list-container">
                                <div class="design-prototype-cp__title-container">
                                    <h2 class="design-prototype-cp__title">Prototype Control Panel</h2>
                                </div>
                                <div class="design-prototype-cp__options-container">
                                    <div class="design-prototype-cp__options">
                                        <button class="design-prototype__btn" ng-click="toggleGrayscale()" ng-class="{'is-selected':isGrayscaleActive}">Grayscale</button>
                                        <button class="design-prototype__btn" ng-click="toggleGrayImages()" ng-class="{'is-selected':isGrayImagesActive}">Gray Images</button>
                                    </div>
                                    <div class="design-prototype-cp__groups" ng-repeat="prototype in vm.prototypes">
                                        <span class="design-prototype-cp__list-title">{{prototype.groupName}}</span>
                                        <ul class="design-prototype-cp__layouts">
                                            <li class="design-prototype-cp__layouts-item"
                                                ng-class="{\'is-selected\':layout.selected}"
                                                ng-repeat="layout in prototype.layouts"
                                                ng-click="vm.selectPrototypeLayout(layout.layoutName, prototype.groupName);"
                                                >
                                                <span class="design-prototype__checkbox" ng-class="{\'is-selected\':layout.selected}" ></span> {{layout.layoutName}}
                                                <ul ng-if="layout.styleClasses.length" class="design-layouts__sublist">
                                                    <li ng-repeat="styleClass in layout.styleClasses"
                                                        class="design-layouts__sublist-item"
                                                        ng-class="{'is-selected':styleClass.selected}"
                                                        ng-click="vm.selectStyle(styleClass, layout)"
                                                        >{{styleClass.className}}
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ng-transclude></ng-transclude>
                        `;
    }
    link(scope, el, attr) {
        scope.toggleGrayscale = () => {
            scope.isGrayscaleActive = !scope.isGrayscaleActive;
            angular
                .element(document.querySelectorAll("[prototype-toggle-grayscale]"))
                .toggleClass('prototype-grayscale', scope.isGrayscaleActive);
        }
        scope.toggleGrayImages = () => {
            scope.isGrayImagesActive = !scope.isGrayImagesActive;
            angular
                .element(document).find('img')
                .toggleClass('prototype-gray-image', scope.isGrayImagesActive);
        }
    }
    static factory() {
        return new designPrototype();
    }
}

class DesignLayoutsCtrl{
    constructor(DesignPrototypeDataService){
        this.layouts = [];
        this.DesignPrototypeDataService = DesignPrototypeDataService;

        DesignPrototypeDataService.addPrototype(this.groupName, this.layouts);

        this.prototypes = DesignPrototypeDataService.prototypes;
        this.selectStyle = DesignPrototypeDataService.selectStyle;
    }
    addLayout(layout) {
        this.layouts.push(layout);
    }
    selectLayout(layoutName) {
        this.DesignPrototypeDataService.selectLayout(layoutName, this.groupName);
    }
    getPrototype() {
        return this.DesignPrototypeDataService.getPrototype(this.groupName);
    }
}
DesignLayoutsCtrl.$inject = ['DesignPrototypeDataService'];

class designLayouts {
    constructor(DesignPrototypeDataService){
        this.DesignPrototypeDataService = DesignPrototypeDataService;
        this.restrict = 'E';
        this.scope = {};
        this.bindToController = { groupName: '@', defaultLayout:'@'};
        this.require = '^designPrototype';
        this.transclude = true;
        this.controller = 'DesignLayoutsCtrl';
        this.controllerAs = 'vm';
        this.template = `<div class="design-layouts">
                            <div class="design-layouts__menu">
                                <span class="design-layouts__menu-icon"></span>
                                <ul class="design-layouts__list">
                                    <li class="design-layouts__list-title">{{vm.getPrototype().groupName}}</li>
                                    <li class="design-layouts__item" ng-class="{\'is-selected\':layout.selected}" ng-repeat="layout in vm.getPrototype().layouts" ng-click="vm.selectLayout(layout.layoutName);">
                                        <span class="design-prototype__checkbox" ng-class="{\'is-selected\':layout.selected}" ></span>{{layout.layoutName}}
                                        <ul ng-if="layout.styleClasses.length" class="design-layouts__sublist">
                                            <li ng-repeat="styleClass in layout.styleClasses"
                                                class="design-layouts__sublist-item"
                                                ng-class="{'is-selected':styleClass.selected}"
                                                ng-click="vm.selectStyle(styleClass, layout)"
                                                >{{styleClass.className}}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="design-layouts_content" ng-transclude></div>
                        </div>`;
    }
    link(scope, el, attr) {
        var defaultLayout = attr.defaultLayout;
        this.DesignPrototypeDataService.selectLayout(defaultLayout, attr.groupName);
    }
    static factory(DesignPrototypeDataService){
        return new designLayouts(DesignPrototypeDataService);
    }
}
designLayouts.$inject = ['DesignPrototypeDataService'];

class designLayout {
    constructor(DesignPrototypeDataService) {
        this.DesignPrototypeDataService = DesignPrototypeDataService;
        this.restrict = 'E';
        this.scope = { layoutName: '@', layoutToggleClasses: '='};
        this.require = '^designLayouts';
        this.transclude = true;
        this.template = `<div ng-class="getSelectedClass(layout.styleClasses)" ng-if="layout.selected" ng-transclude></div>`;
    }
    link(scope, el, attr, $DesignLayoutsCtrl) {
        let layoutToggleClasses = scope.layoutToggleClasses || [];
        let _DesignPrototypeDataService = this.DesignPrototypeDataService;

        $DesignLayoutsCtrl.addLayout({
            layoutName: scope.layoutName,
            selected: false,
            styleClasses: layoutToggleClasses.map((_styleClass)=> {
                return { className: _styleClass, selected: false }
            })
        });
        scope.getSelectedClass = _DesignPrototypeDataService.getSelectedClass;
        scope.prototypes = _DesignPrototypeDataService.prototypes;
        scope.$on('PROTOTYPE:CHANGE', () => {
            scope.layout = _DesignPrototypeDataService.getLayout(scope.layoutName, $DesignLayoutsCtrl.groupName);
        });
    }

    static factory(DesignPrototypeDataService) {
        return new designLayout(DesignPrototypeDataService);
    }
}
designLayout.$inject = ['DesignPrototypeDataService'];

class DesignPrototypeDataService {
    constructor($rootScope){
        this.$rootScope = $rootScope;
        this.prototypes = [];
    }
    addPrototype(groupName, layouts) {
        var group = this.prototypes.find( (prototype) => prototype.groupName == groupName );
        if (group) {
            group.layouts = layouts;
        } else {
            this.prototypes.push({groupName: groupName, layouts: layouts});
        }
    }
    getPrototype(groupName) {
        return this.prototypes.find( (prototype) => prototype.groupName == groupName );
    }
    selectLayout(layoutName, groupName) {
        var selectedLayoutGroup = this.prototypes.find( (prototype) => prototype.groupName == groupName );
        var selectedLayout = selectedLayoutGroup.layouts.find( (layout) => layout.layoutName == layoutName );
        selectedLayoutGroup.layouts.forEach( (layout) => layout.selected = false );

        // If no default layout is specificed, select the first
        if (selectedLayout) {
            selectedLayout.selected = true;
        } else {
            selectedLayoutGroup.layouts[0].selected = true;
        }

        this.$rootScope.$broadcast("PROTOTYPE:CHANGE", this.prototypes);
    }
    getLayout(layoutName, groupName) {
        return this.prototypes
                .find( (prototype) => prototype.groupName == groupName)
                .layouts
                .find( (layout) => layout.layoutName == layoutName)
                ;
    }
    selectStyle(styleClass, layout) {
        var isSelected = styleClass.selected;

        layout.styleClasses.forEach((_styleClass) => _styleClass.selected = false);

        if (!isSelected){
            styleClass.selected = true;
        }
    }
    getSelectedClass(styleClasses) {
        var selectedStyle = styleClasses.find( (_styleClass) => _styleClass.selected );

        if (selectedStyle) {
            return selectedStyle.className;
        }
    }
}
DesignPrototypeDataService.$inject = ['$rootScope'];

angular
    .module('design-prototype', [])
    .directive('designLayouts', designLayouts.factory)
    .directive('designLayout', designLayout.factory)
    .directive('designPrototype', designPrototype.factory)
    .controller('DesignPrototypeCtrl', DesignPrototypeCtrl)
    .controller('DesignLayoutsCtrl', DesignLayoutsCtrl)
    .service('DesignPrototypeDataService', DesignPrototypeDataService)
;