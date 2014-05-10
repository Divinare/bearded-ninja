'use strict';

angular.module('beardedNinjaApp', ['angularFileUpload']);

var ImgCtrl = [ '$scope', '$upload', function($scope, $upload) {

  $scope.foo = [{
  name: "Jee",
  imageUrl: "jes",
  views: 1
  }];

  $scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.img = {};
      $scope.upload = $upload.upload({
        /*url: 'http://uploads.im/api?upload=',*/ //upload.php script, node.js route, or servlet url
        url: 'http://bearded-ninja-backend.herokuapp.com/api/images.json',
        /*data: {image: $scope.myModelObj},*/
/*        data: {image: $scope.foo},*/
        file: file,
        method: 'POST',
      }).progress(function(evt) {
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
        // file is uploaded successfully
        console.log(data);
        $scope.img = $scope.upload;

      });
		
     /*         console.log("upload" + $scope.upload);
        console.log("mymodelobj" + $scope.myModelObj)*/

    }
  };
}];




/*angular.module('beardedNinjaApp')
  .controller('ImgCtrl', function ($scope, $upload) {
  $scope.onFileSelect = function ($files) {*/
    //$files: an array of files selected, each file has name, size, and type.
/*    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];*/
/*      $scope.upload = $upload.upload({*/
/*        url: 'uploads.im/api?upload=', *///upload.php script, node.js route, or servlet url
 /*       method: 'POST', //or 'PUT',*/
        // headers: {'header-key': 'header-value'},
        // withCredentials: true,
/*        data: {myObj: $scope.myModelObj},
        file: file, // or list of files: $files for html5 only*/
        /* set the file formData name ('Content-Desposition'). Default is 'file' */
        //fileFormDataName: myFile, //or a list of names for multiple files (html5).
        /* customize how data is added to formData. See #40#issuecomment-28612000 for sample code */
        //formDataAppender: function(formData, key, val){}
/*      }).progress(function(evt) {
        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
      }).success(function(data, status, headers, config) {
        // file is uploaded successfully
        console.log(data);
      });*/
      //.error(...)
      //.then(success, error, progress); 
      //.xhr(function(xhr){xhr.upload.addEventListener(...)})// access and attach any event listener to XMLHttpRequest.
/*    }*/
    /* alternative way of uploading, send the file binary with the file's content-type.
       Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed. 
       It could also be used to monitor the progress of a normal http post/put request with large data*/
/*    // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
  };
  });*/
