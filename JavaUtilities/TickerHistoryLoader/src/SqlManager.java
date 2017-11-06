import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


/**
 * Created by Conrad on 11/4/2017.
 */
public class SqlManager {


        protected Connection connection = null;

        private static SqlManager instance = null;

        public static SqlManager getInstance() {

            if(SqlManager.instance == null) {
                SqlManager.instance = new SqlManager();
            }

            return SqlManager.instance;
        }

        //Constructor which creates the database connection
        public SqlManager() {

            //Attempt to load the MYSQL driver
            try {

                Class.forName("com.mysql.jdbc.Driver");
            }
            catch (ClassNotFoundException e) {

                System.out.println("[Error] Where is your MySQL JDBC Driver?");
                e.printStackTrace();
                return;
            }

            System.out.println("Mysql Driver registered!");

            //Attempt to connect to the database
            try {

                this.connection = DriverManager
                        .getConnection("jdbc:mysql://localhost:3306/game", "root", "conrad111");

            }

            catch (SQLException e) {

                System.out.println("[Warning] Connection to the SQL database failed");
                e.getMessage();
            }
        }





        public void runInsertQuery(String query) throws SQLException {

            this.connection.createStatement().executeUpdate(query);
        }

    }

