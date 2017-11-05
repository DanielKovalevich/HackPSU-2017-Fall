package amazon;

import com.amazon.speech.slu.Intent;
import com.amazon.speech.speechlet.*;
import com.amazon.speech.ui.OutputSpeech;
import com.amazon.speech.ui.PlainTextOutputSpeech;
import com.amazon.speech.ui.SsmlOutputSpeech;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

/**
 * Created by Conrad on 11/5/2017.
 */
public class StockGameSpeechlet implements Speechlet {

    @Override
    public void onSessionStarted(SessionStartedRequest request, Session session) throws SpeechletException {

        //Nothing needs to be done here!
    }

    @Override
    public SpeechletResponse onLaunch(LaunchRequest request, Session session) throws SpeechletException {

        //Talk aloud the help response
        return this.getHelp();
    }

    @Override
    public SpeechletResponse onIntent(IntentRequest request, Session session) throws SpeechletException {

        //Handle the proper intent as it comes in
        Intent intent = request.getIntent();
        String intentName = (intent != null) ? intent.getName() : null;

        if(intentName.equals("AccountBalance")) {

            return getAccountBalance();
        }

        else if(intentName.equals("UniqueStocks")) {

            return getNumberStocksInvested();
        }
        else if(intentName.equals("StockInformation")) {
            return getStockTradingInformation();
        }

        //If we're at this point, return an error I suppose
        return errorResponse();

    }

    @Override
    public void onSessionEnded(SessionEndedRequest request, Session session) throws SpeechletException {

        //We don't have to do anything here!

    }

    private SpeechletResponse getStockTradingInformation() {

        StringBuilder builder = new StringBuilder();
        SsmlOutputSpeech ssml = new SsmlOutputSpeech();

        builder.append("<speak>A stock is simply a unit of ownership in a company that you can purchase " +
                "or sell on the stock market. Buying and selling stocks can only be done when the market is" +
                "open, usally around 9:30 a.m. EST, and closing around 4:00 p.m. EST.</speak>");

        ssml.setSsml(builder.toString());
        OutputSpeech outputSpeech = ssml;
        return SpeechletResponse.newTellResponse(outputSpeech);
    }

    private SpeechletResponse getNumberStocksInvested() {

        StringBuilder builder = new StringBuilder();
        SsmlOutputSpeech ssml = new SsmlOutputSpeech();

        try {

            //TODO: Insert a proper URL here
            JsonObject jsonObject = getJsonObject("http://54.211.9.195:3001/user");
            String numberInvested = jsonObject.get("UniqueStockAmount").getAsString();

            //If this is null, get the hell out of here
            if(numberInvested.isEmpty()) {

                return errorResponse();
            }

            //Otherwise, gimme something tangable to say
            builder.append("<speak>You are currently invested in " + numberInvested + " stocks.</speak>");
            ssml.setSsml(builder.toString());
            OutputSpeech outputSpeech = ssml;
            return SpeechletResponse.newTellResponse(outputSpeech);

        } catch (Exception e) {
            return errorResponse();
        }
    }

    private SpeechletResponse getAccountBalance() {

        //Prepare something to store our response text in.
        StringBuilder builder = new StringBuilder();
        SsmlOutputSpeech ssml = new SsmlOutputSpeech();

        try {

            //TODO: INSERT A PROPER URL HERE
            JsonObject jsonObject = getJsonObject("http://54.211.9.195:3001/user");
            String availableMoney = jsonObject.get("AvailableMoney").getAsString();
            String investedMoney = jsonObject.get("InvestedMoney").getAsString();

            System.out.println(jsonObject.toString());

            //If either of these two are null, abort.
            if(availableMoney.isEmpty() && investedMoney.isEmpty()) {

                return errorResponse();

            }

            //Otherwise, prepare the information in a speech format.
            builder.append("<speak>");

            //Get the total account balance.
            String totalMoney = String.valueOf(Float.parseFloat(availableMoney) + Float.parseFloat(investedMoney));
            builder.append("You currently have " + totalMoney + " dollars available in your account! ");

            builder.append(investedMoney + " dollars of it are currently invested in stocks.</speak>");

            ssml.setSsml(builder.toString());
            OutputSpeech outputSpeech = ssml;
            return SpeechletResponse.newTellResponse(outputSpeech);

        } catch (Exception e) {

            e.printStackTrace();
            return errorResponse();
        }


    }

    SpeechletResponse errorResponse() {

        StringBuilder builder = new StringBuilder();
        SsmlOutputSpeech ssml = new SsmlOutputSpeech();

        builder.append("<speak>Error getting information from the API</speak>");
        ssml.setSsml(builder.toString());
        OutputSpeech outputSpeech = ssml;
        return SpeechletResponse.newTellResponse(outputSpeech);
    }



    private String readUrl(String urlString) throws Exception {

        BufferedReader reader = null;
        try {
            URL url = new URL(urlString);
            reader = new BufferedReader(new InputStreamReader(url.openStream()));
            StringBuffer buffer = new StringBuffer();
            int read;
            char[] chars = new char[1024];
            while ((read = reader.read(chars)) != -1)
                buffer.append(chars, 0, read);

            return buffer.toString();
        } finally {
            if (reader != null)
                reader.close();
        }
    }

    private JsonObject getJsonObject(String JsonURL) throws Exception {

        String json = readUrl(JsonURL);

        JsonParser parser = new JsonParser();

        JsonObject response = parser.parse(json).getAsJsonArray().get(0).getAsJsonObject();

        return response;
    }

    private SpeechletResponse getHelp() {

        //Create a card explaining what they can do with this
        final String speechText = "You can ask Simulator-Stock how much money you have at the moment.";

        return SpeechletResponse.newTellResponse(createOutputSpeech(speechText));
    }

    private PlainTextOutputSpeech createOutputSpeech(String speechText) {

        PlainTextOutputSpeech speech = new PlainTextOutputSpeech();
        speech.setText(speechText);
        return speech;
    }
}
