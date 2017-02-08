(function ( $ ) {

    /**
     *
     * @param options - all the default options in json
     * @constructor
     */
    $.fn.priorityPlus = function (options) {

        /**
         * Create a jQuery object from passed element
         */
        var _elem = $(this);

        /**
         * Assign default settings if not
         * set in options
         */
        var settings = $.extend({
            overflowClass       : 'overflow-nav',           // Overall Wrapper
            overflowTitleClass  : 'overflow-nav-title',     // Icon or Text for open / close nav
            overflowListClass   : 'overflow-nav-list'       // The nav list item UL class
        }, options);

        /**
         * Class with all our methods
         * @constructor
         */
        function PriorityNav () {

            /**
             * Whilst inside the PriorityNav execution context
             * store its contents in $this so we can continue
             * to access it in other methods inside this class
             */
            var $this           = this;

            /**
             * Gets all classes with elements and concatenates
             * them by period.
             * @type {void|*|string|XML}
             */
            this.menuClasses    = _elem.attr('class').replace(/ /g, '.');

            /**
             * Gets all of the navigation elements
             */
            this.allNavElements = _elem.find(" > ul > li:not('." + settings.overflowClass+"')");

            /**
             * Overflow wrapper el
             */
            this.overflowElement = _elem.find('.' + settings.overflowClass);

            /**
             * Overflow title el
             */
            this.overflowTitleElement = $this.overflowElement.find('.' + settings.overflowTitleClass);

            /**
             * Overflow UL el
             */
            this.overflowListElement = $this.overflowElement.find('.' + settings.overflowListClass);

            /**
             * CONSTRUCTOR METHOD
             *
             * The constructor method is called
             * when new instance of class is created
             */
            this.__construct = function() {

                $this.bindUIActions();
                $this.setupMenu();

                return false;
            };

            this.setupMenu = function() {
                
                // Checking top position of first item (sometimes changes)
                var firstPos = _elem.find(" > ul > li:first").position();

                // Empty collection in which to put menu items to move
                var wrappedElements = $();

                // Used to snag the previous menu item in addition to ones that have wrapped
                var first = true;

                // Loop through all the nav items...
                $this.allNavElements.each(function(i) {

                    var el = $(this);

                    // ...in which to find wrapped elements
                    var pos = el.position();

                    if (pos.top !== firstPos.top) {

                        // If element is wrapped, add it to set
                        wrappedElements = wrappedElements.add(el);

                        // Add the previous one too, if first
                        if (first) {
                            wrappedElements = wrappedElements.add($this.allNavElements.eq(i-1));
                            first = false;
                        }
                    }
                });

                if (wrappedElements.length) {

                    // Clone set before altering
                    var newSet = wrappedElements.clone();

                    // Hide ones that we're moving
                    wrappedElements.addClass("hide");

                    // Add wrapped elements to dropdown
                    $this.overflowListElement.append(newSet);

                    // Show new menu
                    $this.overflowElement.addClass("show-inline-block");

                    // Make overflow visible again so dropdown can be seen.
                    _elem.css("overflow", "visible");

                }
            };

            this.tearDown = function() {
                $this.overflowListElement.empty();
                $this.overflowElement.removeClass("show-inline-block");
                $this.allNavElements.removeClass("hide");
            };

            this.bindUIActions = function() {
                $this.overflowTitleElement.on("click", function() {
                    $this.overflowListElement.toggleClass("show");
                });

                /**
                 * Finish Resize - https://css-tricks.com/snippets/jquery/done-resizing-event/
                 */
                var resizeTimer;
                $(window).on('resize', function(e) {
                    _elem.addClass("resizing");

                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(function() {
                        $this.tearDown();
                        $this.setupMenu();
                        _elem.removeClass("resizing");
                    }, 500);

                });

            };    
            

            /**
             * Run the construct method when new instance
             * of class is created
             */
            $this.__construct();
        }

        /**
         * Store object in variable
         * @type {PriorityNav}
         */
        return new PriorityNav();

    };
}(jQuery));
