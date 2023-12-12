/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { CSSProperties, ChangeEvent, useEffect, useState } from 'react'

import car from './resources/car.png';

export default function TypingRace(props: any) {

    const givenText = 'Whether one is looking to the poetic works of Jalaluddin Rumi for spiritual inspiration or for pure enjoyment, one will note that there is an overall dominance of nature and spirituality.';
    // const givenText = 'Whether';

    const [userText, setUserText] = useState<string>('');

    const system_text_style: CSSProperties = {
      width: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    const HighlightedText = (props: any) => {
      const {text, search} = props;

      // return null;
      // const parts = text.split(new RegExp(`(${search})`, 'gi'));
      const minLength = Math.min(text.length, search.length);
      let parts: string[] = ['', '', ''];
      // const minLength = Math.min(text.length, search.length);
      let flag = true;
      let matched = '';
      let notMatched = '';

      let matchedLength = -1;

      for (let index=0; index<minLength; index++) {        
        if(text[index]===search[index]) {
          matchedLength = index;
        } else {
          break;
        }
      }

      console.log('Text: ', text);
      console.log('Search: ', search);
      console.log('matched len: ', matchedLength);

      for(let index=0;index<=matchedLength;index++) {
        parts[0] += text[index];
      }

      const unmatchedLength = Math.min(search.length, text.length);

      for(let index=matchedLength+1;index<unmatchedLength;index++) {
        parts[1] += text[index];
        console.log('->', text[index]);
      }

      for(let index=unmatchedLength;index<text.length;index++) {
        parts[2] += text[index];
        console.log('------->', text[index]);
      }

      console.log('matched: ', parts[0].length);
      console.log('unmatched: ',parts[1].length);
      console.log('baki: ', parts[2].length);

      return (
        <div>         
          <span style={{backgroundColor: '#ccffcc'}}>{parts[0]}</span>
          <span style={{backgroundColor: '#ff9999'}}>{parts[1]}</span>
          <span style={{backgroundColor: 'white'}}>{parts[2]}</span>
        </div>
      );
    };

    const [matchPercentage, setmatchPercentage] = useState<number>(0.0);

    useEffect(() => {
      const minLength = Math.min( givenText.length, userText.length );
      let matchedLength = 0;
      for (let index=0; index<minLength; index++) {        
        if(givenText[index]==userText[index]) {
          matchedLength++;
        } else {
          break;
        }
      }

      const percentage = Math.floor(matchedLength*100.0 / givenText.length);
      setmatchPercentage(percentage);

    }, [userText]);

    const handleUserTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      console.log('log:TypingRace.tsx func:handleUserTextChange');
      console.log('Event: ', event);
      console.log('value: ', event.target.value);
      if(event && event.target) {
        setUserText(event.target.value);
      }
    };

    return (
      <div>
        {/* <p style={system_text_style}>{givenText}</p> */}
        <div style={system_text_style}>
          <HighlightedText text={givenText} search={userText} />
        </div>
        <div style={{ marginTop: "50px" }}>
          <textarea
            name="input_text"
            rows={4}
            cols={40}
            style={system_text_style}
            onChange={handleUserTextChange}
            maxLength={givenText.length}
          />
        </div>

        <div
          style={{
            marginTop: "50px",
            border: "1px solid #ff99ff",
            width: "500px",
          }}
        >
          <div style={{ marginLeft: `${matchPercentage * 4}px` }}>
            <img
              src={car}
              alt="car"
              style={{width: '100px'}}
            />
          </div>
        </div>
      </div>
    );
}
