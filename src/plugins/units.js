// vw这个单位在一些较老版本手机上（安卓4.2之前的版本）不是很友好
import hacks from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks';
require('viewport-units-buggyfill').init({
    hacks: hacks,
});