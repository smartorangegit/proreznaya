$(document).ready(function(){
  var $page = $('#main'),
    options = {
      debug: true,
      prefetch: true,
      cacheLength: 2,
      forms: 'form',
      onStart: {
        duration: 850, // Duration of our animation
        render: function ($container) {
          // Add your CSS animation reversing class
          $container.addClass('is-exiting');
          // Restart your animation
          smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 50,
        render: function ($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.removeClass('is-exiting');
          // Inject the new content
          $container.html($newContent);
        }
      }
    },
    smoothState = $page.smoothState(options).data('smoothState');
});