import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.sql.SQLException;


/**
 * Created by Conrad on 11/4/2017.
 */
public class CsvHandler {

    public CsvHandler() {

        //Nothing for the time being
    }

    public void processTicker(String tickerSymbol) throws IOException {

        SqlManager manager = SqlManager.getInstance();

        String url = "https://www.quandl.com/api/v3/datasets/EOD/" + tickerSymbol + ".csv?api_key=n2okV2gLZh_zvBNMeF8o";
        InputStream inputStream = new URL(url).openStream();

        Reader reader = new InputStreamReader(inputStream, "UTF-8");
        CSVParser parser = new CSVParser(reader, CSVFormat.EXCEL);

        int counter = 0;

        for(CSVRecord record : parser) {

            if(counter > 365)
                break;



            //Insert each of the shit
            String query = "INSERT INTO tickertable (symbol, date, open, high, low, close, volume)"
                    + " VALUES(\"" + tickerSymbol + "\"," + record.get(0) + "," + record.get(1) + ","
                    + record.get(2) + "," + record.get(3) + "," + record.get(4) + "," + record.get(5) + ");";
            System.out.println("Test");
            try {
                manager.runInsertQuery(query);
            } catch (SQLException e) {
                System.err.println("Fuck");
                e.getMessage();
                e.printStackTrace();
            }

            counter++;

        }

    }
}
