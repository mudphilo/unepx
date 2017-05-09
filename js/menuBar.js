angular.module('uneptest')
    .controller('menuBar', function ($scope, $http) {
        
        $scope.replacement= false;
        $scope.mainmenu = false;
        $scope.active_menu = '';

        $scope.displayMenu = function(type){
            var replacement = $scope.replacement;
            //Whats the status
            if(replacement == true){
                if($scope.active_menu == type){
                    $scope.replacement = false;
                    $scope.active_menu = '';
                }
                else{
                    $scope.replacement = true;
                    $scope.active_menu = type;
                }

            }

            if(replacement == false){
                $scope.replacement = true;
                $scope.active_menu = type;
            }


        }

        $scope.hideMenu = function(){
            $scope.replacement = false;
            $scope.active_menu = '';
        }


        $scope.isActive = function(tab){
            if(tab == $scope.active_menu){
                return 'active';
            }
        }

        $scope.mainMenuShowing = function(){
            if($scope.mainmenu == true){
                return 'active';
            }

            return 'inactive';
        }

        $scope.toggleMainMenu = function(){
            var mainmenu = $scope.mainmenu;
            //Whats the status
            if(mainmenu == true){
                $scope.mainmenu = false;
            }

            if(mainmenu == false){
                $scope.mainmenu = true;
                $scope.replacement = false;
                $scope.active_menu = '';
            }
        }

        $scope.toggleArrow = function(section){
            if($scope.replacement == true && $scope.active_menu == section){
                return true;
            }

            return false;
        }

        $scope.$watch('menu_type',function(newVal,OldVal){
            console.log(newVal)
        })

    });