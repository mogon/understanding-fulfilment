import * as functions from 'firebase-functions';
import { dialogflow } from 'actions-on-google';

const WELCOME_INTENT = 'Default Welcome Intent';
const FALLBACK_INTENT = 'Default Fallback Intent';
const NEED_QUOTE = 'Need Quote';
const QUOTE_TYPE_ENTITY = 'TypeOfQuote';

const app = dialogflow();

app.intent(WELCOME_INTENT, (conv) => {
  conv.ask("Welcome to the qoute generator! Ask for a qoute about happiness.");
});

app.intent(FALLBACK_INTENT, (conv) => {
  conv.ask("I didn't understand your request. ");
});

app.intent(NEED_QUOTE, (conv, param) => {
  let quote_type = param[QUOTE_TYPE_ENTITY].toString().toLowerCase();
  if (quote_type === 'happiness') {
    conv.ask("For every minute you are angry you lose sixty seconds of happiness.");
  }else if (quote_type === 'inspiration') {
    conv.ask("No matter what people tell you, words and ideas change the world.");
  }else if (quote_type === 'friendship') {
    conv.ask("There are no strangers here; Only friends you haven't yet met.");
  }else{
    conv.ask("Life can only be understood backwards, but it must be lived forwards.");
  }
});


export const dialogflowFirebaseFulfilment = functions.https.onRequest(app);



