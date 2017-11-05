import java.io.IOException;

/**
 * Created by Conrad on 11/4/2017.
 */
public class Core {


    public static void main(String[] args){

        CsvHandler handler = new CsvHandler();

        try {
            handler.processTicker("AAPL");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}
