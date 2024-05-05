import React from 'react'

export default function Foo() {
    // <div id="timeline100500" ref={timeline} className="timeline" />;
    const Timeline = ({ setObserver, callback }) => {
        const timeline = useRef(null);
      
        // It Will be fired when the element crossed the middle of the screen. 
        const someCallback = () => {
          callback();
        };
      
        useEffect(() => {
          if (timeline.current) {
            setObserver(timeline.current, someCallback);
          }
        }, []);
      
        return <div id="timeline100500" ref={timeline} className="timeline" />;
      };
   
  return (
    <div>
        <TimelineObserver
  initialColor="#e5e5e5"
  fillColor="#53b374"
  handleObserve={(setObserver) => (
    <Timeline
      callback={onCallback}
      className="timeline"
      setObserver={setObserver}
    />
  )}
/>;


    </div>
  )
}
