# jq-priority-nav - A priority + navigation plugin
## inspired by DIY Priority + Navigation - https://css-tricks.com/diy-priority-plus-nav/

## Install
### There is a bower package
```javascript
bower install jq-priority-plus
```

## To initialise (set arguments are defaults)
```javascript
$('.priority-plus').priorityPlus({
    overflowClass       : 'overflow-nav',           // Overall Wrapper
    overflowTitleClass  : 'overflow-nav-title',     // Icon or Text for open / close nav
    overflowListClass   : 'overflow-nav-list'       // The nav list item UL class
})`
```

## The HTML
````html
<nav role="navigation" class="priority-plus">
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Insights</a></li>
        <li><a href="">The Hub</a></li>
        <li><a href="">Magazine</a></li>
        <li><a href="">Events</a></li>
        <li><a href="">Channels</a></li>
        <li class="overflow-nav">
            <span class="overflow-nav-title"></span>
            <ul class="overflow-nav-list">
                <!-- OVERFLOW GOES IN HERE -->
            </ul>
        </li>
    </ul>
</nav>
````

## Basic CSS
### This is some basic CSS for copy / paste to get started
````css
.priority-plus > ul > li {
 display:inline-block;
 position:relative; 
}

.priority-plus > ul > li.overflow-nav {
  display:none;
}

.overflow-nav {
  display:none;
}

.overflow-nav-list {
  background: white;
  position: absolute;
  top: 95%; // moves to 100% on hover generally
  right: 0;
  opacity: 0;
  visibility: hidden;
  width: 150px;
  z-index: 1;
  right: -20px;
}

.overflow-nav-list.show {
    opacity: 1;
    visibility: visible;
}

.overflow-nav-title {
  cursor: pointer;
  text-align: center;
  color: #222;
  vertical-align: top;
  display: inline-block;
}

.overflow-nav-title:before {
 content:"▼";
 font-size:20px;	
}

.hide {
  display: none !important;
}

.show-inline-block {
  display: inline-block !important;

}

.resizing {
 overflow: hidden;
}
````

## Licence
### The MIT License (MIT)
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.