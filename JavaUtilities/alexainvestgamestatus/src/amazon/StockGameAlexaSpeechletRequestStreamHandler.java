package amazon;

import com.amazon.speech.speechlet.lambda.SpeechletRequestStreamHandler;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by Conrad on 11/5/2017.
 */
public final class StockGameAlexaSpeechletRequestStreamHandler extends SpeechletRequestStreamHandler {

    private static final Set<String> supportedApplicationIds;

    static {
        /*
         * This Id can be found on https://developer.amazon.com/edw/home.html#/ "Edit" the relevant
         * Alexa Skill and put the relevant Application Ids in this Set.
         */
        supportedApplicationIds = new HashSet<String>();
        supportedApplicationIds.add("amzn1.ask.skill.cfd4bd05-3217-4d08-bf99-7fd32c5b67bf");
    }

    public StockGameAlexaSpeechletRequestStreamHandler() {
        super(new StockGameSpeechlet(), supportedApplicationIds);
    }

}
