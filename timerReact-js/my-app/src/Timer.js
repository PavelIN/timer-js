import React from 'react';



function Timer() {
    const [tuggle, setTuggle] = React.useState(true);
    const [value, setValue] = React.useState('00:00:00');
    const [obj, setObj] = React.useState();


    let secondss = 0;


    const startWatch = () => {
        setObj(setInterval(() => {

            secondss += 10
            let dateTimer = new Date(secondss);
            setValue(
                ("0" + dateTimer.getUTCHours()).slice(-2) + ":" +
                ("0" + dateTimer.getUTCMinutes()).slice(-2) + ":" +
                ("0" + dateTimer.getUTCSeconds()).slice(-2));
        }, 10));
    };

    const pauseWatch = () => {
        clearInterval(obj);
    };

    const reset = () => {
        setTuggle(true)
        clearInterval(obj);
        setValue('00:00:00')
    };

    const tuggleClass = () => {
        if (tuggle) {
            startWatch()
            setTuggle(false)
        } else
            setTuggle(true)
        pauseWatch()
    };


    return (
        <div className={tuggle ? "timer_container opacity" : "timer_container"}>
            <div className={"container"}>
                <span className="timer">{value}</span>
            </div>
            <div className="container">
                <div className="button__container">
                    <button className={tuggle ? 'start' : 'pause'} onClick={tuggleClass}></button>
                    <button className="reset" onClick={reset}></button>
                </div>
            </div>
        </div>
    );
}

export default Timer;