
import java.util.*;
import java.io.*;	

public class GetInfo
{
	public static void main( String[] args ) throws Exception
	{
		BufferedReader dataFile = new BufferedReader( new FileReader( "database.txt" ) );
		
		HashMap<String,ArrayList<String>> key2data = new HashMap<String,ArrayList<String>>();
		while ( dataFile.ready() )
		{
			String[] tokens = dataFile.readLine().split(" ");
			ArrayList<String> itemList = new ArrayList<String>();
			for ( int i=1; i<tokens.length; i++) itemList.add( tokens[i] );
			key2data.put( tokens[0],itemList );
		}
		
		if ( key2data.containsKey(args[0]) )
		{
			ArrayList<String> userData = new ArrayList<String>( key2data.get(args[0]) );
			String[] user = userData.remove(0).split("_");
			System.out.println( user[0] + " " + user[1] + ":" );
			for ( String info : userData ) System.out.print( info + " " );
		}
		
	}
}
