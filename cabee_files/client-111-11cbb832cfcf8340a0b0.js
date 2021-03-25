(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{J9Fg:function(e,t,r){"use strict";t.a={fields:[{label:"Content Container Settings",type:"COLLAPSIBLE",itemSchema:{fields:[{field:"removePaddingSides",label:"Remove Sides padding",required:!1,type:"TOGGLE_SWITCH",defaultValue:!1},{field:"removePaddingTop",label:"Remove top padding",required:!1,type:"TOGGLE_SWITCH",defaultValue:!1},{field:"removePaddingBottom",label:"Remove bottom padding",required:!1,type:"TOGGLE_SWITCH",defaultValue:!1},{field:"containerFullWidth",label:"Full width container",required:!1,type:"TOGGLE_SWITCH",defaultValue:!1},{field:"containerBackgroundColor",label:"Content Background Color",required:!1,type:"BACKGROUND_COLOR"},{field:"containerBackgroundTransparent",label:"Transparent Background",fieldLabel:"Check here to make grid container transparent",required:!1,type:"CHECKBOX",defaultValue:!0}]}},{label:"Block Container Settings",type:"COLLAPSIBLE",itemSchema:{fields:[{field:"marginTop",label:"Add padding top",type:"BUTTON_GROUP",options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"marginBottom",label:"Add padding bottom",required:!1,type:"BUTTON_GROUP",options:[{label:"0",value:"none"},{label:"0.5x",value:"half"},{label:"1x",value:"full"}]},{field:"textColor",label:"Text Color",required:!1,type:"TEXT_COLOR"},{field:"backgroundColor",label:"Background Color",required:!1,type:"BACKGROUND_COLOR"},{field:"backgroundImageLarge",label:"Backgroud image large",required:!1,type:"DYNAMIC_PHOTO",dynamicPhotoType:"CARD"},{field:"backgroundImageMedium",label:"Backgroud image medium",required:!1,type:"DYNAMIC_PHOTO",dynamicPhotoType:"CARD"},{field:"backgroundImageSmall",label:"Backgroud image small",required:!1,type:"DYNAMIC_PHOTO",dynamicPhotoType:"CARD"},{field:"backgroundOverlay",label:"Background image overlay color (Use a hex color)",required:!1,type:"TEXT_LINE"},{field:"backgroundPosition",label:"Background Image Position",required:!1,type:"ENUM_CUSTOM",options:[{label:"Center",value:"center center"},{label:"Top",value:"center top"},{label:"Bottom",value:"center bottom"}]},{field:"autoplayVideo",label:"Background video",required:!1,type:"OBJECT",itemSchema:{fields:[{field:"videoUrl1080Mp4",label:"Video Desktop URL - 1080p - MP4",required:!1,type:"TEXT_LINE"},{field:"videoUrl720Mp4",label:"Video Tablet URL - 720p - MP4",required:!1,type:"TEXT_LINE"},{field:"videoUrl480Mp4",label:"Video Mobile URL - 480p - MP4",required:!1,type:"TEXT_LINE"},{field:"videoUrl360Mp4",label:"Video URL - 360p - MP4",required:!1,type:"TEXT_LINE"},{field:"videoUrl1080Webm",label:"Video Desktop URL - 1080p - WEBM",required:!1,type:"TEXT_LINE"},{field:"videoUrl720Webm",label:"Video Tablet URL - 720p - WEBM",required:!1,type:"TEXT_LINE"},{field:"videoUrl480Webm",label:"Video Mobile URL - 480p - WEBM",required:!1,type:"TEXT_LINE"},{field:"videoUrl360Webm",label:"Video URL - 360p - WEBM",required:!1,type:"TEXT_LINE"}]}},{field:"height",label:"Block height (i.e. 200px, 2em, 2rem)",required:!1,type:"TEXT_LINE"},{field:"alignContainer",label:"Align container (height must be set)",required:!1,type:"ENUM_CUSTOM",options:[{label:"Top",value:"flex-start"},{label:"Center",value:"center"},{label:"Bottom",value:"flex-end"}]},{field:"anchorName",label:"Block Anchor Name",required:!1,type:"SLUG"}]}}]}},__fusion__15:function(e,t,r){"use strict";r.r(t);var l=r("LDIv"),a=r("J9Fg");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}var o={excludeFromAuthoring:!0,title:"Bullets",fields:[{field:"heading",label:"Heading",required:!1,type:"TEXT_LINE"},{field:"body",label:"Body",required:!1,type:"MARKDOWN"},{field:"image",label:"Image",required:!1,type:"DYNAMIC_PHOTO",dynamicPhotoType:"CARD"},{field:"imageTablet",label:"Tablet Image",required:!1,type:"DYNAMIC_PHOTO",dynamicPhotoType:"CARD"},{field:"imageMobile",label:"Mobile Image",required:!1,type:"DYNAMIC_PHOTO",dynamicPhotoType:"CARD"},{field:"cta",label:"CTA",required:!1,type:"OBJECT",itemSchema:{fields:[{field:"ctaPrimary",label:"CTA Primary",required:!1,type:"TEXT_LINK"},{field:"ctaSecondary",label:"CTA Secondary",required:!1,type:"TEXT_LINK"}]}},{field:"ctaPosition",label:"CTA Position",required:!1,type:"ENUM_CUSTOM",options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}]},{field:"items",label:"Content Items",labelItemsBy:"image",required:!1,maxLength:9,type:"ARRAY",itemSchema:{fields:[{field:"image",label:"Item Image",required:!1,type:"DYNAMIC_PHOTO",dynamicPhotoType:"CARD"},{field:"aspectRatio",label:"Item Image Aspect Ratio",required:!1,type:"ENUM_CUSTOM",options:[{label:"icon",value:"icon"},{label:"Icon Color",value:"icon-color"},{label:"3 x 4",value:"aspect_3_4"},{label:"16 x 9",value:"aspect_16_9"}]},{field:"heading",label:"Item Heading",required:!0,type:"TEXT_LINE"},{field:"body",label:"Item Body",required:!1,type:"MARKDOWN"},{field:"cta",label:"Item CTA",required:!1,type:"TEXT_LINK"}]}}].concat(function(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.a.fields))};function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}var d={title:"Bullets - Carousel",fields:[{field:"heading",label:"Heading",required:!1,type:"TEXT_LINE"},{field:"body",label:"Body",required:!1,type:"MARKDOWN"},{field:"cta",label:"CTA",required:!1,type:"OBJECT",itemSchema:{fields:[{field:"ctaPrimary",label:"CTA Primary",required:!1,type:"TEXT_LINK"},{field:"ctaSecondary",label:"CTA Secondary",required:!1,type:"TEXT_LINK"}]}},{field:"carousel",label:"Carousel Items",labelItemsBy:"heading",required:!1,type:"ARRAY",itemSchema:{fields:[{field:"image",label:"Item Image",required:!1,type:"DYNAMIC_PHOTO",dynamicPhotoType:"CARD"},{field:"aspectRatio",label:"Item Image Aspect Ratio",required:!1,type:"ENUM_CUSTOM",options:[{label:"icon",value:"icon"},{label:"Icon Color",value:"icon-color"},{label:"3 x 4",value:"aspect_3_4"},{label:"4 x 5",value:"aspect_4_5"},{label:"16 x 9",value:"aspect_16_9"}]},{field:"heading",label:"Item Heading",required:!1,type:"TEXT_LINE"},{field:"body",label:"Item Body",required:!1,type:"MARKDOWN"},{field:"cta",label:"Item CTA",required:!1,type:"TEXT_LINK"}]}}].concat(function(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.a.fields))};function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}var c={title:"Bullets - CTA",fields:[{field:"items",label:"Content Items",labelItemsBy:"heading",required:!1,type:"ARRAY",itemSchema:{fields:[{field:"image",label:"Item Image",required:!1,type:"DYNAMIC_PHOTO",dynamicPhotoType:"CARD"},{field:"aspectRatio",label:"Item Image Aspect Ratio",required:!1,type:"ENUM_CUSTOM",options:[{label:"icon",value:"icon"},{label:"Icon Color",value:"icon-color"},{label:"3 x 4",value:"aspect_3_4"},{label:"16 x 9",value:"aspect_16_9"}]},{field:"heading",label:"Item Heading",required:!1,type:"TEXT_LINE"},{field:"body",label:"Item Body",required:!1,type:"MARKDOWN"},{field:"cta",label:"Item Cta",required:!1,type:"TEXT_LINK"}]}}].concat(function(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.a.fields))};function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}var f={title:"Bullets - Product Carousel",fields:[{field:"heading",label:"Heading",required:!1,type:"TEXT_LINE"},{field:"body",label:"Body",required:!1,type:"MARKDOWN"},{field:"cta",label:"CTA",required:!1,type:"OBJECT",itemSchema:{fields:[{field:"ctaPrimary",label:"CTA Primary",required:!1,type:"TEXT_LINK"},{field:"ctaSecondary",label:"CTA Secondary",required:!1,type:"TEXT_LINK"}]}},{field:"ctaPosition",label:"CTA Position",required:!1,type:"ENUM_CUSTOM",options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}]},{field:"tabItems",label:"Tab Items",required:!1,type:"ARRAY",itemSchema:{fields:[{field:"tabLabel",label:"Tab Label",required:!0,type:"TEXT_LINE"},{field:"items",label:"Tab Item",required:!0,type:"ARRAY",itemSchema:{fields:[{field:"image",label:"Item Image",required:!1,type:"DYNAMIC_PHOTO",valuedynamicPhotoType:"CARD"},{field:"aspectRatio",label:"Item Image Aspect Ratio",required:!1,type:"ENUM_CUSTOM",options:[{label:"icon",value:"icon"},{label:"Icon Color",value:"icon-color"},{label:"3 x 4",value:"aspect_3_4"},{label:"16 x 9",value:"aspect_16_9"}]},{field:"heading",label:"Item Heading",required:!1,type:"TEXT_LINE"},{field:"pillText",label:"Item Pill",required:!1,type:"TEXT_LINE"},{field:"body",label:"Item Body",required:!1,type:"MARKDOWN"},{field:"cta",label:"Item CTA",required:!1,type:"TEXT_LINK"}]}}]}}].concat(function(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.a.fields))};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}var p={title:"Bullets - Tabs",fields:[{field:"heading",label:"Heading",required:!1,type:"TEXT_LINE"},{field:"body",label:"Body",required:!1,type:"MARKDOWN"},{field:"cta",label:"CTA",required:!1,type:"OBJECT",itemSchema:{fields:[{field:"ctaPrimary",label:"CTA Primary",required:!1,type:"TEXT_LINK"},{field:"ctaSecondary",label:"CTA Secondary",required:!1,type:"TEXT_LINK"}]}},{field:"ctaPosition",label:"CTA Position",required:!1,type:"ENUM_CUSTOM",options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}]},{field:"tabItems",label:"Tab Items",required:!0,type:"ARRAY",itemSchema:{fields:[{field:"tabLabel",label:"Tab Label",required:!0,type:"TEXT_LINE"},{field:"cta",label:"CTA",required:!1,type:"OBJECT",itemSchema:{fields:[{field:"ctaPrimary",label:"CTA Primary",required:!1,type:"TEXT_LINK"},{field:"ctaSecondary",label:"CTA Secondary",required:!1,type:"TEXT_LINK"}]}},{field:"items",label:"Tab Item",required:!0,type:"ARRAY",itemSchema:{fields:[{field:"image",label:"Item Image",required:!1,type:"DYNAMIC_PHOTO",dynamicPhotoType:"CARD"},{field:"aspectRatio",label:"Item Image Aspect Ratio",required:!1,type:"ENUM_CUSTOM",options:[{label:"icon",value:"icon"},{label:"Icon Color",value:"icon-color"},{label:"3 x 4",value:"aspect_3_4"},{label:"16 x 9",value:"aspect_16_9"}]},{field:"heading",label:"Item Heading",required:!1,type:"TEXT_LINE"},{field:"body",label:"Item Body",required:!1,type:"MARKDOWN"},{field:"cta",label:"Item CTA",required:!1,type:"TEXT_LINK"}]}}]}}].concat(function(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.a.fields))};r.d(t,"default",(function(){return l.a})),r.d(t,"schema",(function(){return o})),r.d(t,"schemaCarousel",(function(){return d})),r.d(t,"schemaCta",(function(){return c})),r.d(t,"schemaProductCarousel",(function(){return f})),r.d(t,"schemaTabs",(function(){return p}))}}]);