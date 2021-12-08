(function () {

  var LandingPage = {

    // http://localhost:8989/endpoint
    // ^^^^^^^^^^^^^^^^^^^^^
    //      baseApiUrl
    // http://localhost:8000/landing.html
    // ^^^^^^^^^^^^^^^^^^^^^
    //      baseUIUrl
    baseApiUrl : getBaseApiUrl(),
    baseUIUrl : getBaseUIUrl(),

    landingDivIds : [
      'container-loading',
      'container-mode0009',
      'container-mode1019',
      'container-mode21',
      'container-mode22',
      'container-mode23',
      'container-mode31',
      'container-mode32',
      'container-mode33',
      'container-mode40plus'
    ],

    init : function() {
      this.minilife();
    },

    /**
     * Register Event
     */
    registerEvent : function (element, event, handler, capture) {
      if (/msie/i.test(navigator.userAgent)) {
        element.attachEvent('on' + event, handler);
      } else {
        element.addEventListener(event, handler, capture);
      }
    },

  };

  LandingPage.registerEvent(window, 'load', function () {
    LandingPage.init();
  }, false);

}());