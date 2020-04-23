/**
 * @class PopUpNotificationJS
 */
class PopUpNotificationJS{
    /**
     * Creates an instance of PopUpNotificationJS.
     * @param {HTMLElemente} parent - PopUpNotificationJS HTML Element's HTML Element parent.
     * @memberof PopUpNotificationJS
     */
    constructor(parent){
        this.makeHTML();
        parent.appendChild(this.html);
    }
    /**
     * Make the PopUpNotificationJS HTML Element.
     * @memberof PopUpNotificationJS
     */
    makeHTML(){
        this.html = document.createElement('aside');
        this.html.classList.add('popup-notification');
            let paragraph = document.createElement('p');
            paragraph.classList.add('popup-notification-text');
            this.html.appendChild(paragraph);
            let icon = document.createElement('i');
            icon.classList.add('popup-notification-closer');
            icon.ariaLabel = "Close"
            this.html.appendChild(icon);
            icon.addEventListener('click', function(e){
                e.preventDefault();
                PopUpNotificationJS.close();
            });
                let span = document.createElement('i');
                span.ariaHidden = "true";
                span.innerHTML = "x";
                icon.appendChild(span);
    }
    /**
     * Open the PopUpNotificationJS HTML Element.
     * @static
     * @memberof PopUpNotificationJS
     */
    static open(){
        this.html.classList.remove('closed');
        this.html.classList.add('opened');
    }
    /**
     * Close the PopUpNotificationJS HTML Element.
     * @static
     * @memberof PopUpNotificationJS
     */
    static close(){
        this.html.classList.remove('opened');
        this.html.classList.add('closed');
	}
};