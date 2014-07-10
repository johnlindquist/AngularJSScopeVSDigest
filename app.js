angular.module("demo", [])
    .filter("happy", function () {
        return function (v) {
            console.log("hi");
            return v + Date();
        }
    })

    .controller("OuterCtrl", function ($scope, $element) {
        var outer = this;

        $scope.$watch(function () {
            TweenMax.to($element, .5, {borderColor: tinycolor.fromRatio({
                r: Math.random(),
                g: Math.random(),
                b: Math.random()
            }).toHexString()})

        })
    })
    .controller("MiddleCtrl", function ($scope, $element) {
        var middle = this;


        $scope.$watch(function () {
            TweenMax.to($element, .5, {borderColor: tinycolor.fromRatio({
                r: Math.random(),
                g: Math.random(),
                b: Math.random()
            }).toHexString()})

        })
    })
    .controller("InnerCtrl", function ($scope, $element) {
        var inner = this;


        $scope.$watch(function () {
            TweenMax.to($element, .5, {borderColor: tinycolor.fromRatio({
                r: Math.random(),
                g: Math.random(),
                b: Math.random()
            }).toHexString()})

        })
    })

    .directive("digestButton", function () {
        return {
            restrict: "E",
            template: "<button class='btn'>Digest {{count}} times</button>",
            link: function (scope, element, attrs, ctrl) {
                scope.count = 0;
                element.on("click", function () {
                    scope.count++;
                    scope.$digest();
                })
            }
        }
    })

    .directive("applyButton", function () {
        return {
            restrict: "E",
            template: "<button class='btn'>Apply {{count}} times</button>",
            link: function (scope, element, attrs, ctrl) {
                scope.count = 0;
                element.on("click", function () {
                    scope.count++;
                    scope.$apply();
                })
            }
        }
    })


