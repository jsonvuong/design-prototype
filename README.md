# Design Prototype
AngularJS is already a great framework for rapid prototyping.  This tool provides a user interface to some of AngularJS features (ng-if/ng-class) and conventions that are advantageous for prototyping dynamic interfaces.




## Demo
[https://jsonvuong.github.io/design-prototype/](https://jsonvuong.github.io/design-prototype/)




## User Guide
Use design-prototype's directives to build and organize groups of UI components and layouts (HTML/JS/CSS).  The tool will then provide:
* A Context Menu for each group of layouts with options to toggle.
* A Main Control Panel that list all Context Menus.


#### Mouseover a layout group to see context menu icon (gear icon).
![](https://jsonvuong.github.io/design-prototype__context-menus.png "menus displayed on hover")


#### Mouseover context menu icon to see list of layouts in group.
![](https://jsonvuong.github.io/design-prototype__context-menu.png "context menu")


#### Mouseover main control panel icon to display all layout groups.
![](https://jsonvuong.github.io/design-prototype__control-panel.png "control panel")


#### Sample wireframing options (grayscale and gray image).
![](https://jsonvuong.github.io/design-prototype__wireframe-options.png "Wireframing sample")



## Installation
Requirements  
`AngularJS 1.3+`;


Install with Bower  
`$ bower install design-prototype`


Adding dependency to your project  
`angular.module('myModule', ['design-prototype']);`


## Usage

`<design-prototype>` A container of groups of layouts.  A control panel displaying a list of all design layouts.

`<design-layouts>` - A group of layouts.  Creates an in-context control panel displaying child layouts as options to toggle.
* `group-name` - Unique ID for grouping of layouts
* `default-layout` - (optional) Default layout to display

`<design-layout>` - A design layout (HTML/CSS/JS).
* `layout-name` - Unique ID for layout
* `layout-toggle-classes`- Optional array of CSS classes to toggle


## Wireframing options:

`prototype-toggle-grayscale` - Add to any element to toggle grayscale colors.  
__gray images__ - Turns all images gray.


## Code Example

```
<design-prototype>
 <design-layouts group-name="Menu" >
     <design-layout layout-name="Menu Layout 1" layout-toggle-classes="['large', 'small']">
        <!-- Design Layout here -->
     </design-layout>
     <design-layout layout-name="Menu Layout 2 2" >
        <!-- Design Layout here -->
     </design-layout>
 </design-layouts>
 <design-layouts group-name="Right Rail" >
     <design-layout layout-name="Hot Layout" layout-toggle-classes="['hot-colors', 'warm-colors']">
        <!-- Design Layout here -->
     </design-layout>
     <design-layout layout-name="Warm Layout" >
        <!-- Design Layout here -->
     </design-layout>
 </design-layouts>
</design-prototype>
```

## Contributors

Please send feedback to:  
Jason Vuong  
jsonvuong@gmail.com