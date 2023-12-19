/* eslint-disable react/button-has-type */
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as GtagUtils from '../utils/gtag';

function trackGAUser(userID, anonymousID) {
  if (userID) {
    GtagUtils.set({
      value: {
        user_id_dimention: userID,
        user_id: userID,
      },
    });
  } else if (anonymousID) {
    GtagUtils.set({
      value: {
        anonymous_id_dimention: anonymousID,
      },
    });
  }

  GtagUtils.event({
    action: 'user_view_page',
    category: 'authentication',
    label: 'User View Page',
    value: 1,
  });
}

export function sendGAEvent(name) {
  GtagUtils.event({
    action: 'demo_click',
    category: 'demo_category',
    label: name,
    value: 1,
  });
}

function Demo() {
  const [searchParams] = useSearchParams();
  const userID = searchParams.get('user_id');
  const anonymousID = searchParams.get('anonymous_id');

  useEffect(() => {
    trackGAUser(userID, anonymousID);
  }, [userID, anonymousID]);

  return (
    <div>
      <h2>Demo page</h2>
      <button onClick={() => {
        sendGAEvent('event1');
      }}
      >
        Send Event 1

      </button>
      <button onClick={() => {
        sendGAEvent('event2');
      }}
      >
        Send Event 2

      </button>
    </div>
  );
}

export default Demo;
