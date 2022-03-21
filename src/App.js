import React, { Component } from 'react';
import Button from './components/Button';
import { nanoid } from 'nanoid';
import './styles.css';
import { render } from '@testing-library/react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      buttons: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
      sounds: [
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
      ]
    }

    this.playSound = this.playSound.bind(this);
  }
  // create Button elements

  createButtons() {
    let buttonElements = []
    const { buttons, sounds } = this.state
    for (let i = 0; i < buttons.length; i++) {
      const currentButton = buttons[i]
      const currentSound = sounds[i]
      buttonElements.push(
        <Button
          id={currentButton}
          key={nanoid()}
          value={currentButton}
          sound={currentSound}
          handleClick={this.playSound}
        />
      )
    }
    return buttonElements
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          {this.createButtons()}
        </div>
      </div>
    );
  }
}

export default App;