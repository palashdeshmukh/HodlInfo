import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function Switchbtn() {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }

  const onColor ='#2E3241'
  const offColor ='#FFFFFF'
  const uncheckedIcon='#2E32'
  return (
    <div className="app" style={{textAlign: "center"}}>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
        onColor={onColor}
        offColor={offColor}
      />
    </div>
  );
}

export default Switchbtn;