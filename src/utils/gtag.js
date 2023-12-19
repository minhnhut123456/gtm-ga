import config from '../config/clientConfig';

// Manually send page_view event because DOP is SPA;
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages#page_view_event
export const pageview = ({ title, location, path }) => {
  window.gtag('config', config.gaID, { send_page_view: false });
  window.gtag('event', 'page_view', {
    page_title: title,
    page_location: location,
    page_path: path,
    send_to: config.gaID,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action, category, label, value,
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export const set = ({ value }) => {
  window.gtag('set', value);
};
