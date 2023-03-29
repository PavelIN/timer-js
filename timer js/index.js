
const addButton = document.querySelector('.addButton');
const addButtonContainer = document.querySelector('.addButton__container');

addButton.addEventListener('click', () => {
    const addTimer = new Timer(addButtonContainer, '.element-template')
    addTimer.addTimer();
});

class Timer {
    constructor(addButtonContainer, timerElement) {
        this._addButtonContainer = addButtonContainer;
        this._timerElement = timerElement
        this._seconds = 0;
    }

    _getTemplate = () => {
        const timerElement = document
            .querySelector(this._timerElement)
            .content
            .querySelector('.timer_container')
            .cloneNode(true);
        this._listener = timerElement.querySelector('.start')
        this._timeValue = timerElement.querySelector('.timer')
        this._reset = timerElement.querySelector('.reset');
        this._container = timerElement.querySelector('.container');
        this._setEventListeners();
        return timerElement;
    }

    addTimer = () => {
        this._addButtonContainer.before(this._getTemplate());
    }

    _tuggleClass = () => {
        if (this._listener.classList.contains('pause')) {
            this._listener.classList.remove('pause')
            this._listener.classList.add('start')
            this._pauseWatch();

        } else {
            this._container.classList.remove('opacity')
            this._listener.classList.add('pause')
            this._listener.classList.remove('start')
            this._startWatch()
        }
    }

    _setEventListeners() {
        this._listener.addEventListener('click', () => {
            this._tuggleClass()
        })
        this._reset.addEventListener('click', () => {
            this._listener.classList.remove('pause')
            this._listener.classList.add('start')
            this._container.classList.add('opacity')
            clearInterval(this._timerGO);
            this._seconds = 0;
            this._timeValue.innerHTML = '00:00:00';
        });
       
    }
  
    _pauseWatch = () => {
        this._container.classList.add('opacity')
        clearInterval(this._timerGO);
    };


    _startWatch = () => {
        this._timerGO = setInterval(() => {
            this._seconds += 10;
            let dateTimer = new Date(this._seconds);
            this._timeValue.innerHTML =
                ("0" + dateTimer.getUTCHours()).slice(-2) + ":" +
                ("0" + dateTimer.getUTCMinutes()).slice(-2) + ":" +
                ("0" + dateTimer.getUTCSeconds()).slice(-2);
        }, 10);
    };

}