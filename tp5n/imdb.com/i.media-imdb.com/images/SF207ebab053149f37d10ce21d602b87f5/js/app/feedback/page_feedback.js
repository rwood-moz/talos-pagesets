(function(){
    this.feedback = {
        /**
         * Creates a feedback dialog box
         * @param {String} pageType    - title or name 
         * @param {String} pageId      - tconst or nconst
         * @param {String} pageSubType - title_type for titles, blank for names
         * @param {String} projectLabel- project/initiative for this page/feature [default:'labs']
         */                          
        show_feedback: function(pageType, pageId, pageSubType, projectLabel) {
            /**
             * Hides the entire page feedback widget if something went wrong
             * Also hides the footer link to the feedback
             */                                      
            function remove_feedback_widget() {
                $('#page_feedback_widget').remove();
                $('#page_feedback_footer').remove();
                return false;
            }
            /**
             * Takes a jquery object that holds the page feedback container
             * and positions it correctly on the page             
             * @param {jQuery} $container
             */                                      
            function initialize_feedback($container) {
                var w = $(window),
                    d = $(document),
                    left = (w.width() - 350) / 2 + d.scrollLeft(),
                    top = (w.height() - 350) / 2 + d.scrollTop();
                    
                $container
                .css({
                    'top'   : top, 
                    'left'  : left
                });
            }
            try {
                var $ = jQuery,
                    data = {
                        'pagesubtype'   : 'imdb2.' + (projectLabel || 'labs') + 
                                          '.' + pageType + 
                                          '.' + pageId + 
                                          (pageSubType ? '.' + pageSubType : '')
                    },
                    feedbackId = data.pagesubtype,
                    $container = $('#ad_feedback_container');
                 
                // If there is no container - create one.
                if ($container.length === 0) {
                    $container = $('<iframe id="ad_feedback_container">');
                    $container
                    .addClass('hidden')
                    .addClass('page_feedback')
                    .attr({
                        'name'             : 'ad_feedback_container',
                        'scrolling'        : 'no',               
                        'frameborder'      : 'no',
                        'marginheight'     : '0',
                        'marginwidth'      : '0',
                        'allowtransparency': 'yes'
                    });
                    
                    // Provide hide and show functionality to the child iframe
                    $container[0].hide = function(){
                        $(this).addClass('hidden');
                    }; 
                                                    
                    $container[0].show = function(){
                        $(this).removeClass('hidden');
                    };
                    
                    $container[0].isHidden = function(){
                         return $container.hasClass('hidden');
                    };                    
                    
                    $('body')
                    .append( $container );
                }
                
                // If container is empty or this is a different page feedback 
                // request then create a new page feedback
                if ($container.attr('src') === "" ||
                    $container.attr('ref') !== feedbackId ) {
                    
                    $container
                    .unbind()
                    .load(function(){
                        $container[0].show();
                        initialize_feedback($container);
                        $(this).unbind();
                    })
                    .attr('src', '/feedback/page_feedback.html#' + $.param(data) )
                    .attr('ref', feedbackId);
                }
                // If the container is hidden, but already has the 
                // appropriate page feedback page loaded
                else if ($container[0].isHidden()){
                    $container[0].show();
                    initialize_feedback($container);                     
                }
                // Otherwise close the page feedback
                else {
                    $container[0].hide();
                    return false;
                }
            }
            // Something went wrong - turn off page feedback
            catch (e) {
                consoleLog(e);
                remove_feedback_widget();
            }
            return false;
        }
    };
    
})();
